import React from 'react';
import {FilterButton} from "./Skills/FilterButton";
import {SkillBar} from "./Skills/SkillBar";
import PropTypes from 'prop-types';

const handleProps = ({ categories, skills }) => ({
    buttons: categories.map(cat => cat.name).reduce((obj, key) => ({
        ...obj,
        [key]: false,
    }), { All: true }),
    skills: skills.map(skill => Object.assign(skill, {
        category: skill.category.sort(),
    })),
});

export class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = handleProps({categories: props.categories, skills:props.skills});
        this.getButtons = this.getButtons.bind(this);
        this.getRows = this.getRows.bind(this);
        this.handleChildClick = this.handleChildClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(handleProps({ categories: nextProps.categories, skills: nextProps.skills }));
    }

    getButtons() {
        return Object.keys(this.state.buttons).map(key => (
            <FilterButton
                label={key}
                key={key}
                active={this.state.buttons}
                handleClick={this.handleChildClick}
            />
        ));
    }

    getRows() {
        // search for true active categorys
        const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
            this.state.buttons[key] ? key : cat
        ), 'All');

        return this.state.skills.sort((a, b) => {
            let ret = 0;
            if (a.compentency > b.compentency) ret = -1;
            else if (a.compentency < b.compentency) ret = 1;
            else if (a.category[0] > b.category[0]) ret = -1;
            else if (a.category[0] < b.category[0]) ret = 1;
            else if (a.title > b.title) ret = 1;
            else if (a.title < b.title) ret = -1;
            return ret;
        }).filter(skill => (actCat === 'All' || skill.category.includes(actCat)))
            .map(skill => (
                <SkillBar
                    categories={this.props.categories}
                    data={skill}
                    key={skill.title}
                />
            ));
    }

    handleChildClick (label) {
        this.setState((prevState) => {
            // Toggle button that was clicked. Turn all other buttons off.
            const buttons = Object.keys(prevState.buttons).reduce((obj, key) => ({
                ...obj,
                [key]: (label === key) && !prevState.buttons[key],
            }), {});
            // Turn on 'All' button if other buttons are off
            buttons.All = !Object.keys(prevState.buttons).some(key => buttons[key]);
            return { buttons };
        });
    }

    render() {
        return (
            <div className='skills'>
                <div className='link-to' id="skills"/>
                <div className="title">
                    <h3>Skills</h3>
                </div>
                <div className="skill-button-container">
                    {this.getButtons()}
                </div>
                <div className='skill-row-container'>
                    {this.getRows()}
                </div>
            </div>
        );
    }
}

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        compentency: PropTypes.number,
        category: PropTypes.arrayOf(PropTypes.string),
    })),
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
    })),
};

Skills.defaultProps = {
    skills: [],
    categories: [],
};