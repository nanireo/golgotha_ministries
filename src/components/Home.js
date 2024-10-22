import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import MapLink from './MapLink';
import YoutubeVideos from './YoutubeVideos';
import Banner from './Banner';
import PdfViewer from './PdfMessages';


function Home() {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <main>
            <div>
                <Banner />
            </div> 

            {/* <div className="Chairmans-Message">
    <img src="sliding/GM_3.jpg" alt="Chairman'sPic" className="ChairmansPic" /> */}
    {/* <div className="text-overlay">
        <h4>Bro. Samuel Mories (M.B.A., M.Th.)</h4>
        <p>Associate Pastor</p>
        <p>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Bro. Samuel Mories serves as the dedicated Associate Pastor at Golgotha Ministries in Armoor. With a strong academic foundation holding both an M.B.A. and a Master of Theology (M.Th.), Bro. Samuel brings a unique blend of spiritual insight and organizational leadership to the ministry. His passion for sharing the Gospel and commitment to serving the local community have been instrumental in the growth and impact of the church.

            {isReadMore && (
                <span>
                    Bro. Samuel Mories serves as the dedicated Associate Pastor at Golgotha Ministries in Armoor. With a strong academic foundation holding both an M.B.A. and a Master of Theology (M.Th.), Bro. Samuel brings a unique blend of spiritual insight and organizational leadership to the ministry. His passion for sharing the Gospel and commitment to serving the local community have been instrumental in the growth and impact of the church. At Golgotha Ministries, Bro. Samuel focuses on nurturing spiritual growth, guiding discipleship programs, and supporting the vision of the church through pastoral care. His heart for service extends beyond the church walls, as he actively engages with outreach initiatives aimed at uplifting the underprivileged and spreading the message of Christ’s love. In addition to his pastoral duties, Bro. Samuel also leverages his business acumen to ensure that the church’s ministries are efficiently managed, allowing the church to thrive and meet the needs of its congregation and community. He continues to inspire and lead with humility, dedication, and unwavering faith in God’s plan.
                </span>
            )}
        </p>
        <button onClick={toggleReadMore} className="read-more-button">
            {isReadMore ? 'Read Less' : 'Read More'}
        </button>
    </div> */}

{/* <div className="WhoWeAreContainer">
            <div className="textContainer">
            <img src="sliding/GM_3.jpg" alt="Medical Services" className="mainImage" />
             <div className="textOverlay">
             <h1 className="OurServicesH1Text">Bro. Samuel Mories (M.B.A., M.Th.)</h1>
             <p>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Bro. Samuel Mories serves as the dedicated Associate Pastor at Golgotha Ministries in Armoor. With a strong academic foundation holding both an M.B.A. and a Master of Theology (M.Th.), Bro. Samuel brings a unique blend of spiritual insight and organizational leadership to the ministry. His passion for sharing the Gospel and commitment to serving the local community have been instrumental in the growth and impact of the church.

            
                <span>
                    Bro. Samuel Mories serves as the dedicated Associate Pastor at Golgotha Ministries in Armoor. With a strong academic foundation holding both an M.B.A. and a Master of Theology (M.Th.), Bro. Samuel brings a unique blend of spiritual insight and organizational leadership to the ministry. His passion for sharing the Gospel and commitment to serving the local community have been instrumental in the growth and impact of the church. At Golgotha Ministries, Bro. Samuel focuses on nurturing spiritual growth, guiding discipleship programs, and supporting the vision of the church through pastoral care. His heart for service extends beyond the church walls, as he actively engages with outreach initiatives aimed at uplifting the underprivileged and spreading the message of Christ’s love. In addition to his pastoral duties, Bro. Samuel also leverages his business acumen to ensure that the church’s ministries are efficiently managed, allowing the church to thrive and meet the needs of its congregation and community. He continues to inspire and lead with humility, dedication, and unwavering faith in God’s plan.
                </span>
        </p>
                 </div>
              </div>
         </div> */}



            <div>
                <YoutubeVideos/>
            </div>

            <div>
                <PdfViewer/>
            </div>
           

            <div>
                <MapLink/>
            </div>
        </main>
    );
}

export default Home;



























// import React from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
// import MapLink from "./MapLink";

// function Home() {
//     return (
//         <main>
//             <h1 className="OurServicesH1Text">Our <span className="highlight">Services</span></h1>

//             <div className="Our_Services_Pics">

//                 <div className="image-container">
//                     <img src="OurServicesPics/education-home.png" alt="Education" />
//                     <div className="overlay">
//                         <div className="overlay-content">
//                             <i className="bi bi-book overlay-icon"></i>
//                             <span className="overlay-text">Education</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="image-container">
//                     <img src="OurServicesPics/departments.png" alt="Departments" />
//                     <div className="overlay">
//                         <div className="overlay-content">
//                         <i class="bi bi-building-add overlay-icon"></i>
//                         <span className="overlay-text">Departments </span> 
//                         </div>
//                     </div>
//                 </div>

//                 <div className="image-container">
//                     <img src="OurServicesPics/med-services-surgery-featured.png" alt="Medical Services" />
//                     <div className="overlay">
//                         <div className="overlay-content">
//                             <i className="bi bi-capsule overlay-icon"></i>
//                             <span className="overlay-text">Medical Services</span>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             <div className="Chairmans-Message">
//             <img src="logo/Chairman B&W.jpg" alt="Chairman'sPic" className="ChairmansPic" />
//             <h4>Sri. J. Bhasakar Rao</h4>
//             <p>Chairman - JBES & JBRES</p>

