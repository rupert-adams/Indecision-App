import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.pickOptions}
        disabled={!props.hasOptions}
      >
        What Should I Do?
      </button>
    </div>
  );
};

export default Action;
