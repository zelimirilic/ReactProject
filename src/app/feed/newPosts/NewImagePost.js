import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { CreatePost } from '../CreatePost';
import { postService } from '../../../services/PostService';

export class NewImagePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newBody: "",
            isValidUrl: false,
            showError: false
        }
    }

    isValid = () => (!this.state.isValidUrl) ? "disabled" : "";
    showError = () => (this.state.showError) ? "isInvalid" : "isValid";

    changeBodyHandler = (event) => {
        this.setState({
            newBody: event.target.value
        })
    }

    fetchPost = (event) => {
        event.preventDefault();
        console.log(this.state.newBody);

        this.props.closeModal();

        const body = {
            imageUrl: this.state.newBody,
        }

        postService.createImagePost(body);


    }

    render() {

        return (
            <div className='newPostDiv '>
                <h4 ref={subtitle => this.props.setSubtitle(subtitle)}>New image post</h4>
                <h6>Post content</h6>
                <input id="textarea2" value={this.state.newBody} onChange={this.changeBodyHandler} className="materialize-textarea"></input>
                <button onClick={this.fetchPost} className='light-blue' >Post</button>

            </div>
        )
    }
}