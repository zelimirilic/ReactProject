import { Author } from "../entities/Author"
import { User } from "../entities/User"

class UserService {

    getProfile() {
        return fetch(`http://bitbookapi.azurewebsites.net/api/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Key": "337335F",
                "SessionId": "e92ea594-233c-4065-9e1c-da357ec486a8"
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
                "SessionId": "e92ea594-233c-4065-9e1c-da357ec486a8"
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
                "Key": "337335F",
                "SessionId": "e92ea594-233c-4065-9e1c-da357ec486a8"
            }

        }).then(response => response.json())
            .then(response => {
                return response.map((user) => new User(user))

            })


    }

}


export const userService = new UserService()