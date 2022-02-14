import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaUserTie } from "react-icons/fa"
import Engineer2 from "./image/enginner2.webp";

export default function Projects() {
    return <>
        <Navbar />

        <div className="services" style={{ padding: "200px 0" }}>
            <div className="all-1" style={{ display: "flex" }}>
                <div className="services-picture" style={{ display: "flex" }}>
                    <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px", }} />
                    <div className="info" style={{ width: "40%" }}>
                        <div className="title">
                            <h1 style={{ color: "#000", fontSize: "24px" }}>General Constructing</h1>
                        </div>
                        <div className="subtitle" style={{ width: "100%" }}>
                            <p style={{ color: "gray", fontSize: "16px" }}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                        </div>
                    </div>
                </div>

                <div className="services-picture" style={{ display: "flex" }}>
                    <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px", }} />
                    <div className="info" style={{ width: "33%" }}>
                        <div className="title">
                            <h1 style={{ color: "#000", fontSize: "24px" }}>General Constructing</h1>
                        </div>
                        <div className="subtitle" style={{ width: "100%" }}>
                            <p style={{ color: "gray", fontSize: "16px" }}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                        </div>
                    </div>
                </div>

                <div className="services-picture" style={{ display: "flex" }}>
                    <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px", }} />
                    <div className="info" style={{ width: "33%" }}>
                        <div className="title">
                            <h1 style={{ color: "#000", fontSize: "24px" }}>General Constructing</h1>
                        </div>
                        <div className="subtitle" style={{ width: "100%" }}>
                            <p style={{ color: "gray", fontSize: "16px" }}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                        </div>
                    </div>
                </div>


            </div>

            <div className="all-2" style={{ display: "flex" }}>
                <div className="services-picture" style={{ display: "flex" }}>
                    <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px", }} />
                    <div className="info" style={{ width: "40%" }}>
                        <div className="title">
                            <h1 style={{ color: "#000", fontSize: "24px" }}>General Constructing</h1>
                        </div>
                        <div className="subtitle" style={{ width: "100%" }}>
                            <p style={{ color: "gray", fontSize: "16px" }}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                        </div>
                    </div>
                </div>

                <div className="services-picture" style={{ display: "flex" }}>
                    <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px", }} />
                    <div className="info" style={{ width: "33%" }}>
                        <div className="title">
                            <h1 style={{ color: "#000", fontSize: "24px" }}>General Constructing</h1>
                        </div>
                        <div className="subtitle" style={{ width: "100%" }}>
                            <p style={{ color: "gray", fontSize: "16px" }}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                        </div>
                    </div>
                </div>

                <div className="services-picture" style={{ display: "flex" }}>
                    <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px", }} />
                    <div className="info" style={{ width: "33%" }}>
                        <div className="title">
                            <h1 style={{ color: "#000", fontSize: "24px" }}>General Constructing</h1>
                        </div>
                        <div className="subtitle" style={{ width: "100%" }}>
                            <p style={{ color: "gray", fontSize: "16px" }}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
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


        <div className="newsletter" style={{ height: "300px", background: "#ffcd00" }}>
            <div className="title" style={{}}>
                <h1 style={{ color: "#fff", fontSize: "50px", fontWeight: "700", textTransform: "uppercase", padding: "50px", marginLeft: "60px" }}>Sign up for a Newsletter</h1>
            </div>
            <div className="one" style={{ display: "flex" }}>
                <div className="subtitle">
                    <p style={{ fontSize: "22px", color: "#fff", lineHeight: "25px", marginLeft: "110px" }}>Enter your email address to get the latest news, events and <br></br> special offers delivered right to your inbox.</p>
                </div>
                <form action="" style={{ paddingLeft: "30px" }}>
                    <input type="text" placeholder="Enter your email" style={{ height: "50px", width: "300px" }} />
                    <button style={{ background: "#000", color: "#fff", padding: "14px" }}>
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        <Footer />
    </>
}