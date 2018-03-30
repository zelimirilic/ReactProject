import { Comment } from "../entities/Comment"

class CommentService {
    getCommentData(postId) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Comments?postId=${postId}`, {
            headers: {
                "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
            }

        }).then(response => response.json())
            .then(response => {
                return response.map(comment => {
                    return new Comment(comment)

                })


            })


    }
    postCommentData(data) {
        return fetch('http://bitbookapi.azurewebsites.net/api/Comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())

    }
}
export const commentService = new CommentService()