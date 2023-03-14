import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import logo from "./acer.jpg";
import SampleComponen from "./SampleComponen";


const App = () => {
  return (
    <ScrollView>
      <SampleStyeling />
      <SampleStyeling />
      {/* <SampleComponen /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    color: 'blue',
    // marginLeft: 100,
    // marginTop: 100,
    textAlign:'center'
  },
  logo: {
    width: 300,
    height:200,
    borderRadius:10
  },

  kotak_img: {
    width:320,
    // height:220,
    margin:50,
    backgroundColor:'#f2f2f2',
    padding:10,
    borderRadius:10
  },

  font_title: {
    marginTop:16,
    fontWeight:'bold',
    fontSize:16,
    color:'black'
  },

  price: {
    marginTop:10,
    color:'black'
  },

  beli: {
    backgroundColor:'green',
    textAlign:'center',
    padding:10,
    borderRadius:10,
    marginTop:20
  },

  textbeli: {
    color:'white',
    textAlign:'center',
    fontWeight:'bold'
  }
})

const SampleStyeling = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View style={{
        width: 200,
        height: 200,
        backgroundColor: 'green',
        borderWidth: 5,
        borderColor: 'red',
        marginLeft: 50,
        marginTop: 50
      }}>

      </View>
      <View style={styles.kotak_img}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.font_title}>Laptop Acer Aspire 5</Text>
        <Text style={styles.price}>Rp 8.500.000.00</Text>
        <Text style={styles.price}>Jakarta Mampang</Text>
        <View style={styles.beli}>
          <Text style={styles.textbeli}>Beli Sekarang</Text>
        </View>
      </View>
    </View>
  )
}



export default App;