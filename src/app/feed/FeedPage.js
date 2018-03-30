import React, { Component, Fragment } from 'react'
import { PostItem } from "./PostItem"
import { CreatePost } from './CreatePost'


export class FeedPage extends Component {

    render() {
        return (
            <Fragment>
                <div className="container">
                    <PostItem />
                </div>
                <CreatePost />
            </Fragment>
        )
    }

}





