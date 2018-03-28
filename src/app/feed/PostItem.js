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
                console.log(myPosts);
                this.setState({

                    posts: myPosts
                })
            })
    }

    testTypeOfPost = () => {
        return this.state.posts.map(post => {

            if (post.isImage()) {
                return <ImagePost url={post.imageUrl} key={post.id} comments={post.commentsNum} />
            }
            else if (post.isVideo()) {
                return <VideoPost url={post.videoUrl} key={post.id} comments={post.commentsNum} />
            } else {
                return <TextPost text={post.text} key={post.id} comments={post.commentsNum} />
            }
        })
    }

    render() {
        return (
            <div className="row">

                {this.testTypeOfPost()}
            </div>

        )
    }
}






