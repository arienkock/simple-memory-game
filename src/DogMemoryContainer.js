import React from 'react'
import DogMemory from './DogMemory';
import {connect} from 'react-redux';

class DogMemoryContainer extends React.Component {
    render() {
        return <DogMemory {...this.props} />
    }
}

export default connect(state => state)(DogMemoryContainer)