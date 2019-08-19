import React, { useRef } from 'react'

import PropTypes from 'prop-types'

import { Image } from 'react-native'

import DismissKeyboard from '~/components/DismissKeyboard'
import Background from '~/components/Background'

import logo from '~/assets/logo.png'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles'

export default function SignIn({ navigation }) {
  const passwordRef = useRef()

  function handleSubimit() {}

  return (
    <DismissKeyboard>
      <Background>
        <Container>
          <Image source={logo} />
          <Form>
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <FormInput
              icon="lock-outline"
              autoCorrect={false}
              secureTextEntry
              placeholder="Sua senha secreta"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={() => handleSubimit()}
            />
            <SubmitButton onPress={handleSubimit}>Acessar</SubmitButton>
          </Form>
          <SignLink
            onPress={() => {
              navigation.navigate('SignUp')
            }}
          >
            <SignLinkText>Criar uma conta</SignLinkText>
          </SignLink>
        </Container>
      </Background>
    </DismissKeyboard>
  )
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}
