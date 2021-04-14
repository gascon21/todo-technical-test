import React from 'react';
import './customBtn.scss'
type Props = { onClick: () => void; textBtn: string; colorBtn: string; disabled?: boolean }

const CustomBtn: React.FC<Props> = ({onClick, textBtn, colorBtn, disabled}) => {

  return  <div style={{backgroundColor: colorBtn}} onClick={onClick} className={['custom-btn', disabled ? 'custom-btn--disabled' : ''].join(' ')}>
            <span>{textBtn}</span>
          </div>
}

export default CustomBtn;