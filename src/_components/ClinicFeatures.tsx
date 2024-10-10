import { FaFileMedicalAlt } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { GiHeartBeats } from "react-icons/gi";

export const ClinicFeatures = () => {
    return (
  <section className="bg-white dark:bg-gray-900">
    <div className="container px-10 md:px-16 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Explore our <br/> Our Medical <span className="underline decoration-blue-500">Features</span></h1>

        <p className="mt-4 text-gray-500 text-xl xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptati busnulla.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-3 xl:grid-cols-4">
            <div className="space-y-3">
            <span className="inline-block p-5 text-blue-500 rounded-full dark:text-white dark:bg-blue-500">
               <FaFileMedicalAlt size='50px' />
            </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Medical Treatments</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                
            </div>

            <div className="space-y-3">
                <span className="inline-block p-5 text-blue-500 rounded-full dark:text-white dark:bg-blue-500">
                <FaHandHoldingHeart size='50px' />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Emergency Help</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

            </div>

            <div className="space-y-3">
                <span className="inline-block p-5 text-blue-500 rounded-full dark:text-white dark:bg-blue-500">
                    <MdOutlineContentPasteSearch size='50px' />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Medical Professtionals</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                
            </div>

            <div className="space-y-3">
                <span className="inline-block p-5 text-blue-500 rounded-full dark:text-white dark:bg-blue-500">
                   <GiHeartBeats size='50px' />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Qualified Doctors</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

        
            </div>

            </div>
    </div>
</section>
    );
  };