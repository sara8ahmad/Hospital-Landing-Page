import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto bg-slate-100 md:max-w-full md:px-24 lg:px-20 lg:py-20">
      
      <div className="grid gap-12 row-gap-8 lg:grid-cols-3">
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center text-[#6385ad] justify-center mb-3">
             <MdOutlinePhoneIphone size='50px' />
            </div>
          </div>
          <div>
            <h6 className="mb-2 text-lg text-gray-500 leading-5">Give us a Call</h6>
            <p className="text-lg font-bold text-gray-600">
             1-888-123-4567
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center text-[#6385ad] justify-center mb-3">
             <MdOutlineMail size='50px' />
            </div>
          </div>
          <div>
            <h6 className="mb-2 text-lg text-gray-500 leading-5">Send us a Message</h6>
            <p className="text-lg font-bold text-gray-600">
            medical-clinic@mail.com
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center text-[#6385ad] justify-center mb-3">
             <IoLocationOutline size='50px' />
            </div>
          </div>
          <div>
            <h6 className="mb-2 text-lg text-gray-500 leading-5">Visit our Location</h6>
            <p className="text-lg font-bold text-gray-600">
             3213 Suitland Street
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};