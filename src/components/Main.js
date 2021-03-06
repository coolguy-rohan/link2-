import {useState} from "react";
import styled from "styled-components";
import PostModel from "./PostModel";

const Main = (props) => {
   const [showModel , setShowModel ] = useState("close");
   const handleClick = (e) =>{
     e.preventDefault () ;
     if(e.target !== e.currentTarget){
       return;
     }
     switch (showModel){
       case "open":
         setShowModel("close");
         break;
        case "close":
         setShowModel("open");
         break;
         default:
           setShowModel("close");
         break;
     }
   };
  return <Container><ShareBox>shareBox
   <div>
     <img src="/images/user.svg" alt="" />
     <button onClick = {handleClick} > start a post</button>
   </div>
   <div><button>
     <img src="/iamges/photo-icon.svg" alt="" />
   <span>photo</span>
   </button>
   <button>
     <img src="/images/video-icon.svg" alt="" />
    <span> video</span>
   </button>

   <button>
     <img src ="/iamges/event-icon.svg" alt="" />
     <span>event</span>
   </button>

   <button>
     <img src="/images/article-icon.svg" alt="" />
     <span> write  article</span>
   </button>
   </div>
   </ShareBox>
   <div>
     <Article>
      <SharedActore>
        <a>
          <img src="/images/user.svg" alt="" />
          <div>
            <span>Title</span>
            <span>Info</span>
            <span>Data</span>
          </div>
        </a>
        <button>
          <img src="/images/ellipsis.svg" alt="" />
        </button>
      </SharedActore>
      <Description>Description</Description>
      <SharedImg>
        <a>
          <img src="/images/download.png" alt="" />
        </a>
      </SharedImg>
      <SocialCount>
     
        <li>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Flike&psig=AOvVaw0DiPLT_XUvkOKbZ2oFa4vV&ust=1622577879296000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNi6guvb9PACFQAAAAAdAAAAABAD"
           alt="" />
           <img src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fproductivemag.com%2F28%2Fto-comment-or-not-to-comment-that-is-the-question&psig=AOvVaw0PYs5JdFHG34C31He5y1iI&ust=1622577983176000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIj83Zfc9PACFQAAAAAdAAAAABAD"
           alt ="" />
           <span>75</span>
        </li>
        <li><a>
          2 comment
        </a></li>
      </SocialCount>
      <SocialAction>
      <button>
        <img src="/images/like-icon.svg" alt="" />
        <span>like</span>
      </button>
      <button>
        <img src="/images/comment-icon.svg" alt="" />
        <span>comment</span>
      </button>
      <button>
        <img src="/images/comment-icon.svg" alt="" />
        <span>share</span>
      </button>
      <button>
        <img src="/images/comment-icon.svg" alt="" />
        <span>send</span>
      </button>
      </SocialAction>
     </Article>
   </div>
   <PostModel showModel={showModel} handelClick={handleClick} />
  </Container>;
};

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align:center; 
  overflow:hidden;
  margin-buttom: 8px;
  background-color : #fff;
  border-radius:5px ;
  position : relative;
  border: none ;
  box-shadow : 0 0 0 1px rgb(0 0 0 / 154), 0 0 0 rgb(0 0 0 / 204 );

`;

 const ShareBox = styled(CommonCard)`
  display : flex ;
  flex-direction: column;
  color : #958b7b ; 
  margin : 0 0 8px;
  background : white ;
  div {
    button {
      outline: none ;
      color : rgb(0 ,0, 0, 0.6);
      font-size:14px
      line-height: 1.5 ;
      min-height :48px ;
      background: transparent;
      border : none;
      display : flex;
      align-items : center ;
      font-weight:600;

    }
    &:first-child {
      display : flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right : 8px
      }
      button {
        margin: 4px 0;
        flex-grow: 1 ;
        border-radius: 35px;
        padding-left: 16px ;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white ;
        text-align: left;

      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: sapce-around ;
      padding-buttom: 4px ;
       button{
         img{
           margin: 0 4px 0 -2px;
         }
         span {
            color: #70b579;
         }
       }
    }
  }
 `;

 const Article = styled(CommonCard)`
 padding: 0;
 margin: 0 0 8px
 overflow: visible;
 `;

 const SharedActore = styled.div `
  padding-right:40px;
  flex-wrap: nowarp;
  padding: 12px 16px 0;
  margin-bottom :8px
  align-items: center;
  display:  flex ;
   a {
     margin-right: 12px;
     flex-grow: 1;
     overflow : hidden;
     display: flex;
     text-decoration: none ;
     img {
       width: 48px;
       height : 48px;

     }
     & > div {
       display: flex;
       flex-direction:column ;
       flex-grow: 1;
       flex-basis : 0;
       margin-left: 8px;
       overflow: hidden;
       span {
         text-align : left;
         &:first-child {
           font-size:14px;
           font-weight: 700;
           color: rgbs(0,0,0, 1);

         }

         &:nth-child(n+1){
           font-size:12px;
           color : rgba(0,0,0, 8.6);
         }
       }
     }
   }
   button {
     position : absolute ;
     right: 12px
     top: 0;
     background:transparent;
     border: none;
     outline : none;

   }
 `;
 const Description = styled.div`
    padding : 0 16px;
    overflow: hidden;
    color: rgba(0, 0,0, 0.9);
    font-size : 14px; 
    text-align: left;
 `;
  const SharedImg = styled.div `
      margin-top: 8px;
      width : 100%;
      display:block;
      position: relative;
      background-color: #f9fafb;
      img {
        object-fit: contain;
        width:100%;
        height: 100%;
      }
  `;

  const SocialCount = styled.ul`
    line-height:1.3;
    display: flex ;
    align-items: flex-start;
    overflow: auto ;
    margin: 0 16px;
    padding:8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    li {
      margin-right: 5px;
      font-size:12px;
      button{
        display:flex;
      }

    }
  `;
  const SocialAction = styled.div `
     align-items: center;
     display: flex;
     justify-content : flex-start ; 
     margin: 0;
     min-height: 40px;
     padding: 4px 8px;
     button{
       display: inline-flex;
       align-items: center;
       padding: 8px;
       color: #0a66c2;

       @media (min-width: 768px) {
         span {
           margin-left:8px;
         }
       }
     }  


  
  `;
export default Main;

