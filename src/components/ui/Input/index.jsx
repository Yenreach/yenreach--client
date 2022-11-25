import React from 'react';
import clsx from "clsx";
import PropTypes from 'prop-types';

function Input({type, id, className='',placeholder='', name }) {
  const styles = (className) => clsx(
    ['w-full 9 border-2 rounded-sm outline-none focus:invalid:border-red-400 invalid:border-red-400 focus:border-sky-700 hover:border-sky-700 cursor-pointer px-4 py-3 bg-inherit border-2 border-white'],
    className
    )
    
  return (
    <input type={type} className={styles(className)} id={id} name={name} placeholder={placeholder} />
  )

}


Input.defaultProps = {
    type: '',
    id:'',
    className: '',
    placeholder: '',
    name: ''
  };
  
  Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string
  };

export default Input;
