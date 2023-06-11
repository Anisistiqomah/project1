import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

function Login(props) {
  const HandleSignup = () => {
    props.navigation.navigate('SignupMenu');
  };
  const HandleLogin = () => {
    props.navigation.replace('Main');
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
          <Text style={{fontSize: 30, fontWeight: '500'}}>Log In</Text>
        </View>
        <TouchableOpacity onPress={HandleSignup}>
          <View style={{alignSelf: 'flex-end'}}>
            <Text style={{fontSize: 16, color: '#E59D5C'}}>Signup</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'column', marginHorizontal: 15}}>
        <TextInput
          style={{
            backgroundColor: '#E8E8E8',
            height: 50,
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingLeft: 15,
            borderRadius: 10,
            marginTop: 10,
          }}
          placeholder="Email"
          keyboardType="numeric"
        />
        <View>
          <TextInput
            style={{
              backgroundColor: '#E8E8E8',
              height: 50,
              alignItems: 'flex-start',
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: 10,
              paddingLeft: 15,
            }}
            placeholder="Password"
          />
          <View>
            <Text
              style={{
                color: 'grey',
                marginRight: 15,
                color: '#E59D5C',
              }}>
              Show
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={HandleLogin}>
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
              Log In
            </Text>
          </View>
        </TouchableOpacity>
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
export default Login;
