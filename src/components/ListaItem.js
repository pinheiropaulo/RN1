import React from "react";

import Swipeable from "react-native-gesture-handler/Swipeable";

import ListaItemSwipe from "./ListaItemSwipe";

import styled from "styled-components/native";

const Text = styled.Text`
  font-size: 20px;
  color: #000;
  flex: 1;
`;

const Item = styled.TouchableHighlight`
  background-color: #eee;
  flex-direction: row;
  height: 50px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const ItemCheck = styled.View`
  height: 15px;
  width: 15px;
  border-radius: 10px;
  border: 2px solid #000;
  background-color: ${(props) => (props.done ? "#000" : "transparent")};
`;

export default function (props) {
  return (
    <Swipeable
      renderLeftActions={ListaItemSwipe}
      onSwipeableOpen={() => console.log(props.onPres)}
      overshootLeft="false"
    >
      <Item onPress={props.onPress} activeOpacity={1} underlayColor="#DDD">
        <>
          <Text>{props.data.nome}</Text>
          <ItemCheck done={props.data.done}></ItemCheck>
        </>
      </Item>
    </Swipeable>
  );
}
