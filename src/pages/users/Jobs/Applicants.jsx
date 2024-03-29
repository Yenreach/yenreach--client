import React from 'react'
import { useParams, Link } from 'react-router-dom';
import useFetch from '/src/hooks/useFetch'
import { apiGetApplicationsByJob } from '/src/services/JobService'
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiOutlinePlus } from 'react-icons/ai'
import { RiFileTextLine } from "react-icons/ri";

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
      extra: true,
      custom: (value, meta) => {
        // console.log("meta", meta)
        return  (
          <a href={value.replace("diatok", "dia&tok")} target="_blank" className="flex items-center gap-3 text-primary">
            <RiFileTextLine size="1.5rem" className="inline-block" />
            <span className="text-sm">View Resume</span>
          </a>
        )
      },
      options: {
        filter: true,
        sort: false,
      },
    },
  
  ];


  

  return (
    <Dashboard>
        <main className='flex-1 overflow-y-auto overflow-hidden'>
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