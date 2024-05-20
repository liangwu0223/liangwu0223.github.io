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

// Make API call, will catch 404 here
// Pass URL here as parameter
// Pass url as parameter - link
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

// const xmlDoc = this.responseXML;

//Parse, select, display text
function listTexts(sourceXML){
    console.log(sourceXML) // 印出我們要process的raw XML file (#document)

    // Populate the webpage
    // document.getElementById('title').innerText = sourceXML.getElementsByTagName('ochre')[0].children[1].innerHTML

    // var licenseText = document.getElementById('license');
    // licenseText.innerText = sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML;
    // licenseText.setAttribute('href', sourceXML.getElementsByTagName('availability')[0].children[0].attributes[0].nodeValue);

    const unitLists = sourceXML.getElementsByTagName('spatialUnit');
    console.log(unitLists) // textLists is HTMLcollection, aka HTML formatted information
    
    for (let i = 0; i < unitLists.length; i ++){
        
        // create a table row, for each item in the textLists, I want a table row 
        var tr = document.createElement('tr');
        tr.setAttribute('class', 'ochreTableRows');
        tr.setAttribute('id', 'rows'+i);
        document.getElementById('ochreTableBody').appendChild(tr); 
        // console.log(tr) // <tr id="rows0" class="ochreTableRows">

        // populate the cells in the row
        var th = document.createElement('th'); //identification
        th.setAttribute('id', 'col_name'+i);
        th.textContent = unitLists[i].children[0].children[0].innerHTML;
        document.getElementById('rows'+i).appendChild(th); // Append th to tr
        // console.log(td) // <th id="col_name0"> 

        var td1 = document.createElement('td'); // Description
        td1.setAttribute('id', 'col_description'+i);
        td1.textContent = unitLists[i].children[1].innerHTML;
        document.getElementById('rows'+i).appendChild(td1); // Append td to tr
        //<td1 id="col_desc0">

        var td2 = document.createElement('td'); // Museum Number
        td2.setAttribute('id', 'col_objecttype'+i);
        td2.textContent = unitLists[i].children[4].children[1].children[1].innerHTML;
        document.getElementById('rows'+i).appendChild(td2); // Append td to tr
        //<td2 id="col_desc0">

        var td3 = document.createElement('td'); // Museum Number
        td3.setAttribute('id', 'language'+i);
        td3.textContent = unitLists[i].children[4].children[5].children[1].innerHTML;
        document.getElementById('rows'+i).appendChild(td3); // Append td to tr
        //<td2 id="col_desc0">
    }

}
var unitLists;

// spatialUnit -> identification -> label 