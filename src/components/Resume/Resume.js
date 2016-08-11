import React from 'react';

import Skills from './Skills';
import Entry from './Entry';
import OtherInformation from './OtherInformation';

class Resume extends React.Component {
	_content() {
		var resume = {
			timeline1: {
				company: 'Collectstor',
				role: 'Founder and Full Stack Developer',
				location: 'Tokyo, Japan and Perth, Australia',
				description: [
            'Founded Collectstor – a website where collectors can showcase and share their collections.',
            'Coded the website which includes user registration, profile information, news feed and upload using a LAMP stack and jQuery.',
            'Honed entrepreneurial skills by marketing, distributing advertising at events and shops throughout Perth and the US.',
            'Created iOS app in Swift. Implemented a RESTful API to handle app interaction with the website.',
        ],
        date: 'May 2013 - Present'
			},
			timeline2: {
				company: 'Australian Embassy, Tokyo',
				role: 'Electronic Media Administrator',
				location: 'Tokyo, Japan and Perth, Australia',
				description: [
            'Developed several in-house CMS, an event management and booking CMS, which included an invitation, RSVP, and check in system for the Embassy’s biggest yearly event. Projects were done in a LAMP stack and jQuery.',
            'Managed requirements and projects for the Embassy and other Government agencies and stakeholders.',
            'Successfully internationalised, updated and made responsive all Embassy and stakeholders’ website, converted all static pages to dynamic using LAMP stack. Other duties included Linux server maintenance and official photographer.',
          ],
        date: 'July 2008 - April 2013'
			},
			timeline3: {
				company: 'IT Vision',
				role: 'Web and Software Developer',
				location: 'Perth, Australia',
				description: [
            'Successful integration of a web component using HTML, XSL and C# into their in-house CRM system which uses IBM UniVerse and Java.',
            'Gave a web developer’s perspective to the company’s CRM, which helped improve the fluency of the project timeline.',
          ],
        date: 'October 2006 - March 2007'
			},
			timeline4: {
				company: 'HomeTrader',
				role: 'Web Developer and Project Manager',
				location: 'Perth, Australia',
				description: [
            'Managed and coded newsletters, web related content and new projects, as well as an intranet system for web projects in ASP.NET and MS SQL Server.',
          ],
        date: 'March 2006 - October 2006'
			},
			timeline5: {
				company: 'Itomic',
				role: 'Full Stack Web Developer',
				location: 'Perth, Australia',
				description: [
            'Worked on the clients’ needs analysis, design, implementation and timely deployment of the project individually and i',
            'Project manager or team lead on several projects.',
            'Website projects done in PHP, MySQL and JavaScript. Maintained LAMP server. ',
            'Coded and implemented the first customisable online shopping cart in PHP.',
          ],
        date: 'January 2005 - February 2006'
			},
			timeline6: {
				company: 'Omegatrend International',
				role: 'HTML and Javascript Programmer (Contract Position)',
				location: 'Perth, Australia',
				description: [
            'Coded HTML and JavaScript pages for their Global Expansion Program into Hong Kong, the Philippines, the USA, the UK, South Africa and Brunei.',
          ],
        date: 'December 2004'
			},
			timeline7: {
				company: 'Precise IT Solutions',
				role: 'Web Developer and Program Analyst',
				location: 'Perth, Australia',
				description: [
            'Analyzed, designed, and implemented websites for clients in PHP and ASP, based on extensive research of customer needs and specifications. Also managed end-to-end server setup, deployment and support.',
            'Proposed and led effort creating a successful online shop, transitioning from IT only to a complete e-business solution.',
          ],
        date: 'January 2002 - January 2005'
			},
			timeline8: {
				company: 'Speedworks Motorsports',
				role: 'Database Administrator, Sales Rep and Pit Crew',
				location: 'Perth, Australia',
				description: [
						'Successfully created, implemented and maintained a stock and products database.',
          ],
        date: 'January 1999 - January 2002'
			}
		};

		return resume;
	}

	render() {
		const content = this._content();

		return (
			<section id="work-history">
				<h2 className="section-heading divider-after">What I can do</h2>

				<Skills />

				<section id="resume">
					<div className="container">
						{ Object.keys(content).map((id) => <Entry key={ id } data={ content[id] } />) }
					</div>{/* .container */}
				</section>{/* #resume */}

				<OtherInformation />
			</section>
		)
	}
}

export default Resume;