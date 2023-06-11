import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNav = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#E8E8E8',
      }}>
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
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const handleIcon = () => {
          if (route.name === 'Home') {
            return (
              <Icon
                name="home-outline"
                size={25}
                style={{alignSelf: 'center'}}
                color={isFocused ? '#E59D5C' : '#E8E8E8'}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Icon
                name="person-circle-outline"
                size={30}
                style={{alignSelf: 'center'}}
                color={isFocused ? '#E59D5C' : '#E8E8E8'}
              />
            );
          } else {
            return (
              <Icon
                name="calendar-outline"
                size={25}
                style={{alignSelf: 'center'}}
                color={isFocused ? '#E59D5C' : '#E8E8E8'}
              />
            );
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              flexBasis: '20%',
              alignItems: 'center',
              height: 80,
              justifyContent: 'center',
            }}
            key={index}
            activeOpacity={0.9}>
            <View>
              {route.name === 'Home' ? (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 2,
                    marginBottom: 10,
                  }}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: '#E59D5C',
                    }}></View>
                </View>
              ) : (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 2,
                    marginBottom: 10,
                  }}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: 'grey',
                      opacity: 0.2,
                    }}></View>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;
