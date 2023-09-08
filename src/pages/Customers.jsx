import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Sort,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Toolbar,
  Selection,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy.js";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Sort,
            Edit,

            ExcelExport,
            PdfExport,

            Toolbar,
            Selection,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
