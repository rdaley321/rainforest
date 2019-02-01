import React from 'react'
export const Header = ({ total }) => (
    <div className="ui card fluid">
        <div style={{padding:'10px'}}>
            <h3>
                <span className="ui left aligned">Rainforest TM</span>
                <span style={{float:'right'}}>Total: ${total}</span>
            </h3>
        </div>
    </div>
)