// export { default as Grid } from 'styled-components-grid';
import styled from 'styled-components';
import Grid from 'styled-components-grid';

Grid.Shrink = styled(Grid.Unit)`
  flex-shrink: 1;
  flex-basis: auto;
`;

Grid.Grow = styled(Grid.Unit)`
  flex-grow: 1;
  flex-basis: auto;
`;

export default Grid;
