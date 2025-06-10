import Navbar from "../Navbar";
import Footer from "../Footer";
import Privacy_Policy from "./Privacy_policy";

const Policies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Privacy_Policy />
      <Footer></Footer>
    </div>
  );
};

export default Policies;
