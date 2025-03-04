import React from "react";

const Video = ({ videosData }) => { 
    if (!videosData) return <p>Loading...</p>;
    const { heading, list } = videosData;


  return (
            <section className="cta-section" id="videos">
                <h2>{heading}</h2>
                {Array.isArray(list) && list.map((point, index) => (

                    <a href={point.link} target="_blank" key={index}>
                    <div className="cta-block">
                        <img src={point.thumbnail} alt={point.title}></img>
                        <p>{point.title}</p>
                    </div>
                    </a>

                ))}

            </section>
        );
};

export default Video;