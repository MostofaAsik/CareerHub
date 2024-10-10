import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../components/Home/Home";
import AppliedsJobs from "../components/AppliedJobs/AppliedsJobs";
import ErrorPage from "../components/ErrorPage/Errorpage";
import JobDetails from "../components/JobDetails/JobDetails";
import SignIn from './../components/SingIn/SignIn';
import Auth from './../components/Auth/Auth';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,

            },
            {
                path: '/applied',
                element: <AppliedsJobs />,
                loader: () => fetch(('../jobs.json'))
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: () => fetch(('../jobs.json'))
            },
            {
                path: '/signin',
                element: <Auth />,

            },
        ]
    }
])
export default router;