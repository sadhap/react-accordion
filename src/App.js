import './App.css';
import React,{useState} from 'react';
import data from './data';
import SingleQuestion from './components/SingleQuestion';

function App() {
  const [questions,setQuestions] = useState(data);
  console.log(setQuestions);
  return (
    <main>
       <div className='container'>
    <h3>frequently asked question</h3>
    <section className='info'>
      {questions.map((question)=>{
        return (
        
                 <SingleQuestion key={question.id} {...question}/>
       
          
          );
      })}
    </section>
   </div>
    </main>
  
  );
}

export default App;
