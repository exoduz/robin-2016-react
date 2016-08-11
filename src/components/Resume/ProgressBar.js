import React from 'react';

class ProgressBar extends React.Component {
	render() {
		const { name, class_name, level } = this.props.data;
		
		return (
			<div className="row">
				<div className="col-md-3 progress-label-container">
					<div className="progress-label">{ name }</div>
				</div>
				<div className="col-md-9 progress-bar-container">
					<div className="progress">
		        <div className="progress-bar { class_name.toLowerCase() }" role="progressbar" aria-valuenow={ level } aria-valuemin="0" aria-valuemax="100" style={{ width: `${ level }%` }}></div>
		      </div>
	      </div>
	    </div>
		)
	}
}

ProgressBar.defaultProps = {
  data: {}
};

ProgressBar.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default ProgressBar;