import React from 'react';

class Entry extends React.Component {
	_toggleDescription(e) {
	}

	render() {
		const { company, role, location, date, description } = this.props.data;

		return(
			<div className="resume-entry">
				<div className="row clearfix">
					<div className="col-sm-8 col-sm-push-2 resume-details">
						<div className="row">
							<div className="col-sm-7 resume-title">
								<h4>{ company }</h4>
								<h5>{ role }</h5>
							</div>{/* .resume-title */}
							<div className="col-sm-5 resume-date">
								<h5>{ date }</h5>
							</div>{/* .resume-date */}
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="toggle-resume">more</div>
								<div className="resume-description">
									<p className="resume-location">{ location }</p>
									{ description ? description.map((desc, index) => <p key={ index }>{ desc }</p>) : '' }
								</div>{/* .resume-description */}
							</div>
						</div>
					</div>{/* .col-sm-8 .col-sm-push-2 */}
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