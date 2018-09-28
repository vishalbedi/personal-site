import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Helmet} from 'react-helmet';
import {Main} from "../layouts/Main";

import degrees from '../data/degrees';
import {skills,categories} from '../data/skills';
import courses from '../data/courses';
import positions from '../data/positions';

import Education from "../components/Resume/Education";
import {Skills} from "../components/Resume/Skills";
import {Courses} from "../components/Resume/Courses";
import Experience from "../components/Resume/Experience";

const sections = [
    'Education',
    'Experience',
    'Skills',
    'Courses'
];

export class Resume extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: {
                degrees: degrees,
                positions: positions,
                skills: skills,
                categories:categories,
                courses:courses
            }
        }
    }

    render() {
        return (
            <Main>
                <Helmet title="Resume"/>
                <article className="post" id="resume">
                    <header>
                        <div className="title">
                            <h2><Link to="/resume">Resume</Link></h2>
                            <div className="link-container">
                                {sections.map(sec => (
                                    <h4 key={sec}>
                                        <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                                    </h4>))}
                            </div>
                        </div>
                    </header>
                    <Education degrees={this.state.data.degrees} />
                    <Experience data={this.state.data.positions} />
                    <Skills skills={this.state.data.skills} categories={this.state.data.categories} />
                    <Courses courses={this.state.data.courses} />
                </article>
            </Main>
        );
    }

}