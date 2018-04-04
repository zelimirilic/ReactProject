import { Comment } from "../entities/Comment"

class CommentService {
    getCommentData(postId) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Comments?postId=${postId}`, {
            headers: {
                "Content-Type": "application/json",
                "Key": "337335F",
                "SessionId": "e92ea594-233c-4065-9e1c-da357ec486a8"
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
                "SessionId": "e92ea594-233c-4065-9e1c-da357ec486a8"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())

    }
}
export const commentService = new CommentService()