import React from 'react';
import clsx from "clsx";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ to, variant, outlined, className, children }) {
  const styles = (variant, outlined, className) => clsx(
    ['text-center'], 
    // Products/Marketplace
    variant === 'product'
      ? [ outlined && 'rounded-full flex items-center gap-0.5 py-2 px-10 font-bold text-color3',
          !outlined && 'bg-color3 text-white'
        ]
      
    // Jobs
      : variant === 'job'
        ? [ outlined && 'rounded-full flex items-center gap-0.5 p-0 py-2 px-10 font-semibold text-color2',
            !outlined && 'bg-color2 text-white'
          ]

    // Businesses
      : [ outlined && 'rounded-full flex items-center gap-0.5 py-2 px-10 font-medium text-color1',
          !outlined && 'bg-color1 text-white'
        ],

    className
  )

  return to.length > 0 ? (
    <Link className={styles(variant, outlined, className)} to={`/${to}`}>
      {children}
    </Link>
  ) : (
    <button className={styles(variant, outlined, className)}>
      {children}
    </button>
  );
}


Button.defaultProps = {
  to: '',
  variant: 'business',
  outlined: false,
  className: ''
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  variant: PropTypes.string,
  outlined: PropTypes.string,
  className: PropTypes.string,
};

export default Button;

