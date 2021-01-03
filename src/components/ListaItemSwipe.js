import React from "react";

import styled from "styled-components/native";

const ListaItemSwipe = styled.TouchableHighlight`
  height: 50px;
  justify-content: center;
  background-color: red;
`;

const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  padding: 20px;
`;

export default function () {
  return (
    <ListaItemSwipe underlayColor="red">
      <Text>Deletar</Text>
    </ListaItemSwipe>
  );
}
