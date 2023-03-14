import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Position extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image source={{uri: 'https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cart-shopping-cart-icon-png-free-illustration-image_2284387.jpg'}} style={styles.card} />
            <Text style={styles.notif}>10</Text>
        </View>
        <Text style={styles.belanja}>Keranjang Belanja Anda</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    card: {
        flex:1,
        borderRadius:100,
    },

    container: {
        alignItems:'center'
    },
    
    wrapper: {
        borderRadius:100,
        borderWidth:3,
        width:200,
        height:200,
        borderColor:'black',
        marginTop:40,
        position:'relative',
    },

    belanja: {
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        color:'black',
        marginTop:20,
    },

    notif: {
        fontSize:25,
        backgroundColor:'green',
        height:50,
        width:50,
        textAlign:'center',
        color:'white',
        lineHeight:50,
        borderRadius:50,
        position:'absolute',
        top:0,
        right:0
    }
})