import React from 'react';
import clsx from "clsx";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Button({ to, variant, outlined, className, override, children, type, onClickFunc }) {
  const [effect, setEffect] = useState(false);
  const styles = (variant, outlined, className, override, effect) => clsx(
    className,
    
    ['text-center text-sm'], 
    // Products/Marketplace
    variant === 'product'
      ? !override && [ outlined && 'rounded-full flex items-center gap-0.5 py-2 md:px-10 font-bold text-orange',
          !outlined && 'bg-orange text-white'
        ]
      
    // Jobs
      : variant === 'job'
        ? !override && [ outlined && 'rounded-full flex items-center md:gap-0.5 p-0 py-2 md:px-10 font-semibold text-blue',
            !outlined && 'bg-blue text-white'
          ]

      : variant === 'job-inverted'
        ? !override && [ outlined && 'rounded-full flex items-center md:gap-0.5 p-0 py-2 md:px-10 font-semibold text-blue',
            !outlined && 'bg-white text-blue'
          ]

    // Businesses
      : !override && [ outlined && 'rounded-full flex items-center gap-0.5 py-2 md:px-10 font-medium text-green',
          !outlined && 'bg-green text-white'
        ],

    // Default
    effect && 'animate-button_click'

    
  )

  return to.length > 0 ? (
    <Link onClick={() => { setEffect(true) }} onAnimationEnd={() => { setEffect(false) }} className={styles(variant, outlined, className, override, effect)} to={`/${to}`}>
      {children}
    </Link>
  ) : (
    <button onClick={() => { setEffect(true); onClickFunc() }} onAnimationEnd={() => { setEffect(false) }} type={type} className={styles(variant, outlined, className, override, effect)}>
      {children}
    </button>
  );
}
               

Button.defaultProps = {
  to: '',
  variant: 'business',
  outlined: false,
  className: '',
  override: false,
  type: 'button',
  onClickFunc: () => { console.log('Button clicked')}
  };

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  variant: PropTypes.string,
  outlined: PropTypes.bool,
  className: PropTypes.string,
  override: PropTypes.bool,
  type: PropTypes.string,
  onClickFunc: PropTypes.func
};

export default Button;

