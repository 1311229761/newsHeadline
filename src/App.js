import logo from './logo.svg';
import './App.css';
import Material from './components/Material/Material'
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [articles, setArticles] = useState([])
  useEffect(()=>{
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-04-18&sortBy=publishedAt&apiKey=c4283fb5221c4ecbb4413725e1bcb796'
    fetch(url)
  .then(response => response.json())
  .then(data => setArticles(data.articles))
  },[])
  
  return (
    <div className="App">
      <h1>{articles.length}</h1>
    <Material></Material>
    {
      articles.map(article=><Material article={article}></Material>)
    }
   
    </div>
  );
}

export default App;
