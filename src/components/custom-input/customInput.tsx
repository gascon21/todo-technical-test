import React from 'react';
import './customInput.scss'
type Props = { inputText: string; setInputText: (text: string) => void }

const CustomInput: React.FC<Props> = ({inputText, setInputText}) => {

  const onChange = (event: any) => {
    setInputText(event.target.value);
  };

  return  <div className="custom-input">
            <input type="text" value={inputText} className={"custom-input"} onChange={onChange} placeholder={"Nueva tarea"}/>
          </div>
}

export default CustomInput;