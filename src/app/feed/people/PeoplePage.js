import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"
import { userService } from "../../../services/UserService";
import { UserItem } from './UserItem'
import { Search } from "../../partials/Search"
import { Input } from "../../partials/Input"

export class PeoplePage extends Component {
    state = {
        users: [],
        searchedUsers: [],
        searchValue: ""
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentWillUpdate = (nextProps, nextState) => {
        if (nextState.searchValue !== this.state.searchValue) {
            this.searchUsers(nextState);
        }
    }

    loadPosts = () => {
        userService.getUserListSearch()
            .then(myList => {
                this.setState({ users: myList, searchedUsers: myList })
            })
    }

    onChangeInputValue = (event) => {
        //        Milos, Marko
        // m      Milos, Marko
        // ma     Milos, Marko
        // m      Marko

        this.setState({
            searchValue: event.target.value
        })
    }

    searchUsers = (nextState) => {
        const searchValue = nextState.searchValue;
        const { users, searchedUsers } = nextState;//????????

        // const users = this.state.users;
        // const searchedUsers = this.state.searchedUsers;

        const filteredUsers = users.filter(user => {
            return user.name.toLowerCase().includes(searchValue.toLowerCase().trim())
        })

        this.setState({
            searchedUsers: filteredUsers
        })
    }

    filterUsers = (users) => {
        return users;
    }

    renderUsers = () => {
        // const filteredUsers = this.filterUsers(this.state.users);

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
                <div className="row">
                    {this.renderUsers()}
                </div>
            </div >
        )
    }

}