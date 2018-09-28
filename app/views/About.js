import React, {Component} from 'react';
import {Main} from '../layouts/Main'
import Link from "react-router-dom/es/Link";

export class About extends Component{
    render() {
        return (
            <Main>
                <article className="post" id="index">
                    <header>
                        <div className="title">
                            <h2><Link to="/">About Me</Link></h2>
                        </div>
                    </header>
                    <div>
                        <h4>Intro</h4>
                        <p> I am a recent Computer Science Graduate from RIT with proficiency in NodeJS/JavaScript.
                            I am passionate about writing clean, maintainable, and human readable code with modern
                            tools and best practices. I am particularly interested in health-care, education, social
                            impact, and developing web or mobile applications that impact people. I always like to
                            learn about new trends in technology and I try to keep up with ever-evolving JavaScript
                            frameworks. If you would like to meet, I based in Rochester, NY.
                        </p>
                        <h4>Currently</h4>
                        <p>
                            Studying computer science at RIT helped me understand the concepts of Distributed Systems and Networking,
                            and introduction to principles of Machine Learning. I got to learn about the algorithms and
                            the technology that makes large systems like Blockchain and Social Networks possible.
                            Working on projects helped me understand Containers and cloud platforms like AWS. My recent
                            project is a Blockchain based public key infrastructure that uses public ledger of blockchain
                            as a log for auditing the certificates issued by a Certificate Authority.
                        </p>
                    </div>
                </article>
            </Main>
        );
    }
}