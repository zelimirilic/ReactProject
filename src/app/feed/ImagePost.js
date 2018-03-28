import React from 'react'

export const ImagePost = (props) => {

    return (
        <div className="col s12 m12 l12">
            <div className="card blue-grey lighten-2">
                <div className="card-content white-text ">
                    <img className="materialboxed z-depth-2" src={props.url} alt="imagePost" />
                    <div className="card-action">
                        <p href="#">Image Post</p>
                        <p className="comments">{props.comments} Comments</p>
                    </div>
                </div>
            </div>
        </div>

    )
}