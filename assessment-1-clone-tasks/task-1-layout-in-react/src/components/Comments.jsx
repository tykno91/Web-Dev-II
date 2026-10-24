import React from 'react';

export default function Comments() {
  const commentsData = [
    {
      username: 'soundseeker92',
      text: "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?"
    },
    {
      username: 'Ted Baker',
      text: "I've been following the label for years—so glad someone's finally writing about their impact."
    },
    {
      username: 'Queen_of_noise',
      text: "I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling."
    }
  ];

  return (
    <section className="comments-section">
      <h3 className="comments-heading">Comments</h3>
      <div className="comments-list">
        {commentsData.map((comment, index) => (
          <div key={index} className="comment-item">
            <h4 className="comment-username">{comment.username}</h4>
            <p className="comment-text">{comment.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}