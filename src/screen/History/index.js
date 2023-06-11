import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

function History(props) {
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
        <View style={{marginLeft: 95}}>
          <Text style={{fontSize: 30, fontWeight: '600'}}>History</Text>
        </View>
      </View>
      <View
        style={{
          height: 250,
          marginHorizontal: 15,
          borderRadius: 15,
          marginTop: 30,
          borderStyle: 'solid',
          borderColor: '#E8E8E8',
          borderWidth: 2,
          paddingBottom: 40,
          paddingTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              height: 180,
              width: 20,
              backgroundColor: '#E8E8E8',
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: 130,
                width: 20,
                backgroundColor: '#E59D5C',
                borderRadius: 10,
              }}></View>
          </View>
          <View
            style={{
              height: 180,
              width: 20,
              backgroundColor: '#E8E8E8',
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: 100,
                width: 20,
                backgroundColor: '#E59D5C',
                borderRadius: 10,
              }}></View>
          </View>
          <View
            style={{
              height: 180,
              width: 20,
              backgroundColor: '#E8E8E8',
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: 130,
                width: 20,
                backgroundColor: '#E59D5C',
                borderRadius: 10,
              }}></View>
          </View>
          <View
            style={{
              height: 180,
              width: 20,
              backgroundColor: '#E8E8E8',
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: 100,
                width: 20,
                backgroundColor: '#E59D5C',
                borderRadius: 10,
              }}></View>
          </View>
          <View
            style={{
              height: 180,
              width: 20,
              backgroundColor: '#E8E8E8',
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: 130,
                width: 20,
                backgroundColor: '#E59D5C',
                borderRadius: 10,
              }}></View>
          </View>
          <View
            style={{
              height: 180,
              width: 20,
              backgroundColor: '#E8E8E8',
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: 100,
                width: 20,
                backgroundColor: '#E59D5C',
                borderRadius: 10,
              }}></View>
          </View>
          <View
            style={{
              height: 180,
              width: 20,
              backgroundColor: '#E8E8E8',
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: 130,
                width: 20,
                backgroundColor: '#E59D5C',
                borderRadius: 10,
              }}></View>
          </View>
          <View
            style={{
              height: 180,
              width: 20,
              backgroundColor: '#E8E8E8',
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: 100,
                width: 20,
                backgroundColor: '#E59D5C',
                borderRadius: 10,
              }}></View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 5,
          }}>
          <View>
            <Text
              style={{
                transform: [{rotate: '310deg'}],
                fontSize: 11,
              }}>
              item
            </Text>
          </View>
          <View>
            <Text style={{transform: [{rotate: '310deg'}], fontSize: 11}}>
              item
            </Text>
          </View>
          <View>
            <Text style={{transform: [{rotate: '310deg'}], fontSize: 11}}>
              item
            </Text>
          </View>
          <View>
            <Text style={{transform: [{rotate: '310deg'}], fontSize: 11}}>
              item
            </Text>
          </View>
          <View>
            <Text style={{transform: [{rotate: '310deg'}], fontSize: 11}}>
              item
            </Text>
          </View>
          <View>
            <Text style={{transform: [{rotate: '310deg'}], fontSize: 11}}>
              item
            </Text>
          </View>
          <View>
            <Text style={{transform: [{rotate: '310deg'}], fontSize: 11}}>
              item
            </Text>
          </View>
          <View>
            <Text style={{transform: [{rotate: '310deg'}], fontSize: 11}}>
              item
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: 15, marginTop: 30}}>
        <Text style={{fontSize: 25}}>Transaction</Text>
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
export default History;
