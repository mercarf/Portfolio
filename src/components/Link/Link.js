import React from 'react';

const Link = ({ link, name, otherClass }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${otherClass}`}
      download
    >
      {name}
    </a>
  );
};

Link.defaultProps = {
  otherClass: '',
};

export default Link;