import React from 'react';
import styled from 'styled-components';

const Main = (props) => {
  return (
    <Container>
     <ShareBox>
      Share
     </ShareBox>
     <div>
    <img src="/images/user.svg"  alt="" />
    <button>Start a post</button>
     </div>
     <div>
     <button>
      <img src="/images/photo-icon.png" alt=""  />
      <span>Photo</span>
     </button>
     <button>
      <img src="/images/video-icon.png" alt=""  />
      <span>Video</span>
     </button>
     <button>
      <img src="/images/event-icon.png" alt=""  />
      <span>Event</span>
     </button>
     <button>
      <img src="/images/article-icon.png" alt=""  />
      <span>Write article</span>
     </button>

     </div>
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
`
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
`
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;
  div{
   button {
    
   }
  }
`


export default Main