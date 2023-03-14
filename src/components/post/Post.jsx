import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <AvatarGroup size="xs" max={3}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <AvatarGroup
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
            </AvatarGroup>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommenttext">{post.comment} comments</span>
          </div>
        </div>
      </div>

      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <box flex="1" textAlign="left" className="postone">
                <img
                  className="postProfileImg"
                  src="/assets/persons/10.jpg"
                  alt=""
                />
                Pavan Sai
              </box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="commentone">
            <div className="commenttwo">
              Wow, what an amazing photo! Where was this taken? I completely
              agree with you. It's so important to raise awareness about this
              issue
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <box as="span" flex="1" textAlign="left" className="postone">
                <img
                  className="postProfileImg"
                  src="/assets/persons/8.jpg"
                  alt=""
                />
                Jeswanth Sonu
                <img
                  className="likeIcon"
                  src="/assets/like.png"
                  onClick={likeHandler}
                  alt=""
                />
              </box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="commentone">
            <div className="commenttwo">
              I love this! It's always inspiring to see people making a
              difference in the world. I had no idea about this. Thank you for
              sharing and bringing attention to this topic. This is such a
              beautiful tribute. My thoughts and prayers are with you and your
              family.
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <div className="selfcomment">
        <img className="postProfileImg" src="/assets/persons/1.jpg" alt="" />
        <input type="text" placeholder="&nbsp;&nbsp;&nbsp;Write a comment..."/>
        <button>send</button>
      </div>
    </div>
  );
}
