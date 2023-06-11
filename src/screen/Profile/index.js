import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Profile(props) {
  const HandleGallery = () => {
    props.navigation.navigate('GalleryMenu');
  };
  const HandleEdit = () => {
    props.navigation.navigate('EditProfileMenu');
  };
  const HandleLogout = () => {
    props.navigation.navigate('Auth');
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          height: 300,
          backgroundColor: '#E59D5C',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 15,
            marginTop: 70,
            alignItems: 'flex-start',
            justifyContent: 'space-around',
          }}>
          <View>
            <TouchableOpacity onPress={HandleGallery}>
              <Text style={{color: 'white', fontSize: 16}}>Gallery</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 25,
              }}>
              Profile
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={HandleLogout}>
              <Text style={{color: 'white', fontSize: 16}}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            height: 150,
            width: 150,
            borderRadius: 150,
            alignSelf: 'center',
            borderStyle: 'solid',
            borderWidth: 5,
            borderColor: 'white',
          }}></View>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 35, alignSelf: 'center', fontWeight: '600'}}>
          Profile Name
        </Text>
        <Text style={{fontSize: 15, alignSelf: 'center', fontWeight: '600'}}>
          Primary Account
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginHorizontal: 15,
          marginTop: 10,
        }}>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
          <View
            style={{
              backgroundColor: 'grey',
              opacity: 0.2,
              flex: 1,
              borderRadius: 10,
              height: 50,
            }}></View>
          <View style={{flex: 6, marginLeft: 15}}>
            <Text style={{fontWeight: '600', fontSize: 16}}>Email</Text>
            <Text style={{marginTop: 7, fontSize: 16}}>
              anis.qomah@gmail.com
            </Text>
            <View
              style={{
                backgroundColor: 'grey',
                height: 1,
                opacity: 0.3,
                marginTop: 45,
              }}></View>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
          <View
            style={{
              backgroundColor: 'grey',
              opacity: 0.2,
              flex: 1,
              borderRadius: 10,
              height: 50,
            }}></View>
          <View style={{flex: 6, marginLeft: 15}}>
            <Text style={{fontWeight: '600', fontSize: 16}}>Phone Number</Text>
            <Text style={{marginTop: 7, fontSize: 16}}>+6281213612041</Text>
            <View
              style={{
                backgroundColor: 'grey',
                height: 1,
                opacity: 0.3,
                marginTop: 45,
              }}></View>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
          <View
            style={{
              backgroundColor: 'grey',
              opacity: 0.2,
              flex: 1,
              borderRadius: 10,
              height: 50,
            }}></View>
          <View style={{flex: 6, marginLeft: 15}}>
            <TouchableOpacity onPress={HandleEdit}>
              <Text style={{fontWeight: '600', fontSize: 16}}>Description</Text>
            </TouchableOpacity>
            <Text style={{marginTop: 7, fontSize: 16}}>
              Saya adalah seorang Guru Honorer yang ingin belajar menjadi
              seorang mobile developer. Kerja keras, usaha, dan doa sangat
              dibutuhkan selama proses belajar. Semoga dilancarkan dalam
              menjalani proses-proses yang harus dilewati
            </Text>
            <View
              style={{
                backgroundColor: 'grey',
                height: 1,
                opacity: 0.3,
                marginTop: 45,
              }}></View>
          </View>
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
export default Profile;
