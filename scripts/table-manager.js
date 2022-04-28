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
        
        const tr = document.createElement("tr"); 

        for (let value of values) {
            const td = document.createElement("td");
            td.innerText = value;
            tr.appendChild(td);
        }

        return tr;
    },
    createTableBody: function(headers, values) {
        const body = document.createElement("tbody"); 

        for (let obj of values) {
            let row = this.createTableRow(this.getValuesInOrder(headers, obj));
            body.appendChild(row);
        }
        return body;
    },
}