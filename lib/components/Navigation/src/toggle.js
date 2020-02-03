import styled from 'styled-components';
import { hideVisually } from 'polished';

const toggleAttrs = { defaultChecked: false, type: 'checkbox', autoComplete: 'off' };

const Toggle = styled.input.attrs(toggleAttrs)`
  ${hideVisually}
`;

export default Toggle;
