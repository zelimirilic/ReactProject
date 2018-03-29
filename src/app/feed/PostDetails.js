import React, { Component } from 'react';
import './PostItem.css';
import { postService } from "../../services/PostService";
import { CommentList } from "./comments/CommentList"


export class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null,
            commentBody: ""
        }
    }


    componentWillReceiveProps = (nextProps) => {
        const { id, type } = nextProps.match.params


        postService.getPostDetails(type, id)
            .then(post => {
                this.setState({
                    post
                })
            })
    }

    componentDidMount = () => {
        const { id, type } = this.props.match.params


        postService.getPostDetails(type, id)
            .then(post => {
                this.setState({
                    post
                })
            })
    }

    renderPost = () => {
        if (this.state.post && this.state.post.type === "image") {
            return (
                <div>
                    <img className="marginTop materialboxed z-depth-2" src={this.state.post.imageUrl} alt="imagePost" />
                </div>)
        } else if (this.state.post && this.state.post.type === "video") {
            return (

                <div className="video-container">
                    <iframe title="video" width="95%" height="315" src={this.state.post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ></iframe>
                </div>
            )
        } else {
            return (
                <div className="col s12 m12 l12">
                    <div className="card blue-grey lighten-2">
                        <div className="card-content white-text ">
                            <p>{this.state.post.text}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    getCommentValueHandler = (event) => {
        this.setState({
            commentBody: event.target.value
        })

    }
    postComment = (event) => {
        event.preventDefault();
        return fetch('http://bitbookapi.azurewebsites.net/api/Comments', {
            method: "POST",
            body: JSON.stringify({

            })
        })


    }



    render() {
        if (!this.state.post) {
            return <p>Loading...</p>
        }

        return (
            <div className="container ">
                {this.renderPost()}

                <form action="#">
                    <div className="file-field input-field">
                        <button onClick={this.postComment} className="btn waves-effect waves-light" type="submit" name="action">Send
                     <i className="material-icons right">send</i>
                        </button>


                        <div className="file-path-wrapper">
                            <input onChange={this.getCommentValueHandler} className="materialize-textarea" placeholder="Add your comments" type="text" />
                        </div>
                    </div>
                </form>

                <div className="col s12 m7">
                    <CommentList postId={this.state.post.id} key={this.state.post.id} />
                </div >
            </div>
        )

    }
}