import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';

function Splashscreen(props) {
  //logic javascript
  const nama = 'Anis Istiqomah';
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Auth');
    }, 4000);
  }, []);
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 70,
        }}>
        <Image source={require('../../assets/Logo-color.png')} />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'E59D5C', fontSize: 20}}>@Anis Istiqomah</Text>
      </View>
      <View>
        <Image source={require('../../assets/wave.png')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
  },
});
export default Splashscreen;
