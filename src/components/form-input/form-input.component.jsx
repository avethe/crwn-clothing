import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...otherProps }) => {
   return (
      <div className="group">
         <input className="form-input" onChange={handleChange} {...otherProps} />
         {
            label ?  /*если существует пропс label у компонента FormInput, 
            то выполнить условие, иначе null (не отрисовывать ничего)*/
               <label
                  className={`${otherProps.value ? 'shrink' : ''} form-input-label`}
               >
                  {label}
               </label>
               : null
         }
      </div>
   )
}

export default FormInput;