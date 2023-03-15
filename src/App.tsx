import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Components/search';
import SearchResults from './Components/search-results';
import ProgressBar from './Components/progress-bar';

function App() {
  //not the best but works for now;
  const SUBSCRIPTION_KEY:string = 'e0f1aacf53c640c1a1158b60466d9d12';
  const [error, setError] = useState<String|null>(null);
  const [data, setData] =  useState<any|null>(null);
  const [searching, setSearching] = useState(false);

  const searchBing = useCallback(async (q:string) => {
    try {
      if(!(q||'').trim()) {
        return;
      }
      setSearching(true);
      const url: string = `https://api.bing.microsoft.com//v7.0/search?q=${encodeURIComponent(q)}`;
      const res =  await fetch(url, {
        headers: {
          'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY
        }
      });
      if(!res.ok) {
        throw new Error('There was a problem getting the data');
      }
      const searchRes =  await res.json();
      console.log(searchRes);
      if(searchRes.error) {
        throw new Error(searchRes.error.message);
      }
    
      setData(searchRes);
    } catch (ex: any) {
       setError(ex.message);
    } finally  {
      setSearching(false);
    }
      
      
  },[])
  return (
    <div style={{position: 'relative'}}>
    {searching ? <div style={{position: "absolute",top: 0, width: '100%'}}><ProgressBar indeterminate={true} /></div>:null}
    <div className="container">
      <Search onSubmit={searchBing} />
      <div>{error}</div>
     {data ?
      <SearchResults data={data} />
      : null }
    </div>
    </div>
  );
}

export default App;
