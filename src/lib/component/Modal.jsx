import React from 'react';
import styled from 'styled-components';

/**
 * Styled component for the modal container.
 *
 * @component
 */
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Styled component for the modal content.
 *
 * @component
 */
const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
`;

/**
 * Styled component for the close button.
 *
 * @component
 */
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #000;
  }
`;

/**
 * Modal component that displays content in a modal dialog.
 *
 * @component
 *
 * @param {boolean} isOpen - Determines whether the modal is open or closed.
 * @param {Function} onClose - Function to close the modal when called.
 * @param {ReactNode} children - The content to be displayed within the modal.
 * @returns {ReactElement|null} - The modal component or null if it is closed.
 */
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;