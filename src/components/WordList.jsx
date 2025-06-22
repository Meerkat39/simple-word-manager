const WordList = ({
  words,
  learnedCount,
  learnedRate,
  updateWord,
  deleteWord,
}) => {
  const toggleLearned = (word) => {
    updateWord(word, { ...word, isLearned: !word.isLearned });
  };

  return (
    <div>
      <h3>単語一覧</h3>
      <p>
        習得済み：{learnedCount}（{isNaN(learnedRate) ? "---" : learnedRate}% ）
      </p>
      <ul>
        {words.map((word) => {
          return (
            <li key={`${word.english}: ${word.japanese}`}>
              {word.english}: {word.japanese}
              <input
                type="checkbox"
                checked={word.isLearned}
                onChange={() => {
                  toggleLearned(word);
                }}
              />
              <button
                onClick={() => {
                  deleteWord(word);
                }}
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WordList;
