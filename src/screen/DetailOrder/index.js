import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function DetailOrder(props) {
  const HandleBack = () => {
    props.navigation.navigate('OrderMenu');
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
        <View style={{marginLeft: 110}}>
          <Text style={{fontSize: 30, fontWeight: '600'}}>Detail</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: 200,
          width: 200,
          borderRadius: 120,
          alignSelf: 'center',
          borderColor: '#E59D5C',
          borderStyle: 'solid',
          borderWidth: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#E59D5C', fontSize: 30}}>$ 32.01</Text>
      </View>
      <View style={{marginHorizontal: 15, marginTop: 30}}>
        <Text style={{fontSize: 25}}>Product</Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 25,
          }}>
          <View
            style={{
              backgroundColor: '#E59D5C',
              borderRadius: 30,
              width: 15,
              height: 15,
            }}></View>
          <View style={{flex: 1, marginLeft: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{fontSize: 15, fontWeight: '500'}}>Item</Text>
              </View>
              <View>
                <Text style={{fontSize: 15}}>Statistic</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            opacity: 0.3,
            height: 1,
            marginHorizontal: 15,
            marginTop: 20,
          }}></View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View
            style={{
              backgroundColor: '#E59D5C',
              borderRadius: 30,
              width: 15,
              height: 15,
            }}></View>
          <View style={{flex: 1, marginLeft: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{fontSize: 15, fontWeight: '500'}}>Item</Text>
              </View>
              <View>
                <Text style={{fontSize: 15}}>Statistic</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            opacity: 0.3,
            height: 1,
            marginHorizontal: 15,
            marginTop: 20,
          }}></View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View
            style={{
              backgroundColor: '#E59D5C',
              borderRadius: 30,
              width: 15,
              height: 15,
            }}></View>
          <View style={{flex: 1, marginLeft: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{fontSize: 15, fontWeight: '500'}}>Item</Text>
              </View>
              <View>
                <Text style={{fontSize: 15}}>Statistic</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            opacity: 0.3,
            height: 1,
            marginHorizontal: 15,
            marginTop: 20,
          }}></View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View
            style={{
              backgroundColor: '#E59D5C',
              borderRadius: 30,
              width: 15,
              height: 15,
            }}></View>
          <View style={{flex: 1, marginLeft: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{fontSize: 15, fontWeight: '500'}}>Item</Text>
              </View>
              <View>
                <Text style={{fontSize: 15}}>Statistic</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            opacity: 0.3,
            height: 1,
            marginHorizontal: 15,
            marginTop: 20,
          }}></View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View
            style={{
              backgroundColor: '#E59D5C',
              borderRadius: 30,
              width: 15,
              height: 15,
            }}></View>
          <View style={{flex: 1, marginLeft: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{fontSize: 15, fontWeight: '500'}}>Item</Text>
              </View>
              <View>
                <Text style={{fontSize: 15}}>Statistic</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            opacity: 0.3,
            height: 1,
            marginHorizontal: 15,
            marginTop: 20,
          }}></View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View
            style={{
              backgroundColor: '#E59D5C',
              borderRadius: 30,
              width: 15,
              height: 15,
            }}></View>
          <View style={{flex: 1, marginLeft: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{fontSize: 15, fontWeight: '500'}}>Item</Text>
              </View>
              <View>
                <Text style={{fontSize: 15}}>Statistic</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            opacity: 0.3,
            height: 1,
            marginHorizontal: 15,
            marginTop: 20,
          }}></View>
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
export default DetailOrder;
