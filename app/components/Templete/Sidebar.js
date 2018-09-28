import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as FontAwesome from 'react-icons/fa';
import social from '../../data/social';

export class Sidebar extends Component{
    getIcon(socialData){
        const SocialIcon = FontAwesome[socialData.icon];
        return <SocialIcon/>;
    }
    render() {
        return (
            <section id="sidebar">
                <section id="intro">
                    <Link to="/" className="logo"> <img alt="" src="/images/me.jpg"/></Link>
                    <header>
                        <h2>Vishal Bedi</h2>
                        <p> <a href="mailto:vgb8777@rit.edu">vgb8777@rit.edu</a></p>
                    </header>
                </section>

                <section className="blurb">
                    <p> Hi, I am Vishal &mdash; a web developer living in New York. I am a recent computer science graduate from
                        <span>&nbsp;<a href="https://www.cs.rit.edu/">RIT</a>&nbsp;</span>. I am passionate about
                        technology in general, but mobile and web development interest me the most.
                        Most of my work has been with NodeJS, Express, front-end frameworks,
                        and Vanilla JS. Here's some of the tech I use:
                    </p>
                    <span className="tech-stack">
                        <FontAwesome.FaGithubAlt size={46}/>&nbsp;&nbsp;
                        <FontAwesome.FaHtml5 size={46}/>&nbsp;&nbsp;
                        <FontAwesome.FaNodeJs size={46}/>&nbsp;&nbsp;
                        <FontAwesome.FaJs size={46}/>&nbsp;&nbsp;
                        <FontAwesome.FaReact size={46}/>&nbsp;&nbsp;
                        <FontAwesome.FaAndroid size={46}/>&nbsp;&nbsp;
                        <FontAwesome.FaJava size={46}/>&nbsp;&nbsp;
                    </span>
                </section>

                <section id="footer">
                    <ul className="icons">
                        {social.map(s => (
                            <li key={s.label}><a href={s.link}>{this.getIcon(s)}</a></li>
                        ))}
                    </ul>
                    <p className="copyright">&copy; Vishal Bedi: <Link to="/">vishalbedi.com</Link>.</p>
                </section>
            </section>
        );
    }
}
