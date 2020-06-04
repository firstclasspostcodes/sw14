import PropTypes from 'prop-types';
import styled from 'styled-components';
import { px } from 'styled-components-spacing';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

import colorMixin from '../../../mixins/color';
import fontMixin from '../../../mixins/font';
import backgroundMixin from '../../../mixins/background';

const nonForwardedProps = [
  ...Object.keys(colorMixin.propTypes),
  ...Object.keys(fontMixin.propTypes),
  ...Object.keys(backgroundMixin.propTypes),
];

const shouldForwardProp = (prop, defaultValidator) => {
  return !nonForwardedProps.includes(prop) && defaultValidator(prop);
};

SyntaxHighlighter.registerLanguage('javascript', js);

const codeAttrs = ({ theme, register }) => {
  if (register) {
    Object.entries(register).forEach(entry => SyntaxHighlighter.registerLanguage(...entry));
  }

  return {
    style: {
      hljs: {
        color: theme.palette.color('black'),
      },
    },
  };
};

export const Code = styled(SyntaxHighlighter)
  .attrs(codeAttrs)
  .withConfig({ shouldForwardProp })`
  .hljs-comment {
    color: ${({ theme }) => theme.palette.color(['gray', 6])};
  }

  .hljs-string {
    color: ${({ theme }) => theme.palette.color(['orange', 5])};
  }

  .hljs-attr {
    color: ${({ theme }) => theme.palette.color(['blue', 8])};
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-built_in,
  .hljs-name,
  .hljs-tag {
    color: ${({ theme }) => theme.palette.color('brand')};
  }

  .hljs-title,
  .hljs-section,
  .hljs-attribute,
  .hljs-literal,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-addition,
  .hljs-deletion,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-meta,
  .hljs-doctag,
  .hljs-quote,
  .hljs-property,
  .hljs-variable,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-link {
    color: green;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }
`;

Code.displayName = 'Code';

Code.propTypes = {
  language: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  register: PropTypes.object,
};

Code.Sample = styled.samp`
  ${colorMixin};
  ${backgroundMixin};
  ${fontMixin};
  font-weight: ${({ theme }) => theme.font.weights.medium};
  display: inline-flex;
  text-decoration: none;
  ${px({ xs: 0.5 })}
`;

Code.Sample.displayName = 'Code.Sample';

Code.Sample.propTypes = {
  ...colorMixin.propTypes,
  ...fontMixin.propTypes,
  ...backgroundMixin.propTypes,
};

Code.Sample.defaultProps = {
  weight: 'medium',
  background: ['gray', 2],
  color: 'black',
};
