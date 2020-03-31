import styled from 'styled-components';

import { Pane } from '../../Pane';
import { Typography } from '../../Typography';

const tableAttrs = () => ({ as: 'table' });

export const Table = styled(Pane).attrs(tableAttrs)`
  border-spacing: 0;
  border-collapse: collapse;

  thead tr th,
  tbody tr th {
    ${Typography.Text} {
      --font-weight: ${({ theme }) => theme.font.weights.bold};
    }
  }

  td,
  th {
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.palette.color(['gray', 2])};
    border-bottom-width: ${({ theme }) => theme.spacing(1, 'border')};
    padding-top: ${({ theme }) => theme.spacing(1)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
    padding-left: 0;
    text-align: left;

    &:last-child {
      padding-right: 0;
    }
  }
`;

const captionAttrs = () => ({
  as: 'caption',
  alignment: 'left',
});

Table.Caption = styled(Typography.H3).attrs(captionAttrs)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
