import { Blocks } from  'react-loader-spinner'
import {useFetchContentful} from '../FetchContentfulData'

const Projects = ()=>{
    const {isLoading,Projects} = useFetchContentful()

    if(isLoading){
        return <section className='flex items-center justify-center'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
            />
        </section>
    }
    return <section className='m-4 mb-16 overflow-hidden p-2'>
        <header className='text-center w-full m-6'>
            <h2 className='text-purple-600 font-bold text-3xl'>Projects</h2>
        </header>
        <article
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 overflow-hidden'
        >
            {Projects.map(project=>{
                const {id,title,url,imageUrl} = project
                return <section key={id} className='bg-white rounded-md overflow-hidden shadow-md border'>
                    <a href={url} className='flex flex-col p-1 overflow-hidden'>
                        <img
                            className='w-full h-72 object-cover p-2 hover:p-0 transition-all duration-300 rounded-md'
                            src={imageUrl}
                            alt={title}
                        />
                        <div className='text-gray-700 font-semibold text-lg w-full h-12 text-center'>
                            <span className='h-full block flex items-center justify-center'>{title}</span>
                        </div>
                    </a>
                </section>
            })}
        </article>
        
    </section>
}
export default Projects