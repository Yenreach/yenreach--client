import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MdOutlineDelete } from "react-icons/md";

const options = {
    filter: false,
    selectableRows: "none",
    responsive: 'scrollMaxHeight',
  };
  
export default function Table({ data, columns }) {

    const overrideColumns= Object.keys(data[0])?.map((column) => {
        if (column === "photos" || column === "categories") {
            return {
                name: "phot",
                label: "Phot",
                options: {
                    filter: true,
                    sort: true,
                    customBodyRender: (value) => {
                        // console.log("value", value)
                        return <span className="inline-block">No</span>;
                    },
                },
            };
        } 
        else if (data[0][column]?.custom) {
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
                    // console.log("value", value)
                    return <span className="inline-block">{value}</span>;
                },
            },
        };
    });

    const defaultColumns = [
        {
          name: "project",
          label: "PROJECT",
          options: {
           filter: true,
           sort: true,
           customBodyRender: (value) => {
            return (
                <span className="inline-block">{value}</span>  
            );
          },
          },
        },
        {
          name: "endpoint",
          label: "ENDPOINT",
          options: {
           filter: true,
           sort: true,
           customBodyRender: (value) => {
            return (
                <span className="inline-block">{value}</span>  
            );
          },
          },
        },
        {
          name: "source",
          label: "SOURCE",
          options: {
           filter: true,
           sort: true,
           customBodyRender: (value, index) => {
            return (
              <span className="inline-block">{value}</span>
            );
          },
          },
        },
        {
          name: "timestamp",
          label: "DATE & TIME",
          options: {
           filter: true,
           sort: true,
            customBodyRender: (value) => {
              return (
                <span className="inline-block">{value}</span>   
              );
            },
          },
        },
        {
          name: "reference",
          label: "REFERENCE",
          options: {
           filter: true,
           sort: true,
           customBodyRender: (value) => {
            return (
                <span className="inline-block">{value}</span>  
            );
          },
          },
        },
        {
          name: "status",
          label: "STATUS",
          options: {
           filter: true,
           sort: true,
           customBodyRender: (value) => {
            return (
              <span className="inline-block">{value}</span>  
            );
          },
          },
        },
        {
          name: "action",
          label: "ACTION",
          options: {
           filter: true,
           sort: true,
           customBodyRender: (value) => {
            return (
              <span className="inline-block">{value}</span>  
          ); 
          },
          },
        },
       ];
  
   
  const getMuiTheme = () => 
  createTheme({
      components: {
        // MUIDataTable: {
        //     responsiveStacked: {
        //       maxHeight: 'none',
        //       overflowX:'auto'
        //     },
        //   },
          MuiPaper: {
              styleOverrides:{
                root: {
                  borderRadius: '14px',
                  padding: '20px',
                  boxShadow: 'none',
                  // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
              }}
          },
          MuiToolbar: {
              styleOverrides:{regular: {
                  minHeight: '8px',
              }}
          },
          MUIDataTableBodyCell: {
              styleOverrides:{
                root: {
                    backgroundColor: "#fff",
                    color: "black",
                    fontWeight: "500",
                    wordBreak: "normal",
                },
                stackedHeader: {
                    display: "none"
                }
              }
            },
          MUIDataTableHeadCell: {
              styleOverrides:{
                  root: {
                      backgroundColor: "#f9fafb",
                      textTransform: "uppercase",
                  }
                }
          },
          MUIDataTableHeadRow: {
            styleOverrides:{
                root: {
                  zIndex: 1,
                  position: "relative",
                }
              }
        },
          MuiButton: {
              styleOverrides:{
                  root: {
                      padding: 0,
                      color: "#232f3e",
                      backgroundColor: "",
                      display: "block",
                  }
                }
          },
          MUIDataTableToolbar: {
            styleOverrides:{
                root: {
                    padding: 0,
                },
                titleText: {
                  fontSize: "18px",
                  paddingBottom: "10px",
                  fontWeight: "600",
              }
              }
        },
      }
  });

 
    return (
        <section className="overflow-auto">
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                title={"Products"}
                data={data}
                columns={overrideColumns.length > 0 ? overrideColumns : defaultColumns}
                options={options}
                />
            </ThemeProvider>
        </section>
  );
}
