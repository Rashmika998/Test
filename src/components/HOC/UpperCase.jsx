import React from 'react';

const withUpperCase = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const modifiedText = props.text.toUpperCase();
    return <WrappedComponent modifiedText={modifiedText} {...props} />;
  };
};

export default withUpperCase;
