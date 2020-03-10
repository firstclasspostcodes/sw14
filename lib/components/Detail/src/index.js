/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { Typography } from '../../Typography';
import { Pane } from '../../Pane';

const Group = styled.div`
  counter-reset: detail-count;

  & & {
    margin: ${({ theme }) => theme.spacing(2)} 0;
  }
`;

export const Detail = styled(Pane).attrs({ as: 'details' })`
  counter-increment: detail-count;

  &:not(:first-child) {
    border-top: none;
  }

  & + & {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

const detailContentAttrs = ({ border, spacing = {} }) => ({
  border: border || 'black',
  spacing: {
    pl: 2,
    py: 1,
    ...spacing,
  },
});

Detail.Content = styled(Pane).attrs(detailContentAttrs)`
  border-width: ${({ theme }) => theme.spacing(2, 'border')};
  border-top: none !important;
  border-right: none !important;
  border-bottom: none !important;
`;

Detail.Group = Group;

Detail.Summary = styled.summary`
  list-style-image: none;
  outline: 0;
  cursor: pointer;

  & > ${Typography.Text}:first-child:before {
    content: counter(detail-count) '.';
    margin-right: ${({ theme }) => theme.spacing(1)};
  }

  & > ${Typography.Text} {
    ::selection {
      color: inherit;
      background: transparent;
    }

    ::-moz-selection {
      color: inherit;
      background: transparent;
    }
  }

  ${Detail}[open] & {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  &::-webkit-details-marker {
    display: none;
  }
`;
