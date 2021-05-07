import { useEffect, useState } from "react";
import Header from "./components/Header";
import FormQuote from "./components/quotes/FormQuote";
import QuoteList from "./components/quotes/QuoteList";

import "./assets/scss/app.scss";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState('');
  
  const getQuotes= async () =>{
    let endpoint= `https://quote-garden.herokuapp.com/api/v3/quotes`;
    console.log(endpoint);
    const response = await fetch(endpoint);
    const quotes = await response.json();
    setQuotes(quotes.data);
    setLoading(false);
  };
  const getQuotesAuthor= async (author) =>{
    let endpoint= `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`;
    console.log(endpoint);
    const response = await fetch(endpoint);
    const quotes = await response.json();
    setQuotes(quotes.data);
    setLoading(false);
  };
  
  useEffect(()=>{
    if(author !== ''){
      getQuotesAuthor(author);
    }else{
      getQuotes();
    }

  },[author]);

  return (
    <>
      <Header />
      <FormQuote setAuthor={setAuthor} setLoading={setLoading} getQuotes={getQuotes}/>
      {
        loading ? <Loading/>:
      <QuoteList quotes={quotes} title={author} />
      }
      <Footer/>
    </>
  );
}

export default App;
//
