import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import style from "./inputStyle";
export default function Textinput({ list, setList }) {
  const [value, setValue] = useState("");
  const onChange = (text) => {
    setValue(text);
  };
  const save = () => {
    const array = [...list];
    if (value !== "") {
      array.push({
        id: Date.now(),
        text: value,
        touch: true,
      });
      setList(array);
    } else {
      alert("Lütfen yapılacak bir iş giriniz.");
    }
  };
  return (
    <View style={style.container}>
      <TextInput
        style={style.textinput}
        placeholder="yapılacak.."
        onChangeText={onChange}
      ></TextInput>
      <TouchableOpacity style={style.button} onPress={save}>
        <Text>kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}
