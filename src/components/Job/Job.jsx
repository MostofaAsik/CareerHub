import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, id } = job

    return (
        <div className="card bg-base-100  shadow-xl">
            <figure>
                <img
                    src={logo}
                    alt="Company Logo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='space-y-2'>
                    <p>{location}</p>
                    <p>Salary:{salary}</p>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>

                        <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;