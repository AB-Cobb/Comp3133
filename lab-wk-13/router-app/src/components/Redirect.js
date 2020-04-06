import React from 'react';

class Redirect extends React.Component{
    handleRedirectClick () {
        const {custonHist} = this.props;
        if (custonHist) custonHist.push("/")
        else console.log("History not in props")
    }
    
    render () {
        
        return (
            <div>
                <h1>Redirect</h1>
                <form onSubmit={this.handleRedirectClick}>
                    <button type="submit">click me!</button>
                </form>
            </div>
        )
    }
}

export default Redirect;