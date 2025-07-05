import Navbar from "../Navbar";
import Footer from "../Footer";
import General_Care from "./General_Care";
import Cleaning from "./Cleaning";
import Conditioning from "./Conditioning";
import Protection from "./Protection";
import Repairs from "./Repairs";
import Storage from "./Storage";  

const Care = () => {
  return (<>
    <Navbar />
    <div className="flex flex-col min-h-screen">
      
      <div id="general-care">
        <General_Care />
      </div>
      <div id="cleaning">
        <Cleaning />
      </div>
      <div id="conditioning">
        <Conditioning />
      </div>
      <div id="storage">
        <Storage />
      </div>
      <div id="protection">
        <Protection />
      </div>
      <div id="repairs">
        <Repairs />
      </div>
    
    </div>
      <Footer />
    </>
  );
};

export default Care;