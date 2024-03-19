import PropTypes from "prop-types";
import { Suspense } from "react";
import loader from "../assets/images/loader.gif";
import ErrorBoundary from "./ErrorBoundary";
const LazySuspense = ({component:Component, ...rest}) => {
  return (
    // <Suspense fallback={ <img style={{margin:"auto", justifyContent:"center", alignItems:"center"}} src={loader} alt="Loader" />}>
    <Suspense fallback={ <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}><img src={loader} alt="Loader" /></div>}>
   { /*<ErrorBoundary>*/}  {/* if handling asynchronouslogic inside or outside */}
      <Component {...rest} />
      {/* </ErrorBoundary> */}
    </Suspense>
  );
};
LazySuspense.propTypes = {
  component: PropTypes.element.isRequired,
};
export default LazySuspense;