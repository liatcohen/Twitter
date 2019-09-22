import React, { useState } from 'react'
import Modal from 'react-modal';
import Tweet from './Tweet'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
function ReplyTweet(props) {
    const [text, setText]=useState('')
    return (

        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel="Example Modal">
            <button onClick={props.closeModal}>close</button>
            <Tweet tweet={props.tweet}/>
            <form>
                
                <input type="text" placeholder="Tweet your replay"/>
                <button>Reply</button>
            </form>
        </Modal>

    )
}

export default ReplyTweet
