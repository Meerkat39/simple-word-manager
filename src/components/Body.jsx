import { useState } from "react";
import WordForm from "./WordForm";
import WordList from "./WordList";

const Body = () => {
  const wordList = [
    {
      english: "apple",
      japanese: "りんご",
      isLearned: true,
    },
    {
      english: "cat",
      japanese: "ねこ",
      isLearned: false,
    },
    {
      english: "dog",
      japanese: "いぬ",
      isLearned: false,
    },
  ];

  const [words, setWords] = useState(wordList);
  const learnedCount = words.filter((word) => word.isLearned).length;
  const learnedRate = Math.round((learnedCount / words.length) * 100);

  const createWord = (word) => {
    setWords([...words, word]);
  };

  const updateWord = (targetWord, updatedWord) => {
    setWords(words.map((word) => (word === targetWord ? updatedWord : word)));
  };

  const deleteWord = (targetWord) => {
    setWords(words.filter((word) => word != targetWord));
  };

  return (
    <>
      <WordForm createWord={createWord} />
      <WordList
        words={words}
        learnedCount={learnedCount}
        learnedRate={learnedRate}
        updateWord={updateWord}
        deleteWord={deleteWord}
      />
    </>
  );
};

export default Body;
