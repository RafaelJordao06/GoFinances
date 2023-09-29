import React from "react";
import { Container, Category, Icon } from "./styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <GestureHandlerRootView>
      <Container>
        <Category onPress={onPress}>{title}</Category>

        <Icon name="chevron-down" />
      </Container>
    </GestureHandlerRootView>
  );
}
