
import { VideoPost } from "../entities/Post";
import { ImagePost } from "../entities/Post";
import { TextPost } from "../entities/Post";

class PostService {
    getData() {
        return fetch('http://bitbookapi.azurewebsites.net/api/posts', {
            headers: {
                "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
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
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
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