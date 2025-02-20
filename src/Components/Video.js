import React from "react";

const Video = () => {
  return (
    <section class="cta-section" id="videos">
    <h2>Latest Videos</h2>
    <a href="https://youtu.be/KuIUaeU38hM" target="_blank">
        <div class="cta-block">
            <img src="https://img.youtube.com/vi/KuIUaeU38hM/maxresdefault.jpg" alt="Kickstart Your React Journey"></img>
            <p>Kickstart Your React Journey</p>
        </div>
    </a>
    <a href="https://youtu.be/BdR64q0zTQk" target="_blank">
        <div class="cta-block">
            <img src="https://img.youtube.com/vi/BdR64q0zTQk/maxresdefault.jpg" alt="Custom Form Submit Action"></img>
            <p>Custom Form Submit Action</p>
        </div>
    </a>
    <a href="https://youtu.be/Kms12WNw6YU" target="_blank">
        <div class="cta-block">
            <img src="https://img.youtube.com/vi/Kms12WNw6YU/maxresdefault.jpg" alt="Discover Optimizely"></img>
            <p>Discover Optimizely</p>
        </div>
    </a>
</section>
  );
};

export default Video;