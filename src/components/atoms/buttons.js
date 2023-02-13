import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
  iconImage,
  size,
  bgColor,
  ...props
}) => {
  var styled = {};
  if (midle) {
    styled['width'] = '45%';
  }

  var colorsBg = disable
    ? colors.greyLight
    : bgColor
    ? bgColor
    : colors.persianGreen;

  return !bordered ? (
    isText ? (
      <TouchableOpacity disabled={disable} style={style} {...props}>
        <Text>{title}</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        disabled={disable}
        style={{
          ...styled,
          ...style,
          ...styles.btn,
          backgroundColor: colorsBg,
        }}
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
        {iconImage && (
          <Image
            style={{marginRight: 10, height: size, width: size}}
            source={iconImage}
          />
        )}
        <Text
          style={{
            ...styles.btnText,
            fontWeight: bgColor ? '500' : 'bold',
            color: disable
              ? colors.darkGrey
              : bgColor
              ? colors.darkGrey
              : colors.white,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  ) : (
    <TouchableOpacity
      disabled={disable}
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
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  btnText: {
    borderRadius: 8,
    color: colors.persianGreen,
    fontSize: 16,
    textAlign: 'center',
  },
});
