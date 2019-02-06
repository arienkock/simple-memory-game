import React from 'react'
import GameControls from './GameControls';

export default class DogMemory extends React.Component {
    render() {
        return (
        <div>
            <GameControls {...this.props.controls} {...this.props.controlsActions}/>
        </div>)
    }
}

