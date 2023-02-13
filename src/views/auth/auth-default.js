import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttons, Containers, Texts} from '../../components/atoms';
import {bgauth} from '../../assets/images';
import DynamicSize from '../../constants/dynamicSize';
import {colors} from '../../constants/themes';
import {AUTH_LABEL} from '../../constants/labelConstants';
import {fonts} from '../../constants/fonts';

const AuthDefault = ({navigation}) => {
  return (
    <Containers>
      <Image resizeMode="cover" style={styles.bg} source={bgauth} />
      <Buttons
        style={styles.skip}
        styleBtn={styles.skipbtn}
        midle
        bordered
        title={AUTH_LABEL.SKIP}
        onPress={() => navigation.navigate('MainTab')}
      />
      <View style={[styles.contents, styles.shadow_top]}>
        <View>
          <Texts style={styles.welcome}>{AUTH_LABEL.WELCOME}</Texts>
          <Texts style={styles.welcomeDesc}>{AUTH_LABEL.WELCOME_DESC}</Texts>
        </View>
        <Buttons
          style={styles.btn}
          title={AUTH_LABEL.REGIST}
          onPress={() => navigation.navigate('SignUp')}
        />
        <Buttons
          style={styles.btn}
          bordered
          title={AUTH_LABEL.HAVE_ACCOUNT}
          onPress={() => navigation.navigate('SignIn')}
        />
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

export default AuthDefault;

const styles = StyleSheet.create({
  bg: {
    width: DynamicSize(),
    height: DynamicSize(),
  },
  contents: {
    backgroundColor: colors.white,
    borderTopLeftRadius: DynamicSize(40),
    borderTopRightRadius: DynamicSize(40),
    padding: DynamicSize(20),
    marginTop: DynamicSize(-10),
    height: '100%',
  },
  shadow_top: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: DynamicSize(-16),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  skip: {
    position: 'absolute',
    right: DynamicSize(20),
    top: Platform.OS === 'ios' ? DynamicSize(50) : DynamicSize(20),
    width: DynamicSize(100),
    padding: DynamicSize(6),
  },
  skipbtn: {
    padding: DynamicSize(6),
  },
  welcome: {
    fontSize: fonts.font20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: DynamicSize(10),
  },
  welcomeDesc: {
    textAlign: 'center',
    marginBottom: DynamicSize(25),
    fontSize: fonts.font13,
    color: colors.grey,
  },
  btn: {
    marginBottom: DynamicSize(20),
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
