
function BlogList() {
    return (
        <div className="mx-16">
            <ul>
                <li class="py-6 sm:py-12 border-b border-gray-300 group">
                    <div class="grid grid-cols-12">
                        <time class="col-span-12 lg:col-span-2 mb-2 sm:mb-3 lg:mt-1 text-grisle type-1 sm:type-2 group-hover:text-spoilt-veg transition duration-300 ease-in-out" >
                            21 June 2021
		                </time>
                        <div class="col-span-12 lg:col-span-10">
                            <h2 class="font-bold text-xl type-3 md:type-4" data-component="tooltip">
                                <a class="hover:underline" href="">
                                    Deploy MariaDB Database with Docker
                                </a>
                            </h2>
                            <div class="description type-1 sm:type-2 mt-2 sm:mt-3">
                                <p>A quick guide on how to deploy MariaDB Database with the help of Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default BlogList