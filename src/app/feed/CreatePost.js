import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./CreatePost.css";
import { NewTextPost } from './newPosts/NewTextPost';
import { NewVideoPost } from './newPosts/NewVideoPost';
import { NewImagePost } from './newPosts/NewImagePost';

class CreatePost extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            postType: ""
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = (event) => {
        this.setState({
            modalIsOpen: true,
            postType: event.target.id
        });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    setSubtitle = (subtitle) => {
        this.subtitle = subtitle;
    }

    renderAddPostWindow() {
        if (this.state.postType === 'image') {
            return <NewImagePost setSubtitle={this.setSubtitle} closeModal={this.closeModal} />


        } else if (this.state.postType === 'video') {
            return <NewVideoPost setSubtitle={this.setSubtitle} closeModal={this.closeModal} />


        } else if (this.state.postType === 'text') {
            return <NewTextPost setSubtitle={this.setSubtitle} closeModal={this.closeModal} />
        }
    }




    render() {
        const modalStyle = {
            content: {
                width: "45%",
                height: "30%",
                margin: '250px auto'
            }
        }
        return (
            <div>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons"><i className="material-icons">add_circle</i></i>
                    </a>
                    <ul>
                        <li><a className="btn-floating red" onClick={this.openModal} ><i id='video' className="material-icons">ondemand_video</i></a></li>
                        <li><a className="btn-floating green" onClick={this.openModal}><i id='image' className="material-icons">image</i></a></li>
                        <li><a className="btn-floating blue" onClick={this.openModal}><i id='text' className="material-icons">text_fields</i></a></li>
                    </ul>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={modalStyle}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    {this.renderAddPostWindow()}
                </Modal>
            </div>




        )
    }

}




export { CreatePost };