import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CouseseSummaryCard from '../../Shared/CoursesSummaryCard/CouseseSummaryCard';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>This is home component {allCourses.length}</h2>
            {
                allCourses.map(courses => <CouseseSummaryCard
                key={courses._id}
                courses={courses}
                ></CouseseSummaryCard>)
            }
        </div>
    );
};

export default Home;