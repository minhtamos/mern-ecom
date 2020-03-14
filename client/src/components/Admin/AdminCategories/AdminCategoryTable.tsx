import React from "react";
import { AdminFuncTable } from "../Content/AdminFuncTable";

export const AdminCategoryTable = () => {
  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true
    },
    {
      name: "Created At",
      selector: "createdAt",
      sortable: true
    },
    {
      name: "Updated At",
      selector: "updatedAt",
      sortable: true
    }
  ];
  return (
    <AdminFuncTable columns={columns} tableName="category" tableTitle="Category"/>
  )
}