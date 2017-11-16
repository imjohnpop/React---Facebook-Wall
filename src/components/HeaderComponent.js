import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                Unread posts: <span className="unread">0</span>
            </header>
        )
    }
}