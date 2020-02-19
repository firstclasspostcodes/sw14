import styled from 'styled-components';
import Grid from 'styled-components-grid';

const Component = styled(Grid)`
  ${({ direction }) => direction && `flex-direction: ${direction};`}
`;

Component.Unit = Grid.Unit;

Component.Shrink = styled(Grid.Unit)`
  flex-shrink: 1;
  flex-basis: auto;
`;

Component.Grow = styled(Grid.Unit)`
  flex-grow: 1;
  flex-basis: auto;
`;

export default Component;
