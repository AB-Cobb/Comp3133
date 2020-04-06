import axios from "axios"
import React from 'react';

class AddStudent extends React.Component{
    state = { name : ""}
    handleChange = event => { 
        let name = event.currentTarget.value
        this.setState({name:name})
    }
    handleSubmit = event =>{
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users', {name : this.state.name}).then( res=>{
            console.log(res)
            this.props.updateList()
        })
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> 
                        Enter Name
                        <input type="text" name="name" onChange={this.handleChange} />    
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddStudent;