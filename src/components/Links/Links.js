import React from 'react';
import Link from '../Link/Link';
import cv from '../../assets/documents/CV-23 Mercedes Carballal.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab);
library.add(fas);
library.add(far);

const Links = () => {
  return (
    <ul className="links">
      <li className="links__link">
        <Link name="CV" link={cv} download />
        <FontAwesomeIcon className="fontawsome" icon={['far', 'file-pdf']} size='lg'></FontAwesomeIcon>
      </li>
      <li className="links__link">
        <Link
          name="GitHub"
          link="https://github.com/mercarf"
          otherClass="socialNet"
        />
        <FontAwesomeIcon className="fontawsome" icon={['fab', 'github']} size='lg'></FontAwesomeIcon>
      </li>
      <li className="links__link">
        <Link
          name="Linkedin"
          link="https://www.linkedin.com/in/mercedescarballal/"
          otherClass="socialNet"
        />
        <FontAwesomeIcon className="fontawsome" icon={['fab', 'linkedin']} size='lg'></FontAwesomeIcon>
      </li>
      <li className="links__link">
        <Link
          name="Twitter"
          link="https://twitter.com/mercarfr"
          otherClass="socialNet"
        />
        <FontAwesomeIcon className="fontawsome" icon={['fab', 'twitter-square']} size='lg'></FontAwesomeIcon>
      </li>
    </ul>
  );
};

export default Links;
