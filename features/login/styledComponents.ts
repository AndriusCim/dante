import styled from '@emotion/styled';
import { Pane } from 'evergreen-ui';

export const Container = styled.div({
  background: 'linear-gradient(to right, #5433ff, #20bdff, #a5fecb)',
  position: 'fixed',
  height: '100%',
  width: '100%',
  left: 0,
  top: 0,
});

export const StyledPane = styled(Pane)({
  background: '#fff',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  borderRadius: '12px',
  height: '600px',
  width: '400px',
  left: '50%',
  top: '50%',
});
