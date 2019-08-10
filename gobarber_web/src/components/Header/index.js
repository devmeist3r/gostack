import React from 'react'

import { Link } from 'react-router-dom'

import logo from '~/assets/logoRoxo.svg'

import { Container, Content, Profile } from './styles'

// import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Lucas Inocencio</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
