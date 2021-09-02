import React from 'react';
import { Activity } from 'react-feather'

function ContentAlert({ message }) {
    return (
        <div className="content-alert">
            <Activity size={120} />
            <h3 className="content-alert-text mt-5">No content found</h3>
        </div>
    )
}

export default ContentAlert