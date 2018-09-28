import React, {Component} from 'react';
import {Course} from "./Courses/course";
import PropTypes from 'prop-types';

export class Courses extends Component{
    constructor(props) {
        super(props);
        this.getRows = this.getRows.bind(this);
    }
    getRows(courses){
        return courses.sort((a,b)=>{
            let ret = 0;
            if (a.number > b.number) ret = 1;
            else if (a.number < b.number) ret = -1;
            return ret;
        }).map((course, idx) => (
            <Course
                last={idx=== courses.length -1}
                key={course.title}
                course={course}/>
        ));
    }
    render() {
        return (
            <div className="courses">
                <div className="link-to" id="courses" />
                <div className="title">
                    <h3>Selected Courses</h3>
                </div>
                <ul className="course-list">
                    {this.getRows(this.props.courses)}
                </ul>
            </div>
        );
    }
}

Courses.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        number: PropTypes.string,
        link: PropTypes.string,
        university: PropTypes.string,
    })),
};

Courses.defaultProps = {
    courses: [],
};