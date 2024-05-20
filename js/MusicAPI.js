// MusicBrainz API: an interface to Music Brainz Database

function searchArtist(){
    // Preprocess input + error handling
    const searchInput = document.getElementById('artistname').value.trim()
    if (searchInput === '') {
        alert('Please enter an artist name');
        return;
    }
    // create URL
    const baseURL = 'https://musicbrainz.org/ws/2/artist/?query=';
    const format = '&fmt=json';
    const searchURL = baseURL + encodeURIComponent(searchInput) + format;
    
    // pass the input to the next function 
    fetch(searchURL)
    .then(response => response.json())
    .then(data => {
        displayArtists(data.artists);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    
}


function displayArtists(artist){


}

function fetchAlbums(){}

function displayAlbums(){}
