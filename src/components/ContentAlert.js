import React from 'react';
import { Link } from 'react-router-dom'

function ContentAlert() {
    return (
        <div className="content-alert">
            <h3 className="content-alert-text">No content yet...</h3>
            <Link className="form-button" to='/upload'>Add your first file</Link>
        </div>
    )
}

export default ContentAlert