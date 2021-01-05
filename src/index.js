import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Modal } from "react-native";

import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #eee;
`;

const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  padding: 20px;
`;

const Box = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const Botao = styled.Button``;

const BoxBody = styled.View`
  width: 90%;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />

      <Botao title="Abrir Modal" onPress={() => setModalVisible(true)} />

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <Box>
          <BoxBody>
            <Botao
              title="Fechar Modal"
              onPress={() => setModalVisible(false)}
            />
          </BoxBody>
        </Box>
      </Modal>
    </Container>
  );
}
