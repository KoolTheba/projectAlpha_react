import React from 'react'

import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVeredict'
import tryConvert from '../../utils/tryConvert';
import { toCelsius, toFahrenheit } from '../../utils/conversionFunctions';

export default class Calculator extends React.Component {

    state = {
        temperature: '',
        scale: 'c'
    };

    handleCelsiusChange = (temperature) => {
        this.setState({
            temperature,
            scale: 'c'
        })
    }

    handleFarenheitChange = (temperature) => {
        this.setState({
            temperature,
            scale: 'f'
        })
    }

    render() {
      const { temperature, scale } = this.state;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
      const farenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
      return (
        <>
            <TemperatureInput
                temperature={celsius}
                scale={'c'}
                onTemperatureChange={this.handleCelsiusChange}    
            />
            <TemperatureInput
                temperature={farenheit}
                scale={'f'}
                onTemperatureChange={this.handleFarenheitChange}    
            />
            <BoilingVerdict
            celsius={parseFloat(temperature)} />
        </>
      );
    }
}