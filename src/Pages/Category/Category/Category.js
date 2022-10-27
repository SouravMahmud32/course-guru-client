import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CouseseSummaryCard from '../../Shared/CoursesSummaryCard/CouseseSummaryCard';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>
            {
                categoryCourses.map(courses => <CouseseSummaryCard
                key={courses._id}
                courses={courses}
                ></CouseseSummaryCard>)
            }
        </div>
    );
};

export default Category;