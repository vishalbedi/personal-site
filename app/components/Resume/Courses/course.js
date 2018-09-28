import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Course extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className="course-container">
                <a href={this.props.course.link}>
                    <h4 className="course-number">{this.props.course.number}</h4>:
                    <p className="course-name">{this.props.course.title}</p>
                </a>
                {this.props.last ? null : <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
            </li>
        );
    }
}

Course.propTypes = {
    course: PropTypes.shape({
        link: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    last: PropTypes.bool,
};

Course.defaultProps = {
    last: false,
};