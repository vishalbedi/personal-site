import React, {Component} from 'react';
import PropTypes from 'prop-types';
export  class FilterButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.handleClick(this.props.label)
    }
    render() {
        return (
            <button
                className={`skillbutton ${this.props.active[this.props.label] ? 'skillbutton-active' : ''}`}
                type="button"
                onClick={this.handleClick}
            >
                {this.props.label}
            </button>
        );
    }
}

FilterButton.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};