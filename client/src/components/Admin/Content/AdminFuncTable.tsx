import React, { useEffect, useState } from "react";
import { AdminTable } from "../Content/AdminTable";
import { AdminButton } from "../Content/AdminButton";
import Swal from "sweetalert2";
import { CategoryType } from "../../../DataType";
import { AdminInputTitle } from "./AdminInputTitle";

interface col {
  name: string;
  selector: string;
  sortable: boolean;
}
interface props {
  tableName: string;
  tableTitle: string;
  columns: Array<col>;
}

export const AdminFuncTable = ({ tableName, tableTitle, columns }: props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState({
    allSelected: false,
    selectedCount: 0,
    selectedRows: []
  });
  const getTableData = () => {
    fetch(`/api/${tableName}`).then(res => {
      res.json().then(data => {
        setData(data);
        setLoading(false);
      });
    });
  };
  const deleteTableRows = async () => {
    if (selectedState.allSelected) {
      Swal.fire({
        title: `<p class="text-admin-title">Are you sure?</p>`,
        html: `<p class="text-admin-title">You gonna delete all rows</p>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#BA3632",
        cancelButtonColor: "#2799E9",
        confirmButtonText: "Yes, delete it!",
        background: "#1E2A31"
      }).then(async result => {
        if (result.value) {
          const res = await fetch(`/api/${tableName}/truncate`, {
            method: "DELETE",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            }
          });
          if (res.status === 200) {
            const { msg } = await res.json();
            Swal.fire({
              title: '<p class="text-admin-title">DELETED</p>',
              html: `<p class="text-admin-title">${msg}</p>`,
              background: "#1E2A31",
              confirmButtonColor: "#2799E9"
            });
            getTableData();
          } else {
            const { errors } = await res.json();
            Swal.fire({
              title: '<p class="text-admin-title">ERROR</p>',
              html: `<p class="text-admin-title">${errors[0].message}</p>`,
              background: "#1E2A31",
              confirmButtonColor: "#2799E9"
            });
          }
        }
      });
    } else if (selectedState.selectedCount === 0) {
      Swal.fire({
        title: `<p class="text-admin-title">Zero row selected</p>`,
        icon: "warning",
        background: "#1E2A31"
      });
    } else {
      Swal.fire({
        title: `<p class="text-admin-title">Are you sure?</p>`,
        html: `<p class="text-admin-title">You gonna delete ${selectedState.selectedCount} rows!</p>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#BA3632",
        cancelButtonColor: "#2799E9",
        confirmButtonText: "Yes, delete it!",
        background: "#1E2A31"
      }).then(async result => {
        if (result.value) {
          const id = selectedState.selectedRows.map((row: CategoryType) => {
            return row.id
          });
          const body = { id: id };
          const res = await fetch(`/api/${tableName}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
          });
          if (res.status === 200) {
            const { msg } = await res.json();
            Swal.fire({
              title: '<p class="text-admin-title">DELETED</p>',
              html: `<p class="text-admin-title">${msg}</p>`,
              background: "#1E2A31",
              confirmButtonColor: "#2799E9"
            });
            getTableData();
          } else {
            const { errors } = await res.json();
            Swal.fire({
              title: '<p class="text-admin-title">ERROR</p>',
              html: `<p class="text-admin-title">${errors[0].message}</p>`,
              background: "#1E2A31",
              confirmButtonColor: "#2799E9"
            });
          }
        }
      });
    }
  };
  useEffect(() => {
    getTableData();
  }, []);
  return loading ? (
    <div>loading table...</div>
  ) : (
    <div>
      <AdminTable
        title={tableTitle}
        data={data}
        columns={columns}
        onSelectedRowsChange={setSelectedState}
      />
      <AdminInputTitle title="Shift + scroll to left right scroll"/>
      <div className="flex items-center mt-4">
        <AdminButton title="Delete selected rows" onClick={deleteTableRows} />
        <AdminButton title="Reload" onClick={getTableData} classname="ml-4" />
      </div>
    </div>
  );
};
