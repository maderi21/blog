import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://picsum.photos/700/300"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, ipsam?
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>Kostolansky</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDecs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore
          nam, enim iste maiores, dolor eaque earum nobis molestias molestiae
          illum cumque commodi consectetur! Necessitatibus illo ipsa adipisci
          vel ab laborum culpa perspiciatis quaerat pariatur unde, rerum
          sapiente, nobis, excepturi et. Consequatur dolor veritatis dicta
          mollitia ex quis quod est dolorem dolores ad voluptas, omnis eveniet
          libero tenetur explicabo aut perferendis, id aliquid voluptatum itaque
          recusandae. Temporibus quas sunt enim?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
