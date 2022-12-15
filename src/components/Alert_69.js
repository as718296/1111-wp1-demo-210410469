import React, { useEffect } from 'react';

const Alert_69 = ({ msg, type }) => {
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert_69;
