import Palette from './palette.json';

const color = target => {
  let name = target;
  let hue;

  if (typeof target !== 'string') {
    [name, hue] = target;
  }

  const hex = Palette[name];
  if (!hex) {
    const keys = JSON.stringify(Object.keys(Palette));
    throw new Error(`Color "${name}" is not a known color. Try: ${keys}`);
  }
  if (typeof hex === 'string') {
    return hex;
  }
  return hex[hue];
}

export default {
  ...Palette,
  color,
};
