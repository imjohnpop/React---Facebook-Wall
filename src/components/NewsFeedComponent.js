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
    render() {
        let posts = [];
        for(let i in this.state.posts){
            posts[i] = <Post title={this.state.posts[i].title} text={this.state.posts[i].text} published_at={this.state.posts[i].published_at} likes={this.state.posts[i].likes}/>;
        }
        return (
            <div className="feed">
                <NewPostForm/>
                <ul>
                    { posts }
                </ul>
            </div>
        )
    }
}