import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
  <div>
    <h1>About Page</h1>
    <Link to="/">Top</Link>
  </div>
);
AboutPage.displayName = 'AboutPage';

export default AboutPage;
