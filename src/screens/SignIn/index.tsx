import React, { useState } from "react";
import ContinueSvg from "../../assets/continue.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import LogoSvg from "../../assets/logo.svg";
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { Alert } from "react-native";
import { InputNome } from "../../components/Forms/InputNome";
import * as yup from "yup";

const nameSchema = yup.object().shape({
  name: yup
    .string()
    .trim("O nome não pode ser apenas espaços em branco!")
    .required("O nome é obrigatório!")
    .notOneOf([""], "O nome não pode ser apenas espaços em branco!"),
});

export function SignIn() {
  const dataKey = "@gofinances:user";
  const [nome, setNome] = useState("");

  async function handleName() {
    try {
      // Validação
      await nameSchema.validate({ name: nome });

      const newUser = {
        id: String(uuid.v4()),
        name: nome,
        date: new Date(),
      };
      // Armazenando o nome e o UUID
      await AsyncStorage.setItem(dataKey, JSON.stringify(newUser));
      const data = await AsyncStorage.getItem(dataKey);
      //console.log(data);

      setNome("");

      // async function removeAll() {
      //   await AsyncStorage.removeItem(dataKey);
      // }
      // removeAll();
      // const data2 = await AsyncStorage.getItem(dataKey);
      // console.log("deletado");

      // Aqui você vai redirecionar para outra tela (conforme explicado anteriormente)
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert(error.message);
      } else {
        // Outros erros
        console.log(error);
        Alert.alert("Não foi possível conectar");
      }
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {"\n"}finanças de forma {"\n"}muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>Coloque seu nome {"\n"}para continuar</SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <InputNome
            name="name"
            placeholder="Nome"
            onChangeText={(text) => setNome(text)}
          />
          {/* <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handlesignInWithGoogle}
          /> */}
          <SignInSocialButton
            title="Continuar"
            svg={ContinueSvg}
            onPress={handleName}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
