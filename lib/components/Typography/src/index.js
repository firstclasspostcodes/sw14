import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Text = styled.span`
  --font-variation-settings: ${({ theme, weight, slant }) =>
    theme.font.featureVariations({ weight, slant })};
  margin: 0;
  padding: 0;
  ${({ theme, color }) => color && `color: ${theme.palette.color(color)};`}
  ${({ theme, size }) => size && `letter-spacing: ${theme.font.letterSpacing(size)};`}
  ${({ theme, size }) => size && `line-height: ${theme.font.lineHeight(size)};`}
  ${({ theme, size }) => size && `font-size: ${theme.font.fontSize(size)};`}
  ${({ theme, weight }) => weight && `font-weight: ${theme.font.weights[weight]};`}
  ${({ theme, features }) =>
    features &&
    features.length > 0 &&
    `font-feature-settings: ${theme.font.featureSettings(features)};`}
  font-variation-settings: var(--font-variation-settings, inherit);

  &[href], a {
    text-decoration: none;
    cursor: pointer;
    outline: 0;

    &,
    &:link,
    &:hover,
    &:active,
    &:visited {
      color: ${({ theme }) => theme.palette.color('brand')};
    }

    &:focus {
      color: ${({ theme }) => theme.palette.color('white')};
      background-color: ${({ theme }) => theme.palette.color('brand')};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

Text.displayName = 'Typography.Text';

Text.propTypes = {
  color: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
  ]),
  weight: PropTypes.string,
  features: PropTypes.arrayOf([PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  slant: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const H1 = styled(Text).attrs({
  as: 'h1',
  size: 30,
  weight: 'black',
})``;

H1.displayName = 'Typography.H1';

H1.propTypes = { ...Text.propTypes };

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

export const P = styled(Text).attrs(props => ({
  as: props.as || 'p',
}))`
  margin-bottom: ${({ theme }) => theme.spacing(2.5)};

  &:last-of-type {
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
