import React from 'react';
import clsx from "clsx";
import PropTypes from 'prop-types';

function Input({type, id, className='',placeholder='', name, onChange, required, ...rest }) {
  const styles = (className) => clsx(
    ['w-full border-2 rounded-sm outline-none focus:invalid:border-red-400 invalid:border-red-400 focus:border-sky-700 hover:border-sky-700 cursor-pointer px-4 py-3 bg-inherit'],
    className
    )
    
  return (
    <input type={type} className={styles(className)} id={id} name={name} placeholder={placeholder} onChange={onChange} required={required} {...rest} />
  )

}


Input.defaultProps = {
    type: '',
    id:'',
    className: '',
    placeholder: '',
    name: '',
    onChange: () => {},
    required: false
  };
  
  Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool
  };

export default Input;
