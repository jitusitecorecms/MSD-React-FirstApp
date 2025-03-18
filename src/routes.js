import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUs";
import ContactPage from "./Pages/Contact";
import VideosPage from "./Pages/Videos";
import ServicesPage from "./Pages/services";

const AppRoutes = ({ content }) => {
  // Provide fallback values to avoid `undefined` errors
  console.log(content);
  const routes = useRoutes([
    { path: "/", element: <Home content={content || {}} /> },
    { path: "/about", element: <AboutUsPage aboutUsData={content?.aboutUs || {}} /> },
    { path: "/videos", element: <VideosPage videosData={content?.videos || {}} /> },
    { path: "/services", element: <ServicesPage servicesData={content?.services || {}} /> },
    { path: "/contact", element: <ContactPage contactData={content?.contact || {}} /> },
  ]);

  return routes || <p>Loading... Route</p>; // Fallback UI if routes are not ready
};

export default AppRoutes;
