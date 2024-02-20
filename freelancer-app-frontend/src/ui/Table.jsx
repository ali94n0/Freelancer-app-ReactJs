

function Table({children}) {
    return (
        <div className="bg-secodary-50 overflow-x-auto p-2">
            <table>
                {children}
            </table>
        </div>
    );
}

export default Table;

function tableHeader ({children}){
    return(
        <tr className="table-row  ">{children}</tr>
    )
}
function tableBody({children}){
    return(
        <tbody >{children}</tbody>
    )
}
function tableRow({children}){
    return(
        <tr >{children}</tr>
    )
}

Table.Header = tableHeader;
Table.Body = tableBody;
Table.Row= tableRow