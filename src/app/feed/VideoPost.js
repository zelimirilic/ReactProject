import React from 'react'

export const VideoPost = (props) => {

    return (
        <div className="col s12 m12 l12">
            <div className="card blue-grey lighten-2">
                <div className="card-content white-text ">
                    <div className="video-container">
                        <iframe title="video" width="95%" height="315" src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ></iframe>
                    </div>
                    <div className="card-action">
                        <p href="#">Video Post</p>
                        <p className="comments">{props.comments} Comments</p>
                    </div>
                </div >
            </div >
        </div >
    )
}

              
