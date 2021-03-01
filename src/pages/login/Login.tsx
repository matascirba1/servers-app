import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Errors } from '../../constants/errors';
import { Paths } from '../../constants/paths';
import { useAuth } from './components/AuthContextProvider';
import ErrorLabel from './components/ErrorLabel';
import Input from './components/Input';
import LoginButton from './components/LoginButton';
import { Credentials } from './services/authService';

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  align-items: center;
  padding: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const FieldSet = styled.fieldset`
  border: none;
  ${Input}:disabled {
    background-color: lightgrey;
  }
  ${LoginButton}:disabled {
    background-color: lightgrey;
  }
`;

const Login: FunctionComponent = () => {
  const history = useHistory();
  const auth = useAuth();

  const [loginFailed, setLoginFailed] = useState('');

  const [formState, setFormState] = useState(false);
  const [formValues, setFormValues] = useState<Credentials>({
    username: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormState(true);
    setLoginFailed('');
    auth
      ?.login(formValues, () => history.push(Paths.Servers))
      .catch((status) => {
        setFormState(false);
        setLoginFailed(status);
      });
  };

  return (
    <Centered>
      <Card>
        <form onSubmit={onSubmit}>
          <FieldSet disabled={formState}>
            <Input
              onChange={onChange}
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            />
            <Input
              onChange={onChange}
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
            <LoginButton type="submit">Login</LoginButton>
            {loginFailed && (
              <ErrorLabel>
                {Errors[loginFailed as keyof typeof Errors]}
              </ErrorLabel>
            )}
          </FieldSet>
        </form>
      </Card>
    </Centered>
  );
};

export default Login;
