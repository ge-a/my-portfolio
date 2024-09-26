import me_pic from "../../assets/aboutme.png";

export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div classaName="hero--section--content--box">
                <div className="hero--section--content">
                    <h1 classNmae="hero--section--title">
                        <span className="hero--section--title--color">Hi! I'm Andy Ge</span>{" "}
                    </h1>
                    <p className = "hero--section--description">
                        I am a graduating Computer Science and Math student based out of Boston!<br />
                        I have a passion for analyzing data to find the patterns in everyday life.<br />
                        I'm an avid chess player, soccer fan, and foodie. Feel free to scroll through<br />
                        my site and learn more about me! 
                    </p>
                </div>
            </div>
            <div className = "hero--section--img">
                <img src={me_pic} alt ="This is me!"/>
            </div>
        </section>
    );
    
}