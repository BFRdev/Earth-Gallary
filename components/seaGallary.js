import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default class Sea extends React.Component {
//regulare js code that's not rendered 
    constructor(props){
        super(props);

        this.state = {
            //images for gallary in array 
            images: [
                'https://bit.ly/359hMaQ',
                'https://bit.ly/35fQf7U',
                'https://bit.ly/335Hawk',
                'https://bit.ly/2LQUezN'
                
            ]
        }; 
    }

    render() {
        return(
           
         <SliderBox 
            
            images={this.state.images}

            sliderBoxHeight={1000}
            onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
            } 

            dotColor="#FFEE58"
            inaactiveDotColor="white"
            paginationBoxVerticalPadding={20}

            circleLoop
            
         />

        );
    }

}