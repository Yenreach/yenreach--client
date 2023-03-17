import React from 'react'
import { useParams, Link } from 'react-router-dom';
import useFetch from '/src/hooks/useFetch'
import { apiGetApplicationsByJob } from '/src/services/JobService'
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiOutlinePlus } from 'react-icons/ai'
import Header from "/src/components/users/Header"
import Table from '/src/components/Table'
import Button from '../../../components/ui/Button'
import Loader from '../../../components/Loader'
import Dashboard from "../../../components/layout/Dashboard"


const Applicants = () => {
  const [data, setData] = React.useState([])
  const { id, job_id } = useParams()
  
  const { isLoading, error, data: applicants } = useFetch({
    key: ['userJobApplicants', job_id],
    api: apiGetApplicationsByJob,
    param: job_id,
  })

  // console.log("applicants", applicants)
  
  const columns = [
    {
      name: "full_name",
      label: "Full Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email Address",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "phone",
      label: "Phone No.",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "document",
      label: "View",
      options: {
        filter: true,
        sort: false,
      },
    },
  
  ];

  

  return (
    <Dashboard>
        <main className='flex-1 overflow-hidden'>
          <Header business_string={id} type="job" />
          {isLoading && <Loader loader={4} />}
          <section className='p-8 px-4 sm:px-8'>
            <div className='flex items-center justify-between mb-3'>
                <h2 className='text-lg text-blue font-medium'>Job Applicants</h2>
                <Link to={`/users/jobs/${id}/add-job`}>
                  <Button variant='job' className='px-4 py-2 text-xs flex items-center'>
                      <AiOutlinePlus className='mr-2' />
                      Add new job
                  </Button>
                </Link>
            </div>
            <Table data={applicants} columns={columns} />
          </section>

        </main>
    </Dashboard>
  )
}

export default Applicants