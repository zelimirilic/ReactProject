import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"

import { CreatePost } from './CreatePost'
import { ImagePost } from "./ImagePost";
import { VideoPost } from "./VideoPost";
import { TextPost } from "./TextPost";
import { postService } from "../../services/PostService";

import "./FeedPage.css";


export class FeedPage extends Component {
    state = {
        posts: []

    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        postService.getData()
            .then(myPosts => {
                this.setState({ posts: myPosts })
            })
    }


    renderPosts = () => {
        return this.state.posts.map(post => {
            if (post.isImage()) {
                return (
                    <Link to={`/post/image/${post.id}`} key={post.id}>
                        <ImagePost url={post.imageUrl} key={post.id} comments={post.commentsNum} />
                    </Link>
                )
            }
            else if (post.isVideo()) {
                return (
                    <Link to={`/post/video/${post.id}`} key={post.id}>
                        <VideoPost url={post.videoUrl} key={post.id} comments={post.commentsNum} />
                    </Link>
                )
            } else {
                return (
                    <Link to={`/post/text/${post.id}`} key={post.id} >
                        <TextPost text={post.text} key={post.id} comments={post.commentsNum} />
                    </Link>
                )
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        {this.renderPosts()}
                    </div>
                </div>
                <CreatePost refreshPostList={this.loadPosts} />
            </Fragment>
        )
    }

}






