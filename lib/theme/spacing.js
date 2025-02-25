import { rem } from 'polished';

import { BASE_SIZE } from './constants';

const UNIT_TYPE = /^(number|string)$/i;

const TYPES = {
  default: 8,
  border: 2,
};

const spacing = (unit = 1, type = 'default') => rem(TYPES[type] * unit, BASE_SIZE);

const proxy = new Proxy(spacing, {
  get: (fn, unit) => {
    if (!UNIT_TYPE.test(typeof unit)) {
      return null;
    }
    return fn(unit);
  },
});

export default proxy;
