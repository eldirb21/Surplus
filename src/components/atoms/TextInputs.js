import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import DynamicSize from '../../constants/dynamicSize';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/themes';
import Icons from './Icons';
import Texts from './Texts';

export default function TextInputs({
  containerStyle,
  textStyle,
  label,
  errors,
  isPassword,
  invalidColor,
  ...props
}) {
  const [security, setSecurity] = useState(true);
  return (
    <View style={{...containerStyle, marginVertical: 10}}>
      {label && <Texts style={styles.label}>{label}</Texts>}
      <View>
        <TextInput
          placeholderTextColor={colors.grey}
          secureTextEntry={isPassword && security}
          style={[
            textStyle,
            styles.input,
            {
              paddingRight: isPassword ? DynamicSize(50) : 10,
              borderColor: invalidColor ? invalidColor : 'rgba(0,0,0,0.2)',
            },
          ]}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setSecurity(!security)}
            activeOpacity={0.8}
            style={styles.iconRight}>
            <Icons
              type={'Feather'}
              name={security ? 'eye-off' : 'eye'}
              color={colors.grey}
            />
          </TouchableOpacity>
        )}
      </View>

      {errors && errors !== '' && errors !== undefined && (
        <View>
          <Texts style={styles.errors}>{errors}</Texts>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.dark,
    fontWeight: '500',
    marginBottom: 2,
  },
  iconRight: {
    position: 'absolute',
    right: DynamicSize(10),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: DynamicSize(6),
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    padding: DynamicSize(10),
  },
  errors: {
    color: colors.danger,
    fontSize: fonts.font12,
  },
});
