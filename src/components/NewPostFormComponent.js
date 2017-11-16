import React from 'react';

export default class NewPostForm extends React.Component {
    render() {
        return (

            <div className="new_post">

                <form action="">

                    <textarea name="text" id="" cols="30" rows="10" placeholder="What are you thinking about?"></textarea>

                    <input type="submit" value="add"/>

                </form>

            </div>

        )
    }
}