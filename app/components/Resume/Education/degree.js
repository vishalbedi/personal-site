import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Degree extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="degree-container">
                <header>
                    <h4 className="degree">
                        {this.props.degree.degree}
                    </h4>
                    <p className="school">
                        <a href={this.props.degree.link}>{this.props.degree.school}</a>,
                        {this.props.degree.year}
                    </p>
                </header>
            </article>
        );
    }
}

Degree.propTypes = {
    degree: PropTypes.shape({
        degree: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        school: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired
    })
};