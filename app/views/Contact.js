import React, {Component} from 'react';
import {Main} from "../layouts/Main";
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";
import social from '../data/social';
import * as FontAwesome from "react-icons/fa";

export class Contact extends Component{
    getIcon(socialData){
        const SocialIcon = FontAwesome[socialData.icon];
        return <SocialIcon/>;
    }
    render() {
        return (
            <Main>
                <Helmet title="Contact"/>
                <article className='post' id='contact'>
                    <header>
                        <div className="title">
                            <h2><Link to="/contact">Contact</Link></h2>
                        </div>
                    </header>
                    <div className="email-at">
                        <p>Feel free to get in touch. You can email me at: </p>
                        <div className="inline-container">
                            <a href={`mailto:vgb8777@rit.edu`}>
                                <span>vgb8777@rit.edu</span>
                            </a>
                        </div>
                    </div>
                    <ul className="icons">
                        {social.map(s => (
                            <li key={s.label}><a href={s.link}>{this.getIcon(s)}</a></li>
                        ))}
                    </ul>
                </article>
            </Main>
        );
    }
}