import React, { useState, useEffect } from 'react'
import { Card } from '@material-ui/core'
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"
import { NavLink, Link } from 'react-router-dom'
import Modal from 'react-modal';
import ReplyTweet from './ReplyTweet';

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
function Tweet(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)  

    const openModal = () =>setModalIsOpen(true)

    const afterOpenModal = () => {}

    const closeModal = () => setModalIsOpen(false)

    return (

        <Card className="tweet">
            <NavLink to={`/user/${props.tweet.user._id}`}>
                <CardHeader title={props.tweet.user.name}
                    subheader="sub header"
                    avatar={<Avatar aria-label="recipe">R</Avatar>} />
            </NavLink>
            <NavLink to={`/tweet/${props.tweet._id}`}> <p><b>{props.tweet.text}</b></p> </NavLink>
           <i onClick={openModal} className="far fa-comment"></i>
           <ReplyTweet modalIsOpen={modalIsOpen} closeModal={closeModal} tweet={props.tweet}/>
           
        </Card>
    )
}

export default Tweet
