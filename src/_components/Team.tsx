import Link from "next/link";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20">
      <div className="mb-10 sm:text-start">
        <p className=" text-blue-400 inline-block py-px text-sm tracking-wider">
          Professionals
        </p>
        <p className="text-base text-gray-700 md:text-3xl">Our Doctors</p>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        <div className="border">
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="/assets/doct-8.jpg"
              alt="Person"
            />
          </div>

          <div className="flex flex-col sm:text-start">
            <div className="border-b pl-3 pb-2">
              <p className="text-xl text-blue-800">Dr.Oliver Aguilerra</p>
              <p className="mb-5 text-sm text-gray-800">Throat Specialist</p>
            </div>
          </div>

          <p className="p-3 border-b text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime
            doloribus.
          </p>

          <div className="flex px-3 py-6 items-center gap-4">
            <MdOutlinePhoneIphone color="blue" size="20px" />
            <span>+ 1-888-123-4567</span>
          </div>
        </div>
        <div className="border">
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded "
              src="/assets/doct-9.jpg"
              alt="Person"
            />
          </div>

          <div className="flex flex-col sm:text-start">
            <div className="border-b pl-3 pb-2">
              <p className="text-xl text-blue-800">Dr.Oliver Aguilerra</p>
              <p className="mb-5 text-sm text-gray-800">Throat Specialist</p>
            </div>
          </div>

          <p className="p-3 border-b text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime
            doloribus.
          </p>

          <div className="flex px-3 py-6 items-center gap-4">
            <MdOutlinePhoneIphone color="blue" size="20px" />
            <span>+ 1-888-123-4567</span>
          </div>
          <div className="w-full text-center mb-3">
            <Link href="#" className="text-sm text-blue-700">
              {" "}
              More Details{" "}
            </Link>
          </div>
        </div>
        <div className="border">
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="/assets/doct-8.jpg"
              alt="Person"
            />
          </div>

          <div className="flex flex-col sm:text-start">
            <div className="border-b pl-3 pb-2">
              <p className="text-xl text-blue-800">Dr.Oliver Aguilerra</p>
              <p className="mb-5 text-sm text-gray-800">Throat Specialist</p>
            </div>
          </div>

          <p className="p-3 border-b text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime
            doloribus.
          </p>

          <div className="flex px-3 py-6 items-center gap-4">
            <MdOutlinePhoneIphone color="blue" size="20px" />
            <span>+ 1-888-123-4567</span>
          </div>
        </div>
        <div className="border">
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64 cursor-pointer">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="/assets/doct-9.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 bg-blue-300 opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          <div className="flex flex-col sm:text-start">
            <div className="border-b pl-3 pb-2">
              <p className="text-xl text-blue-800">Dr.Oliver Aguilerra</p>
              <p className="mb-5 text-sm text-gray-800">Throat Specialist</p>
            </div>
          </div>

          <p className="p-3 border-b text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime
            doloribus.
          </p>

          <div className="flex px-3 py-6 items-center gap-4">
            <MdOutlinePhoneIphone color="blue" size="20px" />
            <span>+ 1-888-123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
