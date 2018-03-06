import React from 'react';
import { List, ListItem } from 'react-native-elements';

let FoodList = (props) => <List containerStyle={{marginBottom: 20}}>
  {
    props.food.map((l, i) => (      
            <ListItem
                roundAvatar
                avatar={{uri:l.image}}
                key={i}
                title={l.name}
                subtitle={l.name}
            />       
    ))
  }
</List>

export default FoodList