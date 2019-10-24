/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <section className='error'>
      <h2 tabindex='0' class='error__title'>4😂4</h2>
      <p tabindex='0'>Página no encontrada</p>
    </section>
  </>
);

export default NotFound;
