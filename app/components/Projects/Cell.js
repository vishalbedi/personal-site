import React, {Component} from 'react';
import {FaGithubAlt} from 'react-icons/fa';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

export class Cell extends Component{
    render() {
        return (
            <div className="cell-container">
                <article className="mini-post">
                    <header>
                        <h3><a href={this.props.data.link}>{this.props.data.title}</a></h3>
                        <time className="published" >{dayjs(this.props.data.date).format('MMMM, YYYY')}</time>
                        <a href={this.props.data.git} className="git-info"><FaGithubAlt/></a>
                    </header>
                    <a href={this.props.data.link} className="image"><img src={this.props.data.img} alt=""/></a>
                    <div className="description">
                        <p>
                            {this.props.data.desc}
                        </p>
                    </div>
                </article>
            </div>
        );
    }
}

Cell.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        git: PropTypes.string,
        desc: PropTypes.string.isRequired,
        link: PropTypes.string,
        img: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })
};