import React, { Component } from 'react';
import { SliderBox } from 'react-native-image-slider-box';

//this is a componet for page 2

export default class Sea extends React.Component {

    //regulare js code that's not rendered 
    constructor(props) {
        super(props);

        this.state = {
            ////array of images using links to save space 
            images: [
                'https://bit.ly/359hMaQ',
                'https://bit.ly/35fQf7U',
                'https://bit.ly/335Hawk',
                'https://bit.ly/2LQUezN'

            ]
        };
    }

    render() {
        return (

            <SliderBox
                //pass images from array 
                images={this.state.images}

                //current image index 
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                //gallary style and layout 
                sliderBoxHeight={1000}
                dotColor="#FFEE58"
                inaactiveDotColor="white"
                paginationBoxVerticalPadding={20}

                circleLoop

            />

        );
    }

}