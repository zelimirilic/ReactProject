import React, { Component } from 'react'
import { PostItem } from "./PostItem"

export class FeedPage extends Component {

    render() {
        return (
            <div className="container">
                <PostItem type="image" />
                <PostItem type="video" />
                <PostItem type="text" />
            </div>
        )
    }

}





