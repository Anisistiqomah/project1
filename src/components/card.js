import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Card(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 30,
      }}>
      <Text style={{color: 'white'}}>Card</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
  },
});
export default Card;
