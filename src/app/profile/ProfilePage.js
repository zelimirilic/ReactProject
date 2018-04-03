import React, { Component } from "react"
import "./ProfilePage.css"
import { userService } from "../../services/UserService"
import { EditProfile } from "./EditProfile";



export class ProfilePage extends Component {

    state = {
        profile: null,
        userId: null
     
    }
    onInit = () => {
        this.postId = this.props.match.params.id;
    }


    componentDidMount = () => {
       this.onInit();
       this.loadProfileInfo();
        
    }
    loadProfileInfo = () => {
        let request;
        if (!this.userId) {
            request = userService.getProfile();
        } else {
            request = userService.getUserInfo(this.userId);
        }

        request.then(profile => {
            console.log(profile);

            return this.setState({ profile })
        })
    }

    renderProfileInfo = () => {
        return (
            <div>
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

        
    
        
    render() {
        if (!this.state.profile) {
            return <p>Loading</p>
        }

        return (
            <div className="container center">
                {this.renderProfileInfo()}
                <EditProfile profileInfo={this.state.profile} onUpdate={this.loadProfileInfo}/>

            </div>
        )
    }

}










