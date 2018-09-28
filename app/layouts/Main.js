import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Header} from "../components/Templete/Header";
import {Sidebar} from "../components/Templete/Sidebar";

export class Main extends Component{
    componentWillMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div id='wrapper'>
                <Helmet titleTemplate="%s | Vishal Bedi" defaultTitle="Vishal Bedi" />
                <Header/>
                <div id="main">
                    {this.props.children}
                </div>
                {this.props.fullPage ? null : <Sidebar />}
            </div>
        );
    }
}
