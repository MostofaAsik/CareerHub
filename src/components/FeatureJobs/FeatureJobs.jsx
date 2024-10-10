import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([])
    const [showItem, setshowItem] = useState(4)
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => setShowAll(!showAll);

    useEffect(() => {
        // fetch('../../../public/jobs.json')
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <h2 className='text-5xl text-center'>Feature Jobs {jobs.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {
                    jobs.slice(0, showAll ? jobs.length : showItem).map(job => <Job key={job.id} job={job} />)
                }
            </div>
            <div className={` mt-5 text-center mb-4`} >
                {jobs.length > showItem && (
                    <button
                        onClick={toggleShowAll}
                        className="btn btn-primary mt-3">
                        {showAll ? 'See Less Jobs' : 'Show All Jobs'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default FeatureJobs;