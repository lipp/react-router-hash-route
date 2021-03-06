import React from 'react'

const User = ({name, id, active}) => (
  <div className={`user ${active ? 'active' : ''}`} id={id} >
    <h1>{name}</h1>
    <style jsx>{`
      .user {
        height: 40vh;
        font-size: 6vw;
      }
      .user:nth-of-type(odd) {
        color: white;
        background: black;
      }
      .user.active {
        text-decoration: underline;
      }
      .user:nth-of-type(even) {
        color: black;
        background: white;
      }
      h1 {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)

export default User
