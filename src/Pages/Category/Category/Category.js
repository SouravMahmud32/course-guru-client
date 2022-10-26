import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>This is Category {courses.length}</h2>
        </div>
    );
};

export default Category;