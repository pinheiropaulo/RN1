import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { v4 as uuidv4 } from "uuid";
import { SwipeListView } from "react-native-swipe-list-view";
import styled from "styled-components/native";

import ListaItem from "./components/ListaItem";
import AddItemArea from "./components/AddItemArea";

import lista from "./Lista";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  padding: 20px;
`;

const ListaSwipe = styled.TouchableHighlight`
  width: 100%;
  height: 50px;
  justify-content: center;
  background-color: red;
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
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  }

  const ListaItemSwipe = (props) => {
    return (
      <ListaSwipe onPress={props.onDelete} underlayColor="#ff3333">
        <Text>Deletar</Text>
      </ListaSwipe>
    );
  };

  function deleteItem(index) {
    let newItems = [...items];
    newItems = newItems.filter((it, i) => i != index);
    setItems(newItems);
  }

  return (
    <Container>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView
        data={items}
        leftOpenValue={90}
        disableLeftSwipe={true}
        renderHiddenItem={({ index, item }) => (
          <ListaItemSwipe onDelete={() => deleteItem(index)} />
        )}
        renderItem={({ item, index }) => (
          <ListaItem onPress={() => toggleDone(index)} data={item} />
        )}
        //
        keyExtractor={(item) => item.id}
      ></SwipeListView>
    </Container>
  );
}
