import React from 'react';
import $ from 'jquery';

export default class NewPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            post_input_title: '',
            post_input_text: ''
        }
    }
    formSubmitted(event) {
        event.preventDefault();
        console.log('form is beeing submited');
        $.ajax({
            method: 'post',
            url: 'api/create-form.php',
            data: {
                title: this.state.post_input_title,
                text: this.state.post_input_text
            }
        }).done((data) => {
            this.props.functionToRun();
        })
    }
    textChanged(event){
        this.setState({
            post_input_text: event.target.value
        })
    }
    titleChanged(event){
        this.setState({
            post_input_title: event.target.value
        })
    }
    render() {
        return (
            <div className="new_post">
                <form action="" onSubmit={(event) => this.formSubmitted(event)}>
                    <input type="text" name="title" id=""
                           value={ this.state.post_input_title }
                           onChange={ (event) => this.titleChanged(event) }/>
                    <textarea name="text" id="" cols="30" rows="10"
                              placeholder="What are you thinking about?"
                              value={ this.state.post_input_text }
                              onChange={ (event) => this.textChanged(event) }>
                    </textarea>
                    <input type="submit" value="add"/>
                </form>
            </div>
        )
    }
}