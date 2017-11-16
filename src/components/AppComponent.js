import React from 'react';
import NewsFeed from './NewsFeedComponent';
import Contacts from './ContactsComponent';
import Header from './HeaderComponent';
import LeftMenu from './LeftMenuComponent';

export default class App extends React.Component {
    render() {
        return (
            <div id="page">
                <Header />
                <div>
                    <LeftMenu />
                    <NewsFeed />
                    <Contacts />
                </div>
            </div>
        )
    }
}