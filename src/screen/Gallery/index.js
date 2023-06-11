import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

function Gallery(props) {
  const HandleBack = () => {
    props.navigation.navigate('ProfileMenu');
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 60,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}>
        <View>
          <TouchableOpacity onPress={HandleBack}>
            <Text style={{fontSize: 16, color: '#E59D5C'}}>Back</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize: 30, fontWeight: '600'}}>Gallery</Text>
        </View>
        <View>
          <Text style={{fontSize: 16, color: '#E59D5C'}}>Next</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: 20,
          marginHorizontal: 15,
        }}>
        <View style={{flex: 1, flexDirection: 'row', height: 150}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'grey',
              opacity: 0.2,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              flex: 2,
              backgroundColor: 'grey',
              opacity: 0.2,
              marginLeft: 15,
              borderRadius: 10,
            }}></View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'grey',
            opacity: 0.2,
            height: 200,
            marginTop: 15,
            borderRadius: 10,
          }}></View>
        <View
          style={{flex: 1, height: 150, flexDirection: 'row', marginTop: 15}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'grey',
              opacity: 0.2,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'grey',
              opacity: 0.2,
              marginLeft: 15,
              borderRadius: 10,
            }}></View>
        </View>
        <View
          style={{flex: 1, flexDirection: 'row', height: 150, marginTop: 15}}>
          <View
            style={{
              flex: 2,
              backgroundColor: 'grey',
              opacity: 0.2,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'grey',
              opacity: 0.2,
              marginLeft: 15,
              borderRadius: 10,
            }}></View>
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
export default Gallery;
