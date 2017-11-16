import React from 'react';

export default class LeftMenu extends React.Component {
    render() {
        return (
            <nav className="leftmenu">

                <h2>You</h2>

                <a href="#">Selected posts</a>
                <a href="#">Messenger</a>
                <a href="#">Marketplace</a>

            </nav>
        )
    }
}