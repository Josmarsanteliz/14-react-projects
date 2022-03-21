import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import { AppContext } from './context'

const Modal = () => {
  const {isModalOpen, closeModal} = useGlobalContext()

  return <div className={`${isModalOpen? 'modal-overlay show-modal': 'modal-overlay'}`}>
    <div className='modal-container'>
    Content
    <button className='close-modal-btn' onClick={closeModal}><FaTimes/></button>
    </div>
    
    </div>
}

export default Modal
