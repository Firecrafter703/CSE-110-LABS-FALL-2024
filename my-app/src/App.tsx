import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Label, Note } from "./types"; 
import { dummyNotesList } from "./constants"; 
import { ClickCounter} from "./hooksExercise";

 
function Favorite()
{
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    // Toggle the favorite state
    setIsFavorite(!isFavorite);
  };

  return (
	
    <button onClick={toggleFavorite}>
      {isFavorite ? 'favorite' : 'unfavorite'}
    </button>
   

  // toggleFavorite
  );
}

function List()
{
	let FavoList: string[] = ["a", "b", "c"];

	
		<div>
		<header>{"Favorite LisT"}</header>
		</div>
	
}


function App() {
//this whole state is the intial skeleton for the note



   
  let bool = false;

 


const [notes, setNotes] = useState(dummyNotesList); 
const initialNote = {
   id: -1,
   title: "",
   content: "",
   label: Label.other,
   button: "",
   favorite: bool
   
   //make it a toggle function to change from false and true
   

 	};
	 const [isFavorite, setIsFavorite] = useState(false);

	 const toggleFavorite = () => {
	   // Toggle the favorite state
	   setIsFavorite(!isFavorite);
	 };

	 const toggleFavBool = () =>
		{
			
		
		}

	

//this sets the state
const [createNote, setCreateNote] = useState(initialNote);

const [selectedNote, setSelectedNote] = useState<Note>(initialNote);

const removeNote = () =>
	{
         setSelectedNote(initialNote);

	}


const createNoteHandler = (event: React.FormEvent) => {
  event.preventDefault();
  console.log("title: ", createNote.title);
  console.log("content: ", createNote.content);
  console.log("button: ", createNote.button);
  console.log("fav", createNote.favorite);
  createNote.id = notes.length + 1;
  setNotes([createNote, ...notes]);
  setCreateNote(initialNote);

};

  return (
    
 //on change is an event listner. Its used in situations like the screen updating the letter you type
  
<div className='app-container'>
  	<form className="note-form" onSubmit={createNoteHandler}>
    	<div>
      	<input
        	placeholder="Note Title"
        	onChange={(event) =>
          	setCreateNote({ ...createNote, title: event.target.value })}
        	required>
                 	</input>
    	</div>

    	<div>
      	<textarea
        	onChange={(event) =>
          	setCreateNote({ ...createNote, content: event.target.value })}
        	required>
      	</textarea>
    	</div>

  <div>
     	<select
       	onChange={(event) =>                                      //as unkown as Label is a type cast
         	setCreateNote({ ...createNote, label: event.target.value as unknown as Label })}
       	required>
       	<option value={Label.personal}>Personal</option>
       	<option value={Label.study}>Study</option>
       	<option value={Label.work}>Work</option>
       	<option value={Label.other}>Other</option>
     	</select>
   	</div>





    	<div><button type="submit">Create Note</button></div>
  	</form>

	

  	<div className="notes-grid">
    	{notes.map((note) => (
      	<div
        	key={note.id}
        	className="note-item"
      	>
        	<div className="notes-header">
          	<button>x</button>

        	</div>
        	<h2 contentEditable = "true"> {note.title} </h2>
            <p contentEditable = "true"> {note.content} </p>
        	<p contentEditable = "true"> {note.label } </p>
			

			<button onClick={toggleFavorite}>
            {isFavorite ? 'favorite' : 'unfavorite'}
             </button>
			
			<Favorite/>
      	</div>
		
		 
    	))}
  	</div>
	  
	 
	</div>  

	);
}

export default App;
