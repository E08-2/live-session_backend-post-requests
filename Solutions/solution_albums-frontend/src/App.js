import React, {useState} from "react";

const App = () => {
    const [band, setBand] = useState("");
    const [albumTitle, setAlbumTitle] = useState("");
    const [albumYear, setAlbumYear] = useState("");
    
    // Function to change the state variable corresponding to a form input the user tried to change
    const changeData = event => {
        switch(event.target.name) {
            case "band":
                setBand(event.target.value);
                break;
            case "title":
                setAlbumTitle(event.target.value);
                break;
            case "year":
                setAlbumYear(event.target.value);
                break;
            default:
                break;
        }
    }

    // Function to submit the form to our server using a POST request
    const submitForm = event => {
        event.preventDefault();

        // Create new album object
        const newAlbum = {
            band: band,
            albumTitle: albumTitle,
            albumYear: albumYear
        }

        // Set up the post request we will shortly make
        const settings = {
            method: "POST",
            body: JSON.stringify(newAlbum), // "Translate" the data to send in the request body into a JSON string
            headers: {
                "Content-Type": "application/json"
            }
        }

        // Make a post request to our server, containing the new data in req.body
        fetch("http://localhost:3000/new-album", settings)
        .then(response => response.json())
        .then(data => {
            // When we have received our response from the server, and "translated" it back to standard JS
            // Reset the values of the inputs
            setBand("");
            setAlbumTitle("");
            setAlbumYear("");
            // Log the array of albums we received back from the server
            console.log(data);
        })
    }

    return (
        <div>
            <h1>Add an Album to the Collection!</h1>

            <form onSubmit={submitForm}>
                <div>
                    <label>Band</label>
                    <input name="band" onChange={changeData} value={band} />
                </div>
                <div>
                    <label>Title</label>
                    <input name="title" onChange={changeData} value={albumTitle} />
                </div>
                <div>
                    <label>Year</label>
                    <input name="year" onChange={changeData} value={albumYear} />
                </div>
                <button>Submit Album</button>
            </form>
        </div>
    )
}

export default App;