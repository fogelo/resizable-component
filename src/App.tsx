import React, {useEffect, useRef} from "react";
import "./App.css";
import TableC from "./TableC";
import TableContent from "./TableContent";


const tableHeaders = [
    "Items",
    "Order #",
    "Amount",
    "Status",
    "Delivery Driver"
];

function App() {
    // @ts-ignore
    return (
        <div className="app">
            {/*<Table/>*/}
            <TableC
                headers={tableHeaders}
                minCellWidth={120}
                tableContent={<TableContent />}
            />
        </div>
    );
}

export default App;
