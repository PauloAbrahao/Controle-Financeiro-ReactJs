import React from "react";
import * as Styled from "./styles";
import { auth } from "../../config/firebase";

const Header = () => {
  const handleLogOut = async () => {
    await auth.signOut();
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          Controle Financeiro
          <Styled.Button onClick={handleLogOut}>Sair</Styled.Button>
        </Styled.Title>
      </Styled.Header>
    </Styled.Container>
  );
};

export default Header;
