import React, { Component } from 'react';

class PostService extends Component {


    createTextPost(body) {
        const url = "/api/TextPosts"
        const newBody = {
            text: body
        }
        return this.createPost(newBody, url)
    }

    createVideoPost(body) {
        const url = "/api/VideoPosts"
        return this.createPost(body, url)
    }


    createImagePost(body) {
        const url = '/api/ImagePosts'
        return this.createPost(body, url)
    }

    createPost(body, url) {
        const fullUrl = "http://bitbookapi.azurewebsites.net" + url;
        return fetch(fullUrl, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'

            }
        })
            .catch(error => {
                return "Error!"
            })
    }


}

export const postService = new PostService()