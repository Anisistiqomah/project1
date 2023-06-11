import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Information(props) {
  const HandleBack = () => {
    props.navigation.navigate('HomeMenu');
  };
  return (
    <ScrollView style={{backgroundColor: '#E59D5C'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          marginTop: 250,
          marginHorizontal: 15,
          borderRadius: 10,
          paddingHorizontal: 15,
        }}>
        <Text style={{fontSize: 30, fontWeight: '600', marginTop: 30}}>
          About Us
        </Text>
        <Text style={{textAlign: 'center', marginTop: 15, fontSize: 17}}>
          Consequat velit qui adipisicing sunt do reprehenderit ad laborum
          tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
          duis sit esse aliqua esse ex dolore esse. Consequat velit qui
          adipisicing sunt.
        </Text>
        <TouchableOpacity onPress={HandleBack}>
          <View
            style={{
              backgroundColor: '#E59D5C',
              marginTop: 50,
              marginHorizontal: 20,
              borderRadius: 30,
              height: 50,
              width: 350,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: '500', fontSize: 15}}>
              Back
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: '#E59D5C', fontSize: 15, fontWeight: '600'}}>
            Secondary Action
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
  },
});
export default Information;
