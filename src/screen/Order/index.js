import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../../components/card';

function Order(props) {
  const HandleHistory = () => {
    props.navigation.navigate('HistoryMenu');
  };
  const HandleDetailOrder = () => {
    props.navigation.navigate('DetailOrderMenu');
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 70,
          marginHorizontal: 15,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 120,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>Order</Text>
        </View>
        <View
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
          <TouchableOpacity onPress={HandleHistory}>
            <Text style={{color: 'orange', fontSize: 17}}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginHorizontal: 15,
          marginTop: 15,
        }}>
        <View style={{flex: 1, flexDirection: 'row', marginRight: 5}}>
          <View
            style={{
              flex: 0.7,
              backgroundColor: 'grey',
              opacity: 0.2,
              height: 50,
              borderRadius: 7,
            }}></View>
          <View
            style={{
              flex: 4,
              marginLeft: 15,
              flexDirection: 'column',
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity onPress={HandleDetailOrder}>
                <Text style={{flex: 4, fontWeight: '600', fontSize: 18}}>
                  Header
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                }}>
                <Text style={{opacity: 0.5, fontSize: 14}}>8m ago</Text>
              </View>
            </View>
            <View style={{flex: 4, marginTop: 7}}>
              <Text>
                He'll want to use your yacht, and I don't want this thing
                smelling like fish
              </Text>
              <View
                style={{
                  backgroundColor: 'grey',
                  opacity: 0.2,
                  height: 2,
                  width: 300,
                  alignSelf: 'center',
                  marginTop: 35,
                }}></View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginHorizontal: 15,
          marginTop: 15,
        }}>
        <View style={{flex: 1, flexDirection: 'row', marginRight: 5}}>
          <View
            style={{
              flex: 0.7,
              backgroundColor: 'grey',
              opacity: 0.2,
              height: 50,
              borderRadius: 7,
            }}></View>
          <View
            style={{
              flex: 4,
              marginLeft: 15,
              flexDirection: 'column',
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{flex: 4, fontWeight: '600', fontSize: 18}}>
                Header
              </Text>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                }}>
                <Text style={{opacity: 0.5, fontSize: 14}}>8m ago</Text>
              </View>
            </View>
            <View style={{flex: 4, marginTop: 7}}>
              <Text>
                He'll want to use your yacht, and I don't want this thing
                smelling like fish
              </Text>
              <View
                style={{
                  backgroundColor: 'grey',
                  opacity: 0.2,
                  height: 2,
                  width: 300,
                  alignSelf: 'center',
                  marginTop: 35,
                }}></View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginHorizontal: 15,
          marginTop: 15,
        }}>
        <View style={{flex: 1, flexDirection: 'row', marginRight: 5}}>
          <View
            style={{
              flex: 0.7,
              backgroundColor: 'grey',
              opacity: 0.2,
              height: 50,
              borderRadius: 7,
            }}></View>
          <View
            style={{
              flex: 4,
              marginLeft: 15,
              flexDirection: 'column',
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{flex: 4, fontWeight: '600', fontSize: 18}}>
                Header
              </Text>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                }}>
                <Text style={{opacity: 0.5, fontSize: 14}}>8m ago</Text>
              </View>
            </View>
            <View style={{flex: 4, marginTop: 7}}>
              <Text>
                He'll want to use your yacht, and I don't want this thing
                smelling like fish
              </Text>
              <View
                style={{
                  backgroundColor: 'grey',
                  opacity: 0.2,
                  height: 2,
                  width: 300,
                  alignSelf: 'center',
                  marginTop: 35,
                }}></View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginHorizontal: 15,
          marginTop: 15,
        }}>
        <View style={{flex: 1, flexDirection: 'row', marginRight: 5}}>
          <View
            style={{
              flex: 0.7,
              backgroundColor: 'grey',
              opacity: 0.2,
              height: 50,
              borderRadius: 7,
            }}></View>
          <View
            style={{
              flex: 4,
              marginLeft: 15,
              flexDirection: 'column',
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{flex: 4, fontWeight: '600', fontSize: 18}}>
                Header
              </Text>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                }}>
                <Text style={{opacity: 0.5, fontSize: 14}}>8m ago</Text>
              </View>
            </View>
            <View style={{flex: 4, marginTop: 7}}>
              <Text>
                He'll want to use your yacht, and I don't want this thing
                smelling like fish
              </Text>
              <View
                style={{
                  backgroundColor: 'grey',
                  opacity: 0.2,
                  height: 2,
                  width: 300,
                  alignSelf: 'center',
                  marginTop: 35,
                }}></View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'grey',
          opacity: 0.2,
          marginTop: 20,
          height: 250,
          marginHorizontal: 15,
        }}></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
  },
});
export default Order;
