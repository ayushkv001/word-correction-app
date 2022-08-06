import { useState } from 'react';
import { corrections } from './corrections';

import './App.css';

function App() {
  const [text,setText] = useState();

  const keyS = Object.keys(corrections);

  const handleChange = (data) =>{
    let word =''
    if(data[data.length -1]===' ')
    {
      setText(data.split(' ').filter((entry)=>{
        if(keyS.indexOf(entry)>=0)
        {
          word = entry
          return  false
        }
        else
        return entry + ' '
      }).join(' '))
      if(word!==''){
      setText((prev)=>{
        return prev+corrections[word]+' '
      })}
    }
    else
    setText(data)
  }


  return (
    <div className="App">
      <textarea type="textarea" cols="70" rows="15" value={text} onChange={(e)=>handleChange(e.target.value)} />
    </div>
  );
}

export default App;
