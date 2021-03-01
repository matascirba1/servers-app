import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Item = styled.div`
  height: 36pt;
  justify-content: space-between;
  display: flex;
  padding-left: 6px;
  padding-right: 6px;
`;

const VerticalCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type Props = {
  name: string;
  distance: number;
};

const ListItem: FunctionComponent<Props> = ({ name, distance }) => {
  return (
    <Item>
      <VerticalCenter>
        <span>{name}</span>
      </VerticalCenter>
      <VerticalCenter>
        <span>{distance}</span>
      </VerticalCenter>
    </Item>
  );
};

export default ListItem;
