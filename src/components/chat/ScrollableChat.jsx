import React from 'react'
import { useSelector } from 'react-redux'
import { isSameUser, isSameSenderMargin } from './ChatLogic'
import ScrollableFeed from 'react-scrollable-feed'

const ScrollableChat = ({messages}) => {

  const {user} = useSelector(state => state.user)
  console.log(user)
  return (
    <>
        <ScrollableFeed>
        { messages && messages.length > 0 &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m?._id}>
            {console.log(m)}
            <span
              style={{
                backgroundColor: `${
                  m?.sender?._id === user?._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, user?._id),
                marginTop: isSameUser(messages, m, i, user?._id) ? 3 : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
        </ScrollableFeed>
    </>
  )
}

export default ScrollableChat