import React, {useState, useEffect} from 'react'
import Avatar from "@material-ui/core/Avatar"
import styled from "styled-components"
import moment from "moment"
import CommentIcon from '@material-ui/icons/Comment'
import { NavLink } from 'react-router-dom'

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

`

const TweetText = styled.div`
`

function Tweet(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => setModalIsOpen(true)

    const closeModal = () => setModalIsOpen(false)


    const {tweet} = props
    const {user} = tweet
    return (
        <TweetBody>
            <TweetLeft><UserImage>R</UserImage></TweetLeft>
            <TweetRight>
                <HeaderContent>
                <NavLink to={`/user/${props.tweet.user._id}`}>
                    <Username>{user.name}</Username>
                    </NavLink>
                    <TweetDate>{moment(props.tweet.time).format('MMM Do')}</TweetDate>
                </HeaderContent>
                <TweetText>
                    {tweet.text}
                </TweetText>
                <FooterContent>
                    <CommentIcon fontSize='small'/>
                </FooterContent>
            </TweetRight>
        </TweetBody>

    )
    // return (
    //
    //     <TweetBody>
    //         <Layout.Header>
    //             <NavLink to={`/user/${props.tweet.user._id}`}>
    //                 <HeaderContent>
    //                     <Avatar aria-label="recipe">R</Avatar>{props.tweet.user.name}
    //                 </HeaderContent>
    //             </NavLink>
    //         </Layout.Header>
    //         <Layout.Content>
    //             <NavLink to={`/tweet/${props.tweet._id}`}><p><b>{props.tweet.text}</b></p></NavLink>
    //         </Layout.Content>
    //         <Layout.Footer>
    //             <i onClick={openModal} className="far fa-comment"/>
    //         </Layout.Footer>
    //
    //
    //         <ReplyTweet modalIsOpen={modalIsOpen} closeModal={closeModal} tweet={props.tweet}/>
    //     </TweetBody>
    // )
}

export default Tweet
