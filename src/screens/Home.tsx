import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

import Screen from '../components/Screen';

const Container = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Home = () => {
  useEffect(() => {
    //
  }, []);

  return (
    <Screen navbarTitle="HOME" disablePadding hideCustomNavbar>
      <Container>
        <Text> Welcome Home :) </Text>
      </Container>
    </Screen>
  );
};

export default Home;
