import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
export const prerender = false;

type FormInput = {
  email: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit = handleSubmit((email) => console.log(email));

  return (
    <form onSubmit={onSubmit}>
      <div className='text-black relative'>
        <input
          data-test='contact-input'
          className={`w-[98%] mx-auto py-2 mb-4 px-6 z-20 rounded-md ${
            errors.email &&
            'outline-none outline-offset-0 outline-[--clr-soft-red] rounded-b-none'
          }`}
          placeholder='Enter your email address'
          {...register('email', {
            required: true,
            pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
          })}
        />
        {/* <span className='bg-[--clr-soft-red] inset-0 p-4 absolute z-10'></span> */}
        {errors.email && (
          <p data-test='invalid-message' className='bg-[--clr-soft-red] mb-2 relative -top-4 w-[99.2%] mx-auto rounded-b-lg text-left pl-4 py-2 italic text-white text-sm'>
            Whoops, make sure it's an email!
          </p>
        )}
        {errors.email && (
          <svg
            className='absolute top-[0.6rem] right-4'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
          >
            <g fill='none' fillRule='evenodd'>
              <circle cx='10' cy='10' r='10' fill='#FA5959' />
              <g fill='#FFF' transform='translate(9 5)'>
                <rect width='2' height='7' rx='1' />
                <rect width='2' height='2' y='8' rx='1' />
              </g>
            </g>
          </svg>
        )}
      </div>
      <Button
        data-test='submit-btn'
        type='submit'
        variant={'btnSubmit'}
        size={'submit'}
        className='w-full flex-grow px-4'
      >
        Contact Us
      </Button>
    </form>
  );
}
