import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import NotFound from '../components/NotFound';
import Loader from '../components/Common/Loader';


const ProtectedLayout = React.lazy(
  () => import("../containers/Layouts/ProtectedLayout"));
const Homepage = React.lazy(() => import("../containers/Homepage"));
const DataIntegration = React.lazy(() => import("../containers/Services/DataIntegration"));


const Main = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<PublicRoute component={Homepage} />} />    
          <Route path="/data-integration" element={<PublicRoute component={DataIntegration} />} />    
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};
export default Main;
