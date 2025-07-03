import React, { useState } from 'react';
import founderImg from '../../assets/Founder1.png';
import chancellorImg from '../../assets/chancellor.png';
import viceChancellorImg from '../../assets/vicechancellor.png';
import proViceChancellorImg from '../../assets/provicechancellor.png';
import registrarImg from '../../assets/registrar.png';
import additionalRegistrarImg from '../../assets/additionalregistrar.png';
import '../../styles/global.css';
import Footer from '../Footer';
import Query from '../Pages/Query';
import Banner from '../Banner';


const Leadership = () => {
  // Chancellor Modal
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Vice-Chancellor Modal
  const [showViceModal, setShowViceModal] = useState(false);
  const handleViceOpen = () => setShowViceModal(true);
  const handleViceClose = () => setShowViceModal(false);

  // Pro Vice-Chancellor Modal
  const [showProModal, setShowProModal] = useState(false);
  const handleProOpen = () => setShowProModal(true);
  const handleProClose = () => setShowProModal(false);


  

  return (
    <>
    <div className="leadership-section">
      {/* Welcome Section */}
      <div className="leadership-wrapper">
        <div className="leader-left">
          <h5 className="leader-subtitle">LEADERSHIP</h5>
          <h2 className="leader-title">
            Welcome to <span>BIHER</span>
          </h2>
        </div>
        <div className="leader-full-divider"></div>
      </div>

      {/* Founder Section */}
      <div className="leadership-wrapper content-section">
        <div className="leader-left">
          <p>I am happy that you are joining our Institute for pursuing the course of study of your choice. This introduction to our Institution speaks of those features that reaffirm our faith in, and commitment to, the essential task of helping you transform yourself into a careerist in dental, medical, engineering and technology I am sure you will make the best use of the programmes offered, facilities provided and opportunities created here in your interest. I am quite confident that you will address yourself to the tasks of learning with a tremendous sense of involvement and come out successful with flying colours in your cherished endeavour. Let me greet you at the beginning of an academic journey towards the goal of a rewardingly prosperous career.</p>
        </div>
        <div className="leader-right">
          <div className="image-wrapper">
            <img src={founderImg} alt="Founder" className="founder-img" />
          </div>
        </div>
      </div>

      <br />

      {/* Chancellor Section */}
      <div className="chancellor-wrapper">
        <h1 className="chancellor-heading">CHANCELLOR :</h1>
        <div className="chancellor-divider"></div>
        <div className="chancellor-content">
          <div className="chancellor-left">
            <img src={chancellorImg} alt="Chancellor" className="chancellor-img" />
          </div>
          <div className="chancellor-right">
            <h3 className="chancellor-name">Prof. Mohamed Rela</h3>
            <p className="chancellor-title"><em>Chancellor</em></p>
            <p>Multi-Stream University campus with the latest technology, the best of CBCS Curriculum and the expertise of academic stalwarts and industry doyens define the contours of BIHER Deemed to be University. You would certainly find it rewarding as you journey along with us into the realms of higher education.</p>
            <br></br>
            <p>Now, the BIHER has a proud record of evolving efficient, confident and Highly Knowledgeable Technocrats, Doctors, Engineers, Managers, Pharmacists and Entrepreneurs with global thinking and futuristic mind-set that will contribute to Nation Building with a strong adherence to Educational Ethics.</p>
            <br></br>
            <p>I hope the student community & parents will utilize this new academic venture of BIHER...</p>

            <button className="arrow-button" onClick={handleOpen}>
              <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chancellor Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={handleClose}>×</button>
            <h2>Message from Chancellor :</h2>
            <div className="modal-divider"></div>
            <div className="modal-content">
              <img src={chancellorImg} alt="Chancellor" className="modal-img" />
              <div className="modal-text">
                <p>Multi-Stream University campus with the latest technology, the best of CBCS Curriculum and the expertise of academic stalwarts and industry doyens define the contours of BIHER Deemed to be University.</p>
                <p>Now, the BIHER has a proud record of evolving efficient, confident and Highly Knowledgeable Technocrats, Doctors, Engineers, Managers, Pharmacists and Entrepreneurs.</p>
                <p>I hope the student community & parents will utilize this new academic venture of BIHER. I welcome you to this wholesome experience at BIHER.</p>
                <h3 className="modal-author">Prof. Mohamed Rela</h3>
                <p className="modal-title">Chancellor</p>
              </div>
            </div>
            <button className="modal-btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}

      {/* Vice Chancellor Section */}
      <div className="chancellor-wrapper">
        <h1 className="chancellor-heading">VICE-CHANCELLOR :</h1>
        <div className="chancellor-divider"></div>
        <div className="chancellor-content">
          <div className="chancellor-left">
            <img src={viceChancellorImg} alt="Vice Chancellor" className="chancellor-img" />
          </div>
          <div className="chancellor-right">
            <h3 className="chancellor-name">Prof. Dr. M. Sundararajan</h3>
            <p className="chancellor-title"><em>Vice-Chancellor</em></p>
            <p><a href="mailto:vc@bharathuniv.ac.in" className="email-link">📧 vc@bharathuniv.ac.in</a></p>
            <p>It is a matter of immense pleasure for me to be a part of the BIHER Family...</p>
            <button className="arrow-button" onClick={handleViceOpen}><span className="arrow-icon">→</span></button>
          </div>
        </div>
      </div>

      {/* Vice Chancellor Modal */}
      {showViceModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={handleViceClose}>×</button>
            <h2>Message from Vice-Chancellor :</h2>
            <div className="modal-divider"></div>
            <div className="modal-content">
              <img src={viceChancellorImg} alt="Vice Chancellor" className="modal-img" />
              <div className="modal-text">
                <p>I take this opportunity of welcoming students coming from all parts of the country and abroad.</p>
                <h3 className="modal-author">Prof. Dr. M. Sundararajan</h3>
                <p className="modal-title">Vice-Chancellor</p>
              </div>
            </div>
            <button className="modal-btn" onClick={handleViceClose}>Close</button>
          </div>
        </div>
      )}

      {/* Pro Vice Chancellor Section */}
      <div className="chancellor-wrapper">
        <h1 className="chancellor-heading">PRO VICE-CHANCELLOR :</h1>
        <div className="chancellor-divider"></div>
        <div className="chancellor-content">
          <div className="chancellor-left">
            <img src={proViceChancellorImg} alt="Pro Vice Chancellor" className="chancellor-img" />
          </div>
          <div className="chancellor-right">
            <h3 className="chancellor-name">Dr. R.M. Suresh</h3>
            <p className="chancellor-title"><em>Pro Vice Chancellor</em></p>
            <p><a href="mailto:pvc@bharathuniv.ac.in" className="email-link">📧 pvc@bharathuniv.ac.in</a></p>
            <button className="arrow-button" onClick={handleProOpen}><span className="arrow-icon">→</span></button>
          </div>
        </div>
      </div>

      {/* Pro Vice Chancellor Modal */}
      {showProModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={handleProClose}>×</button>
            <h2>Message from Pro Vice-Chancellor :</h2>
            <div className="modal-divider"></div>
            <div className="modal-content">
              <img src={proViceChancellorImg} alt="Pro Vice Chancellor" className="modal-img" />
              <div className="modal-text">
                <p>It gives me immense pleasure to serve this prestigious institution.</p>
              </div>
            </div>
            <button className="modal-btn" onClick={handleProClose}>Close</button>
          </div>
        </div>
      )}

      {/* Registrar Section */}
      <div className="chancellor-wrapper">
        <h1 className="chancellor-heading">REGISTRAR :</h1>
        <div className="chancellor-divider"></div>
        <div className="registrar-content">
          <div className="registrar-card">
            <img src={registrarImg} alt="Dr. S. Bhuminathan" className="registrar-img" />
            <h3 className="chancellor-name">Dr. S. Bhuminathan</h3>
            <p className="chancellor-title"><em>Registrar</em></p>
            <button className="arrow-button"><span className="arrow-icon">→</span></button>
          </div>

          <div className="registrar-card">
            <img src={additionalRegistrarImg} alt="Dr. R. Hariprakash" className="registrar-img" />
            <h3 className="chancellor-name">Dr. R. Hariprakash</h3>
            <p className="chancellor-title"><em>Additional Registrar</em></p>
            <button className="arrow-button"><span className="arrow-icon">→</span></button>
          </div>
        </div>
      </div>

      {/* Controller of Examinations */}
      <div className="controller-wrapper">
        <h1 className="controller-heading">CONTROLLER OF EXAMINATION :</h1>
        <div className="controller-divider"></div>
        <div className="controller-content">
          <div className="controller-left">
            <img src={require('../../assets/controller.png')} alt="Controller of Examination" className="controller-img" />
          </div>
          <div className="controller-right">
            <h3 className="controller-name">Prof. Dr. M. Chandrasekar</h3>
            <p className="controller-title"><em>COE</em></p>
            <p className="controller-email-block">
              <span className="controller-email-icon">📧</span>
              <a href="mailto:mchandru1959@gmail.com" className="controller-email">
                <em>mchandru1959@gmail.com</em>
              </a>
            </p>
            <button className="controller-arrow"><span>→</span></button>
          </div>
        </div>
      </div>
     </div>
      
       <div className="footer-wrapper">
      <Footer />
    <Query />
    <Banner/>
    </div>
  </>
    
  );
};

export default Leadership;
