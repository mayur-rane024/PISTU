import Navbar from "../Navbar";
import Footer from "../Footer";
import Privacy_Policy from "./Privacy_policy";
import Refund_and_Returns_Policy from "./Refund_and_Returns_Policy";
// Update the import path to match the actual file name, e.g.:
 // <-- Change this if the file name differs in casing or underscores

// For example, if the file is named 'RefundAndReturnsPolicy.tsx', use:
/// import Refund_and_Returns_Policy from "./RefundAndReturnsPolicy";

const Policies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Privacy_Policy />
      <Refund_and_Returns_Policy/>
      <Footer/>
    </div>
  );
};

export default Policies;
