import Contact from "../Components/Contact";
import BacktoHome from "../Components/BackToHome";

const ContactPage = ({ contactData }) => {
console.log(contactData);
  if (!contactData) return <p>Loading about us data...</p>; // ✅ Prevent error
  return (
    <>
        <Contact contactData={contactData} />
        <BacktoHome />
    </>
  );
};

export default ContactPage;
