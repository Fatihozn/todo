import React from "react";
import { View, Text } from "react-native";
import style from "./counterStyle";
export default function TextCounter({ counter }) {
  return (
    <View style={style.container}>
      <Text style={style.text}> YAPILACAKLAR </Text>
      <Text style={style.count}> {counter} </Text>
    </View>
  );
}
