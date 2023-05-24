import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src="https://picsum.photos/700/300" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
          repellendus, facilis hic consequatur enim quisquam eveniet quibusdam
          iste veniam dicta!
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        dolores, omnis possimus, neque placeat a provident commodi id
        accusantium nihil eveniet at, officiis nostrum dignissimos modi? Sunt
        vel corporis minima quisquam dignissimos tempora veniam pariatur culpa!
        Error, fuga quas consequuntur deleniti impedit vel commodi sed. Voluptas
        amet natus nulla quidem.
      </p>
    </div>
  );
};

export default Post;
