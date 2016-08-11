import React from 'react';

import ProgressBar from './ProgressBar';

class Skills extends React.Component {
	_content() {
		var skills = {
			programming: {
				programming1: { name: 'HTML5', class_name: 'html', level: 99 },
				programming2: { name: 'CSS3', class_name: 'css', level: 99 },
				programming3: { name: 'PHP', class_name: 'php', level: 90 },
				programming4: { name: 'Javascript', class_name: 'js', level: 87 },
				programming5: { name: 'C#', class_name: 'csharp', level: 60 }
			},
			database: {
				database1: { name: 'MySQL', class_name: 'mysql', level: 85 },
				database2: { name: 'MS SQL Server', class_name: 'sqlserver', level: 60 }
			},
			frameworks: {
				framework1: { name: 'ReactJS', class_name: 'react-js', level: 80 },
				framework2: { name: 'CakePHP', class_name: 'cakephp', level: 95 },
				framework3: { name: 'WordPress', class_name: 'wordpress', level: 85 },
				framework4: { name: '.NET', class_name: 'dotnet', level: 60 }
			},
			webserver: {
				webserver1: { name: 'Apache', class_name: 'apache', level: 85 },
				webserver2: { name: 'Nginx', class_name: 'nginx', level: 85 },
				webserver3: { name: 'IIS', class_name: 'iis', level: 75 }
			}
		};
		
		return skills;
	}

	render() {
		const content = this._content();

		return (
			<section id="skills">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<h3>Programming</h3>
							{ Object.keys(content.programming).map((id) => <ProgressBar key={ id } data={ content.programming[id] } />) }
						</div>{/* .col-sm-4 */}

						<div className="col-sm-4">
							<h3>Frameworks</h3>
							{ Object.keys(content.frameworks).map((id) => <ProgressBar key={ id } data={ content.frameworks[id] } />) }
						</div>{/* .col-sm-4 */}

						<div className="col-sm-4">
							<h3>Database</h3>
							{ Object.keys(content.database).map((id) => <ProgressBar key={ id } data={ content.database[id] } />) }

							<h3>Web Servers</h3>
							{ Object.keys(content.webserver).map((id) => <ProgressBar key={ id } data={ content.webserver[id] } />) }
						</div>{/* .col-sm-4 */}

					</div>{/* .row */}
				</div>{/* .container */}
			</section>
		)
	}
}

export default Skills;