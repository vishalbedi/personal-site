import React, {Component} from 'react';
import {Link} from "react-router-dom";
import routes from '../../data/routes';
import {Hamburger} from "./Hamburger";

export class Header extends Component{
    render() {
        return (
            <header id="header">
                <h1><Link to="/" >Vishal Bedi</Link></h1>
                <nav className="links">
                    <ul>
                        {routes.filter(r=> !r.index).map(link => (
                            <li key={link.label}>
                                <Link to={link.path} >{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Hamburger/>
            </header>
        );
    }
}