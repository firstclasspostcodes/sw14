import { css } from 'styled-components';

const stickyRootStyle = `{
  height: 100%;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
}`;

const rootIdPath = rootId =>
  rootId.reduce((arr, id, i) => arr.concat(i > 0 ? `${arr[i - 1]} > ${id}` : id), []);

const stickyRootStyles = rootId => {
  if (!rootId) {
    return null;
  }
  if (typeof rootId === 'string') {
    return `${rootId} ${stickyRootStyle}`;
  }
  return rootIdPath(rootId).map(stickyRootStyles);
};

const stickyMixin = css`
  html,
  body {
    height: 100%;
  }

  ${({ theme: { rootId } }) => stickyRootStyles(rootId)}
`;

export default stickyMixin;
