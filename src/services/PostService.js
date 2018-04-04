import { VideoPost } from "../entities/Post";
import { ImagePost } from "../entities/Post";
import { TextPost } from "../entities/Post";

class PostService {


    createTextPost(body) {
        const url = "/api/TextPosts"

        return this.createPost(body, url)
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
                'Key': '337335F',
                'SessionId': 'e92ea594-233c-4065-9e1c-da357ec486a8'

            }
        })
            .catch(error => {
                return "Error!"
            })
    }

    getData() {
        return fetch('http://bitbookapi.azurewebsites.net/api/posts', {
            headers: {
                "Content-Type": "application/json",
                "Key": "337335F",
                "SessionId": "e92ea594-233c-4065-9e1c-da357ec486a8"
            }

        })

            .then(response => response.json())
            .then(response => {

                return response.map(post => {
                    if (post.type === 'image') {
                        return new ImagePost(post);
                    }
                    else if (post.type === 'video') {
                        return new VideoPost(post);
                    }

                    else {
                        return new TextPost(post);
                    }
                })


            })
    }

    getPostDetails(type, postId) {
        if (type === "image") {
            type = "ImagePosts";
        } else if (type === "video") {
            type = "VideoPosts";
        } else {
            type = "TextPosts"
        }

        return fetch(`http://bitbookapi.azurewebsites.net/api/${type}/${postId}`, {
            headers: {
                "Content-Type": "application/json",
                "Key": "337335F",
                "SessionId": "e92ea594-233c-4065-9e1c-da357ec486a8"
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.type === "image") {
                    return new ImagePost(response);
                }
                if (response.type === 'video') {
                    return new VideoPost(response);
                }

                if (response.type === 'text') {
                    return new TextPost(response);
                }
            })
            .catch(error => console.error("Error: ", error))
    }


}

export const postService = new PostService()