import React, { useState, useEffect } from 'react'
import Avatar from "@material-ui/core/Avatar"
import styled from "styled-components"
import moment from "moment"
import CommentIcon from '@material-ui/icons/Comment'
import { NavLink } from 'react-router-dom'
import ReplyTweet from './ReplyTweet'
import { Divider } from '@material-ui/core';

const BigTweetDiv= styled.div`
    font-size: 25px;
`
const UserImage = styled(Avatar)`
  width: 50px;
  height: 50px;
`

const TweetBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
  background-color: yellow;
`

const TweetLeft = styled.div`
  padding: 4px;
  margin-right: 4px;
`
const TweetRight = styled.div`
  flex: 1;
  padding: 4px;
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
`
const Username = styled.span`
  font-weight: bold;
  margin-right: 4px;
  font-size: 16px;
`

const TweetDate = styled.span`
  color: slategray;
  margin-left: 4px;
`

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between ;
    width: 200px;
    padding: 10px;

`

const TweetText = styled.div`
`
const TweetDivider = styled.hr`
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`


function BigTweet(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => setModalIsOpen(true)

    const closeModal = () => setModalIsOpen(false)


    const { tweet } = props
    const { user } = tweet

    return (
            <BigTweetDiv>
            <TweetBody>
                <TweetLeft><UserImage 
                src=
                    {props.tweet.user.imageUrl}                ></UserImage></TweetLeft>
                <TweetRight>
                    <HeaderContent>
                        <NavLink to={`/user/${props.tweet.user._id}`}>
                            <Username>{user.name}</Username>
                        </NavLink>
                        <TweetDate>{moment(props.tweet.time).format('MMM Do')}</TweetDate>
                    </HeaderContent>
                    <NavLink to={`/tweet/${props.tweet._id}`}>
                        <TweetText>
                            {tweet.text}
                        </TweetText>
                    </NavLink>
                    <FooterContent>
                        <i onClick={openModal} className="far fa-comment" />
                        <i className="fas fa-retweet"></i>
                        <i className="far fa-heart"></i>
                    </FooterContent>
                </TweetRight>

                <ReplyTweet modalIsOpen={modalIsOpen} closeModal={closeModal} tweet={props.tweet} />
            </TweetBody>
            <TweetDivider />
        </BigTweetDiv>
    )

}

export default BigTweet
