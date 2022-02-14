import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Contact() {

    return <>
        <Navbar />
        <div className="form" style={{ padding: '100px 0' }}>
            <div className="title" style={{ paddingLeft: "200px" }}>
                <h1>Get In Touch</h1>
            </div>
            <div className="first" style={{ display: "flex", paddingLeft: "201px", margin: "60px 0" }}>
                <div className="name">
                    <h1 style={{ fontWeight: "bold", fontSize: "16px" }}>First Name</h1>

                    <input type="text" style={{ border: "1px solid gray", height: "40px", width: "400px" }} placeholder="Your First Name" />
                </div>
                
                <div className="surname" style={{ paddingLeft: "90px" }}>
                    <h1 style={{ fontWeight: "bold", fontSize: "16px" }}>Last Name</h1>
                    <input type="text" style={{ border: "1px solid gray", height: "40px", width: "400px" }} placeholder="Your First Name" />
                </div>
            </div>
            <div className="email" style={{ paddingLeft: "200px", margin: "30px 0" }}>
                <h1 style={{ fontWeight: "bold", fontSize: "16px" }}>Email</h1>
                <input type="email" placeholder="Your Email Adress" style={{ border: "1px solid gray", height: "40px", width: "890px" }} />
            </div>

            <div className="subject" style={{ paddingLeft: "200px", margin: "30px 0" }}>
                <h1 style={{ fontWeight: "bold", fontSize: "16px" }}>Subject</h1>
                <input type="email" placeholder="Your subject of this message" style={{ border: "1px solid gray", height: "40px", width: "890px" }} />
            </div>

            <div className="message" style={{ paddingLeft: "200px", margin: "30px 0" }}>
                <h1 style={{ fontWeight: "bold", fontSize: "16px" }}>Message</h1>
                <textarea placeholder="Say something about us" style={{ border: "1px solid gray", height: "200px", width: "890px" }}></textarea>
            </div>

            <div className="button" style={{ marginLeft: "200px",color:"#fff"}}>
                <button style={{ background: "#ffcd00",fontSize:"16px",padding: "8px 20px" }}>
                    Send Message
                </button>
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