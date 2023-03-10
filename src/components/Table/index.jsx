import React from "react";
import MUIDataTable, {
  MUIDataTableColumnDef,
} from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MdOutlineDelete } from "react-icons/md";


export default function Table({ data }) {

    const overrideColumns= Object.keys(data[0])?.map((column) => {
        if (data[0][column]?.custom) {
            return {
                name: column,
                label: column,
                options: {
                    filter: true,
                    sort: true,
                    customBodyRender: data[0][column]?.custom,
                },
            };
        }
        else if (column === "actions") {
            return  {
                name: "actions",
                label: "Actions",
                options: {
                  filter: true,
                  sort: true,
                  customBodyRender: (value, tableMeta) => {
                    // console.log("tableMeta", tableMeta)
                    return (
                      <div className="flex items-center gap-4">
                        <button className="btn-outline btn whitespace-nowrap border-green-400 text-green-400">
                          View Profile
                        </button>
                        <span className="inline-block rounded-md border-2">
                          <MdOutlineDelete size="1.2rem" color="" />
                        </span>
                      </div>
                    );
                  },
                },
              };
        } else if (column === "status") {
            return       {
                name: "status",
                label: "Status",
                options: {
                    filter: true,
                    sort: true,
                    customBodyRender: (value) => {
                        return (
                        <span
                            className={`inline-block rounded-full p-1.5 px-4 ${
                            value === "Active" ? "bg-green-200 text-primary" : value === "Pending"?  "bg-[#B200A133] text-[#B200A1]" : "bg-red-200 text-red-600"
                            }`}
                        >
                            {value}
                        </span>
                        );
                    },
                },
              };
        }
        return {
            name: column,
            label: column[0].toUpperCase() + column.slice(1),
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value) => {
                    return <span className="inline-block">{value}</span>;
                },
            },
        };
    });

    const defaultColumns = [
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value) => {
            return <span className="inline-block">{value}</span>;
          },
        },
      },
      {
        name: "email",
        label: "Email",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value) => {
            return <span className="inline-block">{value}</span>;
          },
        },
      },
      {
        name: "location",
        label: "Location",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value) => {
             return <span className="inline-block">{value}</span>;
          },
        },
      },
      {
        name: "category",
        label: "Category",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value) => {
            return <span className="inline-block">{value}</span>;
          },
        },
      },
      {
        name: "status",
        label: "Status",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value) => {
                return (
                <span
                    className={`inline-block rounded-full p-1.5 px-4 ${
                    value === "Active" ? "bg-green-200 text-primary" : value === "Pending"?  "bg-[#B200A133] text-[#B200A1]" : "bg-red-200 text-red-600"
                    }`}
                >
                    {value}
                </span>
                );
            },
        },
      },
      {
        name: "actions",
        label: "Actions",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value, tableMeta) => {
            // console.log("tableMeta", tableMeta)
            return (
              <div className="flex items-center gap-4">
                <button className="btn-outline btn whitespace-nowrap border-green-400 text-green-400">
                  View Profile
                </button>
                <span className="inline-block rounded-md border-2">
                  <MdOutlineDelete size="1.2rem" color="" />
                </span>
              </div>
            );
          },
        },
      },
    ];
  
    const getMuiTheme = () =>
      createTheme({
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                // padding: '20px',
                color: "black",
                boxShadow: "none",
                backgroundColor: "#F5F5F5",
                // color: '#444444',
                // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
              },
            },
          },
          MuiTable: {
            styleOverrides: {
              root: {
                borderCollapse: "separate",
                borderSpacing: "0 8px",
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              root: {
                borderBottom: "none",
              },
            },
          },
          MuiToolbar: {
            styleOverrides: {
              regular: {
                minHeight: "8px",
              },
            },
          },
          MUIDataTableHeadCell: {
            styleOverrides: {
              root: {
                color: "#000",
                fontWeight: "700",
                backgroundColor: "#F5F5F5",
                textTransform: "lowercase",
                padding: "0px 20px",
              },
            },
          },
          MUIDataTableBodyRow: {
            styleOverrides: {
              root: {
                backgroundColor: "#fff",
              },
            },
          },
          MUIDataTableBodyCell: {
            styleOverrides: {
              root: {
                backgroundColor: "#fff",
                color: "#444444d0",
                fontWeight: "600",
                wordBreak: "normal",
              },
              stackedHeader: {
                display: "none",
              },
            },
          },
          MUIDataTableHeadRow: {
            styleOverrides: {
              root: {
                zIndex: 1,
                position: "relative",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                padding: 0,
                color: "#000",
                fontWeight: "500",
                backgroundColor: "",
                display: "block",
              },
            },
          },
          MUIDataTableToolbar: {
            styleOverrides: {
              root: {
                padding: 0,
              },
              titleText: {
                fontSize: "18px",
                paddingBottom: "10px",
                fontWeight: "600",
              },
            },
          },
        },
      });
  
 
    return (
        <section>
            <h1 className="text-3xl">Table Component</h1>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                title={""}
                data={data}
                columns={overrideColumns.length > 0 ? overrideColumns : defaultColumns}
                options={options}
                />
            </ThemeProvider>
        </section>
  );
}
