import React, { useState } from 'react';

const doctors = [
  {
    BMC:"DEAN",
    name: "Dr. P. V. Chalam",
    degree: "MBBS, MS (General Surgery)",
    phone: "+91 9848040889",
    fax: "08413-235447",
    email: "principal.bhaskarmc@gmail.com",
    image: "pics/Dr-pvchalam-bmc.jpg",
    experience: [
      { role: "Jr. Resident in General Surgery", place: "Gandhi Medical College", time: "1982 - 1986" },
      { role: "Assistant Professor of General Surgery", place: "Gandhi Medical College", time: "21.12.1990 to 31.05.2001" },
      { role: "Assoc. Professor of General Surgery", place: "Kakatiya Medical College, Warangal", time: "01.06.2001 to 16.08.2004" },
      { role: "Professor of General Surgery", place: "Gandhi Medical College, Secunderabad", time: "22.08.2006 to 31.07.2016" },
      { role: "Prof. of General Surgery, Dean", place: "Bhaskar Medical College, Yenkapally", time: "04.08.2016 to Till date" }
    ]
  },
  {
    BMC: "Medical Superintendent",
    name: "Dr. G. V. S. Moorthy",
    degree: "MBBS, MS (Orthopaedics)",
    phone: "+91 9100936771",
    fax: "8413-235447",
    email: "principal.bhaskarmc@gmail.com",
    image: "pics/Moorthy.jpg",
    experience: [
      { role: "Jr. Resident in Orthopaedics", place: "Gandhi Medical College", time: "1983 - 1986" },
      { role: "Assistant Professor of Orthopaedics", place: "Osmania Medical College, Hyderabad", time: "20.02.1987 to 28.12.2000" },
      { role: "Assoc. Professor of Orthopaedics", place: "Osmania Medical College, Warangal", time: "29.12.2000 to 21.08.2006" },
      { role: "Professor of Orthopaedics", place: "Osmania Medical College, Secunderabad", time: "22.08.2006 to 30.11.2017" },
      { role: "Prof. of Orthopaedics & Medical Superintendent", place: "Bhaskar Medical College, Yenkapally", time: "01.12.2017 to Till date" }
    ]
  }
];

const HomeDoctorProfile = () => {
  const [currentDoctor, setCurrentDoctor] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentDoctor((currentDoctor + 1) % doctors.length);
  };

  const handleSwipeRight = () => {
    setCurrentDoctor((currentDoctor - 1 + doctors.length) % doctors.length);
  };

  return (
    <div className="container">
      <div className="HeadOfInstitution-frame">
        <div className="arrow-left" onClick={handleSwipeRight}>
          &#9664;
        </div>
        <div className="HeadOfInstitution">
          <h4>Head of <span className="HeadInstitutionhighlight">Institution</span></h4>
          <div className="details-section">
            <div className="image-section">
              <img src={doctors[currentDoctor].image} alt={doctors[currentDoctor].name} className="doctor-image" />
              <p className="HeadOfInstitution-name">
                <b>{doctors[currentDoctor].BMC} <br></br>{doctors[currentDoctor].name}</b><br />{doctors[currentDoctor].degree}
              </p>
            </div>
            <div className="HeadOfInstitution-details">
              <div className="HeadOfInstitution-experience">
                <h4><b>Experience</b></h4>
                <ul>
                  {doctors[currentDoctor].experience.map((exp, index) => (
                    <li key={index}>
                      <b>{exp.role}:</b> {exp.place} from {exp.time}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="HeadOfInstitution-contact">
                <p><b>Phone:</b> {doctors[currentDoctor].phone} &nbsp;&nbsp;
                  <b>Fax:</b> {doctors[currentDoctor].fax} &nbsp;&nbsp;
                  <b>E-mail:</b> {doctors[currentDoctor].email}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow-right" onClick={handleSwipeLeft}>
          &#9654;
        </div>
      </div>
    </div>
  );
};

export default HomeDoctorProfile;
