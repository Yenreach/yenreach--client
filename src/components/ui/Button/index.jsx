import React from 'react';
import clsx from "clsx";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ to, variant, outlined, className, override, children }) {
  const styles = (variant, outlined, className, override) => clsx(
    className,
    
    ['text-center text-xs'], 
    // Products/Marketplace
    variant === 'product'
      ? !override && [ outlined && 'rounded-full flex items-center gap-0.5 py-2 md:px-10 font-bold text-color3',
          !outlined && 'bg-color3 text-white'
        ]
      
    // Jobs
      : variant === 'job'
        ? !override && [ outlined && 'rounded-full flex items-center md:gap-0.5 p-0 py-2 md:px-10 font-semibold text-color2',
            !outlined && 'bg-color2 text-white'
          ]

    // Businesses
      : !override && [ outlined && 'rounded-full flex items-center gap-0.5 py-2 md:px-10 font-medium text-color1',
          !outlined && 'bg-color1 text-white'
        ]

    
  )

  return to.length > 0 ? (
    <Link className={styles(variant, outlined, className, override)} to={`/${to}`}>
      {children}
    </Link>
  ) : (
    <button className={styles(variant, outlined, className, override)}>
      {children}
    </button>
  );
}


Button.defaultProps = {
  to: '',
  variant: 'business',
  outlined: false,
  className: '',
  override: false
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  variant: PropTypes.string,
  outlined: PropTypes.bool,
  className: PropTypes.string,
  override: PropTypes.bool,
};

export default Button;

