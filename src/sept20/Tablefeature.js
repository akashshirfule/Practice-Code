import React, { useEffect, useState } from "react";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const Tablefeature = () => {
  const [rec, setRec] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setRec(data);
        console.log(data);
      });
  }, []);

  const columns = [
    { dataField: "id", text: "Id", sort: true,filter: textFilter() },
    { dataField: "username", text: "User_Name", sort: true,filter: textFilter() },
    { dataField: "name", text: "Name", sort: true, filter: textFilter() },
    { dataField: "email", text: "Email", sort: true, filter: textFilter()},
  ];

  const pagination = paginationFactory({
        page: 1,
        sizePerPage: 2,
        lastPageText: ">>",
        firstPageText: "<<",
        nextPageText: ">",
        prePageText: "<",
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
        },
  });



  return (
    <div className="bg-info">
      <h1>Table Feature </h1>
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={rec}
        pagination={pagination}
        filter={filterFactory()}
      ></BootstrapTable>  
    </div>
  );
};
export default Tablefeature;
