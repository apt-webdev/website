import React from 'react';
import './Tag.scss';

class Tag extends React.Component {

    constructor(props) {
        super(props);
        this.state= {};

    }
    
    
    render() {
        return (
            <span className="tag is-info is-light">
                {this.props.value}
            </span>
        );
    }
}

export default Tag;