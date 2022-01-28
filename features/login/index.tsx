import { Heading, Pane } from 'evergreen-ui';
import React from 'react';
import { Container, StyledPane } from './styledComponents';
import { ILogin } from './types';

const Login: React.FC<ILogin> = ({ title }) => {
  return (
    <Container>
      <StyledPane>
        <Heading textAlign={'center'} marginTop={'24px'}>
          {title}
        </Heading>
      </StyledPane>
    </Container>
  );
};

export default Login;
