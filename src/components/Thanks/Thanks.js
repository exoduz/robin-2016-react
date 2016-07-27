import React from 'react';

class Thanks extends React.Component {
	_content() {
		const greetings = {
			greeting1: "Thanks for dropping by...",
			greeting2: "またね。。。",
			greeting3: "Sampai ketemu lagi...",
			greeting4: "後會有期。。。"
		}

		return greetings;
	}

	render() {
		const content = this._content();

		return (
			<section id="thanks">
				<div className="container-fluid">
					{ Object.keys(content).map((id) => <h2 key={ id }>{ content[id] }</h2>) }
				</div>{/* .container-fluid */}
			</section>
		)
	}
}

export default Thanks;