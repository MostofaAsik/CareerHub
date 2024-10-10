import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const parseIntId = parseInt(id)
    const job = jobs.find(job => job.id === parseIntId)
    console.log(job);

    const handleAppliedJob = () => {
        let appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];


        if (!appliedJobs.includes(parseIntId)) {

            appliedJobs.push(parseIntId);


            localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
            toast("You have successfully applied for the job!");
        } else {

            toast.error("You have already applied for this job.");
        }

    }

    return (
        <div>
            <h2>Job Details page {id}</h2>
            <div className=' grid grid-cols-1  md:grid-cols-4 gap-4 mb-3'>
                <div className='border-4  md:col-span-3 '>
                    <h2 className='text-3xl'>Details coming sooon</h2>
                </div>
                <div className=' border-4 md:col-span-1'>
                    <h2 className='text-2xl'>Side Things</h2>

                    <button onClick={handleAppliedJob} className='btn btn-primary w-full'>Apply Now</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;