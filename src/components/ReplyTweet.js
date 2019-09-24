import React, { useState } from 'react'
import Modal from 'react-modal';
import Tweet from './Tweet'
import {postTweet} from '../ApiClient'

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
    const [text, setText] = useState('')

    const postTweetClicked = async () => {
        console.log("here "+props.tweet.user._id)
        await postTweet(text,props.tweet._id)
        setText('')
    }
    return (

        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel="Example Modal">
            <button onClick={props.closeModal}>close</button>
            <Tweet tweet={props.tweet} />
            <form>
                <input type="text"
                    placeholder="Tweet your replay"
                    value={text}
                    onChange={(e)=>setText(e.target.value)} />
                <button onClick={postTweetClicked}>Reply</button>
            </form>
        </Modal>

    )
}

export default ReplyTweet
