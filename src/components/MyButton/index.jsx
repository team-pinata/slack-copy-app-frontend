import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const RootButton = styled.button`
  padding: 10px 5px;
  color: red;
`;

const MyButton = (props) => {
  return (
    <RootButton type={props.type} className="my-button">
      {props.label}
    </RootButton>
  );
};

MyButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};

MyButton.defaultProps = {
  type: 'button',
};

export default MyButton;
