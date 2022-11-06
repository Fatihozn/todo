import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import TextCounter from "./components/textCounter";
import Textinput from "./components/textinput";
import Card from "./components/card";

export default function App() {
  const [list, setList] = useState([{}]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const filtered = list.filter((item) => item.touch === true);
    setCounter(filtered.length);
  }, [list]);

  const renderFunction = ({ item }) => (
    <Card listitem={item} list={list} setList={setList} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <TextCounter counter={counter} />
      <FlatList data={list} renderItem={renderFunction} />
      <Textinput list={list} setList={setList} />
      <StatusBar></StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5E3D46",
  },
});
