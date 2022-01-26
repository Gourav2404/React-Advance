import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  let title2 = 'helloworld' ;
  const handleClick = () => {
    console.log(title);
    title = {title2};
  };
  return <React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>
      Change Title
    </button>
  </React.Fragment>;
};

export default ErrorExample;
