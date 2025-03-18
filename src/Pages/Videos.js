import Video from "../Components/Video";
import BacktoHome from "../Components/BackToHome";

const VideosPage = ({ videosData }) => {
console.log(videosData);
  if (!videosData) return <p>Loading video data...</p>; // ✅ Prevent error
  return (
    <>
        <Video videosData={videosData} />
        <BacktoHome />
    </>
  );
};

export default VideosPage;