import React, { Component } from 'react';
import './FeedPage.css';
import { CommentList } from "./comments/CommentList"
import { postService } from "../../services/PostService";
import { commentService } from "../../services/CommentService";


export class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null,
            comments: [],
            commentBody: ""
        }

        this.postId = null;
        this.type = null;
    }



    onInit = () => {
        this.postId = this.props.match.params.id;
        this.type = this.props.match.params.type;
    }

    componentWillReceiveProps = (nextProps) => {
        this.onInit();

        postService.getPostDetails(this.type, this.postId)
            .then(post => {
                this.setState({
                    post
                })
            })
    }

    componentDidMount = () => {
        this.onInit();

        postService.getPostDetails(this.type, this.postId)
            .then(post => {
                this.setState({
                    post
                })
            })


        commentService.getCommentData(this.postId)
            .then(comments => {
                this.setState({
                    comments
                })
            })
    }
    
    onDeletePosts = (event) => {
        event.preventDefault()
        
        postService.deletePost(this.postId)
        .then(() => {
            postService.getData()
            .then(myPosts => {
                this.setState({ posts: myPosts })
            })
        })
        .then(() =>{
            window.location.href="http://localhost:3000/#/feed"
        })
        

    }

    renderPost = () => {
        if (this.state.post && this.state.post.type === "image") {
            return (
                <div>
                    <img className="marginTop materialboxed z-depth-2" src={this.state.post.imageUrl} alt="imagePost" />
                    <a  onClick={this.onDeletePosts} className="btn-flat btnDelete right">Delete</a>
                </div>)
        } else if (this.state.post && this.state.post.type === "video") {
            return (
                <div>
                    <a  onClick={this.onDeletePosts} className=" btn-flat btnDelete right">Delete</a>
                    <div className="video-container">
                        <iframe title="video" width="95%" height="315" src={this.state.post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ></iframe>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col s12 m12 l12">
                    <div className="card blue-grey lighten-2">
                        <div className="card-content white-text ">
                            <p>{this.state.post.text}</p>
                            <a  onClick={this.onDeletePosts} className=" btn-flat btnDelete right">Delete</a>
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

        const data = {
            body: this.state.commentBody,
            postId: this.postId
        }


        commentService.postCommentData(data)
            .then(() => {


                commentService.getCommentData(this.postId)
                    .then(comments => {
                        this.setState({
                            comments
                        })
                    })
            })

        this.setState({ commentBody: "" })

    }


    render() {
        if (!this.state.post) {
            return <p>Loading...</p>
        }

        return (
            <div className="container ">
                {this.renderPost()}

                <form action="#">
                    <div className="file-field input-field" style={{marginTop: "50px"}}>
                        <button onClick={this.postComment} disabled={!this.state.commentBody} className="btn waves-effect waves-light" type="submit" name="action">Send
                     <i className="material-icons right">send</i>
                        </button>


                        <div className="file-path-wrapper">
                            <input onChange={this.getCommentValueHandler} value={this.state.commentBody} className="materialize-textarea" placeholder="Add your comments" type="text" />
                        </div>
                    </div>
                </form>

                <div className="col s12 m7">
                    <CommentList comments={this.state.comments} />
                </div >
            </div>
        )

    }
}