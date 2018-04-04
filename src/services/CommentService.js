import { Comment } from "../entities/Comment"

class CommentService {
    getCommentData(postId) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Comments?postId=${postId}`, {
            headers: {
                "Content-Type": "application/json",
                "Key": "337335F",
                "SessionId": "b626fcb7-83ce-46af-ac83-d3c94842fb9e"
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
                "Key": "337335F",
                "SessionId": "b626fcb7-83ce-46af-ac83-d3c94842fb9e"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())

    }
}
export const commentService = new CommentService()