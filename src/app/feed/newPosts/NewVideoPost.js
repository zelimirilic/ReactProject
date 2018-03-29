import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { CreatePost } from '../CreatePost';
import { postService } from '../../../services/PostService';

export class NewVideoPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newBody: ""
        }
    }

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
            videoUrl: this.state.newBody,
        }


        postService.createVideoPost(body);


    }

    render() {
        return (
            <div className='newPostDiv'>
                <h4 ref={subtitle => this.props.setSubtitle(subtitle)}>New video post</h4>
                <h6>YouTube video link</h6>
                <input onChange={this.changeBodyHandler} id="textarea3" className="materialize-textarea"></input>
                <button className='light-blue' onClick={this.fetchPost}>Post</button>
            </div>
        )
    }
}    