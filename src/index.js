import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { v4 as uuidv4 } from "uuid";

import styled from "styled-components/native";

import ListaItem from "./components/ListaItem";
import AddItemArea from "./components/AddItemArea";

import lista from "./Lista";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Scroll = styled.FlatList`
  flex: 1;
`;

const Text = styled.Text`
  font-size: 20px;
  color: #000;
  flex: 1;
`;

export default function App() {
  const [items, setItems] = useState(lista);

  function addNewItem(text) {
    let newItems = [...items];
    newItems.push({
      id: uuidv4(),
      nome: text,
      done: false,
    });
    setItems(newItems);
  }

  function toggleDone(index) {
    alert("Index: " + index);

    // let newItems = [...items];
    // newItems[index].done = !newItems[index].done;
    // setItems(newItems);
  }

  return (
    <Container>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <AddItemArea onAdd={addNewItem} />
      <Scroll
        data={items}
        renderItem={({ item, index }) => (
          <ListaItem OnPress={() => toggleDone(index)} data={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
