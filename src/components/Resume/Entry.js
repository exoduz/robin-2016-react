import React from 'react';

class Entry extends React.Component {
	_toggleDescription(e) {
	}

	render() {
		const { company, role, location, date, description } = this.props.data;

		return(
			<div className="resume-entry">
				<div className="row clearfix">
					<div className="col-sm-4 col-sm-push-2" style={{ border: "1px solid red" }}>
						<h3>{ company }</h3>
						<h4>{ role }</h4>
					</div>{/* .col-sm-4 .col-sm-push-2 */}
					<div className="col-sm-4 col-sm-push-2" style={{ border: "1px solid blue" }}>
						<h5>{ location }</h5>
						<p className="resume-date">{ date }</p>
					</div>{/* .resume-date */}
				</div>{/* .row */}
				<div className="row">
					<div className="click-me" onClick={ this._toggleDescription.bind(this) }>More</div>
					<div className="col-sm-8 col-sm-push-2 resume-description">
						{ description ? description.map((desc, index) => <p key={ index }>{ desc }</p>) : '' }
					</div>{/* .resume-description */}
				</div>{/* .row */}
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