import React from 'react'
import GameControls from './GameControls';
import { StreakCounter } from './StreakCounter';
import { RateIndicator } from './RateIndicator';

export default class DogMemory extends React.Component {
    render() {
        return (
        <div>
            <StreakCounter streak={this.props.streak} />
            <RateIndicator rate={this.props.percentage} />
            <GameControls {...this.props.controls} {...this.props.controlsActions}/>
        </div>)
    }
}

