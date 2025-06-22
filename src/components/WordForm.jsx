import { useState } from "react";

const WordForm = ({ createWord }) => {
  const [newWord, setNewWord] = useState({
    english: "",
    japanese: "",
    isLearned: false,
  });

  const addWord = (e) => {
    e.preventDefault();

    createWord(newWord);
    setNewWord({
      english: "",
      japanese: "",
    });
  };

  return (
    <div>
      <form onSubmit={addWord}>
        <h3>新しい単語を追加</h3>
        <input
          type="text"
          placeholder="英単語を入力"
          value={newWord.english}
          onChange={(e) =>
            setNewWord((prev) => ({ ...prev, english: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="日本語の意味を入力"
          value={newWord.japanese}
          onChange={(e) => {
            setNewWord((prev) => ({ ...prev, japanese: e.target.value }));
          }}
        />
        <button>単語を追加</button>
      </form>
    </div>
  );
};

export default WordForm;
