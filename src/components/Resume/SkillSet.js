import React from 'react';

import Skills from './Skills';
import Resume from './Resume';
import OtherInformation from './OtherInformation';

class SkillSet extends React.Component {
	render() {
		return (
			<section id="skill-set">
				<div className="container">
					<h2 className="section-heading divider-after">What I can do</h2>

					<Skills />
					<Resume />
					<OtherInformation />
				</div>{/* .container */}
			</section>
		)
	}
}

export default SkillSet;