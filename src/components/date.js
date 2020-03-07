import React from 'react';

import DatePicker from "react-datepicker";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import './../styles/styles.css';
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Datepicker extends React.Component {
 constructor(){
     super();
  this.state = {

    posts: [],
    startDate: new Date(), 
    attn_date: new Date(),
    pres_count: ' '
    };
}
formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month, year].join('-');
}

 
  handleChange = date => {
      let formattedDate = this.formatDate(date);
    this.setState({
      startDate: formattedDate

    })
    console.log(this.state.startDate);
  };
  handleClick = () => {
    this.setState({
        pres_count: this.state.pres_count + 1
  
      });
          axios.get('http://localhost:5003/attn_data?date_like'+ this.state.startDate).then(resp => {

            console.log(resp.data);
            if(resp.data.length===0)
            {               
                axios.post("http://localhost:5003/attn_data",{})
            }
            else
            {
                const data = 
                {
                    date: this.state.startDate,
                    count: 1
                }
                console.log(data);
                axios.post("http://localhost:5003/attn_data",{data})
            }
  }

          )};
 
  render() {
    return (
        <div>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      <button className='btn' onClick={this.handleClick}>Present</button>                
      </div>
    );
  }
}
export default Datepicker;