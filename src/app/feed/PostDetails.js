import React, { Component } from 'react';
import './PostItem.css';
import { postService } from "../../services/PostService";


export class PostDetails extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            post: null
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const {id, type} = nextProps.match.params

       
        postService.getPostDetails(type, id)
          .then(post => {
            this.setState({
              post
            })
          })
    }

    componentDidMount = () => {
        const {id, type} = this.props.match.params

       
        postService.getPostDetails(type, id)
          .then(post => {
            this.setState({
              post
            })
          })
      }

    //   renderPost =()=>{
          
    //   }
    

    render() {
        return (
            if(this.state.post.type === "image")

            <div className="container ">
                <div>
                <img className="marginTop materialboxed z-depth-2" src="http://via.placeholder.com/350x150" alt="imagePost" />
                </div>
                <div className="video-container">
                        <iframe title="video" width="95%" height="315" src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ></iframe>
                </div>
                <div className="col s12 m12 l12">
            <div className="card blue-grey lighten-2">
                <div className="card-content white-text ">
                    <p>{props.text}</p>
                    <div className="card-action">
                        <p href="#">Text Post</p>
                        <p className="comments">{props.comments}Comments</p>
                    </div>
                </div>
            </div>
        </div>

                {/* <form action="#">
                    <div className="file-field input-field">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Send
                     <i className="material-icons right">send</i>
                        </button>


                        <div className="file-path-wrapper">
                            <input className="materialize-textarea" placeholder="Add your comments" type="text" />
                        </div>
                    </div>
                </form> */}

                <div className="col s12 m7">


                    <div className="card horizontal">
                        <div className="">
                            <img src="http://via.placeholder.com/60x60" alt="" className="circle " />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )

    }
}