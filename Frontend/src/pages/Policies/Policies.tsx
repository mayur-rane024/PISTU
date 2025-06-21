import Navbar from "../Navbar";
import Footer from "../Footer";
import Privacy_Policy from "./Privacy_policy";
import Terms_Conditions from "./Terms_and_Conditions";
import Refund_and_Returns_Policy from "./Refund_and_Returns_Policy";
import Shipping_Policy from "./Shipping_Policy";
import Cookie_Policy from "./Cookie_Policy";
import Disclaimer from "./Disclaimer";
import Intellectual_Property_Notice from "./Intellectual_Property_Notice";

const Policies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="privacy-policy">
        <Privacy_Policy />
      </div>
      <div id="terms-and-conditions">
        <Terms_Conditions />
      </div>
      <div id="refund-and-returns-policy">
        <Refund_and_Returns_Policy />
      </div>
      <div id="shipping-policy">
        <Shipping_Policy />
      </div>
      <div id="cookie-policy">
        <Cookie_Policy />
      </div>
      <div id="disclaimer">
        <Disclaimer />
      </div>
      <div id="intellectual-property-notice">
        <Intellectual_Property_Notice />
      </div>
      <Footer />
    </div>
  );
};

export default Policies;