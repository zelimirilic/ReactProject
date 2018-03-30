import React, { Component } from "react"
import "./ProfilePage.css"
import { userService } from "../../services/UserService"


export class ProfilePage extends Component {

    state = {
        profile: null
    }

    componentDidMount = () => {
        userService.getProfile()
            .then(profile => {
                console.log(profile);

                return this.setState({ profile })
            })


    }

    render() {
        if (!this.state.profile) {
            return <p>LOading</p>
        }

        return (
            <div className="container center">
                <img className="materialboxed z-depth-2 profileImage " src={this.state.profile.avatarUrl} alt="profileImage" />
                <h2 className="profileName">{this.state.profile.name}</h2>
                <p className="aboutUser">{this.state.profile.about}</p>
                <div className="details">
                    <div className="profileForum"><i className="material-icons">forum</i>{this.state.profile.postsCount} Posts</div>
                    <div className="profileComments"><i className="material-icons">comment</i>{this.state.profile.commentsCount} comments</div>
                </div>
            </div>
        )
    }

}