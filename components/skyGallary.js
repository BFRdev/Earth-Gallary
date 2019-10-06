import React, { Component } from 'react';
import { SliderBox } from 'react-native-image-slider-box';

//this is a component for page 3
export default class Sky extends React.Component{

    // regular js code 
    constructor(props){
        super(props);
        this.state = {
            ////array of images using links to save space 
            images: [
                'https://bit.ly/2IsGlWp',
                'https://bit.ly/2Opksex',
                'https://bit.ly/357RZjf',
                'https://bit.ly/335yhTx'

            ]
        }; 
    }

    render(){
        return(

            <SliderBox 
            
            images={this.state.images}

            //current image pressed 
            onCurrentImagePassed={index =>
                console.warn(`image ${index} pressed`)
            }

            //gallary style and layout
            sliderBoxHeight={1000}
            dotColor="#FFEE58"
            inaactiveDotColor="white"

            circleLoop
            
            />

        );
    }

}