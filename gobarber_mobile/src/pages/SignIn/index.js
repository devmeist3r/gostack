import React, { useRef, useState } from 'react'

import PropTypes from 'prop-types'

import { Image } from 'react-native'

import { useDispatch } from 'react-redux'

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

import { signInRequest } from '~/store/modules/auth/actions'

export default function SignIn({ navigation }) {
  const passwordRef = useRef()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubimit() {
    dispatch(signInRequest(email, password))
  }

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
              value={email}
              onChangeText={setEmail}
            />
            <FormInput
              icon="lock-outline"
              autoCorrect={false}
              secureTextEntry
              placeholder="Sua senha secreta"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={() => handleSubimit()}
              value={password}
              onChangeText={setPassword}
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
