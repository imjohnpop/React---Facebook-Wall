import React from 'react';

export default class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="post">
                <div className="user">You</div>
                <div className="time">{this.props.published_at}</div>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <p>Likes: <span>{this.props.likes}</span></p>
            </li>
        )
    }
}