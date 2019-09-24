import React, { useState, useEffect } from 'react'
import Avatar from "@material-ui/core/Avatar"
import styled from "styled-components"
import moment from "moment"
import CommentIcon from '@material-ui/icons/Comment'
import { NavLink } from 'react-router-dom'
import ReplyTweet from './ReplyTweet'
import { Divider } from '@material-ui/core';

const UserImage = styled(Avatar)`
  width: 50px;
  height: 50px;
`

const TweetBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
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
    justify-content: space-around ;
    padding: 10px;
    color: #84898a;
`
const BigFooterContent= styled.div`
    display: flex;
    justify-content: space-around ;
    padding: 10px;
    font-size: 20px;
    color: #84898a;

`
const BigFooter = styled.div`
`
const SmallTweetText = styled.div`
`
const BigTweetText = styled.div`
    font-size: 25px;
`
const TweetDivider = styled.hr`
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`
const LikesNumber = styled.div`
    margin-left:15px;
`
const Date = styled.div`
    margin-left:15px;
    color: #84898a;
`
function Tweet(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => setModalIsOpen(true)

    const closeModal = () => setModalIsOpen(false)


    const { tweet } = props
    const { user } = tweet
    const getFooterContent = () => {
        let footer
        {
            props.bigTweet ?
                footer = (
                    <BigFooter>
                        <Date>{moment(props.tweet.time).format('h:mm a, MMM D YYYY')}</Date>
                        <TweetDivider />
                        <LikesNumber><b>4</b> Likes</LikesNumber>
                        <TweetDivider />
                        <BigFooterContent>
                            <i onClick={openModal} className="far fa-comment" />
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                        </BigFooterContent>
                    </BigFooter>)

                : footer = (<FooterContent>
                    <i onClick={openModal} className="far fa-comment" />
                    <i className="fas fa-retweet"></i>
                    <i className="far fa-heart"></i>
                </FooterContent>)
        }
        return footer;
    }
    return (
        <div>
            <TweetBody>
                <TweetLeft><UserImage
                    src={props.tweet.user.imageUrl}></UserImage></TweetLeft>
                <TweetRight>
                    <HeaderContent>
                        <NavLink to={`/user/${props.tweet.user._id}`}>
                            <Username>{user.name}</Username>
                        </NavLink>
                        {!props.bigTweet ? <TweetDate>{moment(props.tweet.time).format('MMM Do')}</TweetDate> : null}
                    </HeaderContent>
                    <NavLink to={`/tweet/${props.tweet._id}`}>
                        {props.bigTweet ?
                            <BigTweetText>{tweet.text}</BigTweetText>
                            : <SmallTweetText>{tweet.text}</SmallTweetText>
                        }
                    </NavLink>
                </TweetRight>

                <ReplyTweet modalIsOpen={modalIsOpen} closeModal={closeModal} tweet={props.tweet} />
            </TweetBody>
            {getFooterContent()}

            <TweetDivider />
        </div>
    )

}

export default Tweet
