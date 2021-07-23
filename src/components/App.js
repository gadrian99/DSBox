import DStorage from '../abis/DStorage.json'
import React, { Component } from 'react';
import Navbar from './Navbar'
import Main from './Main'
import ToolBar from './ToolBar'
import Home from './Home'
import All from './All'
import Videos from './Videos'
import Photos from './Photos'
import Recent from './Recent'
import Settings from './Settings'
import Header from './Header'

import Web3 from 'web3';
import './App.css';

import {
  Switch,
  Route
} from "react-router-dom";

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = DStorage.networks[networkId]
    if(networkData) {
      // Assign contract
      const dstorage = new web3.eth.Contract(DStorage.abi, networkData.address)
      this.setState({ dstorage })
      // Get files amount
      const filesCount = await dstorage.methods.fileCount().call()
      this.setState({ filesCount })
      // Load files&sort by the newest
      for (var i = filesCount; i >= 1; i--) {
        const file = await dstorage.methods.files(i).call()
        this.setState({
          files: [...this.state.files, file]
        })
      }
    } else {
      window.alert('DStorage contract not deployed to detected network.')
    }
  }

  // Get file from user
  captureFile = event => {
    event.preventDefault()

    const file = event.target.files[0]
    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({
        buffer: Buffer(reader.result),
        type: file.type,
        name: file.name
      })
      console.log('buffer', this.state.buffer)
    }
  }

  uploadFile = description => {
    console.log("Submitting file to IPFS...")

    // Add file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('IPFS result', result.size)
      if(error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      // Assign value for the file without extension
      if(this.state.type === ''){
        this.setState({type: 'none'})
      }
      this.state.dstorage.methods.uploadFile(result[0].hash, result[0].size, this.state.type, this.state.name, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({
         loading: false,
         type: null,
         name: null
       })
       window.location.reload()
      }).on('error', (e) =>{
        window.alert('Error')
        this.setState({loading: false})
      })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      dstorage: null,
      files: [],
      loading: false,
      type: null,
      name: null,
      selectedPage : "home",
      toolState: false
    }
    this.uploadFile = this.uploadFile.bind(this)
    this.captureFile = this.captureFile.bind(this)

    this.setPage = this.setPage.bind(this)
  }

  setPage(page) {
    this.setState({ selectedPage: page })
  }

  render() {
    return (
        <div className="app">
          <Navbar account={this.state.account} setPage={this.setPage} page={this.state.selectedPage} />
          <div className="main">
            <Header />
          {/* { this.state.loading
            ? <div id="loader" className="text-center"><p>Loading...</p></div>
            : <Main
                files={this.state.files}
                captureFile={this.captureFile}
                uploadFile={this.uploadFile}
              />
          } */}
            <button onClick={() => this.setState({ toolState: !this.state.toolState })}>toggle</button>
            <Switch>
              <Route path='/' component={Home} exact />

              <Route
                path='/all'
                render={(props) => (
                  <All {...props} files={this.state.files} />
                )}
              />
              <Route path='/videos' component={Videos} />
              <Route path='/photos' component={Photos} />
              <Route path='/recent' component={Recent} />
              <Route path='/settings' component={Settings} />
            </Switch>
          </div>
          {this.state.toolState ? <ToolBar state={this.state.toolState}/> : null }
        </div>
    );
  }
}

export default App;