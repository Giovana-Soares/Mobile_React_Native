import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import winxImg from './assets/img/winx.png';
 
const Winx = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "green",
          }}
        >
          Snorlax Berrie 
        </Text>
        <Image
          source={{
            uri: winxImg,
          }}
          style={{ width: 200, height: 210, alignSelf: "center" }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1, 
          padding: 5,
          margin: 15,
        }}
        defaultValue="Digite aquiii!"
      />
    </ScrollView>
  );
}

export default Winx;
