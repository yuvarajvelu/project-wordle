import React from 'react';

function Banner({status, children, buttonAction, actionText}) {
  return (
    <div className={`${status} banner`}>
      {children}
      {actionText && <button onClick={buttonAction}><strong>{actionText}</strong></button>}
    </div>
  );
}

export default Banner;
