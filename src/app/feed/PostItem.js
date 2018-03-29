import React, { Component } from 'react';
import { ImagePost } from "./ImagePost";
import { VideoPost } from "./VideoPost";
import { TextPost } from "./TextPost";
import "./PostItem.css";
import { postService } from "../../services/PostService";
import { Link } from "react-router-dom"




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
                return <Link to={`/post/image/${post.id}`} key={post.id}><ImagePost url={post.imageUrl} key={post.id} comments={post.commentsNum} /></Link>
            }
            else if (post.isVideo()) {
                return <Link to={`/post/video/${post.id}`} key={post.id}><VideoPost url={post.videoUrl} key={post.id} comments={post.commentsNum} /></Link>
            } else {
                return <Link to={`/post/text/${post.id}`} key={post.id} ><TextPost text={post.text} key={post.id} comments={post.commentsNum} /></Link>
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







