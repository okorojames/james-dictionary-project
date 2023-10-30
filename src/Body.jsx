import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import InputWord from "./components/InputWord";
import AnswerContent from "./components/AnswerContent";

const Body = () => {
  const [text, setText] = useState("");
  const [wordMeaning, setWordMeaning] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  //
  async function getWordMeaning(e) {
    e.preventDefault();
    if (!text) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
      );
      const data = await res.json();
      if (res) {
        setLoading(false);
      }
      if (res.status === 404 || !res.ok) {
        setError(data);
        setLoading(false);
        setWordMeaning();
      }
      if (res.ok) {
        setError("");
        setWordMeaning(data[0]);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
    }
  }
  return (
    <main className="container">
      <Header />
      <InputWord setText={setText} getWordMeaning={getWordMeaning} />
      <AnswerContent
        wordMeaning={wordMeaning}
        error={error}
        loading={loading}
      />
    </main>
  );
};

export default Body;
