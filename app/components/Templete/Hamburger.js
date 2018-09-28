import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Menus from 'react-burger-menu';
import routes from '../../data/routes';

const Menu = Menus.slide;
export class Hamburger extends Component{
    constructor(props) {
        super(props);
        this.state={
            open:false
        };
        this.handleClick = this.handleClick.bind(this);
        this.getButton = this.getButton.bind(this);
    }

    getButton() {
        return this.state.open ? (
            <li className="menu close-menu">
                <div onClick={this.handleClick} className="menu-hover">&#10005;</div>
            </li>
        ) : (
            <li className="menu open-menu">
                <div onClick={this.handleClick} className="menu-hover">&#9776;</div>
            </li>
        );
    }

    handleClick() {
        this.setState(prevState => ({
            open: !prevState.open,
        }));
    }
    render() {
        return (
            <div className="hamburger-container">
                <nav className="main" id="hamburger-nav">
                    <ul>
                        {this.getButton()}
                    </ul>
                </nav>
                <Menu right isOpen={this.state.open}>
                    <ul className="hamburger-ul">
                        {routes.map(l => (
                            <li key={l.label}>
                                <Link to={l.path} onClick={this.handleClick}>
                                    <h3 className={l.index ? 'index-li' : null}>{l.label}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Menu>
            </div>
        );
    }
}