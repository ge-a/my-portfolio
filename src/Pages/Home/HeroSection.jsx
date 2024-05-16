import me_pic from "../../assets/aboutme.png";

export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div classaName="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="hero--section--intro">
                        Hi, I'm Andy, a graduating Computer Science and 
                        <br />Math student from Northeastern University!
                    </p>
                    <h1 classNmae="hero--section--title">
                        <span className="hero--section--title--color">I'm Seeking<br /> Opportunities</span>{" "}
                    </h1>
                    <p className = "hero--section--description">
                        in Software Engineering, Data Engineering, Quantitative Research
                        <br /> for remote positions and in the Greater Boston Area!
                    </p>
                </div>
                <button className = "btn btn-primary">Contact Me!</button>
            </div>
            <div className = "hero--section--img">
                <img src={me_pic} alt ="This is me!"/>
            </div>
        </section>
    );
    
}