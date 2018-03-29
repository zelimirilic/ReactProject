import React, { Component } from "react"
import { commentService } from "../../../services/CommentService";
import { CommentItem } from "./CommentItem"

export class CommentList extends Component {
    state = {
        comments: []
    }


    componentDidMount() {
        this.loadComments();
    }

    loadComments = () => {
        commentService.getCommentData(this.props.postId)
            .then(comments => {
                this.setState({
                    comments
                })
            })
    }

    renderEmptyComments = () => {
        return (
            <div className="card horizontal">
                <div className="card-stacked">
                    <div className="card-content">
                        <p>No comments</p>
                    </div>

                </div>
            </div >
        )
    }

    renderComments = () => {
        return this.state.comments.map(comment => {
            return <CommentItem body={comment.body} key={comment.id} authorId={comment.authorId} />
        })
    }


    render() {
        return (
            <div>
                {!this.state.comments.length
                    ? this.renderEmptyComments()
                    : this.renderComments()
                }
            </div>
        )


    }

}

