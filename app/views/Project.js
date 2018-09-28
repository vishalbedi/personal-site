import React, {Component} from 'react';
import {Cell} from '../components/Projects/Cell';
import {Main} from "../layouts/Main";
import projectData from '../data/projects';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

export class Project extends Component{
    getProjject(){
        return projectData.map(project => (
            <Cell data={project} key={project.title}/>
        ));
    }
    render() {
        return (
            <Main>
                <Helmet title="Projects"/>
                <div id="main">
                    <article className="post" id="projects">
                        <header>
                            <div className="title">
                                <h2><Link to="/projects">Projects</Link></h2>
                            </div>
                        </header>
                        {this.getProjject()}
                    </article>
                </div>
            </Main>
        );
    }
}