//             <h3>Let us recollect our Founder Chairman’s Message</h3>
//             <div className="content">
            //     <p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;In my position as the Chairman of all the J.B. Group of Educational Societies and all the J.B.Group of Educational Institutions, I convey my best wishes to all our relentlessly advancing institutions nestled in a sprawling woody campus of about 106 acres of land, on the main road at Yenkapally, Moinabad Mandal, R.R.District. The efficacy of the group can be witnessed from the establishment of three Engineering Colleges; J.B.Institute of Engineering &Technology; Joginpally.B.R.Engineering College; and Bhaskar Engineering College, besides the manifestation of Bhaskar Medical College and Bhaskar General Hospital. My lifetime ambition and objective being the provision of education, from KG to PG, to the underprivileged students of rural background. The management encourages the youth of this state to find their careers in the noble profession of medical practitioner, by imparting quality medical education, and help our people lead healthy lives.


            // The World since recent times had been moving amazingly fast and fiercely competitive in all spheres of human activity. The said situation called for massive expansion of career focused education, particularly in Engineering, Management and such other professional areas. As a result, there had been mushroom growth of Institutions at a phenomenal level in the private sector. However; it is unfortunate to observe that the quality of education started eroding. The urgent need of the times was to lay emphasis on quality education and to strive vigorously for global excellence and acceptability. It is exactly at this critical juncture of time i.e. in the year 1993, J.B.Educational Society was established to serve the cause of the spread of general, Professional and Engineering education by a team of enlightened persons, under my Chairmanship.


            // The J.B. Group of Educational Societies has been maintaining an excellent academic track record for more than a decade. The J. B.Institute of Engineering & Technology (1998),Bhaskar Engineering College and Bhaskar Pharmacy College (2007) were established by J.B.Educational Society. Joginpally B.R. Engineering College (2002), Bhaskar Medical College (2005) and Joginpally B.R.Pharmacy College (2007),were established under the banner of Joginpally B.R.Educational Society.


            // J.B.I.E.T. has well developed infrastructural facilities, such as adequate built up area, well equipped laboratories, libraries and information centers with digitalization and automation and on line transaction facilities in the campus. All facilities such as Medical, Transport, Canteen and Games & Sports, are available besides Seminar Halls, Conference Halls, Indoor Auditorium, Open-Air Theatre, Post Office and Banking.


            // We have encompassed Jawaharlal Knowledge Centre at J.B.I.E.T and J.B.R.E.C. to empower students to acquire Interactive Communication skills, Technical and employable skills to compete in the Global job market. The policy of this Management is to impart quality education and train the students and for the accomplishment of the same, we have recruited resourceful faculty that are dynamic dedicated and committed to the goal oriented efficient teaching with effective methodology. We have recruited seven Professors with Ph.D Degrees to hold the posts of HODs of the respective seven branches, apart from the principal with vast experience in the field.


            // The Management has been sponsoring the deserving students and faculty to present technical papers and participate in the International Conferences in India and abroad. The Management has taken all possible measures for the career development and placement of all the qualified students domestically and globally.


            // I have immense pleasure to welcome and congratulate all the Principals, Faculty, Staff and Students of all the colleges housed in the Campus for their laudable efforts in achieving academic pinnacle.

            // </p>
                    
//                 </div>
//             </div>


//             <div className="WhoWeAreContainer">
//             <div className="textContainer">
//             <img src="HomePagePics/whoWeAre1.jpeg" alt="Medical Services" className="mainImage" />
//             <div className="textOverlay">
//             <h1 className="OurServicesH1Text">Who <span className="highlight">we are</span></h1>
            // <p>
            //     Bhaskar Medical College and Bhaskar General Hospital are committed to excellence in healthcare education and patient care. Established with the vision of nurturing future medical professionals and providing quality healthcare services, our institution stands as a beacon of learning and healing in the community.
            //     <br /><br />
            //     At Bhaskar Medical College, we offer a comprehensive curriculum that integrates modern medical education with hands-on clinical experience. Our dedicated faculty, state-of-the-art infrastructure, and innovative teaching methodologies ensure that our students receive a well-rounded education that prepares them to meet the evolving challenges of the healthcare industry.
            //     <br /><br />
            //     Bhaskar General Hospital serves as the primary teaching hospital for the college, providing an extensive range of medical services across various specialties. With a patient-centric approach, advanced diagnostic facilities, and a team of skilled healthcare professionals, we are dedicated to delivering compassionate and high-quality care to all.
            //     <br /><br />
            //     Together, Bhaskar Medical College and Bhaskar General Hospital strive to foster a culture of excellence, innovation, and community service, making a positive impact on society through education, research, and patient care.
            //     </p>
//                 </div>
//                 <div className="pngImages">
//                 <img src="HomePagePics/compassion.png" alt="Compassion" className="pngIcon" /> <p>Integrity</p>
//                 <img src="HomePagePics/excellence.png" alt="Excellence" className="pngIcon" /> <p>Excellence</p>
//                 <img src="HomePagePics/integrity.png" alt="Integrity" className="pngIcon" /> <p>Compassion</p>
//                 </div>
//              </div>
//         </div>

//         <div className="NotableAlumni">
//             <h4>Notable <span className="highlight">Alumni</span></h4>
//             <div className="alumni-frame">
//                 <img src="pics/DrARoshini.jpeg" alt="Dr. A Roshini" className="DrARoshini" />
//                 <p className="alumni-name"> <b>Dr. A. Roshini</b> <br></br>ENT Gold Medalist KNRUHS - 2022</p>
//             </div>
//         </div>


//             <div>
//                 <MapLink />
//             </div>

//         </main>
//     );
// }

// export default Home;
