import React from "react";
import * as Styled from "./styles";
import { auth } from "../../config/firebase";
import {FaSignOutAlt} from "react-icons/fa";

const Header = () => {
  const handleLogOut = async () => {
    await auth.signOut();
  };  

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          {/* Controle Financeiro */}
          Olá, bem vindo(a) {auth.currentUser?.displayName}
          <FaSignOutAlt onClick={handleLogOut} style={{paddingRight: '120px', cursor: 'pointer'}} />
        </Styled.Title>
      </Styled.Header>
    </Styled.Container>
  );
};

export default Header;
