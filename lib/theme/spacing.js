import { rem } from 'polished';

import { BASE_SIZE } from './constants';

const TYPES = {
  default: 8,
  border: 2,
};

const spacing = (unit = 1, type = 'default') => rem(TYPES[type] * unit, BASE_SIZE);

export default new Proxy(spacing, { get: (fn, unit) => fn(unit) });
