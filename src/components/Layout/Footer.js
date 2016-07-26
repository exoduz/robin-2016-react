import React from 'react';

class Footer extends React.Component {
	_getCurrentYear() {
		return new Date().getFullYear();
	}

	render() {
		var currentYear = this._getCurrentYear();
		return (
			<footer>
				<div className="container">
					copyright &copy; { currentYear === 2016 ? currentYear : `2016 - ${ currentYear }` } robin roy julius
				</div>{/* .container */}
			</footer>
		)
	}
}

export default Footer;