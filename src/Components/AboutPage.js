import TeamCard from "./TeamCard";
import CardWithIcon from "./CardWithIcon";
import ExploreCards from "./ExploreCards";
import HeaderSection from "./HeaderSection";
import WomanSection from "./WomenSection";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSmile, FaFileAlt, FaHeadphones, FaUser } from "react-icons/fa";
 import person1 from "../Assets/Images/person1.jpg";
 import person2 from "../Assets/Images/person2.jpg";
 import person3 from "../Assets/Images/person3.jpg";
 import person4 from "../Assets/Images/person4.jpg";
import FAQ from "./QuestionSection";

 const Features=[
    { icon:<i class="bi bi-book icon-circle-bg" ></i>, title: "Learn More Anywhere", subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore." },
    { icon: <i class="bi bi-heart icon-circle-bg"></i>, title: "Expert Instructor", subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore." },
    { icon: <i class="bi bi-person icon-circle-bg"></i>, title: "Team Management", subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore." },
    { icon: <i class="bi bi-eye icon-circle-bg"></i>, title: "Course Planing", subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore." },
    { icon: <i class="bi bi-lightbulb icon-circle-bg"></i>, title: "Teacher Monitoring", subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore." },
    { icon:<i class="bi bi-envelope icon-circle-bg"></i>, title: "24/7 Strong Support ", subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore." },
 ];
    const AchieveData = [
     { icon: <FaSmile color="#4e5bff" />, title: 854, subtitle: "Enrolled Students" },
     { icon: <FaFileAlt color="#ff7f0e" />, title: 521, subtitle: "Academic Programs" },
     { icon: <FaHeadphones color="#2ecc71" />, title: 163, subtitle: "Winning Award" },
     { icon: <FaUser color="#c0392b" />, title: 93, subtitle: "Certified Students" },
   ];

   const teamMembers = [
    { image: person1, name: "Daniel Miller", role: "Logo Expert", courses: 3, students: 3 },
    { image: person2, name: "Masum Billah", role: "Developer", courses: 6, students: 5 },
    { image: person3, name: "Kenneth Renteria", role: "Marketer", courses: 0, students: 0 },
    { image: person4, name: "Richard Hood", role: "UI UX Designer", courses: 2, students: 0 },
  ];
function AboutPage(){
return(
<div className="about-container">

            <section className="about-page-container">
          <HeaderSection pageName="About Us"/>
         <ExploreCards />
        <WomanSection/>
         <div className="section-title">
               <div className="small-title-container">
                 <h2 className="small-title">Why Choose Edusion</h2>
                <div className="line"></div></div>
                <p className="blue-title"> Find the   
                  <span className="green-title"> best features </span>
                  of Edusion</p>
                <CardWithIcon data={Features}/>
            </div>
            <div className="section-title">
               <div className="small-title-container">
                 <h2 className="small-title">Some Fun Fact</h2>
                <div className="line"></div></div>
                <p className="blue-title"> Our Great 
                  <span className="green-title"> Achievement </span>
                 </p>
                <CardWithIcon data={AchieveData}/>
            </div>
            <div className="section-title">
               <div className="small-title-container">
                 <h2 className="small-title">Team Member</h2>
                <div className="line"></div></div>
                <p className="blue-title"> Our Expert 
                  <span className="green-title"> Instructors </span>
                 </p>
                 <div className="team-section">
                    {teamMembers.map((member, i) => (
                        <div key={i} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                            <TeamCard {...member} />
                            </div>
                         ))}
                         </div>
                         </div>

                <div className="section-title">
               <div className="small-title-container">
                <h2 className="small-title">Frequently Asked Question</h2>
                <div className="line"></div></div>
                <p className="blue-title"> general
                <span className="green-title"> Questions </span>
                </p>
                <FAQ/>
            </div>
<div>
    <h3 style={{color:"#2eca7f",background:"rgba(46,202,127,0.1)", width:"60%", marginBottom:"60px",
        borderRadius:"30px",margin:"auto",padding:"10px",fontSize:"24px",textAlign:"center"
    }}>Trusted Company Arround The World!</h3>
</div>

        </section>
</div>

);
}export default AboutPage;