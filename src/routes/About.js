import React, { PropTypes, Component } from 'react';

export default class About extends Component {

    render() {
        const { className, ...props } = this.props;
        return (
            <div>
                <h1>This is the About page!</h1>
            </div>
        );
    }
}