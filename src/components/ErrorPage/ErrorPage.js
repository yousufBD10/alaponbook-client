import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div>
             <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-bold text-6xl text-red-600'>
            <span className='sr-only'>Error</span>Oops!
          </h2>
          <h2 className='mb-8 font-bold text-4xl text-red-600'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8 text-red-600'>
            Sorry, we couldn't find this page.
          </p>
          
          <Link
            to='/'
             type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "> Back to home
          </Link>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default ErrorPage;