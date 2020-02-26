import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

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

export const Code = styled(SyntaxHighlighter).attrs(codeAttrs)`
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
  register: PropTypes.shape,
};
