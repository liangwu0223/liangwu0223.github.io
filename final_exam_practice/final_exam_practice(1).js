// Define the parent item I will need to append all the child items
var parentElement = document.getElementById("ochreTableBody");

// Define API URL
const url = "https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496";
// const url = "sample-1.xml"

// First function being called once <body> HTML is loaded
function loadXML(){
    // Chain the next function to create the XHR
    XMLrequest(url);
    console.log('loadXML - ok');
}

function XMLrequest(link){ 
    const connect = new XMLHttpRequest();
    connect.onreadystatechange = function(){ // check the state of the object I just created (connect)
        if(this.readyState == 4 && this.status == 200){ // conditional check
            // if all is well with the API call
            listTexts(this.responseXML);
        };
    };
    // open API call
    // reach out hand shake
    connect.open('GET', link, true);// GET something from the link
    connect.send();
    console.log('XMLrequest - ok');
}

// Create an unordered list that displays all the item names from the XML file (see screen shot below)
// Find this data in the field located in the XML file at ochre/items/spatialUnit/identification/label
// The first one is RS 15.001, for example.

function listTexts(sourceXML){
    console.log(sourceXML)

    const unitLists = sourceXML.getElementsByTagName('spatialUnit');
    console.log(unitLists) // textLists is HTMLcollection, aka HTML formatted information

    for (let i=0; i < unitLists.length; i ++){
        // create a table row, for each item in the textLists, I want a table row 
        var li = document.createElement('li');
        li.setAttribute('class', 'ochreTableRows');
        li.setAttribute('id', 'rows'+i);
        li.textContent = unitLists[i].children[0].children[0].innerHTML;
        console.log(li) // <tr id="rows0" class="ochreTableRows">
        document.getElementById('unorderedlist').appendChild(li); 

    }

}