import axios from "axios"
import React from 'react';


import AddStudent from './AddStudent'
import DeleteStudent from './DeleteStudent'

class UserList extends React.Component {
    state = { users : []}
    updateList(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            const users = res.data;
            this.setState ({users : users})
            console.log("list updated");
        })
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            const users = res.data;
            this.setState ({users : users})
        })
    }
    render () {
        let users = this.state.users;
        return (
            <div id="UserList">
                <h1>Student List</h1>
                <ul>
                    {users.map((user, index) => {return(
                        <li key ={index}>
                             {user.name}
                             <DeleteStudent id={user.id} updateList = {this.updateList.bind(this)}/> 
                        </li>
                        )}
                    )}
                </ul>
                <AddStudent updateList = {this.updateList.bind(this)}/>
            </div>
            )
    }
}

export default UserList;