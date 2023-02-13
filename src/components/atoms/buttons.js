import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/themes';
import Icons from './Icons';

const Buttons = ({
  style,
  lGradient,
  primaryG,
  bordered,
  midle,
  title,
  styleBtn,
  disable,
  isText,
  iconName,
  ...props
}) => {
  var styled = {};
  if (midle) {
    styled['width'] = '45%';
  }

  var colorsBg = disable
    ? [colors.greyLight, colors.greyLight, colors.greyLight]
    : [colors.persianGreen, colors.persianGreen, colors.persianGreen];
  return !bordered ? (
    isText ? (
      <TouchableOpacity disabled={disable} style={style} {...props}>
        <Text>{title}</Text>
      </TouchableOpacity>
    ) : (
      // <LinearGradient
      //   start={{x: 0, y: 0}}
      //   end={{x: 1, y: 0}}
      //   colors={colorsBg}
      //   style={{...styles.linearGradient, ...styled, ...style}}>
      <TouchableOpacity
        disabled={disable}
        style={{
          ...styles.linearGradient,
          ...styled,
          ...style,
          backgroundColor: colors.persianGreen,
          ...styles.btn,
        }}
        // style={[styles.btn]}
        {...props}>
        {iconName && (
          <Icons
            style={{marginRight: 10}}
            type={'FontAwesome'}
            name={iconName}
            color={iconName === 'google' ? '#2aab44' : '#009ee2'}
            size={20}
          />
        )}
        <Text
          style={{
            ...styles.btnText,
            color: disable ? colors.dark : colors.white,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  ) : (
    <TouchableOpacity
      disabled={disable}
      // style={[styles.btn, styleBtn]}
      style={{...styles.bordered, ...styled, ...style, ...styles.btn}}
      {...props}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 20,
  },
  bordered: {
    borderWidth: 2,
    borderColor: colors.persianGreen,
    borderRadius: 20,
  },
  btn: {
    padding: 14,
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  btnText: {
    borderRadius: 8,
    color: colors.persianGreen,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
