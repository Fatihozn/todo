import React from "react";
import { View, Text } from "react-native";
import style from "./cardStyle";
export default function Card({ listitem, list, setList }) {
  const press = (id) => {
    const newList = list.map((item) =>
      item.id === id
        ? {
            ...item,
            touch: !item.touch,
          }
        : item
    );
    setList(newList);
  };
  const Delete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <>
      {listitem.text && (
        <View style={listitem.touch ? style.card : style.textNone}>
          <Text
            onPress={() => press(listitem.id)}
            onLongPress={() => Delete(listitem.id)}
            style={!listitem.touch && { textDecorationLine: "line-through" }}
          >
            {listitem.text}
          </Text>
        </View>
      )}
    </>
  );
}
