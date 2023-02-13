import React from 'react';
import {Text} from 'react-native';
import {fonts} from '../../constants/fonts';

export default function Texts({style, textLinear, ...props}) {
  const defStyle = {
    fontSize: fonts.font14,
    color: '#000000',
  };
  const incStyle = Array.isArray(style) ? style : [style];

  return <Text {...props} style={[defStyle, ...incStyle]} />;
}
