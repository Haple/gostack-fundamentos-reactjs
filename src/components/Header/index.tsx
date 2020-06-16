import React from 'react';

import { Container, StyledLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <StyledLink exact to="/">
          Listagem
        </StyledLink>
        <StyledLink to="/import">Importar</StyledLink>
      </nav>
    </header>
  </Container>
);

export default Header;
