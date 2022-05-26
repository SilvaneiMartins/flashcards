import React from 'react';
import { View, Text } from 'react-native';

import PinSvg from '../../assets/click-1302.svg';

import { styles } from './styles';

export function Highlight() {
  return (
    <View style={styles.container}>
      <PinSvg />

      <Text style={styles.title}>
        Quiz de programação {'\n'} teste seu conhecimento
      </Text>
    </View>
  );
}