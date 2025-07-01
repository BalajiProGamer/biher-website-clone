import React, { useState } from "react";
import computingImg from "../../assets/computing.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from '../Banner';
import '../../styles/global.css';
import deanImg from "../../assets/cse-dean.png";

const Computing = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="computing-content-welcome">Welcome to School of Computing</h5>
        <br></br>
        <h3 className="computing-content-heading">About <span className="computing-highlight">The School :</span></h3>
        <hr />
        <p className="computing-content-paragraph">The School of Computing, Bharath Institute of Higher Education and Research covers of Department of Computer Science and Engineering and Department of Information Technology. The Department of Computer Science and Engineering offeres B.Tech. Computer Science and Engineering with NBA accreditation, B.Tech. Computer Science and Engineering (Artificial Intelligence), B.Tech. Computer Science and Engineering (Cyber Security), M.Tech. Computer Science and Engineering. The Department of Information Technology provides B.Tech Information Technology and M.Tech Information Technology. The school also offers Ph.D. in Computer Science and Engineering and Ph.D Information Technology.</p>
        <p className="computing-content-paragraph">The School has MoU with top-notch industries like IBM, Oracle, VMWare, RedHat and Cisco to share knowledge and experience to our students. The school also has Centre of Excellence in digital forensics and Artificial Intelligence in order to bridge the gap between industry and academia. Our placements are consistently above 90% for the past three years. Our students are placed with highest salary of 24 lakhs per annum and an average salary of 3.5 lakhs per annum. Students are guided for placements right from the first year. The students and faculty of the school of computing to their credit have 50 patents. We cater to various needs of our students. Students are encouraged to be part of various Student Development Clubs to horn skills of their passion.</p>
        <p className="computing-content-paragraph">Our Institute has achieved a prestigious position as one of the Top Computer science engineering colleges in Tamil Nadu. Aspiring students must be aware about the importance of Computer science engineering in ever changing world. Exploring the Benefits of a Computer Science Engineering Course B.Tech Computer Science engineering course which is an exciting, ever-evolving field of study that has the potential to revolutionize the way we interact with technology. With the advent of new technologies such as artificial intelligence, virtual reality, and the Internet of Things, the opportunities for those who choose to pursue a B.Tech in Computer Science Engineering are endless. By pursuing this course, you can gain an understanding of the fundamentals of computer science and then use this knowledge to develop and create projects that can be applied to many aspects of life. With a Computer Science Engineering course, you can gain a deeper understanding of how computing systems work and develop the skills to help you build the next generation of computing systems. This can open up a world of possibilities to help you make a real difference in the world</p>
      <h3 className="computing-content-heading">The Advantages of Pursuing a B.Tech <span className="computing-highlight">Computer Science Engineering Course</span></h3>
      <hr />
      <p className="computing-content-paragraph">A Computer Science Engineering course provides the skills necessary to develop and manage computer systems, analyze data, and create algorithms that can be used to solve complex problems. With this knowledge, you can pursue a range of career opportunities in software engineering, network engineering, and database technology. You can also pursue careers in artificial intelligence, machine learning, and robotics. A Computer Science Engineering course also provides the opportunity to develop projects that have real-world applications, such as systems for controlling robots, self-driving cars, or virtual reality applications.</p>

      </>
    ),

   "Vision & Mission": (
  <>
    <h5 className="computing-content-welcome">Vision & Mission</h5>

    <h3 className="computing-content-heading">Our <span className="computing-highlight">Vision :</span></h3>
    <hr className="computing-divider" />
    <p className="computing-content-paragraph">
      To be a globally recognized, skilled, research oriented and communally responsible software and hardware engineers
      team catering to the various industrial needs.
    </p>

    <h3 className="computing-content-heading">Our <span className="computing-highlight">Mission :</span></h3>
    <hr className="computing-divider" />
    <p className="computing-content-paragraph">
      Mission of the department is to achieve International Recognition by:
    </p>
    <ul className="computing-mission-list">
      <li>
        <i><b>MD 1</b></i> Impart knowledge on fundamentals and emerging thrust areas of IT and ITES.
      </li>
      <li>
        <i><b>MD 2</b></i> Collaborate with International and National institutions/organizations in Software Development,
        Consultancy, Research & Development.
      </li>
      <li>
        <i><b>MD 3</b></i> Train the spirit of leadership and entrepreneurial knowledge and skills.
      </li>
      <li>
        <i><b>MD 4</b></i> Inculcate values and responsibilities in rendering technological services for the sustainable
        growth of the society.
      </li>
    </ul>
  </>
),

   "Deans Desk": (
  <>
    <h3 className="computing-content-heading">Deans <span className="computing-highlight">Desk :</span></h3>
    <hr className="computing-divider" />
    <br />
    <div className="computing-dean-profile">
      <img src={deanImg} alt="Prof. Dr. S. Neduncheliyan" className="computing-dean-image" />
      <div className="computing-dean-details">
        <h4 className="computing-dean-name">
          <b>Prof. Dr. S. Neduncheliyan</b>, <span className="computing-dean-qual">B.E, M.S (Engg)(M’Sia), Ph.D, FIETE, MIET.</span>
        </h4>
        <p className="computing-dean-title">
          🎓 Professor and Dean,<br />🏛 <em>School of Computing, BIHER</em>
        </p>
      </div>
    </div>

    <div className="computing-dean-message">
      <p>
        A place to be, a place to grow, and a place to begin your life’s work. Welcome! The School of Computing is a place to be at home. I know because I have been a part of the School of Computing since I was a graduate student in the late 1980s. I returned in 2018 to join the faculty because this is the place I want to be. And now I have the distinct privilege and honour to serve my school, our school, as interim Dean. My goal is to foster an environment where we all feel welcome and a part of the rich history and community that is the School of Computing.
      </p>
      <br />
      <p>
        We are a student-focused university and a lot of emphasis is given to learning. Our student-centered approach to teaching and learning is geared towards ensuring that our students should emerge not only with high level of communication and problem solving skills, flexibility to adapt to new situations, and the ability to become future leaders in their chosen fields, but with sensitivity to societal issues and working on the principles of ‘Giving Back to Society’ and ‘Building for Nation’. The main goal is to provide education to students so that they not only become skilled and employable but also successful entrepreneurs and creating jobs for others. Education does not mean just delivering lectures, taking exams and awarding degrees. Real education goes way beyond the classroom teaching and learning. We provide skills, exposure and an environment for holistic development to our students. We are putting emphasis on producing graduates with hands-on approach in a multidisciplinary environment and industry-based learning experience. Our goal is to keep raising the bar of the right education in a personalized manner.
      </p>
      <p>The dynamic team of faculty members who are “Collaborator”, “Contributor”, “Committed”, “Creative” and “Congruent” - possessing ‘5C’ qualities facilitates in imparting the knowledge by implementing the course curriculum designed based on ‘5C’ i.e. Compact, Contemporary, Cutting-Edge, Customised and Collaborative to match up the Management’s strong vision of being the boutique University</p>
    </div>
  </>
),

    "Board of Studies": (
      <>
        <h3 className="computing-content-heading">Board of <span className="computing-highlight">Studies</span></h3>
        <hr />
        <p className="computing-content-paragraph">The board comprises experienced academicians and industry leaders who shape the curriculum and research direction in computing disciplines.</p>
        <p className="computing-content-paragraph">» Members include professionals from tech firms, research labs, and universities worldwide.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="computing-content-heading">Members of BOS <span className="computing-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="computing-bos-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Core Competence</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colSpan="4"><strong>Chairperson</strong></td></tr>
            <tr>
              <td>01</td>
              <td>Dr. M. Sundararaj</td>
              <td>Dean Academics, BIHER</td>
              <td>Cloud Computing</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Machine Learning</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Cybersecurity</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Full Stack Development</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={computingImg} alt="Computing" className="computing-banner" />

      <div className="computing-breadcrumb-header">
        <div className="computing-breadcrumb-container">
          <Link to="/" className="computing-breadcrumb-link"><FaHome className="computing-breadcrumb-icon" /></Link>
          <span className="computing-breadcrumb-separator">»</span>
          <span className="computing-breadcrumb-text">Academics</span>
          <span className="computing-breadcrumb-separator">»</span>
          <span className="computing-breadcrumb-current">School of Computing</span>
        </div>
      </div>

      <div className="computing-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="computing-content-container">
          <div className="computing-sidebar">
            <div className="computing-sidebar-header">
              <FaBook className="computing-sidebar-icon" />
              Categories
            </div>
            <ul className="computing-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="computing-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="computing-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'computing-active-tab' : ''}
                          >
                            » Members
                          </li>
                        </ul>
                      )}
                    </li>
                  );
                }

                if (item === "Members") return null;

                return (
                  <li
                    key={item}
                    className={selectedTab === item ? 'computing-active-tab' : ''}
                    onClick={() => {
                      setSelectedTab(item);
                      setIsBoardOpen(false);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="computing-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>
      <Banner/>
      <Footer />
    </div>
  );
};

export default Computing;
