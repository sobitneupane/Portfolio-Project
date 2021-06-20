function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProjectHeader() {
    return (
        <div class="bg-gray-600	 relative h-64 ...">
            <div class="container mx-auto px-6 sm:px-8" >
                <div class="text-white text-3xl absolute bottom-10 left-16  ...">Projects</div>
            </div>
        </div>
    )
}

export default ProjectHeader