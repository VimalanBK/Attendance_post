import React from 'react';
import Barchart from './barchart';
import Datepicker from './date.js';
import './../styles/dash.css';

class Dashboard extends React.Component{
    render(){
        return(
            <div className='container'>
                <h1>ATTENDANCE</h1><br />
                <Datepicker/>
                <p>No of days</p>
                  <Barchart/>
                  <p>Weeks</p>
            </div>
        )
    }
}
export default Dashboard;