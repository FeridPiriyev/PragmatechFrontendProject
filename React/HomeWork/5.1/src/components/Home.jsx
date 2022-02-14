import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaLongArrowAltRight } from "react-icons/fa"
import { FaAccessibleIcon } from "react-icons/fa"
import { FaSwatchbook } from "react-icons/fa"
import { FaUserTie } from "react-icons/fa"
import { FaUserSecret } from "react-icons/fa"
import Background3 from "./image/background3.webp";
import Engineer1 from "./image/engineer1.webp";
import Engineer2 from "./image/enginner2.webp";
import Umumi from "./image/umumi.webp";
import { Component } from "react";

export default class Home extends Component() {
    render() {
        return <div>
                <Navbar />
                <div className="experience" style={{ padding: "290px 0", display: "flex", marginLeft: "130px" }}>
                    <div className="col-4" style={{ width: "24.3333%", float: "left", lineHeight: "43px", background: "#FFCD00", textAlign: "center" }}>
                        <h1 style={{ fontSize: "150px", color: "#fff", fontWeight: "700" }}>25</h1>
                        <h3 style={{ textTransform: "uppercase", fontSize: "40px", letterSpacing: "7px", color: "#fff" }}>Years</h3>
                        <p style={{ fontSize: "18px", textTransform: "uppercase", color: "#fff" }}>Experience</p>
                    </div>
                    <div className="col-4" style={{ left: "33.3333%", paddingLeft: "100px" }}>
                        <h6 style={{ fontSize: "16px", letterSpacing: "20px", textTransform: "uppercase", color: "#333", display: "block", marginBottom: "30px", color: "#ccc" }}>Welcome!</h6>
                        <span style={{ fontWeight: "100", fontSize: "50px", textTransform: "uppercase", color: "#000" }}>Secrets of Success</span>
                        <h2 style={{ fontWeight: "900", fontSize: "50px", textTransform: "uppercase", color: "#000" }}>of Our Projects</h2>
                    </div>
                    <div className="col-4" style={{ left: "33.3333%", paddingLeft: "100px" }}>
                        <p style={{ fontSize: "17px", color: "gray", lineHeight: "32px" }}>
                            Since 1980 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                        </p>
                    </div>
                </div>

                <div className="building" style={{ display: "flex", paddingLeft: "60px" }}>
                    <div className="information" style={{ width: "34%", paddingLeft: "110px" }}>
                        <h6 style={{ fontSize: "16px", letterSpacing: "18px", textTransform: "uppercase", display: "block", marginBottom: "30px", color: "#ccc" }}>Works</h6>
                        <span style={{ fontWeight: "100", fontSize: "50px", textTransform: "uppercase", color: "#000" }}>Our Done</span>
                        <h2 style={{ fontWeight: "900", fontSize: "50px", textTransform: "uppercase", color: "#000" }}> Projects</h2>
                        <p style={{ fontSize: "17px", color: "gray", lineHeight: "32px", padding: "30px 0" }}>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name
                        </p>
                        <div className="button" style={{ disply: "flex" }}>
                            <button style={{ color: "#337ab7" }}>
                                View All Projects
                            </button>
                            <div className="icon">
                                <FaLongArrowAltRight style={{ color: "#ffcd00" }} />
                            </div>
                        </div>
                    </div>
                    <div className="box" style={{ width: "600px", height: "470px", border: "1px solid black", background: `url(${Background3})`, marginLeft: "100px" }}>
                        <div className="box-1" style={{ background: "#fff", padding: "2em", width: "50%", height: "35%", margin: "160px" }}>

                            <div className="head" style={{ display: "flex" }}>
                                <div className="box-2" style={{ paddingLeft: "20px" }}>
                                    <h1 style={{ display: "table-cell", verticalAlign: "middle", color: "#fff", background: "#ffcd00", fontSize: "20px", padding: "20px 25px" }}>1</h1>
                                </div>
                                <div className="name" style={{ paddingLeft: "30px" }}>
                                    <h2 style={{ fontWeight: "700", fontSize: "20px", textTransform: "uppercase", color: "#000" }}>  California Mega Mall</h2>
                                </div>

                            </div>
                            <div className="foot">
                                <div className="info" style={{ padding: "10px 0", color: "gray" }}>
                                    <p>Even the all-powerful Pointing has no control</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="colorlib" style={{ height: "500px", background: `url(${Umumi})`, margin: "100px 0", display: "flex", paddingRight: "250px" }}>
                    <div className="col-4" style={{ margin: "180px 0" }} >
                        <div className="icon" style={{ backgroundColor: "#ffcd00", width: "54px", borderRadius: "30px", padding: "20px 20px" }}>
                            <FaAccessibleIcon style={{ color: "#fff" }} />
                        </div>
                        <div className="info">
                            <div className="h1">
                                <h1 style={{ fontSize: "40px", display: "block", color: "#fff", fontWeight: "700", marginBottom: "0.3em" }}>1539</h1>
                            </div>
                            <div className="p">
                                <p style={{ color: "rgba(255,255,255,.7)", fontSize: "14px", textTransform: "uppercase" }}>PROJECTS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" style={{ margin: "180px 0" }}>
                        <div className="icon" style={{ backgroundColor: "#ffcd00", width: "54px", borderRadius: "30px", padding: "20px 20px" }}>
                            <FaSwatchbook style={{ color: "#fff" }} />
                        </div>
                        <div className="info">
                            <div className="h1">
                                <h1 style={{ fontSize: "40px", display: "block", color: "#fff", fontWeight: "700", marginBottom: "0.3em" }}>1539</h1>
                            </div>
                            <div className="p">
                                <p style={{ color: "rgba(255,255,255,.7)", fontSize: "14px", textTransform: "uppercase" }}>PROJECTS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" style={{ margin: "180px 0" }}>
                        <div className="icon" style={{ backgroundColor: "#ffcd00", width: "54px", borderRadius: "30px", padding: "20px 20px" }}>
                            <FaUserTie style={{ color: "#fff" }} />
                        </div>
                        <div className="info">
                            <div className="h1">
                                <h1 style={{ fontSize: "40px", display: "block", color: "#fff", fontWeight: "700", marginBottom: "0.3em" }}>1539</h1>
                            </div>
                            <div className="p">
                                <p style={{ color: "rgba(255,255,255,.7)", fontSize: "14px", textTransform: "uppercase" }}>PROJECTS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" style={{ paddingRight: "200px", margin: "180px 0" }}>
                        <div className="icon" style={{ backgroundColor: "#ffcd00", width: "54px", borderRadius: "30px", padding: "20px 20px" }}>
                            <FaUserSecret style={{ color: "#fff" }} />
                        </div>
                        <div className="info">
                            <div className="h1">
                                <h1 style={{ fontSize: "40px", display: "block", color: "#fff", fontWeight: "700", marginBottom: "0.3em" }}>1539</h1>
                            </div>
                            <div className="p">
                                <p style={{ color: "rgba(255,255,255,.7)", fontSize: "14px", textTransform: "uppercase" }}>PROJECTS</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="services" style={{ backgroundColor: "#fafafa", padding: "100px 0" }}>
                    <div className="services-element" style={{ display: "flex" }}>
                        <div className="information" style={{ width: "34%", paddingLeft: "110px", width: "40%" }}>
                            <h6 style={{ fontSize: "16px", letterSpacing: "18px", textTransform: "uppercase", display: "block", marginBottom: "30px", color: "#ccc" }}>WHAT WE DO?</h6>
                            <span style={{ fontWeight: "100", fontSize: "50px", textTransform: "uppercase", color: "#000" }}>WE OFFER</span>
                            <h2 style={{ fontWeight: "900", fontSize: "50px", textTransform: "uppercase", color: "#000" }}> SERVICES</h2>
                            <p style={{ fontSize: "17px", color: "gray", lineHeight: "32px", padding: "30px 0" }}>
                                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name
                            </p>
                        </div>

                        <div className="services-1" style={{ paddingLeft: "100px", display: "flex", width: "60%" }}>

                            <div className="services-picture" style={{}}>
                                <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px", }} />
                                <div className="title">
                                    <h1>General Constructing</h1>
                                </div>
                                <div className="subtitle" style={{ width: "60%" }}>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                                </div>
                            </div>

                            <div className="services-picture">
                                <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px" }} />
                                <div className="title">
                                    <h1>General Constructing</h1>
                                </div>
                                <div className="subtitle" style={{ width: "60%" }}>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="services-2" style={{ paddingLeft: "100px", display: "flex", width: "100%", margin: "40px 0" }}>
                        <div className="services-picture" style={{}}>
                            <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px", }} />
                            <div className="title">
                                <h1>General Constructing</h1>
                            </div>
                            <div className="subtitle" style={{ width: "60%" }}>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                            </div>
                        </div>

                        <div className="services-picture">
                            <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px" }} />
                            <div className="title">
                                <h1>General Constructing</h1>
                            </div>
                            <div className="subtitle" style={{ width: "60%" }}>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                            </div>
                        </div>
                    </div>

                    <div className="services-3" style={{ paddingLeft: "100px", display: "flex", width: "100%", margin: "60px 0" }}>
                        <div className="services-picture" style={{}}>
                            <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px", }} />
                            <div className="title">
                                <h1>General Constructing</h1>
                            </div>
                            <div className="subtitle" style={{ width: "60%" }}>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                            </div>
                        </div>

                        <div className="services-picture">
                            <FaUserTie style={{ color: "#ffcd00", height: "60px", width: "100px" }} />
                            <div className="title">
                                <h1>General Constructing</h1>
                            </div>
                            <div className="subtitle" style={{ width: "60%" }}>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="engineers" style={{ paddingLeft: "100px", display: "flex", margin: "150px 0" }}>
                    <div className="box" style={{ width: "300px", height: "410px", border: "1px solid black", background: `url(${Engineer1})`, paddingLeft: "20px", objectFit: "cover" }}>
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



                    <div className="information" style={{ width: "34%", paddingLeft: "110px" }}>
                        <h6 style={{ fontSize: "16px", letterSpacing: "18px", textTransform: "uppercase", display: "block", marginBottom: "30px", color: "#ccc" }}>WHAT WE DO?</h6>
                        <span style={{ fontWeight: "100", fontSize: "50px", textTransform: "uppercase", color: "#000" }}>WE OFFER</span>
                        <h2 style={{ fontWeight: "900", fontSize: "50px", textTransform: "uppercase", color: "#000" }}> SERVICES</h2>
                        <p style={{ fontSize: "17px", color: "gray", lineHeight: "32px", padding: "30px 0" }}>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name
                        </p>
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
            </div>
    }
}