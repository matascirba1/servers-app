import React, { FunctionComponent, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Errors } from '../../../constants/errors';
import ErrorLabel from '../../login/components/ErrorLabel';
import getServers from '../services/getServers';
import { Server } from '../services/getServers';
import {
  sortBy,
  ascendingNumeric,
  descendingNumeric,
  ascendingLexical,
  descendingLexical,
} from '../utils/sorting';
import Header from './Header';
import ListItem, { Item } from './ServerItem';

const SpacedApart = styled.div`
  justify-content: space-between;
  display: flex;
`;

const ListContainer = styled.div`
  ${Item}:nth-child(odd) {
    background-color: #eeedf0;
  }
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #4caf50;
  width: 36px;
  height: 36px;
  animation: ${spin} 2s linear infinite;
`;

const ServersList: FunctionComponent = () => {
  const [distanceSort, setDistanceSort] = useState(true);
  const [nameSort, setNameSort] = useState(true);

  const [loading, setLoadingProgress] = useState(false);
  const [loadFailed, setLoadingState] = useState(false);
  const [servers, setServersList] = useState<Server[]>([]);

  useEffect(() => {
    setLoadingProgress(true);
    getServers()
      .then((data) => {
        if (data) {
          setServersList(data);
        } else {
          setLoadingState(true);
        }

        setLoadingProgress(false);
      })
      .catch((_) => setLoadingState(true));
  }, []);

  const sortByDistance = () => {
    const sortedList = sortBy(
      distanceSort ? ascendingNumeric : descendingNumeric
    )(servers);

    setServersList(sortedList);
    setDistanceSort(!distanceSort);
  };

  const sortByName = () => {
    const sortedList = sortBy(nameSort ? ascendingLexical : descendingLexical)(
      servers
    );

    setServersList(sortedList);
    setNameSort(!nameSort);
  };

  if (loading) {
    return (
      <Centered>
        <Loader />
      </Centered>
    );
  }

  if (loadFailed || !servers) {
    return (
      <Centered>
        <ErrorLabel>{Errors['5XX']}</ErrorLabel>
      </Centered>
    );
  }

  return (
    <ListContainer>
      <SpacedApart>
        <Header onClick={sortByName}>Name</Header>
        <Header onClick={sortByDistance}>Distance</Header>
      </SpacedApart>
      <div>
        {servers.filter(el => el).map(({ name, distance }, index) => (
          <ListItem name={name} distance={distance} key={`${name}.${index}`} />
        ))}
      </div>
    </ListContainer>
  );
};

export default ServersList;
