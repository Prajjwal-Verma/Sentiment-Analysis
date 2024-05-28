import React, { useState } from 'react';
import Sentiment from 'sentiment';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const sentiment = new Sentiment();

  const handleAnalyze = () => {
    const result = sentiment.analyze(inputText);
    setAnalysisResult(result);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <div className="App">
      <div className='mainHeading'>
        <h1>Sentiment Analysis</h1>
      </div>
      <div className='inputBtn'>
      <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
        onKeyPress={handleKeyPress} 
        placeholder="Type your text here" 
      />
      <button onClick={handleAnalyze}>Analyze</button>
      </div>

      <div>
        {analysisResult && (
        <>
          <h2>Sentiment Analysis Result</h2>
          <p><strong>Score:</strong> {analysisResult.score}</p>
          <p><strong>Comparative:</strong> {analysisResult.comparative}</p>
          
          <h3>Calculation</h3>
          <ul>
            {analysisResult.calculation.map((item, index) => (
              <li key={index}>
                {Object.entries(item).map(([key, value]) => (
                  <div key={key}><strong>{key}:</strong> {value}</div>
                ))}
              </li>
            ))}
          </ul>
          
          <h3>Tokens</h3>
          <ul className='list'>
            {analysisResult.tokens.map((token, index) => (
              <li key={index}>{token}</li>
            ))}
          </ul>
          
          <h3>Words</h3>
          <ul>
            {analysisResult.words.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
          
          <h3>Positive Words</h3>
          <ul>
            {analysisResult.positive.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
          
          <h3>Negative Words</h3>
          <ul>
            {analysisResult.negative.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </>
      )}
      </div>
    </div>
  );
}

export default App;
