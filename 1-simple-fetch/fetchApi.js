function buildRow(text){
    const row = document.createElement("td");
    row.innerText = text;
    return row;
}

function buildTable(data) {
    const table = document.createElement("table");
    const tHead = document.createElement("thead");
    const tHeadRow = document.createElement("tr");
    const tBody = document.createElement("tbody");

    tHeadRow.appendChild(buildRow("id"));
    tHeadRow.appendChild(buildRow("name"));
    tHeadRow.appendChild(buildRow("username"));
    tHeadRow.appendChild(buildRow("email"));
    tHead.appendChild(tHeadRow);

    for(let item of data){
        const tBodyRow = document.createElement("tr");
        tBodyRow.appendChild(buildRow(item.id));
        tBodyRow.appendChild(buildRow(item.name));
        tBodyRow.appendChild(buildRow(item.username));
        tBodyRow.appendChild(buildRow(item.email));
        tBody.appendChild(tBodyRow);
    }
    table.appendChild(tHead);
    table.appendChild(tBody);
    return table;
}

// Fetch fake json data
const URL = 'https://jsonplaceholder.typicode.com/users/';
fetch(URL)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        document.body.appendChild(buildTable(json));
    })
