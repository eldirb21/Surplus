import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Buttons, Containers, TextInputs, Texts} from '../../components/atoms';
import {AUTH_LABEL} from '../../constants/labelConstants';
import {bgsign} from '../../assets/images';
import DynamicSize from '../../constants/dynamicSize';
import {colors} from '../../constants/themes';
import {fonts} from '../../constants/fonts';
import validate from '../../constants/validation';
import {setModelObj} from '../../constants/setModel';

const SignUp = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPass: '',
  });
  const [errors, seterrors] = useState({});
  const [errorColors, seterrorColors] = useState({});

  const doRegist = () => {
    var isvalidate = validate(state);
    console.log('isvalidate = ', isvalidate);
    seterrors(isvalidate.str);
    seterrorColors(isvalidate.bool);
    // if (Object.keys(isvalidate.bool).length === 0) {
    //   navigation.replace('SignIn');
    // }
  };
  return (
    <Containers isScroll>
      <ImageBackground resizeMode="cover" style={styles.bg} source={bgsign}>
        <View style={styles.contentBgContent}>
          <Texts style={styles.inLabel}>{AUTH_LABEL.REGIST}</Texts>
          <Texts style={styles.indesc}>{AUTH_LABEL.CONFIG}</Texts>
        </View>
      </ImageBackground>
      <View style={[styles.contents, styles.shadow_top]}>
        <TextInputs
          value={state.email}
          onChangeText={val => {
            setState(setModelObj('email', val, state));
            seterrors({...errors, email: validate(state, val).str.email});
            seterrorColors({
              ...errorColors,
              email: validate(state, val).bool.email,
            });
          }}
          invalidColor={
            errorColors.email
              ? colors.danger
              : errorColors.email === false
              ? colors.persianGreen
              : colors.grey
          }
          label={AUTH_LABEL.MAIL}
          textStyle={styles.input}
          errors={errors.email}
          placeholder={AUTH_LABEL.PMAIL}
        />
        <TextInputs
          isPassword
          value={state.password}
          onChangeText={val => {
            setState(setModelObj('password', val, state));
            seterrors({
              ...errors,
              password: validate(state, val).str.password,
            });
            seterrorColors({
              ...errorColors,
              password: validate(state, val).bool.password,
            });
          }}
          invalidColor={
            errorColors.password
              ? colors.danger
              : errorColors.password === false
              ? colors.persianGreen
              : colors.grey
          }
          label={AUTH_LABEL.PASS}
          textStyle={styles.input}
          placeholder={AUTH_LABEL.PPASS}
          errors={errors.password}
        />
        <TextInputs
          isPassword
          value={state.confirmPass}
          onChangeText={val => {
            setState(setModelObj('confirmPass', val, state));
            seterrors({
              ...errors,
              confirmPass: validate(state, val).str.confirmPass,
            });
            seterrorColors({
              ...errorColors,
              confirmPass: validate(state, val).bool.confirmPass,
            });
          }}
          invalidColor={
            errorColors.confirmPass
              ? colors.danger
              : errorColors.confirmPass === false
              ? colors.persianGreen
              : colors.grey
          }
          label={AUTH_LABEL.PPASSCONF}
          textStyle={styles.input}
          placeholder={AUTH_LABEL.PPASSCONF}
          errors={errors.confirmPass}
        />
        <Buttons
          style={{...styles.btn, marginTop: 25}}
          title={AUTH_LABEL.REGIST}
          onPress={doRegist}
        />

        <View style={{...styles.orContent, marginVertical: 30}}>
          <View style={styles.borders} />
          <Texts style={styles.orText}>{AUTH_LABEL.OR}</Texts>
          <View style={styles.borders} />
        </View>

        <View style={{...styles.orContent}}>
          <Buttons
            midle
            disable={true}
            style={styles.btn}
            title={AUTH_LABEL.FB}
            onPress={() => navigation.navigate('MainTab')}
            iconName="facebook-square"
          />
          <Buttons
            midle
            disable={true}
            style={styles.btn}
            title={AUTH_LABEL.GOG}
            onPress={() => navigation.navigate('MainTab')}
            iconName="google"
          />
        </View>

        <View style={styles.footer}>
          <Texts style={styles.policy}>
            {AUTH_LABEL.NOTIC + ' '}
            <Texts style={styles.policybtn}>{AUTH_LABEL.PRIVACY}</Texts>
            {' ' + AUTH_LABEL.AS_WELL + ' '}
            <Texts style={styles.policybtn}>{AUTH_LABEL.POLICY}</Texts>
          </Texts>
        </View>
      </View>
    </Containers>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  bg: {
    width: DynamicSize(),
    height: DynamicSize() / 2,
  },
  contents: {
    backgroundColor: colors.white,
    borderTopLeftRadius: DynamicSize(40),
    borderTopRightRadius: DynamicSize(40),
    padding: DynamicSize(20),
    marginTop: DynamicSize(-35),
    height: '100%',
  },
  shadow_top: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: DynamicSize(-25),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentBgContent: {
    position: 'absolute',
    bottom: DynamicSize(35),
    left: DynamicSize(10),
    flex: 0.5,
    width: '55%',
    padding: 10,
    borderRadius: 20,
  },
  inLabel: {
    fontSize: fonts.font22,
    fontWeight: 'bold',
    color: colors.white,
  },
  indesc: {
    fontSize: fonts.font12,
    color: colors.white,
  },
  orContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  borders: {
    height: 0.4,
    flex: 1,
    backgroundColor: colors.grey,
  },
  orText: {
    marginHorizontal: DynamicSize(20),
    color: colors.grey,
    fontSize: fonts.font12,
  },
  footer: {
    marginVertical: DynamicSize(20),
  },
  policy: {
    fontSize: fonts.font12,
    textAlign: 'center',
    color: colors.grey,
  },
  policybtn: {
    fontSize: fonts.font12,
    color: colors.gold,
    fontWeight: '500',
  },
});
