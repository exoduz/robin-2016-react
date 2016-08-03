import React from 'react';

class Entry extends React.Component {
	render() {
		const { company, role, location, date } = this.props.data;

		return(
			<div>
				<h3>{ company }</h3>
				<h4>{ role }</h4>
				<h5>{ location }</h5>
				<p className="date">{ date }</p>
			</div>
		)
	}
}

Entry.defaultProps = {
	data: {}
};

Entry.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default Entry;