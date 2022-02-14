import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaDribbble } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaEnvelopeOpen } from "react-icons/fa"
import {FaMapMarkerAlt } from "react-icons/fa"


export default function Footer() {
    return (
        <div>
            <div className="footer" style={{ background: "#1e2022", height: "640px", display: "flex" }}>
                <div className="col-4" style={{ padding: "100px 0", marginLeft: "100px", width: "25%" }} >
                    <h1 style={{ color: "#e6e6e6", fontSize: "14px", textTransform: "uppercase", letterSpacing: "5px", fontWeight: "700" }}>ABOUT COMPANY</h1>
                    <div className="subtitle" style={{ padding: "20px 0" }}>
                        <p style={{ fontSize: "17px", lineHeight: "32px", color: "gray", fontWeight: "300px", width: "60%" }}>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                    </div>

                    <div className="icon" style={{ display: "flex" }}>
                        <FaTwitter style={{ color: "#ffcd00", borderRadius: "1px solid #ffcd00" }} />
                        <div className="icon-1" style={{ paddingLeft: "10px" }}>
                            <FaFacebookF style={{ color: "#ffcd00", borderRadius: "1px solid #ffcd00" }} />
                        </div>
                        <div className="icon-1" style={{ paddingLeft: "10px" }}>
                            <FaLinkedin style={{ color: "#ffcd00", borderRadius: "1px solid #ffcd00" }} />
                        </div>
                        <div className="icon-1" style={{ paddingLeft: "10px" }}>

                            <FaDribbble style={{ color: "#ffcd00", borderRadius: "1px solid #ffcd00" }} />
                        </div>
                    </div>
                </div>


                <div className="col-4" style={{ padding: "100px 0", width: "25%" }}>
                    <h1 style={{ color: "#e6e6e6", fontSize: "14px", textTransform: "uppercase", letterSpacing: "5px", fontWeight: "700" }}>RECENT BLOG </h1>
                    <div className="subtitle" style={{ padding: "20px 0" }}>
                        <p style={{ fontSize: "14px", lineHeight: "1px", color: "gray", fontWeight: "300px", width: "60%" }}>— 20 Jan, 2017</p>
                    </div>
                    <div className="link">
                        <a href="" style={{ color: "rgba(255,255,255,.9)", fontSize: "16px", lineHeight: "33px", fontWeight: "300px", width: "3%", textDecoration: "none" }}>Results of Annual General <br />Meeting</a>
                    </div>
                    <div className="subtitle" style={{ padding: "20px 0" }}>
                        <p style={{ fontSize: "14px", lineHeight: "1px", color: "gray", fontWeight: "300px", width: "60%" }}>— 19 Jan, 2017</p>
                    </div>
                    <div className="link">
                        <a href="" style={{ color: "rgba(255,255,255,.9)", fontSize: "16px", lineHeight: "33px", fontWeight: "300px", width: "3%", textDecoration: "none" }}>Construction was awarded with “The Best Construction Company” prize</a>
                    </div>
                    <div className="subtitle" style={{ padding: "20px 0" }}>
                        <p style={{ fontSize: "14px", lineHeight: "1px", color: "gray", fontWeight: "300px", width: "60%" }}>— 18 Jan, 2017</p>
                    </div>
                    <div className="link">
                        <a href="" style={{ color: "rgba(255,255,255,.9)", fontSize: "16px", lineHeight: "33px", fontWeight: "300px", width: "3%", textDecoration: "none" }}>New Saint Michael’s College Residence Hall Buzzing with Student Activity</a>
                    </div>
                </div>



                <div className="col-4" style={{ padding: "100px 0", width: "25%" }}>
                    <h1 style={{ color: "#e6e6e6", fontSize: "14px", textTransform: "uppercase", letterSpacing: "5px", fontWeight: "700" }}>INFORMATION </h1>
                    <div className="elements" style={{ display: "flex" }}>
                        <div className="icon" style={{ padding: "13px 0" }}>
                            <FaCheck style={{ color: "#ffcd00",textDecoration: "none" }} />
                        </div>
                        <div className="subtitle">
                            <a href="" style={{ color: "rgba(255,255,255,.9)", marginLeft: "20px",textDecoration: "none" }}> Our Company</a>
                        </div>
                    </div>
                    <div className="elements" style={{ display: "flex" }}>
                        <div className="icon" style={{ padding: "13px 0" }}>
                            <FaCheck style={{ color: "#ffcd00",textDecoration: "none" }} />
                        </div>
                        <div className="subtitle">
                            <a href="" style={{ color: "rgba(255,255,255,.9)", marginLeft: "20px",textDecoration: "none" }}> Certification</a>
                        </div>
                    </div>
                    <div className="elements" style={{ display: "flex" }}>
                        <div className="icon" style={{ padding: "13px 0" }}>
                            <FaCheck style={{ color: "#ffcd00",textDecoration: "none" }} />
                        </div>
                        <div className="subtitle">
                            <a href="" style={{ color: "rgba(255,255,255,.9)", marginLeft: "20px",textDecoration: "none" }}>Our services</a>
                        </div>
                    </div>
                    <div className="elements" style={{ display: "flex" }}>
                        <div className="icon" style={{ padding: "13px 0" }}>
                            <FaCheck style={{ color: "#ffcd00",textDecoration: "none" }} />
                        </div>
                        <div className="subtitle">
                            <a href="" style={{ color: "rgba(255,255,255,.9)", marginLeft: "20px",textDecoration: "none" }}> Career</a>
                        </div>
                    </div>
                    <div className="elements" style={{ display: "flex" }}>
                        <div className="icon" style={{ padding: "13px 0" }}>
                            <FaCheck style={{ color: "#ffcd00",textDecoration: "none" }} />
                        </div>
                        <div className="subtitle">
                            <a href="" style={{ color: "rgba(255,255,255,.9)", marginLeft: "20px",textDecoration: "none" }}>Core Values</a>
                        </div>
                    </div>
                    <div className="elements" style={{ display: "flex" }}>
                        <div className="icon" style={{ padding: "13px 0" }}>
                            <FaCheck style={{ color: "#ffcd00",textDecoration: "none" }} />
                        </div>
                        <div className="subtitle">
                            <a href="" style={{ color: "rgba(255,255,255,.9)", marginLeft: "20px",textDecoration: "none" }}>Company History</a>
                        </div>
                    </div>
                    <div className="elements" style={{ display: "flex" }}>
                        <div className="icon" style={{ padding: "13px 0" }}>
                            <FaCheck style={{ color: "#ffcd00",textDecoration: "none" }} />
                        </div>
                        <div className="subtitle">
                            <a href="" style={{ color: "rgba(255,255,255,.9)", marginLeft: "20px",textDecoration: "none" }}> FAQ</a>
                        </div>
                    </div>
                </div>


                <div className="col-4" style={{ padding: "100px 0", width: "25%" }}>
                    <h1 style={{ color: "#e6e6e6", fontSize: "14px", textTransform: "uppercase", letterSpacing: "5px", fontWeight: "700" }}>CONTACT INFO </h1>
                    <div className="subtitle" style={{ padding: "20px 0" }}>
                        <p style={{ fontSize: "17px", lineHeight: "25px", color: "gray", fontWeight: "300px", width: "60%" }}>291 South 21th Street,Suite 721 New York NY 10016</p>
                        <div className="elements" style={{ display: "flex" }}>
                            <div className="icon" style={{ padding: "13px 0" }}>
                                <FaPhoneAlt style={{ color: "#ffcd00", }} />
                            </div>
                            <div className="subtitle">
                                <a href="" style={{ color: "rgba(255,255,255,.9)", marginLeft: "20px",textDecoration: "none" }}>  + 1235 2355 98</a>
                            </div>
                        </div>
                        <div className="elements" style={{ display: "flex" }}>
                            <div className="icon" style={{ padding: "13px 0" }}>
                                <FaEnvelopeOpen style={{ color: "#ffcd00", }} />
                            </div>
                            <div className="subtitle">
                                <a href="" style={{ color: "rgba(255,255,255,.9)", marginLeft: "20px",textDecoration: "none" }}>info@yoursite.com</a>
                            </div>
                        </div>
                        <div className="elements" style={{ display: "flex" }}>
                            <div className="icon" style={{ padding: "13px 0" }}>
                                <FaMapMarkerAlt style={{ color: "#ffcd00", }} />
                            </div>
                            <div className="subtitle">
                                <a href="" style={{ color: "rgba(255,255,255,.9)", marginLeft: "20px",textDecoration: "none" }}> yourwebsite.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}