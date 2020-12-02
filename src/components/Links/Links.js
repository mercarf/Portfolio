import React from 'react';
import Link from '../Link/Link';
import cv from '../../assets/documents/CV Mercedes Carballal.pdf';

const Links = () => {
  return (
    <ul className="links">
      <li className="links__link">
        <Link name="CV" link={cv} download />
      </li>
      <li className="links__link">
        <Link
          name="GitHub"
          link="https://github.com/mercarf"
          otherClass="socialNet"
        />
      </li>
      <li className="links__link">
        <Link
          name="Linkedin"
          link="https://www.linkedin.com/in/mercedescarballal/"
          otherClass="socialNet"
        />
      </li>
      <li className="links__link">
        <Link
          name="Twitter"
          link="https://twitter.com/mercarfr"
          otherClass="socialNet"
        />
      </li>
    </ul>
  );
};

export default Links;