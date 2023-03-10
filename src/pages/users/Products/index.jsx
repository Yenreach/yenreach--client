import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '/src/hooks/useFetch'
import { apiGetAllBusinessProducts } from '/src/services/ProductService'
import Header from "/src/components/users/Header"
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"


const options = {
  filter: false,
  selectableRows: "none",
};

const Products = () => {
  const { id } = useParams()
  
  const { isLoading, error: errorProducts, data: products } = useFetch({
    key: ['userProducts', id],
    api: apiGetAllBusinessProducts,
    param: id,
  })

  
  console.log("products", products, errorProducts)


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
          <Header business_string={id} type="product" />
          <section className='p-8 px-4 sm:px-8'>
            <div className='flex items-center justify-between mb-3'>
              <h2 className='text-xl text-orange font-medium'>Listed Products</h2>
              <Link to={`/users/products/${id}/add-product`}>
                <Button variant='product' className='px-4 py-2 text-xs flex items-center'>
                      <AiOutlinePlus className='mr-2' />
                  Add new Product
                </Button>
              </Link>
            </div>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"Products"}
                    data={[]}
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