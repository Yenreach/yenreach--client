import React from 'react';
import clsx from "clsx";
import PropTypes from 'prop-types';

function Input({ variant, override, type, id, className='',placeholder='', name, onChange, required, textarea, value, ...rest }) {
  const [touched, setTouched] = React.useState(false)

  const styles = (className) => clsx(
    ['w-full border-2 rounded-sm outline-none bg-inherit px-4 py-3', touched && ''],

    variant === 'plain'
      ? !override && ['border-gray focus:border-gray/90 hover:border-gray/90']
      
      // products
    : variant === 'product'
      ? !override && ['border-orange focus:border-orange hover:border-orange']
      
    // Jobs
      : variant === 'job'
        ? !override && ['border-blue focus:border-blue hover:border-blue']

    // Businesses
      : !override && ['border-green focus:border-green hover:border-green'],
    className
    )

    
  return (
    <>
      {textarea ? <textarea onFocus={() => setTouched(true)} required={required} onChange={onChange} id={id} name={name} cols="30" rows="10" className={styles(className)} placeholder={placeholder} {...rest} />
      :
      <input onFocus={() => setTouched(true)} type={type} className={styles(className)} id={id} name={name} placeholder={placeholder} onChange={onChange} required={required} {...rest} value={value} />
    }
    </>
  )

}


Input.defaultProps = {
    type: '',
    id:'',
    className: '',
    placeholder: '',
    name: '',
    value: '',
    onChange: () => {},
    required: false,
    variant: 'business',
    override: false,
    textarea: false,
  };
  
  Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    variant: PropTypes.string,
    override: PropTypes.bool,
    textarea: PropTypes.bool,
  };

export default Input;
