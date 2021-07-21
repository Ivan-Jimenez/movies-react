import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { Wrapper, Content } from '../BreadCrum/BreadCrum.styles';

const BreadCrum = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{ movieTitle }</span>
    </Content>
  </Wrapper>
);

BreadCrum.propTypes = {
  movieTitle: PropTypes.string
}

export default BreadCrum;
