import { useState, useEffect } from "react";

import TweetList from "../components/TweetList.jsx";

import TweetForm from "../components/TweetForm.jsx";

const Home = ({ user, logout }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];

    setTweets(storedTweets);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),

      text,

      likes: 0,
    };

    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <div>
      <h1>Bienvenido a Twitter</h1>
      {user && (
        <div>
          <p>Hola, {user.username}!</p>
          <button onClick={logout}>Cerrar sesión</button>

          <div>
            <TweetForm onAddTweet={addTweet} />
            <TweetList tweets={tweets} onLike={likeTweet} />
          </div>
        </div>
      )}
      {/* ... contenido de la página ... */}
    </div>
  );
};

export default Home;
