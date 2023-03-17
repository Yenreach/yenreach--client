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


const options = {
  filter: false,
  selectableRows: "none",
};



const Applicants = () => {
  const [data, setData] = React.useState([])
  const { id, job_id } = useParams()
  
  const { isLoading, error, data: applicants } = useFetch({
    key: ['userJobApplicants', job_id],
    api: apiGetApplicationsByJob,
    param: job_id,
  })

  
  const columns = [
    {
      name: "job_name",
      label: "Job Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "updated_at",
      label: "Modified date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "created_at",
      label: "Created at",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "job_color",
      label: "Action",
      extra: true,
      custom: (value, meta) => {
        // console.log("meta", meta)
        return  (
          <div className="flex items-center gap-4 justify-center">
            <BiEdit size="1.2rem" className="text-orange" />
            <MdOutlineDelete size="1.2rem" className="text-red-400" />
          </div>
        )
      },
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "job_status",
      label: "In - Stock",
      extra: true,
      custom: (value, meta) => {
        // console.log("meta", meta)
        return  (
          <label htmlFor={`status${meta?.id}`} className="flex justify-center cursor-pointer select-none items-center">
            <div className="relative">
              <input id={`status${meta?.id}`} type="checkbox" className="sr-only peer" onChange={() => updateJobStatus({
                  "job_string": meta?.job_string,
                  "business_string": meta?.business_string,
                  "status": value==="1" ? false : true
                })} checked={value==="1"} />
              <div
                className="dot shadow-switch-1 absolute left-0.5 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full shadow-lg bg-white transition peer-checked:translate-x-4"
              ></div>
              <div className="h-5 w-9 rounded-full bg-orange shadow-inner"></div>
            </div>
          </label>
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