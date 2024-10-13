import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from "./themeContext";

import { useContext } from 'react';

function ToggleTheme() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
   
    const toggleTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };
   
    return (
      <ThemeContext.Provider value={currentTheme}>
        <button onClick={toggleTheme}> Toggle Theme </button>
        <ClickCounter />
      </ThemeContext.Provider>
    );
   }
   
   export default ToggleTheme;
   
export function ClickCounter() {
 const [count, setCount] = useState(0);

 const handleClick = () => {
   setCount(count + 1);
 };

 useEffect(() => {
   document.title = `You clicked ${count} times`;
 }, [count]);
 
const theme = useContext(ThemeContext);
return (
   <div
     style={{
       background: theme.background,
       color: theme.foreground,
       padding: "20px",
     }}
   >
     <p>You clicked {count} times </p>
     <button
       onClick={() => setCount(count + 1)}
       style={{ background: theme.foreground, color: theme.background }}
     >
       Click me
     </button>
   </div>
 );
 
}
/*
export function Favorite()
{
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    // Toggle the favorite state
    setIsFavorite(!isFavorite);

    // Here you would typically make an API call to update the favorite status on the server
    // For example:
    // fetch(`/api/items/${itemId}/favorite`, { method: 'POST' })
    //   .then(response => {
    //     // Handle the response from the server
    //   });
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? 'Unfavorite' : 'Favorite'}

    </button>
  );
}
*/
export function Notes()
{
  //goals. to access the notes title and put them on the list somehow
  
 




}


 /*
  useEffect(() => 
    {      
      if(true)
        {
          <button>f</button>
        }
        else
        {
          <button>x</button>
        }
      
    }
);

  return <div>
    <button><img src = "favOutline.JPG" alt = "outline"></img> </button>
    <button><img src = "fav.JPG" alt = "favorite"></img> </button>
    </div>

    */