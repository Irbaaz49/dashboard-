import React from 'react';

import {Header, Line } from '../../components';

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Line" title="Inflation Rate" />
    <div className="w-full">
      <Line />
    </div>
  </div>
);

export default Line;
