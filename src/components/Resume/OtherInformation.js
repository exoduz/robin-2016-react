import React from 'react';

import ProgressBar from './ProgressBar';

class OtherInformation extends React.Component {
	_content() {
		var others = {
			languages: {
				lang1: { name: 'English', proficiency: 'Native', level: 99 },
				lang2: { name: 'Indonesian', proficiency: 'Native', level: 99 },
				lang3: { name: 'Japanese', proficiency: 'Business', level: 85 },
				lang4: { name: 'Mandarin', proficiency: 'Conversational', level: 70 },
				lang5: { name: 'Cantonese', proficiency: 'Conversational', level: 50 }
			},
			os: {
				os1: { name: 'OSX', class_name: 'osx', level: 97 },
				os2: { name: 'Windows', class_name: 'windows', level: 95 },
				os3: { name: 'Linux', class_name: 'linux', level: 75 }
			},
			software: {
				software1: { name: 'MS Office', class_name: 'office', level: 99 },
				software2: { name: 'Sublime', class_name: 'sublime', level: 90 },
				software3: { name: 'Adobe Suite', class_name: 'adobe', level: 70 },
				software4: { name: 'Visual Studio', class_name: 'visualstudio', level: 70 },
			}
		}

		return others;
	}

	render() {
		const content = this._content();

		return (
			<section id="other-info">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<h3>Languages</h3>
							{ Object.keys(content.languages).map((id) => <ProgressBar key={ id } data={ content.languages[id] } />) }
						</div>{/* .col-sm-4 */}

						<div className="col-sm-4">
							<h3>OS</h3>
							{ Object.keys(content.os).map((id) => <ProgressBar key={ id } data={ content.os[id] } />) }
						</div>{/* .col-sm-4 */}

						<div className="col-sm-4">
							<h3>Software</h3>
							{ Object.keys(content.software).map((id) => <ProgressBar key={ id } data={ content.software[id] } />) }
						</div>{/* .col-sm-4 */}
					</div>{/* .row */}

					<div className="row">
						<div className="col-sm-3">
		          <h3>Volunteer History</h3>
	            
	            <h4>TEDxPerth</h4>
	            <p>
	              Nov 2014<br />
	              Nov 2013<br />
	            </p>

							<h4>Startup Weekend</h4>
	            <p>
	              Apr 2015 <em>Mentor</em><br />
	              Nov 2014 <em>Organiser</em><br />
	              Apr 2014 <em>Mentor</em><br />
	              Nov 2013 <em>Mentor</em><br />
	              Apr 2013 <em>Mentor</em><br />
	            </p>
		        </div>{/* .col-md-4 */}

						<div className="col-sm-4">
		          <h3>Certifications</h3>
							
							<h4>Meros Language School</h4>
	            <p>
	              Completion of Japanese language course
	            </p>

	            <h4>Yuh Mei Chinese School</h4>
	            <p>
	              Completion of Chinese language course
	            </p>
						</div>{/* .col-md-3 */}

						<div className="col-sm-5">
	            <h3>Personal Qualities</h3>
		          <p>Hard working, goal-oriented, responsible, highly motivated and enthusiastic, as well as exerting an outgoing personality and confident in the approach of an unfamiliar problem.</p>
	           </div>{/* .col-sm-4 */}
					</div>{/* .row */}
				</div>{/* .container */}
			</section>
		)
	}
}

export default OtherInformation;