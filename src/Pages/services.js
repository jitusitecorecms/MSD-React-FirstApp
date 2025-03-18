import Services from "../Components/Services";
import BacktoHome from "../Components/BackToHome";

const ServicesPage = ({ servicesData }) => {
console.log(servicesData);
  if (!servicesData) return <p>Loading Services data...</p>; // ✅ Prevent error
  return (
    <>
        <Services servicesData={servicesData} />
        <BacktoHome />
    </>
  );
};

export default ServicesPage;