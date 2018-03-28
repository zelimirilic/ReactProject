import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./CreatePost.css";

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

    renderAddPostWindow() {
        if (this.state.postType === 'image') {
            return (
                <div className='newPostDiv '>
                    <h4 ref={subtitle => this.subtitle = subtitle}>New image post</h4>
                    <h6>Post content</h6>
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <button className='light-blue' onClick={this.closeModal}>Post</button>
                </div>
            )
        } else if (this.state.postType === 'video') {
            return (
                <div className='newPostDiv'>
                    <h4 ref={subtitle => this.subtitle = subtitle}>New video post</h4>
                    <h6>YouTube video link</h6>
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <button className='light-blue' onClick={this.closeModal}>Post</button>
                </div>
            )
        } else if (this.state.postType === 'text') {
            return (
                <div className='newPostDiv'>
                    <h4 ref={subtitle => this.subtitle = subtitle}>New post</h4>
                    <h6>Post content</h6>
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <button onClick={this.closeModal} className='light-blue'>Post</button>
                </div>
            )
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