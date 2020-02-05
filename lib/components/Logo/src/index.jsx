import React from 'react';
import styled from 'styled-components';

import { Pane } from '../../Pane';
import { Logo as SVG } from '../../Icon';

const logoProps = ({ size, color }) => ({
  border: color,
  spacing: { p: 0.5 },
  children: <SVG size={size - 2} color={color} />,
});

export const Logo = styled(Pane).attrs(logoProps)`
  display: inline-flex;
`;

Logo.propTypes = {
  ...Pane.propTypes,
  ...SVG.propTypes,
};

Logo.defaultProps = {
  size: 8,
  color: 'black',
  border: 'black',
};
