import React from 'react';

import ContactInfo from './ContactInfo';
import MapContainer from '../Map/MapContainer';
import Thanks from '../Thanks/Thanks';

class Contact extends React.Component {
	render() {
		return (
			<section id="contact" className="sections">
				<ContactInfo />
				<MapContainer />
				<Thanks />
			</section>
		)
	}
}

export default Contact;