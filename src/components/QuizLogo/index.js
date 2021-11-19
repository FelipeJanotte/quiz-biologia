import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <svg
      className={className}
      width="135"
      height="67"
      viewBox="0 0 135 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  margin-bottom: -10px;
  display: block;
  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default QuizLogo;
