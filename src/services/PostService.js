import { Post } from '../entities/Post'

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
                console.log(response);

                return response.map(post => {
                    return new Post(post)
                })

            })
    }



}



export const postService = new PostService()