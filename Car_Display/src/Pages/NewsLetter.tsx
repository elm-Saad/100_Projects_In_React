

import { Form, redirect ,useNavigation} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
/**
 * like the loader the action works by sending post request to the current url the page on it by default
 * u need to set up an action in the route and give it the exported function here action
 * in order to access the data submitted by this Form fom react-router-dom
 * 
 */
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // error handle while submitting the form
  try {
    const response = await axios.post(newsletterUrl, data);
    // console.log(response);
    // use redirect ot Navigate
    toast.success(response.data.msg)

    return redirect('/');
  } catch (error) {
    console.log(error)
    // just to handle both error from the server or error from Axios
    toast.error(error?.response?.data?.msg)
    return error
  }
};

const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Form className='form' method='POST'>
        <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          our newsletter
        </h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            name='name'
            id='name'
            required
          />
        </div>
        {/* last name */}
        <div className='form-row'>
          <label htmlFor='lastName' className='form-label'>
            last name
          </label>
          <input
            type='text'
            className='form-input'
            name='lastName'
            id='lastName'
            required
          />
        </div>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            name='email'
            id='email'
            defaultValue='test@test.com'
            required
          />
        </div>
        <button
          type='submit'
          className='btn btn-block'
          style={{ marginTop: '0.5rem' }}
          disabled={isSubmitting}
        >
          {/**  handle the submitting btn every time   */}
          {isSubmitting?'submitting':'submit'}
        </button>
      </Form>
    );
  };
  
  export default Newsletter;