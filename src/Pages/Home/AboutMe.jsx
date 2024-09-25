import me_pic from "../../assets/aboutme2.png";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section" >
            <div className="about--section--img">
                <img src={me_pic} alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills-section--heading">About Me</h1>
                    <p className="hero--section--description">
                    Im a curriculum lead at FirstByte, a club at Northeastern University that promotes diversity and equity in STEM by teaching and inspiring interest 
                    in computer science within the Boston community. I also work in a robotics research lab at Northeastern, where Im developing a growing interest in 
                    gaining insights from robotics data. My current project involves creating autonomous home assistant robots that predict user needs based on behavior 
                    and environmental data. As a lifelong learner from an immigrant household, I value collaborating with like-minded individuals and continuously strive 
                    to deepen my understanding of both technical and personal subjects.
                    </p>
                </div>
            </div>
        </section>
    )
}