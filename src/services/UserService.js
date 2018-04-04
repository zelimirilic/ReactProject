import { Author } from "../entities/Author"

class UserService {

    getProfile() {
        return fetch(`http://bitbookapi.azurewebsites.net/api/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Key": "337335F",
                "SessionId": "b626fcb7-83ce-46af-ac83-d3c94842fb9e"
            }

        }).then(response => response.json())
            .then(response => {

                return new Author(response)
            })
    }

    getUserInfo(authorId) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/users/${authorId}`, {
            headers: {
                "Content-Type": "application/json",
                "Key": "337335F",
                "SessionId": "b626fcb7-83ce-46af-ac83-d3c94842fb9e"
            }

        }).then(response => response.json())
            .then(response => {


                return new Author(response)


            })


    }

    profileUpdate(data){
        return fetch(`http://bitbookapi.azurewebsites.net/api/Profiles`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Key": "337335F",
                "SessionId": "b626fcb7-83ce-46af-ac83-d3c94842fb9e"
            },
            body: JSON.stringify(data),

        })
        .then(response => console.log(response))
       
        }




}


export const userService = new UserService()