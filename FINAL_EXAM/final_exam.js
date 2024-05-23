// DATA.HTML
// Use XHR or fetch to load the sample XML document.
// Save the following XML file to your FINAL_EXAM directory and load it from there :  xmlSample.xml Download xmlSample.xml.
// MAJOR HINT: display only the spatialUnit nodes that have the attribute n=0. You should not display any spatialUnit where n equals another value.
// NO: <spatialUnit n="-3">
// YES: <spatialUnit n="0"></spatialUnit>

document.addEventListener('DOMContentLoaded', loadXML);

function loadXML() {
    const url = "xmlSample.xml"
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
    // Here OK checked


    for (let i = 0; i < unitLists.length; i ++){
        if (unitLists[i].getAttribute('n')==='0'){
            
            // for each item in the unitLists, I want a table row
            const tr = document.createElement('tr');
            tr.setAttribute('class', 'ochreTableRows');
            tr.setAttribute('id', 'rows' + i);
            document.getElementById('ochreTableBody').appendChild(tr);
            // console.log(tr);

            // populate the cells in each row
            const td1 = document.createElement('td'); // Description
            td1.setAttribute('id', 'col_name_'+i);
            td1.textContent = unitLists[i].children[0].children[0].textContent;
            document.getElementById('rows'+i).appendChild(td1); // Append td to tr
            //<td1 id="col_desc0">
    
            const td2 = document.createElement('td'); // Museum Number
            td2.setAttribute('id', 'col_parish_'+i);
            td2.textContent = unitLists[i].children[4].children[1].children[1].innerHTML;
            document.getElementById('rows'+i).appendChild(td2); // Append td to tr
            //<td2 id="col_desc0">

        };
    };
};
