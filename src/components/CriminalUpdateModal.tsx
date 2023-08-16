import React, { useState } from 'react';
import { ModalBackgroundStyled, ModalBackgroundBlurStyled, ModalBodyStyled } from './CriminalUpdateModalStyled';

/* interface CriminalUpdateModalProps {
  property: string;
} */
    const styleModalProps = {
        on: {
            opacity: "1",
            pointersEvents: "auto"
        },
        off: {
            opacity: "0",
            pointersEvents: "none" 
        }
    }
    

const CriminalUpdateModal: React.FC = () => {
    const [modalProps, setModalProps] = useState(styleModalProps.on);

  return (
    <ModalBackgroundStyled style={modalProps}>
        <ModalBackgroundBlurStyled>
            <ModalBodyStyled>
                <form>

                </form>
            </ModalBodyStyled>               
        </ModalBackgroundBlurStyled>
    </ModalBackgroundStyled>
  );
};

export default CriminalUpdateModal;
