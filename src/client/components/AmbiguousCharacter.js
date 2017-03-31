import React, {Component} from 'react';

class AmbiguousCharacter extends Component {

    // notable props are decoratedText (contains the text inside the decorator)
    // and offsetKey (contains the key of the decorated region)
    constructor(props) {
        super(props);
    }

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
