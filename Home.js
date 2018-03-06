/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from './components/Card';
import NoMoreCards from './components/NoMoreCards';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import FoodList from './components/FoodList';
import FacebookTabBar from './components/FacebookTabBar';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {

  }

  handleYup (card) {
    console.log("yup")
  }

  handleNope (card) {
    console.log("nope")
  }

  cardRemoved (index) {
    console.log(`The index is ${index}`);

    /* let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }

    } */

  }

  render() {
    return (
      <ScrollableTabView
          style={{marginTop: 20}}
          initialPage={0}
          renderTabBar={() => <FacebookTabBar />}
        >
          <ScrollView tabLabel="md-flame" style={styles.tabView}>
            <SwipeCards
              cards={this.props.cards}
              loop={false}
              renderCard={(cardData) => <Card {...cardData} />}
              renderNoMoreCards={() => <NoMoreCards />}
              showYup={true}
              showNope={true}
              handleYup={(card) => this.props.markLikedFood(card)}
              handleNope={this.handleNope}
              cardRemoved={this.cardRemoved.bind(this)}
              yupText='LIKE'
              noText='NOPE'
            />
          </ScrollView>
          <ScrollView tabLabel="ios-heart" style={styles.tabView}> 
            <FoodList food={this.props.likedFood}/>
          </ScrollView>
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  }
})