import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 5,
        //overflow: 'hidden',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        elevation: 1,
      },
      thumbnail: {
        width: 400,
        height: 350,
      },
      text: {
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 10
      }
  })

let Card = (props) => {
    return (
      <View>
        <View style={styles.card}>
          <Image style={styles.thumbnail} source={{uri: props.image}} />
          <Text style={styles.text}>{props.name}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Icon
              raised
              name='info-circle'
              type='font-awesome'
              color='#f50'
              reverse={true}
              size={30}
              onPress={() => alert(props.info)} />
          <Icon
              raised
              name='heartbeat'
              type='font-awesome'
              color='#3949AB'
              reverse={true}
              size={30}
              onPress={() => console.log('hello')} />
          <Icon
              raised
              name='star'
              type='font-awesome'
              color='#f50'
              reverse={true}
              size={30}
              onPress={() => console.log('hello')} />
          <Icon
              raised
              name='times-circle'
              type='font-awesome'
              color='#3949AB'
              reverse={true}
              size={30}
              onPress={() => console.log('hello')} />
        </View>
      </View>
    )
}

export default Card