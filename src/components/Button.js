import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}  

const styles = {
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
    alignSelf: 'stretch'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#007aff'
  }
}

export default Button;