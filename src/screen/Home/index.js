import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

function Home(props) {
  const HandleDetail = () => {
    props.navigation.navigate('DetailMenu');
  };
  const HandleInformation = () => {
    props.navigation.navigate('InformationMenu');
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          marginTop: 65,
          flexDirection: 'row',
          marginHorizontal: 15,
          height: 30,
        }}>
        <TouchableOpacity onPress={HandleInformation}>
          <View style={{marginTop: 10}}>
            <Text style={{color: 'orange'}}>Info</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>HOME</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'grey',
          opacity: 0.15,
          height: 50,
          marginVertical: 35,
          alignItems: 'flex-start',
          paddingStart: 15,
          justifyContent: 'center',
          borderRadius: 50,
          marginHorizontal: 15,
        }}>
        <Text style={{color: 'black'}}>Search</Text>
      </View>
      <View style={{flex: 1, height: 250, marginHorizontal: 15, marginTop: 10}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Hot Deals</Text>
        <ScrollView
          alwaysBounceHorizontal
          horizontal={true}
          style={{flexDirection: 'row', marginVertical: 10}}>
          <TouchableOpacity onPress={HandleDetail}>
            <View
              style={{
                height: 177,
                width: 110,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  flex: 3,
                  backgroundColor: 'grey',
                  opacity: 0.15,
                  marginHorizontal: 5,
                  marginBottom: 5,
                  borderRadius: 7,
                }}></View>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 5,
                  marginVertical: 5,
                }}>
                <Text>Item #1 Name Goes Here</Text>
                <Text style={{fontWeight: 'bold', marginTop: 6}}>$19.99</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 177,
              width: 110,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 3,
                backgroundColor: 'grey',
                opacity: 0.15,
                marginHorizontal: 5,
                marginBottom: 5,
                borderRadius: 7,
              }}></View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <Text>Item #1 Name Goes Here</Text>
              <Text style={{fontWeight: 'bold', marginTop: 6}}>$19.99</Text>
            </View>
          </View>
          <View
            style={{
              height: 177,
              width: 110,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 3,
                backgroundColor: 'grey',
                opacity: 0.15,
                marginHorizontal: 5,
                marginBottom: 5,
                borderRadius: 7,
              }}></View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <Text>Item #1 Name Goes Here</Text>
              <Text style={{fontWeight: 'bold', marginTop: 6}}>$19.99</Text>
            </View>
          </View>
          <View
            style={{
              height: 177,
              width: 110,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 3,
                backgroundColor: 'grey',
                opacity: 0.15,
                marginHorizontal: 5,
                marginBottom: 5,
                borderRadius: 7,
              }}></View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <Text>Item #1 Name Goes Here</Text>
              <Text style={{fontWeight: 'bold', marginTop: 6}}>$19.99</Text>
            </View>
          </View>
          <View
            style={{
              height: 177,
              width: 110,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 3,
                backgroundColor: 'grey',
                opacity: 0.15,
                marginHorizontal: 5,
                marginBottom: 5,
                borderRadius: 7,
              }}></View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <Text>Item #1 Name Goes Here</Text>
              <Text style={{fontWeight: 'bold', marginTop: 6}}>$19.99</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          height: 250,
          marginHorizontal: 15,
          marginTop: 20,
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Trending</Text>
        <ScrollView
          alwaysBounceHorizontal
          horizontal={true}
          style={{flexDirection: 'row', marginVertical: 10}}>
          <View
            style={{
              height: 177,
              width: 110,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 3,
                backgroundColor: 'grey',
                opacity: 0.15,
                marginHorizontal: 5,
                marginBottom: 5,
                borderRadius: 7,
              }}></View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <Text>Item #1 Name Goes Here</Text>
              <Text style={{fontWeight: 'bold', marginTop: 6}}>$19.99</Text>
            </View>
          </View>
          <View
            style={{
              height: 177,
              width: 110,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 3,
                backgroundColor: 'grey',
                opacity: 0.15,
                marginHorizontal: 5,
                marginBottom: 5,
                borderRadius: 7,
              }}></View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <Text>Item #1 Name Goes Here</Text>
              <Text style={{fontWeight: 'bold', marginTop: 6}}>$19.99</Text>
            </View>
          </View>
          <View
            style={{
              height: 177,
              width: 110,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 3,
                backgroundColor: 'grey',
                opacity: 0.15,
                marginHorizontal: 5,
                marginBottom: 5,
                borderRadius: 7,
              }}></View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <Text>Item #1 Name Goes Here</Text>
              <Text style={{fontWeight: 'bold', marginTop: 6}}>$19.99</Text>
            </View>
          </View>
          <View
            style={{
              height: 177,
              width: 110,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 3,
                backgroundColor: 'grey',
                opacity: 0.15,
                marginHorizontal: 5,
                marginBottom: 5,
                borderRadius: 7,
              }}></View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <Text>Item #1 Name Goes Here</Text>
              <Text style={{fontWeight: 'bold', marginTop: 6}}>$19.99</Text>
            </View>
          </View>
          <View
            style={{
              height: 177,
              width: 110,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 3,
                backgroundColor: 'grey',
                opacity: 0.15,
                marginHorizontal: 5,
                marginBottom: 5,
                borderRadius: 7,
              }}></View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <Text>Item #1 Name Goes Here</Text>
              <Text style={{fontWeight: 'bold', marginTop: 6}}>$19.99</Text>
            </View>
          </View>
        </ScrollView>
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
export default Home;
