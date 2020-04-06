import React from 'react';

class Student extends React.Component{
    render () {
        
        return (
            <div>
                <h1>Student</h1>
                <p>Name : {this.props.match.params.stuname}</p>
                <p>ID : {this.props.match.params.stuid}</p>
            </div>
        )
    }
}

export default Student;