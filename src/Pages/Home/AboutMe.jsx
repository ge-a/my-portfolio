import me_pic from "../../assets/aboutme2.png";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section" >
            <div className="about--section--img">
                <img src={me_pic} alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <h1 className="skills-section--heading">About Me</h1>
                    <p className="hero--section--description">
                    What would you do if you could predict the future? No matter what you're interested in, the possibilites are endless. Now you might be a little confused 
                    about why I'm asking this question when you're supposed to be learning about me. As I progressed through my college career and developed deeper skills in 
                    data science and statistical modelling, I became captivated with the power of using data to model outcomes across almost any field or topic. This pursuit 
                    of the ability to predict future events through statistcal modelling and machine learning is what drives me towards the field of machine learning engineering. 
                    <br /><br />
                    I'm currently working in a robotics research lab at Northeastern University that aims to further work being done in human robot interaction. In my current 
                    project I am working on creating machine learning models that predict the home routines of users based on behavior and environmental data for autonomous home 
                    robot assistants. Through improving these models, I hope to further the work being done in longitudinal proactive robot assistance, aiming for a future where
                    the elderly or disabled can live more independently with robot home assistants which can independently serve their needs.
                    <br /><br />
                    In my free time I enjoy watching and playing sports, cooking, and teaching computer science to students in the local Boston community through FirstByte,
                    club at Northeastern University, where I served as President for 2 years, that promotes diversity and equity in STEM by providing equitable access to 
                    computer science education. When I have a longer break, I love to travel, on the left here is a picture of me when I visited Malaga during my study abroad
                    (if you're ever there you have to try the restaurant Casa Lola). A couple of the big items on my bucket list are to visit all the National Parks and the 
                    Seven Wonders of the Ancient World!
                    </p>
                </div>
            </div>
        </section>
    )
}