import React from 'react'
import { Link } from 'react-router-dom'
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiOutlinePlus } from 'react-icons/ai'
import DP from '../../../assets/dashboard/img.svg'
import ArrowDown from '../../../assets/arrow-down.svg'
import Head from '../../../components/users/Head'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"


const options = {
  filter: false,
  selectableRows: "none",
};

const Products = () => {
  const [data, setData] = React.useState([])
  const columns = [
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
    <Dashboard>
        <main className='flex-1'>
        <div className='p-3 px-3 lg:pr-20 xl:pr-36 bg-white flex items-center justify-between'>
            <div className='text-[#69707D]'>
                Business {'>'} Hard rock cafe
            </div>
            <div className='flex items-center gap-4 text-sm'>
              <Link to="/users/business" className='py-1.5 px-4 font-medium bg-[#F1F1F1]'>Overview</Link>
              <Link to="/users/products" className='py-1.5 px-4 bg-orange text-white'>Marketplace</Link>
              <Link to="/users/jobs" className='py-1.5 px-4 bg-[#F1F1F1]'>Jobs</Link>
            </div>
            <div className='flex items-center gap-1'>
              <img src={DP} alt="" />
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <section className='p-8 px-4 sm:px-8'>
            <div className='flex items-center justify-between mb-3'>
              <h2 className='text-xl text-orange font-medium'>Listed Products</h2>
              <Link to="/users/add-product">
                <Button variant='product' className='px-4 py-2 text-xs flex items-center'>
                      <AiOutlinePlus className='mr-2' />
                  Add new Product
                </Button>
              </Link>
            </div>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"Products"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </ThemeProvider>
          </section>

        </main>
    </Dashboard>
  )
}

export default Products