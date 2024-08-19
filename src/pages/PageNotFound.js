import PageNotFoundImage from "../assets/PageNotFound.png";
import {Button} from "../components";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
export const PageNotFound = () => {
  const pageTitle =useTitle("Page Not Found");
  return (
    <main>
      <section className="flex justify-center px-3">
        <div className="flex flex-col items-center my-4">
        <p className="text-7xl text-gray-700 dark:text-white mb-8">
          Error 404 ....
        </p>
        <div className="flex justify-center">
          <img 
            src={PageNotFoundImage} 
            alt="Page not found illustration" 
            className=" max-w-xl h-auto"  
          />
        </div>
        <div className="py-7">
          <Link to="/">
            <Button> Back to Home</Button>
           </Link>
        </div>
        </div>
     
      </section>
    </main>
  );
};
