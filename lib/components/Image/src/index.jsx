import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const observerProps = {
  rootMargin: '200px 0px',
  triggerOnce: true,
  threshold: 0,
};

export const Image = ({ alt, src, ...imgProps }) => {
  const [ref, inView] = useInView(observerProps);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <img alt={alt} {...imgProps} ref={ref} src={inView ? src : null} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
};
