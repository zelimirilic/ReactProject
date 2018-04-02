import { Author } from "../entities/Author"
import { User } from "../entities/User"

class UserService {

    getProfile() {
        return fetch(`http://bitbookapi.azurewebsites.net/api/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
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
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
            }

        }).then(response => response.json())
            .then(response => {


                return new Author(response)


            })


    }


    getUserListSearch = () => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/users`, {
            headers: {
                "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
            }

        }).then(response => response.json())
            .then(response => {
                return response.map((user) => new User(user))

            })


    }

}


export const userService = new UserService()