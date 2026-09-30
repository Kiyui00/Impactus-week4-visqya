import { useState } from "react";

function Card({ name, role, bio, avatar }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card">
      <img src={avatar} alt={name} className="avatar" />

      <h2>{name}</h2>
      <p>{role}</p>
      <p className="bio">{bio}</p>

      <button className="like-btn"onClick={handleLike}>
        Like {likes}
      </button>
    </div>
  );
}

export default Card;