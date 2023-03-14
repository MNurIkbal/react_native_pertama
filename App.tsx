import React from "react";
import { Image, Text, TextInput, View } from "react-native";


const App = () => {
  return (
    <View style={{width:500,height:500,backgroundColor:'red'}}>
      <Text>Programmer</Text>
      <Text>Web developper</Text>
      <Text>android aplication</Text>
      <Satu />
      <Photo />
      <TextInput style={{borderWidth:1,backgroundColor:'white'}} />
    </View>
  );
}

const Satu = () => {
  return <Text>function Satu Huruf pertama harus gede</Text>;
}

const Photo = () => {
  return (
    <View style={{backgroundColor:'white'}}>
      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png'}} style={{width:100,height:100}} />
    </View>
  )
}

export default App;