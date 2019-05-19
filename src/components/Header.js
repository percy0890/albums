import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 80,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
}

export default Header;