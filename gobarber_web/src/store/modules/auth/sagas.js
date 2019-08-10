import { all, takeLatest, call, put } from 'redux-saga/effects'
import api from '~/services/api'
import history from '~/services/history'

import { signInSuccess } from './actions'

export function* singIn({ payload }) {
  const { email, password } = payload

  try {
    const response = yield call(api.post, '/sessions', {
      email,
      password,
    })

    const { token, user } = response.data

    if (!user.provider) {
      console.tron.error('Usuário não é prestador')
      return
    }

    yield put(signInSuccess(token, user))

    history.push('/dashboard')
  } catch (err) {
    console.tron.log(err)
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)])
