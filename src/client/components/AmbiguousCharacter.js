import React, {Component} from 'react';

class AmbiguousCharacter extends Component {

    // may also use this.wrapperElement.getBoundingClientRect() for finding coordinates
    // of the decorating element
    componentDidMount() {
        this.props.updateCoordinates(this.props.offsetKey, {top: this.wrapperElement.offsetTop, left: this.wrapperElement.offsetLeft});
    }

    componentDidUpdate() {
        this.props.updateCoordinates(this.props.offsetKey, {top: this.wrapperElement.offsetTop, left: this.wrapperElement.offsetLeft});
    }

    render() {
        // every re-render, update ref coordinates
        return (
            <span
                ref={(ref) => this.wrapperElement = ref}
                style={styles.character}>
                    {this.props.children}
            </span>
        );
    }

}

const styles = {
    character: {
        color: 'red',
    },
};


export default AmbiguousCharacter;
