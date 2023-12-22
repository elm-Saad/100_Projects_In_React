import { FormRow, FormRowSelect } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { handleChange,clearValues } from '../../features/job/jobSlice'

const AddJob  = () =>{
    const {
        isLoading,
        position,
        company,
        jobLocation,
        jobType,
        jobTypeOptions,
        status,
        statusOptions,
        isEditing,
        editJobId,
      } = useSelector((store) => store.job)

      const dispatch = useDispatch()

      const handleSubmit = (e)=>{
        e.preventDefault()
        if(!position||!company||!jobLocation){
            toast.error('please fill out all fields')
            return 
        }
      }


      const handleJobInputs = (e)=>{
        const name = e.target.name
        const value = e.target.value
        // handle change from the jobSlice (other option)
        dispatch(handleChange({name,value}))
      }

      const clearJobs = ()=>{
        dispatch(clearValues())
      }

      
    return <Wrapper>
        <form className='form'>
            <h3>{isEditing ? 'edit job' : 'add job'}</h3>

            <div className='form-center'>
                {/* position */}
                <FormRow
                    type='text'
                    name='position'
                    value={position}
                    handleChange={handleJobInputs}
                />
                {/* company */}
                <FormRow
                    type='text'
                    name='company'
                    value={company}
                    handleChange={handleJobInputs}
                />
                {/* location */}
                <FormRow
                    type='text'
                    labelText='job location'
                    name='jobLocation'
                    value={jobLocation}
                    handleChange={handleJobInputs}
                />
                {/* job status */}
                <FormRowSelect
                    name='status'
                    value={status}
                    handleChange={handleJobInputs}
                    list={statusOptions}
                />
                {/* job type */}
                <FormRowSelect
                    name='jobType'
                    labelText='job type'
                    value={jobType}
                    handleChange={handleJobInputs}
                    list={jobTypeOptions}
                />
                {/* btn container */}
                <div className='btn-container'>
                    <button
                        type='button'
                        className='btn btn-block clear-btn'
                        onClick={clearJobs}
                    >
                        clear
                    </button>
                    <button
                        type='submit'
                        className='btn btn-block submit-btn'
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        submit
                    </button>
                </div>
            </div>
        </form>
    </Wrapper>
}
export default AddJob 