const Z = 10;

const STACK = {};

const RESERVED = {
  banner: 45,
  header: 50,
  modal: 100,
};

export default (id, unit) => {
  const { [id]: index = unit } = RESERVED;

  if (STACK[index]) {
    // eslint-disable-next-line no-console
    console.warn(`Layer "${id}" conflicts with "${STACK[index]}"`);
  } else {
    STACK[index] = id;
  }

  return index * Z;
};
