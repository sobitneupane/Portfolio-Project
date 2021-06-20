import React from 'react';
import BlogHeader from './blog_header'
import BlogList from './blog_list'

class Blogs extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader />
                <BlogList />

            </div>
        )
    }
}
export default Blogs