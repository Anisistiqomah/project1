import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function EditProfile(props) {
  const HandleBack = () => {
    props.navigation.navigate('ProfileMenu');
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          marginTop: 60,
          flexDirection: 'row',
          marginHorizontal: 15,
        }}>
        <View>
          <TouchableOpacity onPress={HandleBack}>
            <Text style={{color: '#E59D5C'}}>Back</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize: 30, fontWeight: '500', marginLeft: 125}}>
            Edit
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 15, marginTop: 20}}>
        <Text style={{color: 'grey'}}>Compose your message here ...</Text>
      </View>
      <View
        style={{
          backgroundColor: '#E59D5C',
          flex: 1,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          marginTop: 20,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          Edit
        </Text>
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
export default EditProfile;
