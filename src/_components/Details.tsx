export const Details = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
        <div className="grid max-w-sm mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          <div className=" bg-[#3eb8d7] px-10 py-20 text-white text-start rounded lg:px-10 lg:py-10 xl:py-20">
           
            <p
             
              className="inline-block tracking-wide max-w-xs mx-auto mb-8 text-2xl  leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              
            >
              Top Doctors
            </p>
            <p className="max-w-xs mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex py-2 px-4 border border-white items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Read more
            </a>
          </div>
          <div className=" bg-[#0693e3] px-10 py-20 text-white text-start rounded lg:px-10 lg:py-10 xl:py-20">
           
            <p
             
              className="inline-block tracking-wide max-w-xs mx-auto mb-8 text-2xl  leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              
            >
              24 Hours Services
            </p>
            <p className="max-w-xs mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex py-2 px-4 border border-white items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Read more
            </a>
          </div>
          <div className=" bg-[#3065b5] px-10 py-20 text-white text-start rounded lg:px-10 lg:py-10 xl:py-20">
           
           <p
            
             className="inline-block tracking-wide max-w-xs mx-auto mb-8 text-2xl  leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
             
           >
             Opening Hours
           </p>
           <div>

          <div className="flex justify-between pb-3 mb-5 border-b border-gray-100 border-opacity-40">
            <span>Monday</span>
            <span>8.00 - 17.00</span>
          </div>

          <div className="flex justify-between pb-3 border-b mb-5 border-gray-100 border-opacity-40">
            <span>Saturday</span>
            <span>9.00 - 15.00</span>
          </div>

          <div className="flex justify-between pb-3 border-b mb-5 border-gray-100 border-opacity-40">
            <span>Sunday</span>
            <span>5.00 - 16.00</span>
          </div>
      
          </div>
         </div>
        </div>
      </div>
    );
  };