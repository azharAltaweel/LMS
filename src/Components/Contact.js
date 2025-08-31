import HeaderSection from "../Components/HeaderSection";

function ContactPage(){
return(
    <div className="contact-page" id="contact">

        <section>
          <HeaderSection pageName="Contact"/>
        </section>

        <section className="contact-section-info">
            <div className="contact-info-detail">
                <i class="bi bi-map"></i>
                <h4>Our Location</h4>
                <p>3481 Melrose Place, Beverly Hills <br/>  CA 90210</p>
            </div>

            <div className="contact-info-detail">
                <i class="bi bi-phone"></i>
                <h4>Telephone</h4>
                <p>(+1) 517 397 7100 <br/>  (+1) 411 315 8138</p>
            </div>
            <div className="contact-info-detail">
                <i class="bi bi-envelope"></i>
                <h4>Send Email</h4>
                <p>Info@example.com <br/> admin@example.com</p>
            </div>
        </section>

        <section className="contact-section-form">
            <h2>Send your message.</h2>
            <form>
                <div className="name-email">
                    <div className="form-group col-md-6 ">
                    <label>Name</label>
                    <input type="text"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label>Your Email</label>
                    <input type="email"/>
                    </div>
                    </div>

                 <label>Your Subject</label>
                 <input type="text"/>
                 <label>Your Message</label>
                 <textarea rows="20" ></textarea>
                 <button type="submit" className="btn1" style={{minWidth:"120px",maxWidth:"200px",width:"30%", margin:"20px auto 0"}}>Send Message</button>
            </form>
        </section>

    </div> 
);
}export default ContactPage;