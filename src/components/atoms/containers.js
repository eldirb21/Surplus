import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/themes';

const Containers = ({style, children, isScroll}) => {
  return isScroll ? (
    <View style={{...styles, ...style}}>
      <ScrollView style={styles.scroll}>{children}</ScrollView>
    </View>
  ) : (
    <View style={{...styles, ...style}}>{children}</View>
  );
};

export default Containers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body,
  },
  scroll: {
    height: '100%',
    backgroundColor: colors.body,
  },
});
