const React = require('react');
const ReactDOM = require('react-dom');
const Axios = require('axios');

const DaySchedule = React.createClass({
	getInitialState: function() {
		return {
			schedule: [],
			today: new Date(),
		};
	},
	componentDidMount: function() {
		var th = this;
		// this.serverRequest = Axios.get('../data.json')
		// 	.then(function(result) {
		// 		th.setState({
		// 			schedule: result.data.schedule
		// 		});
		// 		console.log(th.state.schedule);
		// 	})
		
	},
	dayView: function(adj) {
		let dateVal = new Date ();
		dateVal.setDate(this.state.today.getDate() + adj);
		console.log(this.state.today);
		return dateVal.toDateString();
	},
    render: function() {

        return (
			<div>
				<div className="dayView-header">
					<div className='button-left'></div>
					<h2 className="header">Select a Time</h2>
					<div className='button-right'></div>				
				</div>
				<div className="dayTable dayTable--3cols dayTable--collapse">
					<div style={{order: 0}} className="dayTable-cell dayTable-cell--header"><h3>{this.dayView(-1)}</h3></div>
					<div style={{order: 1}} className="dayTable-cell">8am</div>
					<div style={{order: 2}} className="dayTable-cell">9am</div>
					<div style={{order: 3}} className="dayTable-cell">10am</div>
					<div style={{order: 4}} className="dayTable-cell">11am</div>
					<div style={{order: 5}} className="dayTable-cell">12pm</div>
					<div style={{order: 6}} className="dayTable-cell">1pm</div>
					<div style={{order: 7}} className="dayTable-cell">2pm</div>
					<div style={{order: 8}} className="dayTable-cell">3pm</div>
					<div style={{order: 9}} className="dayTable-cell">4pm</div>

					<div style={{order: 0}} className="dayTable-cell dayTable-cell--header"><h3>{this.dayView(0)}</h3></div>
					<div style={{order: 1}} className="dayTable-cell">8am</div>
					<div style={{order: 2}} className="dayTable-cell">9am</div>
					<div style={{order: 3}} className="dayTable-cell">10am</div>
					<div style={{order: 4}} className="dayTable-cell">11am</div>
					<div style={{order: 5}} className="dayTable-cell">12pm</div>
					<div style={{order: 6}} className="dayTable-cell">1pm</div>
					<div style={{order: 7}} className="dayTable-cell">2pm</div>
					<div style={{order: 8}} className="dayTable-cell">3pm</div>
					<div style={{order: 9}} className="dayTable-cell">4pm</div>

					<div style={{order: 0}} className="dayTable-cell dayTable-cell--header"><h3>{this.dayView(1)}</h3></div>
					<div style={{order: 1}} className="dayTable-cell">8am</div>
					<div style={{order: 2}} className="dayTable-cell">9am</div>
					<div style={{order: 3}} className="dayTable-cell">10am</div>
					<div style={{order: 4}} className="dayTable-cell">11am</div>
					<div style={{order: 5}} className="dayTable-cell">12pm</div>
					<div style={{order: 6}} className="dayTable-cell">1pm</div>
					<div style={{order: 7}} className="dayTable-cell">2pm</div>
					<div style={{order: 8}} className="dayTable-cell">3pm</div>
					<div style={{order: 9}} className="dayTable-cell">4pm</div>
				</div>			
			</div>
        )
    }
});

ReactDOM.render(
		<DaySchedule />,
		document.getElementById('app')
		);
