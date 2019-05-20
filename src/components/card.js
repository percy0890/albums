import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
  <View style={styles.cardStyle}>
    {props.children}
  </View>
);

const styles = {
  cardStyle: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  }
}

export default Card;