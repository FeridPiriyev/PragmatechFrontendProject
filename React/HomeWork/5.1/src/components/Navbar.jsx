import Background from "./image/background2.webp";
import { Link,} from "react-router-dom"




export default function Navbar() {
    return (
        <div style={{ background: `url(${Background})` }}>
            <div className="navbar" style={{ cursor: "pointer" }}>
                <div className="brand" style={{ padding: "30px", marginLeft: "50px" }}  >
                    <a href="" style={{ color: "#fff", textDecoration: "none", fontSize: "28px", position: "relative", textTransform: "uppercase", fontWeight: "600" }}>ARCHITECT</a>
                </div>
                <div className="menu" style={{ paddingRight: "150px", margin: "30px 0" }}>
                
                    <ul style={{ display: "flex", }}>
                       <Link style={{paddingLeft: "30px", color: "rgba(255,255,255,.7)",textDecoration:"none"}} to="/">Home</Link>
                       <Link style={{paddingLeft: "30px", color: "rgba(255,255,255,.7)",textDecoration:"none"}} to="/projects">Projects</Link>
                       <Link style={{paddingLeft: "30px", color: "rgba(255,255,255,.7)",textDecoration:"none"}} to="/services">Services</Link>
                       <Link style={{paddingLeft: "30px", color: "rgba(255,255,255,.7)",textDecoration:"none"}} to="/blog">Blog</Link>
                       <Link style={{paddingLeft: "30px", color: "rgba(255,255,255,.7)",textDecoration:"none"}} to="/about">About</Link>
                       <Link style={{paddingLeft: "30px", color: "rgba(255,255,255,.7)",textDecoration:"none"}} to="/contact">Contact</Link>
                    </ul>
                </div>
                <div className="background-history" style={{ padding: "192px 0", textAlign: "center" }}>
                    <div className="h2" style={{}}>
                        <h2 style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "16px", textTransform: "uppercase", letterSpacing: "5px", textAlign: "center", paddingLeft: "350px" }}>Providing all Kinds of Construction Services</h2>
                    </div>
                    <div className="h1">
                        <h1 style={{ margin: "60px 0", fontSize: "50px", lineHeight: "2px", fontWeight: "700", color: "#fff", paddingLeft: "350px" }}>Constructing Spaces For You</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}