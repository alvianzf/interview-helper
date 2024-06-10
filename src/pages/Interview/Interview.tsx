import './interview.css';
import DocsWindow from './components/documentWindow/docs-window';
import ProfileData from './components/profileData/ProfileData'
function Interview() {
    return (
      <div className="interview--wrapper">
        <div className='interview--preview-wrapper'>
          <h3>Applicant's CV</h3>
          <DocsWindow />
        </div>
        <div className='interview--detail-wrapper'>
          <ProfileData />
        </div>
      </div>
    );
  }
  
  export default Interview;
  