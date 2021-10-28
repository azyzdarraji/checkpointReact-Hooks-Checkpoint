import React from 'react';
import { useState } from 'react';
import NavBar from './components/NavBar';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList' ;
import Description from './components/Description';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  const [movies,setMovies]=useState([
    {
      title: "MY SALINGER YEAR",
      description:
        "New York in the 90s: After leaving graduate school to pursue her dream of becoming a writer, Joanna (Margaret Qualley)... [More]",
      posterURL:
        "https://resizing.flixster.com/sfH6nYIYf5cz_UUos0iW3NnIWQI=/fit-in/180x240/v2/https://resizing.flixster.com/gPw-Ukdtm3Mmjiy3GazJjfbpM6c=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzFjODU5Y2U2LTBjZDAtNDllMi05MDgwLWEzZGQzYTQ2OWUyMi5qcGc=",
      rating: 3,
      id:1 ,
      trailer:"https://www.youtube.com/embed/05jdkAUwGPM"
    },
    {
      title: "PALMER",
      description:
        "Although it traffics in familiar territory, Palmer is elevated by worthy themes and a strong ensemble led by an impressive Justin Timberlake.",
      posterURL:
        "https://resizing.flixster.com/BLubIcz5NZqRGfYiL6SIyqHk4R0=/fit-in/180x240/v2/https://resizing.flixster.com/dLM2pWQrPJ9TTh6gZlQc0VwmysM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2E5MWQ3ZjVhLWI0MDMtNDIwMi1iMWIxLTJkZThkZjI3NzY5MC5wbmc=",
      rating: 1,
      id:2,
      trailer:"https://www.youtube.com/embed/OABSI3eYOk0"
    },
    {
      title: "CRUELLA",
      description:
        " Cruella can't quite answer the question of why its title character needed an origin story, but this dazzling visual feast is awfully fun to watch whenever its leading ladies lock horns.",
      posterURL:
        "https://resizing.flixster.com/Gh1CuxxlUidvSsHB2WEl6cvdXQo=/fit-in/180x240/v2/https://resizing.flixster.com/2nDztWKJ5qSkaR7c7o2Rlak_QSg=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2ViZTM1ZTM1LWZhODAtNDFhMS05MjM4LTQ2MWM1NWRmMzU4Ny5qcGc=",
      rating: 2,
      id:3,
      trailer:"https://www.youtube.com/embed/mvGhDqz6oFM"
    },
    {
      title: "PIXIE",
      description:
        "Pixie borrows shamelessly from multiple like-minded heist thrillers; fortunately, Olivia Cooke's outstanding lead performance makes for a great getaway vehicle.",
      posterURL:
        "https://resizing.flixster.com/FcTdLz3e3t1ZsZ8wYVE_SmFrIXc=/fit-in/180x240/v2/https://resizing.flixster.com/jmEdn2WqxrQBSDE8IbGzdIvV5ho=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2I2ODRlYjhkLTUyNmItNGNkZS1hODdjLTIzYmMyNjIwZTQyZC5qcGc=",
      rating: 3,
      id:4,
      trailer:"https://www.youtube.com/embed/AA5jLSK4vi0"
    },
    {
      title: "THE WORLD TO COME",
      description:
        "The World to Come is made from ingredients that will be familiar to fans of period forbidden romance movies, but they're given fresh life thanks to an excellent cast.",
      posterURL:
        "https://resizing.flixster.com/f7y4hoo0V-xTjeEUy2dX41OMXrc=/fit-in/180x240/v2/https://resizing.flixster.com/MlZY6mXPXdOd4FBUyUbQ9zmIpQE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzkxODVkYjM1LWE0ZWMtNDY0ZC05OTljLTFlMzU3MzAyYTE0NS5qcGc=",
      rating: 1,
      id:5,
      trailer:"https://www.youtube.com/embed/Q3DlKNHheUg"
    },
    {
      title: "THE MAURITANIAN",
      description:
        " The Mauritanian takes a frustratingly generic approach to a real-life story that might have been inspirational in other hands, but Tahar Rahim's performance elevates the uneven material.",
      posterURL:
        "https://resizing.flixster.com/BAx05V_xYqowf0K3mAwm7KeYAfk=/fit-in/180x240/v2/https://resizing.flixster.com/ByX0XbCBfxRZP471Iqoih7sPFk8=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzI3MGY3MDdiLWZiMTgtNGExYi1iZDkwLWQ1YmJiNzJiMzY2NS5qcGc=",
      rating: 2,
      id:6,
      trailer:'https://www.youtube.com/embed/sRSGg54yvjQ' 
    }
  ]);
  const [searchtitle,setSearchtitle]=useState('')
  const addMovie=(movie)=>setMovies([...movies,movie])
  const [searchrating, setSearchrating]=useState(1)
  return (
    <Router>
    <div className="App">
    
       
        <NavBar  setSearchtitle={setSearchtitle} setSearchrating={setSearchrating}/> <br></br>
      <Route exact path ="/" >
        <AddMovie addMovie={addMovie} />
        <MoviesList  movies={movies} searchtitle={searchtitle} searchrating={searchrating}/>
      </Route>
      <Route path="/description/:id" render={(props)=><Description movies={movies} {...props} />} />
        
      
    </div>
    </Router>
  );
}

export default App;
