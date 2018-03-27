import React, { Component } from 'react';
import { ImagePost } from "./ImagePost";
import { VideoPost } from "./VideoPost";
import { TextPost } from "./TextPost";
import "./PostItem.css";
import { postService } from "../../services/PostService"




export class PostItem extends Component {
    state = {
        posts: []
    }


    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        postService.getData()
            .then(myPosts => {
                this.setState({
                    posts: myPosts
                })
            })
    }



    testTypeOfPost = () => {
        if (this.props.type === 'image') {
            return <ImagePost />
        }
        if (this.props.type === 'video') {
            return <VideoPost />
        }

        if (this.props.type === 'text') {
            return <TextPost />
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m6 l9">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text ">
                            {this.testTypeOfPost()}
                        </div>
                        <div className="card-action">
                            <p href="#">Post</p>
                            <p className="comments">13 Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}