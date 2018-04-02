import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"
import { userService } from "../../../services/UserService";
import { UserItem } from './UserItem'
import { Search } from "../../../partials/Search"

export class PeoplePage extends Component {
    state = {
        users: [],
        searchedUsers: [],
        searchValue: ""
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        userService.getUserListSearch()
            .then(myList => {
                this.setState({ users: myList, searchedUsers: myList })
            })
    }

    onChangeInputValue = (event) => {

        this.setState({
            searchValue: event.target.value
            // }, 
            //     () => {
            //         this.searchUsers ()
            //     }
        })

    }



    searchUsers = () => {
        const searchTerm = this.state.searchValue;
        // const users = [...this.state.users, 10];
        // const newUsers = this.state.users.slice().push(10)
        const { users } = this.state;

        const filteredUsers = users.filter(user => {
            return user.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        })

        this.setState({
            searchedUsers: filteredUsers
        })
    }

    renderUsers = () => {
        return this.state.searchedUsers.map(user => {
            return (
                <Link to={`people/id`} key={user.id}>
                    <UserItem userInfo={user} />
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <Search searchValue={this.state.searchValue} onChangeInputValue={this.onChangeInputValue} />

                <Input onChange={props.onChangeInputValue} value={props.searchValue} />
                <div className="row">
                    {this.renderUsers()}
                </div>
            </div >
        )
    }

}





