// MusicBrainz API: an interface to Music Brainz Database

document.getElementById('artistname').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchArtist();
    }
}); // trigger function when press "enter"


function searchArtist(){
    // Preprocess input + error handling
    const searchInput = document.getElementById('artistname').value.trim()
    if (searchInput === '') {
        alert('Please enter an artist name');
        return;
    }
    // create URL
    const baseURL = 'https://musicbrainz.org/ws/2/artist/?query=';
    const format = '&fmt=json'; // format should be in JSON
    const searchURL = baseURL + encodeURIComponent(searchInput) + format;
    
    // pass the input to the next function 
    fetch(searchURL) // Uses the fetch API to make a GET request to the constructed searchURL.
    .then(response => response.json()) // convert to JSON format
    .then(data => {
        displayArtists(data.artists); //The displayArtists function is called with the list of artists retrieved from the API.
        // console.log(data.artists)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    
}


function displayArtists(artist){ //data.artist. Takes an array of artist objects (artist) as a parameter.
    const searchResult = document.getElementById('results');
    searchResult.innerHTML = ''; //Selects the element with the ID results and clears its current content.
    
    if (artist.length ===0){
        searchResult.textContent = 'No artists found';
        return; // exit the code
    }
    
    const resultList = document.createElement('ul'); // create <ul></ul> use to contain artists
    artist.forEach(artist => { // Iterates over each artist object in the artist array.
        const listItem = document.createElement('li'); // list 有點點
        const link = document.createElement('a');
        link.textContent = artist.name;
        link.href = '#'; // <a href = "#">Taylor</a>
        link.onclick = () => fetchAlbums(artist.id);
        listItem.appendChild(link); 
        // <ul><li><a href = "#">Taylor</a></li> <li><a href = "#">Taylor Swift</a></li> </ul>
        resultList.appendChild(listItem); 
        console.log(resultList);
    });
    searchResult.appendChild(resultList);
    
}

// check network
function fetchAlbums(artistID){
    // create URL
    const baseURL = 'https://musicbrainz.org/ws/2/release/?artist=';
    const format = '&fmt=json'; // format should be in JSON
    const albumURL = baseURL + artistID + format;
    
    fetch(albumURL) // fetch API, returns a Promise that resolves to the Response object representing the response to the request.
    
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response error'); // If error, it will go to .catch block
        }
        return response.json(); //If the response is OK, it returns a Promise that resolves to the result of parsing the response body text as JSON.
        // This means the next .then block will receive the parsed JSON data.
    })
    .then(data => { // data is the response.json
        displayAlbumsResults(data.releases); //data.releases contains the album information to be displayed.
    })
    .catch(error => {
        console.error('Error fetching albums:', error);
    });
}

//

function displayAlbumsResults(albuminfo){
    const albumResultDiv = document.getElementById('albumResults');
    albumResultDiv.innerHTML = "";
    if (albuminfo.length === 0) {
        albumResultDiv.textContent = 'No albums found for this artist';
        return;
    }

    // 已經有<tbody id = "albumResults"></tbody> ， 以下就不用了
    // const resultTable = document.createElement('tbody'); // create <ul></ul> use to contain artists
    // resultTable.setAttribute("id", "albumTableBody");

    const albumtablerow = document.createElement('tr'); 
    albuminfo.forEach(album => { // Iterates over each album object in the album array.
        
        const albumtablecell1 = document.createElement('td');
        albumtablecell1.textContent = album.date; // <td scope="col">SummerTeeth</th>
        albumtablecell1.setAttribute("class", "col");
        
        const albumtablecell2 = document.createElement('td');
        const albumLink = document.createElement("a");
        albumLink.href = album.link; // <a href = "#">Taylor</a>
        albumtablecell2.setAttribute("class", "col")

        albumtablecell2.appendChild(albumLink);
        // albumtablecell.onclick = () => fetchAlbums(album.id);
        
        albumtablerow.appendChild(albumtablecell1); 
        albumtablerow.appendChild(albumtablecell2);

    });
    albumResultDiv.appendChild(albumtablerow);
    
};