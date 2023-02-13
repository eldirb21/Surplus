import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/themes';
import {Icons, Texts} from '../atoms';

export default function MainTabSurplus({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // setup icon tab button
        var iconName = '';
        var iconType = '';
        switch (label) {
          case 'Discover':
            iconName = 'restaurant';
            break;
          case 'Pesanan':
            iconName = 'shopping-bag';
            iconType = 'Feather';
            break;
          case 'Forum':
            iconName = 'messenger-outline';
            break;
          case 'Profile':
            iconName = 'user';
            iconType = 'Feather';
            break;
          default:
            iconName = 'restaurant';
            break;
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.items}>
            <Icons
              size={iconType === 'Feather' ? fonts.font20 : fonts.font18}
              type={iconType}
              name={iconName}
              color={isFocused ? colors.persianGreen : colors.compImgHighlight}
            />
            <Texts
              style={{
                color: isFocused
                  ? colors.persianGreen
                  : colors.compImgHighlight,
              }}>
              {label}
            </Texts>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  items: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
