import React from 'react';


class form extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <input>Username</input>
                <input>Password</input>
                <button>Log-In</button>
            </div>
        )
    }
}
export default form;