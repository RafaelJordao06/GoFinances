import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

interface CustomProps {
  name?: string;
}

type Props = TextInputProps & CustomProps;

export function InputNome({ name, ...rest }: Props) {
  return <Container {...rest} />;
}
