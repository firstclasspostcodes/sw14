import styled from 'styled-components';

import { Icon } from '../../Icon';

import fontMixin from '../../../mixins/font';
import colorMixin from '../../../mixins/color';
import visibleMixin from '../../../mixins/visible';

const nonForwardedProps = [
  ...Object.keys(fontMixin.propTypes),
  ...Object.keys(colorMixin.propTypes),
  ...Object.keys(visibleMixin.propTypes),
];

const shouldForwardProp = (prop, defaultValidator) => {
  return !nonForwardedProps.includes(prop) && defaultValidator(prop);
};

export const Text = styled.span.withConfig({ shouldForwardProp })`
  ${fontMixin}
  ${colorMixin}
  ${visibleMixin}

  margin: 0;
  padding: 0;

  &[href],
  a {
    cursor: pointer;
    outline: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.palette.color('brand')};

    &,
    &:link,
    &:hover,
    &:active,
    &:visited {
      color: ${({ theme }) => theme.palette.color('brand')};
    }

    &:hover {
      text-decoration: underline;
    }
  }

  a {
    &:focus {
      color: ${({ theme }) => theme.palette.color('white')};
      text-decoration-color: ${({ theme }) => theme.palette.color('white')};
      background-color: ${({ theme }) => theme.palette.color('black')};
    }
  }

  &[href] {
    &,
    &:link,
    &:hover,
    &:active,
    &:visited {
      ${colorMixin}
    }
  }
  
  ${Icon},
  & + ${Icon} {
    position: relative;
    top: ${({ theme, size = 1 }) => theme.spacing(Math.max(1, size) / 3)};

    svg {
      width: ${({ theme, size = 1 }) => theme.spacing(Math.max(2, size))};
      height: ${({ theme, size = 1 }) => theme.spacing(Math.max(2, size))};
    }
  }
`;

Text.displayName = 'Typography.Text';

Text.propTypes = {
  ...fontMixin.propTypes,
  ...colorMixin.propTypes,
  ...visibleMixin.propTypes,
};

export const H1 = styled(Text).attrs({
  as: 'h1',
  size: 30,
  weight: 'black',
})``;

H1.displayName = 'Typography.H1';

H1.propTypes = { ...Text.propTypes };

export const Heading = styled(H1).attrs({
  size: {
    xs: 40,
    md: 50,
    lg: 64,
  },
})``;

Heading.displayName = 'Typography.Heading';

Heading.propTypes = { ...Text.propTypes };

export const H2 = styled(Text).attrs({
  as: 'h2',
  size: 25,
  weight: 'bold',
})`
  ${H1} + & {
    margin-top: ${({ theme }) => theme.spacing(1.5)};
  }

  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`;

export const Subheading = styled(H2).attrs({
  size: {
    xs: 32,
    md: 42,
    lg: 56,
  },
})``;

Subheading.displayName = 'Typography.Subheading';

Subheading.propTypes = { ...Text.propTypes };

H2.displayName = 'Typography.H2';

H2.propTypes = { ...Text.propTypes };

export const H3 = styled(Text).attrs({
  as: 'h3',
  size: 22,
  weight: 'semiBold',
})`
  ${H2} + & {
    margin-top: ${({ theme }) => theme.spacing(1.5)};
  }
`;

H3.displayName = 'Typography.H3';

H3.propTypes = { ...Text.propTypes };

export const H4 = styled(Text).attrs({
  as: 'h4',
  size: 20,
  weight: 'semiBold',
})`
  ${H3} + & {
    margin-top: ${({ theme }) => theme.spacing(1)};
  }
`;

H4.displayName = 'Typography.H4';

H4.propTypes = { ...Text.propTypes };

export const H5 = styled(Text).attrs({
  as: 'h5',
  size: 18,
  weight: 'medium',
})``;

H5.displayName = 'Typography.H5';

H5.propTypes = { ...Text.propTypes };

export const H6 = styled(Text).attrs({
  as: 'h6',
  size: 14,
  weight: 'black',
})``;

H6.displayName = 'Typography.H6';

H6.propTypes = { ...Text.propTypes };

export const Caption = styled(Text).attrs({
  as: 'p',
})`
  ${H1} + & {
    color: ${({ theme }) => theme.palette.gray[9]};
    letter-spacing: ${({ theme }) => `${theme.font.letterSpacing(24)};`}
    line-height: ${({ theme }) => `${theme.font.lineHeight(24)};`}
    font-size: ${({ theme }) => `${theme.font.fontSize(24)};`}
  }

  ${H2} + & {
    color: ${({ theme }) => theme.palette.gray[8]};
    letter-spacing: ${({ theme }) => `${theme.font.letterSpacing(22)};`}
    line-height: ${({ theme }) => `${theme.font.lineHeight(22)};`}
    font-size: ${({ theme }) => `${theme.font.fontSize(22)};`}
  }

  ${H3} + & {
    color: ${({ theme }) => theme.palette.gray[7]};
    letter-spacing: ${({ theme }) => `${theme.font.letterSpacing(20)};`}
    line-height: ${({ theme }) => `${theme.font.lineHeight(20)};`}
    font-size: ${({ theme }) => `${theme.font.fontSize(20)};`}
  }

  ${H4} + &, ${H5} + & {
    color: ${({ theme }) => theme.palette.gray[6]};
  }
`;

Caption.displayName = 'Typography.Caption';

Caption.propTypes = { ...Text.propTypes };

export const Highlight = styled(Text)`
  background: linear-gradient(
    180deg,
    transparent 50%,
    ${({ highlight, theme }) => theme.palette.color(highlight)} 50%
  );
  padding: 0 4px;
  margin: 0 -4px;
`;

Highlight.displayName = 'Typography.Highlight';

Highlight.propTypes = {
  ...Text.propTypes,
  highlight: colorMixin.propTypes.color,
};

export const P = styled(Text).attrs(props => ({
  as: props.as || 'p',
}))`
  margin-bottom: ${({ theme }) => theme.spacing(2.5)};

  &:last-child {
    margin-bottom: 0;
  }

  & + & {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  ${H1} + &, ${H1} + ${Caption} + & {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }

  ${H2} + &, ${H2} + ${Caption} + & {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }

  ${H3} + &, ${H3} + ${Caption} + & {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  ${H4} + &, ${H4} + ${Caption} + &,
  ${H5} + &, ${H5} + ${Caption} + & {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  & + ${H6} {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

P.displayName = 'Typography.P';

P.propTypes = { ...Text.propTypes };
