import React from 'react';
import BarChart from 'react-bar-chart';

const data = [

    {text: 1, value : 5},
    {text: 2, value : 3},
    {text: 3, value : 4},
    {text: 4, value : 2},
    {text: 5, value : 1},
]

const margin = { top: 30, right: 80, bottom: 60, left: 80};

class Barchart extends React.Component{
    render(){
        return(
            <div className='bar'>
                <div> 
                <BarChart class='chart' 
                  width={ 500 }
                  height={ 300 }
                  margin={ margin }
                  data={data}
                  />
                </div>
            </div>
        )
    }
}
export default Barchart;