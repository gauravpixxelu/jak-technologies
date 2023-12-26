import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import NotFound from '../components/NotFound';
import Loader from '../components/Common/Loader';






const ProtectedLayout = React.lazy(
  () => import("../containers/Layouts/ProtectedLayout"));
const Homepage = React.lazy(() => import("../containers/Homepage"));
const Blog = React.lazy(() => import("../containers/Blog"));
const Comming_soon = React.lazy(() => import("../containers/Homepage/Comingsoon"));
const Generative = React.lazy(() => import("../containers/Blogdetail/Generative/Generative-AI-&-Data"));
const Role = React.lazy(() => import("../containers/Blogdetail/Role-of-Generative-Ai/Role-of-Generative-AI"));
const Teaching = React.lazy(() => import("../containers/Blogdetail/Teaching-Language-Models/teaching-language-models"));
const Generative_AI_Good_or_Bad = React.lazy(() => import("../containers/Blogdetail/Generative-AI-Good-or-Bad/Generative-AI-Good-or-Bad"));
const DataIntegration = React.lazy(() => import("../containers/Services/DataIntegration"));

const Blog_slider = React.lazy(() => import("../containers/Blogdetail/Blog-slider/blog-slider"));

const Main = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<PublicRoute component={Homepage} />} />  
          <Route path="/blog" element={<PublicRoute component={Blog} />} />  
          <Route path="/Generative" element={<PublicRoute component={Generative} />} />   
          <Route path="/role-of-generative-AI" element={<PublicRoute component={Role} />} />   
          <Route path="/teaching-language-models" element={<PublicRoute component={Teaching} />} />   
          <Route path="/Generative-AI-Good-or-Bad" element={<PublicRoute component={Generative_AI_Good_or_Bad} />} /> 
          <Route path="/coming-soon" element={<PublicRoute component={Comming_soon} />} />   
          <Route path="/data-integration" element={<PublicRoute component={DataIntegration} />} />  
          <Route path="#" element={<PublicRoute component={Blog_slider} />} /> 

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};
export default Main;
