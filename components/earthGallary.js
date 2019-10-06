import React, { Component } from 'react';
import { SliderBox } from 'react-native-image-slider-box';

//this is a component for page 1

export default class Earth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //array of images using links to save space 
            images: [
                'https://bit.ly/330mHJo',
                'https://bit.ly/31RgDCV',
                'https://bit.ly/2MhVyuH',
                'https://bit.ly/2o9O4lD'
            ]
        };
    }

    render() {
        return (

            <SliderBox
                //images slider, 
                images={this.state.images}
                //frame size 
                sliderBoxHeight={1000}
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                //dot color, loop and padding 
                dotColor="#fa3939"
                inactiveDotColor="white"
                circleLoop
            />


        );
    }
}

