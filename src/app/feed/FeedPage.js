import React, { Component } from 'react'
import { PostItem } from "./PostItem"
import { CreatePost } from './CreatePost'

export class FeedPage extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <PostItem type="image" />
                    <PostItem type="video" />
                    <PostItem type="text" />
                    <CreatePost />
                </div>

            </div>
        )
    }

}





