import React from "react";

import styled from "styled-components/native";

const Text = styled.Text`
  font-size: 20px;
  color: #000;
  flex: 1;
`;

const Item = styled.TouchableOpacity`
  padding: 10px;
  background-color: #eee;
  flex-direction: row;
`;

const ItemCheck = styled.View`
  height: 15px;
  width: 15px;
  border-radius: 10px;
  border: 3px solid #000;
`;

export default function (props) {
  return (
    <Item onPress={props.toggleDone} activeOpacity={0.7}>
      <>
        <Text>
          {props.data.nome} - {props.data.done.toString()}
        </Text>
        <ItemCheck></ItemCheck>
      </>
    </Item>
  );
}
