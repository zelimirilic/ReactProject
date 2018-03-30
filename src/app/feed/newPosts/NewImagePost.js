import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { CreatePost } from '../CreatePost';
import { postService } from '../../../services/PostService';

export class NewImagePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newBody: "",

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


        const body = {
            imageUrl: this.state.newBody,
        }

        //Niz svih dozvoljenih formata

        const extensionLists = ['jpeg', 'jpg', 'gif', 'bmp', 'png'];

        for (let i = 0; i < extensionLists.length; i++) {
            if (body.imageUrl.includes(extensionLists[i])) {
                this.props.closeModal();
                return postService.createImagePost(body)

            }
            else {
                return console.log('Please select a valid image')

            }
        }

    }


    // else if (!videoChosen && !isValidFileType(file.val(), 'video')) {
    //     return failValidation('Please select a valid video file.');
    // }
    // else (!textChosen && !isValidFileType(file.val(), 'String')) {
    //     return failValidation('Please select a valid text file.');
    // }


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