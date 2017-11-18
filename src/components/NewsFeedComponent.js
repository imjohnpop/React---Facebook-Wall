import React from 'react';
import NewPostForm from './NewPostFormComponent';
import Post from './PostComponent';
import $ from 'jquery';

export default class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            orderby: 'date',
            limit: 10,
            from_friends_only: false,
            current_datetime: null
        }
    }
    componentDidMount() {
        this.refreshPosts();
    }
    refreshPosts() {
        let self = this;
        $.ajax({
            method: 'get',
            url: 'api/all-posts.php',
            }).done((data) => {
                let final = JSON.parse(data);
                self.setState({
                    posts: final.posts
            });
        });
    }

    newPostWasAdded() {
        this.refreshPosts();
        this.props.postWasAdded();
    }

    render() {
        let posts = [];
        for(let i in this.state.posts){
            posts[i] = <Post
                key={ this.state.posts[i].id }
                title={this.state.posts[i].title}
                text={this.state.posts[i].text}
                published_at={this.state.posts[i].published_at}
                likes={this.state.posts[i].likes}/>;
        }
        return (
            <div className="feed">
                <NewPostForm functionToRun={ this.newPostWasAdded.bind(this) }/>
                <button onClick={() => this.refreshPosts()}>Refresh</button>
                <ul>
                    { posts }
                </ul>
            </div>
        )
    }
}