import React, { Component } from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"


const styles = StyleSheet.create({
  program: {
    fontSize:30,
    padding:30,
    textAlign:'center',
    color:'black',
    fontFamily:'arial',
    textTransform:'uppercase'
  }
})


const SampleComponen = () => {
  return (
    <View>
      <Satu/>
      <Text style={styles.program}>Copyright @ 2023 Programmer</Text>
    </View>
  )

}

const Satu = () => {
  return (
    <View>
      <Text style={{textAlign:'justify',padding:10}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, aliquam. Eaque, in eum nostrum ad explicabo ratione voluptatem perspiciatis vero minus veniam obcaecati, minima deleniti quos cum reprehenderit alias eius.
      </Text>
      <Text style={{textAlign:'center',color:'red',fontSize:20}}>Footer</Text>
    </View>
  )
}

export default SampleComponen;