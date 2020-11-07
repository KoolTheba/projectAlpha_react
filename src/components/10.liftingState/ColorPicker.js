import React from 'react'
import TextColorPicker from './TextColorPicker'
import { ChromePicker } from 'react-color';

export default class ColorPicker extends React.Component {
    state = {
        background: '',
        color: 'green'
    }

    handleColorChange = (color) => {
        this.setState({ 
            background: color.hex,
            color: color.hex
        })
    }

    render(){
        const { background, color } = this.state

        return(
            <>
            <h3>I'm the Color Picker</h3>
            <ChromePicker 
                color={background}
                onChange={this.handleColorChange}
            />
            <TextColorPicker 
                color={color}
            />
            </>
        )
    }
}