import React from 'react';

import Card from './Card';

class PersonalProjects extends React.Component {
	constructor(props) {
		super(props);
	}

	_data() {
		const data = {
			project1: {
				image: "assets/img/robinjulius-2016-project-icon.png",
				title: "Robin's Website (mid 2016)",
				description: "Taking a minimalist and more open approach, I decided to rewrite my website to be a lot simpler.",
				codingLanguage: {
					codingLanguage1: "ReactJS",
					codingLanguage2: "jQuery",
					codingLanguage3: "Webpack"
				},
				links: {
					link1: {
						link: "https://github.com/exoduz/robin-2016-react",
						type: "github",
						icon: "fa fa-github"
					}
				}
			},
			project2: {
				image: "assets/img/robinjulius-2015-project-icon.png",
				title: "Robin's Website (late 2015)",
				description: "After studying ReactJS for a few weeks, I decided to take this opportunity to change my personal site from WordPress to ReactJS.",
				codingLanguage: {
					codingLanguage1: "ReactJS",
					codingLanguage2: "jQuery",
					codingLanguage3: "Webpack"
				},
				links: {
					link1: {
						link: "https://robinjulius.com/work/robin-2015",
						type: "website",
						icon: "fa fa-external-link"
					},
					link2: {
						link: "https://github.com/exoduz/robin-react",
						type: "github",
						icon: "fa fa-github"
					}
				}
			},
			project3: {
				image: "assets/img/jerryyeoh-2016-project-icon.png",
				title: "Jerry's Portfolio Website",
				description: "Originally this was written in vanilla PHP, but I was on a roll so I decided to also rewrite it in ReactJS.",
				codingLanguage: {
					codingLanguage1: "ReactJS",
					codingLanguage2: "jQuery",
					codingLanguage3: "Webpack"
				},
				links: {
					link1: {
						link: "https://robinjulius.com/work/jerry-react",
						type: "website",
						icon: "fa fa-external-link"
					},
					link2: {
						link: "https://github.com/exoduz/jerry-react",
						type: "github",
						icon: "fa fa-github"
					}
				}
			}
		}

		return data;
	}

	render() {
		const data = this._data();

		return(
			<section id="personal-projects">
				<div className="container">
					<div className="row">
						{ Object.keys(data).map((entry) => <Card key={ entry } data={ data[entry] } />) }
					</div>{/* .row */}
				</div>{/* .container */}
			</section>
		)
	}
}

export default PersonalProjects;