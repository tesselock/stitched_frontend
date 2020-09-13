import React, {Component} from 'react';
import '../App.css';
import {Pie} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

const pieData = {
	labels: [
		'Not Completed',
		'Students completed'
	],
	datasets: [{
		data: [300, 50],
		backgroundColor: [
		'#FF6384',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#FFCE56'
		]
	}]
};

const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Hours to complete',
        backgroundColor: '#FFCE56',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: '#FF6384',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

class graphs extends Component {
    render(){
        console.log(this.props.id);
        return(
            <div>
                Task Completion
                <Pie data={pieData} />
                Completion Times
                <Bar
                    data={barData}
                    width={75}
                    height={50}
                    options={{
                    maintainAspectRatio: true
                }}
                />
            </div>
        );
    }

}

export default graphs;