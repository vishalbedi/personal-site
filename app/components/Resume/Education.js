import React from 'react';
import {Degree} from "./Education/degree";
import PropTypes from 'prop-types';

const getRows  = degrees => degrees.map((degree) => (
    <Degree
        key={degree.school}
        degree={degree}/>
));

const Education = props => (
    <div className="education">
        <div className="link-to" id="education" />
        <div className="title">
            <h3>Education</h3>
        </div>
        {getRows(props.degrees)}
    </div>
);

Education.propTypes = {
    degrees: PropTypes.arrayOf(PropTypes.shape(
        {
            degree: PropTypes.string,
            school: PropTypes.string,
            year: PropTypes.number,
            link: PropTypes.string
        }
    ))
};

Education.defaultProps = {
    degrees: [],
};
export default Education;