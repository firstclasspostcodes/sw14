import styled from 'styled-components';

import { Typography } from '../../Typography';

import spacingMixin from '../../../mixins/spacing';

const nonForwardedProps = [...Object.keys(spacingMixin.propTypes)];

const shouldForwardProp = (prop, defaultValidator) => {
  return !nonForwardedProps.includes(prop) && defaultValidator(prop);
};

const SPACING = {
  py: {
    xs: 1.5,
    // md: 1.5,
  },
  px: {
    xs: 2,
    // md: 2,
  },
};

const labelAttrs = ({ as, spacing = SPACING }) => ({ as: as || 'label', spacing });

const Label = styled(Typography.Text)
  .attrs(labelAttrs)
  .withConfig({ shouldForwardProp })`
  ${spacingMixin};
  user-select: none;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  display: block;
  white-space: nowrap;
`;

export default Label;
