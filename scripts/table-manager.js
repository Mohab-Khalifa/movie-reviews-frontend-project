const tableManagerPrototype = {
    createTableHeader: function(headers) {
        let head = document.createElement("thead");
        for (let header of headers) {
            let th = document.createElement("th");
            th.innerText = header;
            head.appendChild(th);
        }
        return head;
    },
    createTableRow: function(values) {
        // values in order they appear as an array
        // ['1', 'bob', 'fred'] creates <tr><td>1</td><td>bob</td><td>fred</td></tr>
        const tr = document.createElement("tr"); // create a table row element, <tr></tr>

        for (let value of values) {
            const td = document.createElement("td");
            td.innerText = value;
            tr.appendChild(td);
        }

        return tr;
    },
}