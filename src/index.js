import React, { useState } from "react";

import { StatusBar } from "react-native";

import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  padding: 20px;
`;

const Botao = styled.Button``;

export default function App() {
  const [statusHide, setStatusHide] = useState(false);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
        hidden={statusHide}
        animated={true}
      />
      <Botao title="StatusBar" onPress={() => setStatusHide(!statusHide)} />
    </Container>
  );
}
