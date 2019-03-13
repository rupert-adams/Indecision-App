import React from 'react';

const Action = (props) => (
    <div>
      <button
        onClick={props.pickOptions}
        disabled={!props.hasOptions}
      >
        What Should I Do?
      </button>
    </div>
  );

export default Action;
