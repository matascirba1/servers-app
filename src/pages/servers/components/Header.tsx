import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: grey;
  font-weight: bold;
  font-size: medium;
  &:active {
    border: none;
  }
  &:hover {
    color: lightgrey;
  }
  padding: 3px;
  outline: none;
`;

const Header: FunctionComponent<HtmlHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Header;
