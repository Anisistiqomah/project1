import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Detail(props) {
  const HandleBack = () => {
    props.navigation.navigate('HomeMenu');
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 60,
        }}>
        <TouchableOpacity onPress={HandleBack}>
          <View>
            <Text style={{marginLeft: 15, color: '#E59D5C'}}>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginLeft: 95}}>
          <Text style={{fontSize: 30, fontWeight: '600'}}>Product</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: 200,
          backgroundColor: 'grey',
          opacity: 0.3,
          marginTop: 15,
          marginHorizontal: 15,
        }}></View>
      <View style={{marginHorizontal: 15, marginTop: 25}}>
        <Text style={{fontSize: 25}}>Post Title Here...</Text>
        <Text style={{marginTop: 5, fontWeight: '500'}}>Author</Text>
        <Text style={{fontSize: 15, marginTop: 15}}>
          Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum
          elit ex ut. Dolore exercitation nulla tempor consequat aliquip
          occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure quis nulla
          eu consequat fugiat Lorem sunt magna et consequat labore. Laboris
          incididunt id Lorem est duis deserunt nisi dolore eiusmod culpa
          exercitation consectetur.
        </Text>
        <Text style={{fontSize: 15, marginTop: 15}}>
          Fugiat do aliqua laboris cillum sint dolor officia adipisicing
          excepteur fugiat officia. Cupidatat ut elit consequat ea laborum
          occaecat laborum aute consectetur Lorem exercitation. Lorem anim minim
          officia aliquip commodo deserunt mollit. Duis deserunt quis cillum
          voluptate duis ipsum quis incididunt elit excepteur excepteur labore
          duis cillum. Voluptate sint nulla minim eiusmod in nulla. Ea id ad
          duis esse adipisicing culpa ex esse ea dolore consequat. Reprehenderit
          eu minim veniam aliquip do ipsum duis do qui adipisicing aliquip ad
          occaecat. Enim reprehenderit sunt do do. Ex fugiat nisi sit anim culpa
          nisi. Non labore fugiat culpa magna. Commodo esse Lorem ex duis do et
          do. Est laboris cupidatat ad est anim adipisicing sit labore do dolor
          officia. Fugiat consequat in excepteur reprehenderit id aliquip
          voluptate sint enim proident aliquip occaecat quis non. Ad nulla
          aliqua est amet aliqua sint est occaecat amet sunt. Ullamco laborum
          qui sint officia officia ad Lorem culpa minim voluptate occaecat id
          duis esse. Ullamco sunt magna consectetur excepteur. Id cupidatat
          proident ex ad elit laboris. Nulla aute sit occaecat laboris. Laboris
          minim aliquip exercitation elit commodo ipsum et fugiat sit anim
          laborum proident cillum laboris. Et cillum tempor esse sit anim et
          veniam. Tempor magna irure ex ea id fugiat. Ex eu sint tempor quis
          exercitation amet ut deserunt sit fugiat aliquip nostrud nulla. Eu
          sunt laborum elit consectetur tempor sunt dolore in sunt reprehenderit
          voluptate dolore adipisicing. Proident eiusmod reprehenderit quis sint
          exercitation voluptate non labore. Sunt non sint in Lorem occaecat
          dolore tempor ipsum et proident sit Lorem ipsum officia.
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
export default Detail;
