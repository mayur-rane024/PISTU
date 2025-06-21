import Navbar from "../Navbar";
import Footer from "../Footer";
import Privacy_Policy from "./Privacy_policy";
import Terms_Conditions from "./Terms_and_Conditions";
// import Refund_and_Returns_Policy from "./Refund_and_Returns_Policy";
import Shipping_Policy from "./Shipping_Policy";
import Cookie_Policy from "./Cookie_Policy";
import Disclaimer from "./Disclaimer";
import Intellectual_Property_Notice from "./Intellectual_Property_Notice";
import Refund_and_Returns_Policy from "./Refund_and_Returns_Policy";

const Policies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Privacy_Policy />
      <Terms_Conditions />
      <Refund_and_Returns_Policy/>
      {/* <Refund_and_Returns_Policy /> */}
      <Shipping_Policy />
      <Cookie_Policy />
      <Disclaimer />
      <Intellectual_Property_Notice />
      <Footer />
    </div>
  );
};

export default Policies;