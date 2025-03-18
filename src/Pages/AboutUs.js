import Aboutus from "../Components/Aboutus";
import BacktoHome from "../Components/BackToHome";

const AboutUsPage = ({ aboutUsData  }) => {

  if (!aboutUsData) return <p>Loading about us data...</p>; // ✅ Prevent error
  return (
    <>
        <Aboutus aboutUsData={aboutUsData} />
        <BacktoHome />
    </>
  );
};

export default AboutUsPage;
