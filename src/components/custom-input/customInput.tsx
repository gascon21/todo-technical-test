import React from 'react';
import './customInput.scss'
type Props = { onKeyDown: () => void; inputText: string }

const CustomInput: React.FC<Props> = ({onKeyDown, inputText}) => {

  return  <div onKeyDown={onKeyDown} className="custom-input">
            <input/>
          </div>
}

export default CustomInput;