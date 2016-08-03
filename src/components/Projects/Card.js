import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	/**
	 _renderCodingLanguage
	 Output coding languages
	 @params language { string } coding language object
	*/
	_renderCodingLanguage(languages) {
		if (Object.keys(languages).length === 0 && languages.constructor === Object) { //check if object empty
			return;
		} else {
			return (
				<p className="coding-language-container">
					{ Object.keys(languages).map((id) => <span key={ id } className="coding-language">{ languages[id] }</span>)	}
				</p>
			)
		}
	}

	/**
	 _renderLinks
	 Output links
	 @params link { string } the link object
	*/
	_renderLinks(links) {
		if (Object.keys(links).length === 0 && links.constructor === Object) { //check if object empty
			return;
		} else {
			return (
				<p>
					{ Object.keys(links).map((id) => {
						const link = links[id]['link'],
							type = links[id]['type'],
							icon = links[id]['icon'];

						return (
							<span key={ id }>
								<a href={ link } target="_blank">
									{ type === "github" ? "Download source on Github " : "Visit website " }
									{ icon ? <i className={ icon }></i> : '' }
								</a>
								<br />
							</span>
						)
					}) }
				</p>
			)
		}
	}	

	render() {
		const { image, title, description, codingLanguage, links  } = this.props.data;
		
		return(
			<div className="col-sm-4">
				<div className="card">
					<img src={ image } alt={ `${ title } image` } className="project-icon img-responsive" />
					<h3>{ title }</h3>
					<p>{ description }</p>
					{ this._renderCodingLanguage(codingLanguage) }
					{ this._renderLinks(links) }			
				</div>{/* .card */}
			</div>
		)
	}
}

Card.defaultProps = {
	data: {}
};

Card.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default Card;