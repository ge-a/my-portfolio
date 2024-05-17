import data from "../../data/index.json";

export default function MySkills() {
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <h2 className="skills--section--title">My Skills</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img className="skills--img" src={item.src} alt="icon" />
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="portfolio--container">
                <h2 className="experience--section--title">My Experience</h2>
            </div>
            <div className="experience--section--container">
                {data?.experience?.map((item, index) => (
                    <div key={index} className="experience--section--card">
                        <div className="experience--section--img">
                            <img className="experience--img" src={item.src} alt="icon" />
                        </div>
                        <div className="experience--section--card--content">
                            <h3 className="experience--section--title">{item.title}</h3>
                            <p className="experience--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    );
}