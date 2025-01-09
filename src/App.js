// React.js Frontend for Wine Archetype Test with Styling

 , { useState } from 'react';
import './App.css';

const App = () => {
  const [currentBlock, setCurrentBlock] = useState(0); // Current block index
  const [answers, setAnswers] = useState({}); // Store user answers
  const [showResult, setShowResult] = useState(false); // Show result state
  const [result, setResult] = useState(null); // Final archetype result

  // Example question blocks (replace with API-fetch logic)
  const questionBlocks = [
    {
      id: "A",
      questions: [
        {
          id: 1,
          text: "Как вы выбираете вино?",
          options: ["Цена", "Рекомендации", "Вкус"]
        },
        {
          id: 2,
          text: "Как часто вы покупаете вино?",
          options: ["Раз в неделю", "Раз в месяц", "На праздники"]
        }
      ]
    },
    {
      id: "B",
      questions: [
        {
          id: 3,
          text: "Где вы чаще всего покупаете вино?",
          options: ["Супермаркет", "Винный бутик", "Интернет"]
        },
        {
          id: 4,
          text: "Какой стиль вина вы предпочитаете?",
          options: ["Красное", "Белое", "Розовое"]
        }
      ]
    }
  ];

  // Handle answer selection
  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  // Move to the next block
  const nextBlock = () => {
    if (currentBlock < questionBlocks.length - 1) {
      setCurrentBlock(currentBlock + 1);
    } else {
      calculateResult();
    }
  };

  // Calculate result based on answers (placeholder logic)
  const calculateResult = () => {
    setShowResult(true);
    // Placeholder: Fetch result from server
    fetch('/api/calculate-result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers),
    })
      .then(response => response.json())
      .then(data => setResult(data.result))
      .catch(error => console.error('Error calculating result:', error));
  };

  return (
    <div className="app-container">
      {!showResult ? (
        <div className="question-block">
          <h1 className="block-title">Блок {questionBlocks[currentBlock].id}</h1>
          {questionBlocks[currentBlock].questions.map((q) => (
            <div key={q.id} className="question">
              <p className="question-text">{q.text}</p>
              <div className="options-container">
                {q.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(q.id, option)}
                    className={`option-button ${answers[q.id] === option ? 'selected' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={nextBlock} className="next-button">
            {currentBlock < questionBlocks.length - 1 ? 'Следующий блок' : 'Завершить'}
          </button>
        </div>
      ) : (
        <div className="result">
          <h1 className="result-title">Ваш архетип</h1>
          {result ? (
            <div className="result-content">
              <h2 className="archetype-name">{result.name}</h2>
              <p className="archetype-description">{result.description}</p>
              <ul ="wine-list">
                {result.wineTypes.map((wine, index) => (
                  <li key={index} className="wine-item">{wine}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="loadi
          )}
        </div>
      )}
    </div>
  );
};

export default App;

// App.css
/* Styling for the app */
.app-container {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 600px;
  margin: auto;
  -align: center;
  background-color: #f9f9f9;
  bord
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.block-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.question {
  margin-bottom: 15px;
}

.question-text {
  font-size: 18px;
  margin-bottom: 10px;
  color: #555;
}

.options-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.option-button {
  padding: 10px 20px;
  margin: 5px;
  font
