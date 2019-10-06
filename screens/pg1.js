import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Earth from '../components/earthGallary';

export default class Page1 extends React.Component {
    render() {
        return (
            <SafeAreaView>
                {/* //earth component image gallary  */}
                <Earth></Earth>

            </SafeAreaView>
        );
    }
}

