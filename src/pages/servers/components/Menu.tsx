import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Paths } from '../../../constants/paths';
import { useAuth } from '../../login/components/AuthContextProvider';
import LoginButton from '../../login/components/LoginButton';

const MenuBar = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 56pt;
`;

const SignoutButton = styled(LoginButton)`
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  max-width: 90px;
`;

const Menu: FunctionComponent = () => {
  const auth = useAuth();
  const history = useHistory();
  const onClick = () => {
    auth?.logout(() => history.push(Paths.Login));
  };

  return (
    <MenuBar>
      <SignoutButton onClick={onClick}>Sign out</SignoutButton>
    </MenuBar>
  );
};

export default Menu;
