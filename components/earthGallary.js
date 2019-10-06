import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { SliderBox } from 'react-native-image-slider-box';


export default class Earth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                'https://source.unsplash.com/1024x768/?nature',
                'https://source.unsplash.com/1024x768/?water',
                'https://source.unsplash.com/1024x768/?girl',
                'https://source.unsplash.com/1024x768/?tree'
            ]
        };
    }


    render() {
        return (
            <SafeAreaView>
                {/* <Text>Earth!</Text> */}

                <SliderBox

                    images={this.state.images}
                    sliderBoxHeight={1000}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                    dotColor="#FFEE58"
                    inactiveDotColor="black"
                    paginationBoxVerticalPadding={20}
                    circleLoop
                />

            </SafeAreaView>
        );
    }
}

