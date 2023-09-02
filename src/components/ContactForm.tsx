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
    <form onSubmit={onSubmit} className='sm:flex sm:gap-4'>
      <div className='text-black relative sm:flex-grow'>
        <input
          data-test='contact-input'
          className={`w-[98%] sm:w-full sm:h-full mx-auto py-2 mb-4 px-6 z-20 relative rounded-md ${
            errors.email &&
            'outline-none outline-offset-0 outline-[--clr-soft-red]'
          }`}
          placeholder='Enter your email address'
          {...register('email', {
            required: true,
            pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
          })}
        />

        {errors.email && (
          <p data-test='invalid-message' className='bg-[--clr-soft-red] w-full pt-12 absolute rounded-md top-0 sm:top-4 z-10 italic text-white text-sm text-left pl-4 pb-2'>
            Whoops, make sure it's an email!
          </p>
        )}

        {errors.email && (
          <svg
            className='absolute top-[0.6rem] right-4 sm:top-[1.1rem] z-20'
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
        className={`w-full sm:w-0 flex-grow  sm:flex-shrink px-4 sm:px-0 ${
          errors.email && 'mt-10 sm:mt-0'
        }`}
      >
        Contact Us
      </Button>
    </form>
  );
}
