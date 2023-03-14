import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";

class Flexbox extends Component {
    render() {
        return (
            <ScrollView>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                    Tampilan Flexbox
                </Text>
                <View style={{
                    flexDirection:'row',
                    backgroundColor:'grey',
                    padding:20,
                    alignItems:'center',
                    justifyContent:'space-between',
                    marginTop:50
                    }}>
                <View style={{
                    height:200,
                    backgroundColor:'red',
                    width:100,
                    height:100
                    }}>

                    </View>
                <View style={{
                    height:200,
                    backgroundColor:'yellow',
                    width:100,
                    height:100
                    }}>

                    </View>
                <View style={{
                    height:200,
                    backgroundColor:'green',
                    width:100,
                    height:100
                    }}>

                    </View>
                <View style={{
                    height:200,
                    backgroundColor:'black',
                    width:100,
                    height:100
                    }}>

                    </View>
                </View>
            </View>
            <View style={{
                flexDirection:'row',
                marginTop:20,
                backgroundColor:'blue',
                padding:10,
                alignItems:'center',
                justifyContent:"space-between"
            }}>
                <Text style={{
                    color:'white',
                    fontWeight:'bold'
                }}>Beranda</Text>
                <Text style={{
                    color:'white',
                    fontWeight:'bold'
                }}>Video</Text>
                <Text style={{
                    color:'white',
                    fontWeight:'bold'
                }}>Playlist</Text>
                <Text style={{
                    color:'white',
                    fontWeight:'bold'
                }}>Komunitas</Text>
                <Text style={{
                    color:'white',
                    fontWeight:'bold'
                }}>Chanel</Text>
                <Text style={{
                    color:'white',
                    fontWeight:'bold'
                }}>Tentang</Text>
            </View>
            </ScrollView>
        )
    }
}

export default Flexbox;