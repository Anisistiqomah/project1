import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Signup(props) {
  const HandleLogin = () => {
    props.navigation.replace('Auth');
  };
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 80,
          alignItems: 'flex-start',
          justifyContent: 'space-around',
        }}>
        <View style={{marginLeft: 120}}>
          <Text style={{fontSize: 30, fontWeight: '500'}}>Sign Up</Text>
        </View>
        <View style={{alignSelf: 'flex-end'}}>
          <TouchableOpacity onPress={HandleLogin}>
            <Text style={{fontSize: 16, color: '#E59D5C'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'column', marginHorizontal: 15}}>
        <View
          style={{
            backgroundColor: '#E8E8E8',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingLeft: 15,
            borderRadius: 10,
            marginTop: 30,
          }}>
          <Text style={{color: 'grey'}}>Name</Text>
        </View>
        <View
          style={{
            backgroundColor: '#E8E8E8',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingLeft: 15,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <Text style={{color: 'grey'}}>Email</Text>
        </View>
        <View
          style={{
            backgroundColor: '#E8E8E8',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: 'grey', marginLeft: 15}}>Password</Text>
          </View>
          <View>
            <Text style={{color: 'grey', marginRight: 15, color: '#E59D5C'}}>
              Show
            </Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
          <View
            style={{flex: 0.5, backgroundColor: '#E8E8E8', height: 18}}></View>
          <View style={{marginLeft: 10}}>
            <Text>
              I would like to receive your newsletter and other promotional
              information.
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#E59D5C',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            marginTop: 50,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
            Sign Up
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#E59D5C', fontSize: 16, fontWeight: '600'}}>
            Forgot Your Password?
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
export default Signup;
