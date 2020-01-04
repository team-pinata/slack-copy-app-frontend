import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '~/components/MyButton';

const IndexPage = () => (
  <div>
    <h1>Index Page</h1>
    <Link to="/about">About</Link>
    <MyButton label="hello" />
  </div>
);
IndexPage.displayName = 'IndexPage';

export default IndexPage;
