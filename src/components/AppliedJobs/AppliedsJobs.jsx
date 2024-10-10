import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedsJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJob, setDisplayJOb] = useState([])


    useEffect(() => {
        const appliedJobIds = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        const appliedJobs = jobs.filter(job => appliedJobIds.includes(job.id));
        setAppliedJobs(appliedJobs)
        setDisplayJOb(appliedJobs)
    }, [])


    const handleSpeciedJobs = (fillter) => {

        if (fillter === 'all') {
            setDisplayJOb(appliedJobs)
        } else if (fillter === 'remote') {
            const remote = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJOb(remote)
        } else if (fillter === 'onsite') {
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJOb(onsite)
        }

    }

    return (
        <div>

            <ul className='decoration-none '>
                <li onClick={() => handleSpeciedJobs('all')}>ALL</li>
                <li onClick={() => handleSpeciedJobs('remote')}>Remote</li>
                <li onClick={() => handleSpeciedJobs('onsite')}>onsite</li>
            </ul>
            <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
                {displayJob.length > 0 ? (
                    displayJob.map(job => (
                        <div key={job.id} className='border-2 p-4 bg-blue-500 text-white'>
                            <h3 className='text-2xl'>{job.job_title}</h3>
                            <p>{job.company_name}</p>
                        </div>
                    ))
                ) : (
                    <p>No jobs applied yet.</p>
                )}
            </div>
        </div>
    );
};

export default AppliedsJobs;