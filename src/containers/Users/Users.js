import React, { Component } from "react";
import { getUsers }  from '../../api'
import './Users.css';

class Dates extends Component {
  constructor () {
    super()
    this.state = {
      users: []
    }
  }

  async componentDidMount () {
    try {
      const users = await getUsers()
      this.setState({users})
    } catch (error) {
      console.log(error)
      this.setState({errors: true})
    }
  }

  render () {
    const { users } = this.state
    let divs

    if (users.length)
      divs = users.map((u, i) => (
        <div className="users-rows" key={i}>
          <span className="users-col">{u.first_name}</span>
          <span className="users-col">{u.last_name}</span>
          <span className="users-col">{u.email}</span>
          <span className="users-col">
            <img src={u.avatar}></img>
          </span>
        </div>
      ))
    return (
    <div>
      <div className="users-rows">
          <span className="users-col">First Name</span>
          <span className="users-col">Last Name</span>
          <span className="users-col">Email</span>
          <span className="users-col">Avatar</span>
      </div>
      {divs}
    </div>)
  }
}

export default Dates