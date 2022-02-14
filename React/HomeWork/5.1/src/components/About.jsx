import Navbar from "./Navbar";
import Footer from "./Footer";
import aboutimg from "./image/about.jfif"
import Engineer1 from "./image/engineer1.webp";
import Engineer2 from "./image/enginner2.webp";
import Engineer3 from "./image/engineer3.webp";

export default function About() {

    return <>
        <Navbar />
        <div className="about" style={{ padding: "40px 0" }}>
            <div className="company" style={{ display: "flex", marginLeft: "100px", padding: "100px 0" }}>
                <div className="info" style={{ width: "40%" }}>
                    <h1 style={{ color: "#000", fontSize: "30px", fontWeight: "400" }}>Welcome to our Company</h1>
                    <div className="subtitle">
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                    </div>
                </div>

                <div className="img" style={{ marginLeft: "200px" }}>
                    <img src={aboutimg} style={{ height: "300px", width: "90%" }} alt="" />
                </div>
            </div>

            <div className="engineers">
                <div className="title" style={{ textAlign: "center" }}>
                    <h6 style={{ fontSize: "16px", letterSpacing: "18px", textTransform: "uppercase", display: "block", marginBottom: "30px", color: "#ccc" }}>TEAM</h6>
                    <span style={{ fontWeight: "100", fontSize: "50px", textTransform: "uppercase", color: "#000" }}>OUR</span>
                    <h2 style={{ fontWeight: "900", fontSize: "50px", textTransform: "uppercase", color: "#000" }}> ENGINEERS</h2>
                    <p style={{ fontSize: "17px", color: "gray", lineHeight: "32px", padding: "30px 0", width: "50%", marginLeft: "350px" }}>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name
                    </p>
                </div>

                <div className="engineers-elements" style={{ display: "flex", paddingLeft: "150px" }}>
                    <div className="box" style={{ width: "300px", height: "410px", border: "1px solid black", background: `url(${Engineer1})`, paddingLeft: "20px", objectFit: "cover", }}>
                        <div className="box-1" style={{ background: "#fff", width: "260px", height: "120px", margin: "260px 0", }}>
                            <div className="info">
                                <h2 style={{ fontWeight: "600", fontSize: "23px", textTransform: "uppercase", color: "#000", marginLeft: "60px", padding: "25px 0" }}>John Miller</h2>
                                <p style={{ fontSize: "17px", color: "gray", lineHeight: "32px", marginLeft: "60px" }}>Lead Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className="box-2" style={{ paddingLeft: "40px" }}>
                        <div className="box" style={{ width: "300px", height: "410px", border: "1px solid black", background: `url(${Engineer2})`, paddingLeft: "20px" }}>
                            <div className="box-1" style={{ background: "#fff", width: "260px", height: "120px", margin: "260px 0", }}>
                                <div className="info">
                                    <h2 style={{ fontWeight: "600", fontSize: "23px", textTransform: "uppercase", color: "#000", marginLeft: "60px", padding: "25px 0" }}>John Miller</h2>
                                    <p style={{ fontSize: "17px", color: "gray", lineHeight: "32px", marginLeft: "60px" }}>Lead Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box-3" style={{ paddingLeft: "40px", }}>
                        <div className="box" style={{ width: "300px", height: "410px", border: "1px solid black", background: `url(${Engineer3})`, paddingLeft: "20px" }}>
                            <div className="box-1" style={{ background: "#fff", width: "260px", height: "120px", margin: "260px 0", }}>
                                <div className="info">
                                    <h2 style={{ fontWeight: "600", fontSize: "23px", textTransform: "uppercase", color: "#000", marginLeft: "60px", padding: "25px 0" }}>John Miller</h2>
                                    <p style={{ fontSize: "17px", color: "gray", lineHeight: "32px", marginLeft: "60px" }}>Lead Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

            <div className="testimionals" style={{ background: "#FAFAFA", display: "flex", height: "500px", padding: "100px 0" }}>
                <div className="information" style={{ width: "34%", paddingLeft: "110px", width: "40%" }}>
                    <h6 style={{ fontSize: "16px", letterSpacing: "18px", textTransform: "uppercase", display: "block", marginBottom: "30px", color: "#ccc" }}>TESTIMONIAL</h6>
                    <span style={{ fontWeight: "100", fontSize: "50px", textTransform: "uppercase", color: "#000" }}>WHAT OUR</span>
                    <h2 style={{ fontWeight: "900", fontSize: "50px", textTransform: "uppercase", color: "#000" }}> CLIENT SAYS</h2>
                </div>

                <div className="slide" style={{ background: "#fff", height: "300px", width: "700px", display: "flex" }}>
                    <div className="picture" style={{ width: "100%" }}>
                        <img src={Engineer2} alt="" style={{}} />
                    </div>

                    <div className="info" style={{ paddingLeft: "290px" }}>
                        <h1 style={{ color: "#000", fontSize: "16px", fontWeight: "700", }}>MARK BUBBLE</h1>
                        <div className="subtitle" style={{ width: "80%", lineHeight: "30px", fontSize: "18px" }}>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <Footer />
    </>
}