import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';


const styles = StyleSheet.create({
    noMoreCardsText: {
      fontSize: 22,
    }
  })

let NoMoreCards = () => {
    return (
        <View style={styles.noMoreCards}>
            <Text>No more cards</Text>
        </View>
    )
}

export default NoMoreCards