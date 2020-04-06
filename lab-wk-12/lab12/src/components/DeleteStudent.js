import axios from "axios"
import React from 'react';

class DeleteStudent extends React.Component{
    handleKill = event =>{
        event.preventDefault()
        axios.delete('https://jsonplaceholder.typicode.com/users/$'+this.props.id).then( res=>{
            console.log(res)
            this.props.updateList();
        })
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleKill}>
                    <button type="submit">Kill</button>
                </form>
            </div>
        )
    }
}

export default DeleteStudent;