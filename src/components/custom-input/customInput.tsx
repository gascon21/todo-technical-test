import React from 'react';
import './customInput.scss'
type Props = { inputText: string; setInputText: (text: string) => void; onPressEnter: () => void }

const CustomInput: React.FC<Props> = ({inputText, setInputText, onPressEnter}) => {

  const onChange = (event: any) => {
    setInputText(event.target.value);
  };
  const onKeyDown = (event: any) => {
    if (event.key === 'Enter' && inputText.length > 0) {
      onPressEnter();
    }
  };

  return  <div className="custom-input">
            <input type="text" value={inputText} className={"custom-input"} onChange={onChange}
                placeholder={"Nueva tarea"} onKeyDown={onKeyDown}/>
          </div>
}

export default CustomInput;