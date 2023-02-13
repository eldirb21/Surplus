import {Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Containers} from '../../components/atoms';
import {bgSplash} from '../../assets/images';
import DynamicSize from '../../constants/dynamicSize';

const Splash = ({navigation, ...props}) => {
  useEffect(() => {
    var timer = setTimeout(() => {
      checkSession();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  var checkSession = () => {
    if (props.section) {
      navigation.replace('MainTab');
    } else {
      navigation.replace('AuthDefault');
    }
  };

  return (
    <Containers style={styles.container}>
      <Image resizeMode="contain" style={styles.bgs} source={bgSplash} />
    </Containers>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bgs: {
    opacity: 1,
    width: DynamicSize(414),
    height: '100%',
    shadowOpacity: 1,
  },
});
