import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { CreatePost } from '../CreatePost';
import { postService } from '../../../services/PostService';

export class NewVideoPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newBody: "",
            error: null
        }
    }

    changeBodyHandler = (event) => {
        this.setState({
            newBody: event.target.value,
            error: null
        })
    }

    isValid = (value) => {
        return value.includes('https://www.youtube.com/');
    }

    fetchPost = (event) => {
        event.preventDefault();

        const videoUrl = this.state.newBody;

        if (!this.isValid(videoUrl)) {
            return this.setState({
                error: 'Please select a valid video'
            });
        }


        const body = {
            videoUrl: videoUrl
        }


        postService.createVideoPost(body)
            .then(() => this.props.closeModal())
    }



    render() {
        return (
            <div className='newPostDiv'>
                <h4 ref={subtitle => this.props.setSubtitle(subtitle)}>New video post</h4>
                <h6>YouTube video link</h6>
                <input onChange={this.changeBodyHandler} id="textarea3" className="materialize-textarea"></input>

                <p className="validation-error">{this.state.error}</p>
                <button className='light-blue' onClick={this.fetchPost}>Post</button>
            </div>
        )
    }
}