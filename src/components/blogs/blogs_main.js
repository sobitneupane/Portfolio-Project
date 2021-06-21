import React from 'react';
import BlogHeader from './blog_header'
import BlogList from './blog_list'

import { useLocation } from "react-router-dom"

function Blogs() {
    return (
        <div>
            <BlogHeader />
            <BlogList />

        </div>
    )

}
export default Blogs