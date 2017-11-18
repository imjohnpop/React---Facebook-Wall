import React from 'react';
import NewsFeed from './NewsFeedComponent';
import Contacts from './ContactsComponent';
import Header from './HeaderComponent';
import LeftMenu from './LeftMenuComponent';

export default class App extends React.Component {

    postWasAdded() {
        this.header.raiseNrOfPosts();
    }

    render() {
        return (
            <div id="page">
                <Header ref={ (el) => {this.header = el;} }/>
                <div>
                    <LeftMenu />
                    <NewsFeed postWasAdded={ this.postWasAdded.bind(this) }/>
                    <Contacts />
                </div>
            </div>
        )
    }
}