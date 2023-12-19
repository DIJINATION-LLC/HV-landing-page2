import React from 'react';
import styles from '../style';

const Modal = ({ show, onClose }) => {
  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 9999,
    width: '90%',
    maxWidth: '850px',
    maxHeight: '80%',
    overflowY: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'left',
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Adjust opacity as needed
    zIndex: 9998,
    display: show ? 'block' : 'none',
  };

  return (
    <>
      <div style={overlayStyles} onClick={onClose}></div>
      {show && (
        <div className='flex flex-col gap-2' style={modalStyles}>
          <h3 className={`${styles.heading3} text-center`}>Privacy Policy</h3>
          <p className={`${styles.paragraph}`}>www.herraduravillas.forsalebyi.com (the "Site") is owned and operated by F & Amelia LLC. F & Amelia LLC can be contacted at:</p>
          <p className={`${styles.paragraph}`}><a className='hover:text-goldenbrown' href="mailto:FSBi@me-pm.com">FSBi@me-pm.com</a></p>
          <div className='inline w-[40%]'>
            <div className='border-black border-t-[1px]'></div>
            <p>2390 E Camelback Rd, Suite 130, Phoenix, AZ 85016</p>
          </div>

          <h4 className={`${styles.heading4}`}>Purpose</h4>
          <p>The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the
            following:</p>
          <ul className='list-inside list-disc'>
            <li>The personal data we will collect;</li>
            <li>Use of collected data;</li>
            <li>Who has access to the data collected;</li>
            <li>The rights of Site users; and</li>
            <li>The Site's cookie policy.</li>
          </ul>
          <p>This Privacy Policy applies in addition to the terms and conditions of our Site.</p>

          <h4 className={`${styles.heading4}`}>Consent</h4>
          <p>By using our Site users agree that they consent to:</p>
          <ul className='list-inside list-disc'>
            <li>The conditions set out in this Privacy Policy; and</li>
            <li>The collection, use, and retention of the data listed in this Privacy Policy.</li>
          </ul>

          <h4 className={`${styles.heading4}`}>Personal Data We Collect</h4>
          <p>We only collect data that helps us achieve the purpose set out in this Privacy Policy. We will not
            collect any additional data beyond the data listed below without notifying you first.</p>

          <h5 className={`${styles.heading5}`}>Data Collected in a Non-Automatic Way</h5>
          <p>We may also collect the following data when you perform certain functions on our Site:</p>
          <ul className='list-inside list-disc'>
            <li>First and last name;</li>
            <li>Email address; and</li>
            <li>Phone number</li>
          </ul>
          <p>This data may be collected using the following methods:</p>
          <ul className='list-inside list-disc'>
            <li>Online Form.</li>
          </ul>

          <h4 className={`${styles.heading4}`}>How We Use Personal Data</h4>
          <p>Data collected on our Site will only be used for the purposes specified in this Privacy Policy or
            indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in
            this Privacy Policy.</p>
          <p>The data we collect when the user performs certain functions may be used for the following
            purposes:</p>
          <ul className='list-inside list-disc'>
            <li>Communication.</li>
          </ul>

          <h4 className={`${styles.heading4}`}>Who We Share Personal Data With</h4>
          <h5 className={`${styles.heading5}`}>Employees</h5>
          <p>We may disclose user data to any member of our organization who reasonably needs access to
            user data to achieve the purposes set out in this Privacy Policy.</p>

          <h5 className={`${styles.heading5}`}>Third Parties</h5>
          <p>We may share user data with the following third parties:</p>
          <ul className='list-inside list-disc'>
            <li>Marketing Agencies.</li>
          </ul>
          <p>We may share the following user data with third parties:</p>
          <ul className='list-inside list-disc'>
            <li>Information given by user.</li>
          </ul>
          <p>We may share user data with third parties for the following purposes:</p>
          <ul className='list-inside list-disc'>
            <li>Communication and Future Marketing.</li>
          </ul>
          <p>Third parties will not be able to access user data beyond what is reasonably necessary to achieve
            the given purpose.</p>

          <h5 className={`${styles.heading5}`}>Other Disclosures</h5>
          <p>We will not sell or share your data with other third parties, except in the following cases:</p>
          <ul className='list-inside list-disc'>
            <li>If the law requires it;</li>
            <li>If it is required for any legal proceeding;</li>
            <li>To prove or protect our legal rights; and</li>
            <li>To buyers or potential buyers of this company in the event that we seek to sell the
              company.</li>
          </ul>

          <p>If you follow hyperlinks from our Site to another Site, please note that we are not responsible for
            and have no control over their privacy policies and practices.</p>

          <h4 className={`${styles.heading4}`}>How Long We Store Personal Data</h4>
          <p>User data will be stored for Three Years.</p>
          <p>You will be notified if your data is kept for longer than this period.</p>

          <h4 className={`${styles.heading4}`}>How We Protect Your Personal Data</h4>
          <p>In order to protect your security, we use the strongest available browser encryption and store all
            of our data on servers in secure facilities. All data is only accessible to our employees. Our
            employees are bound by strict confidentiality agreements and a breach of this agreement would
            result in the employee's termination.</p>
          <p>While we take all reasonable precautions to ensure that user data is secure and that users are
            protected, there always remains the risk of harm. The Internet as a whole can be insecure at times
            and therefore we are unable to guarantee the security of user data beyond what is reasonably
            practical.</p>

          <h4 className={`${styles.heading4}`}>International Data Transfers</h4>
          <p>We transfer user personal data to the following countries:</p>
          <ul className='list-inside list-disc'>
            <li>Pakistan.</li>
          </ul>
          <p>When we transfer user personal data we will protect that data as described in this Privacy Policy
            and comply with applicable legal requirements for transferring personal data internationally.</p>

          <h4 className={`${styles.heading4}`}>Children</h4>
          <p>The minimum age to use our website is 18 years of age. We do not knowingly collect or use
            personal data from children under 13 years of age. If we learn that we have collected personal
            data from a child under 13 years of age, the personal data will be deleted as soon as possible. If a
            child under 13 years of age has provided us with personal data their parent or guardian may
            contact our privacy officer.</p>

          <h4 className={`${styles.heading4}`}>How to Access, Modify, Delete, or Challenge the Data Collected</h4>
          <p>If you would like to know if we have collected your personal data, how we have used your
            personal data, if we have disclosed your personal data and to who we disclosed your personal
            data, or if you would like your data to be deleted or modified in any way, please contact our
            privacy officer here:</p>


          <div className='inline w-[40%]'>
            <p>Saud Sarwar</p>
            <div className='border-black border-t-[1px]'></div>
          </div>


          <div className='inline w-[40%]'>
            <p>(469) 396-1761</p>
            <div className='border-black border-t-[1px]'></div>
          </div>

          <h4 className={`${styles.heading4}`}>Cookie Policy</h4>
          <p>A cookie is a small file, stored on a user's hard drive by a website. Its purpose is to collect data
            relating to the user's browsing habits. You can choose to be notified each time a cookie is
            transmitted. You can also choose to disable cookies entirely in your internet browser, but this
            may decrease the quality of your user experience.</p>
          <p>We use the following types of cookies on our Site:</p>
          <ul className='list-inside list-disc'>
            <li>
              <h5 className={`${styles.heading5}`}>Functional cookies</h5>
              <p>Functional cookies are used to remember the selections you make on our Site so that
                your selections are saved for your next visits;</p>
            </li>
            <li>
              <h5 className={`${styles.heading5}`}>Analytical cookies</h5>
              <p>Analytical cookies allow us to improve the design and functionality of our Site by collecting data on how you access our Site, for example data on the content you access,
                how long you stay on our Site, etc;</p>
            </li>
            <li>
              <h5 className={`${styles.heading5}`}>Targeting cookies</h5>
              <p>Targeting cookies collect data on how you use the Site and your preferences. This
                allows us to personalize the information you see on our Site for you; and</p>
            </li>
            <li>
              <h5 className={`${styles.heading5}`}>Third-Party Cookies</h5>
              <p>Third-party cookies are created by a website other than ours. We may use third-party
                cookies to achieve the following purposes:</p>
              <ol className='list-inside list-decimal'>
                <li>Monitor user preferences to tailor advertisements around their interests.</li>
              </ol>
            </li>
          </ul>

          <h4 className={`${styles.heading4}`}>Modifications</h4>
          <p>This Privacy Policy may be amended from time to time in order to maintain compliance with the
            law and to reflect any changes to our data collection process. When we amend this Privacy
            Policy we will update the "Effective Date" at the top of this Privacy Policy. We recommend that
            our users periodically review our Privacy Policy to ensure that they are notified of any updates.
            If necessary, we may notify users by email of changes to this Privacy Policy.</p>

          <h4 className={`${styles.heading4}`}>Contact Information</h4>
          <p>If you have any questions, concerns or complaints, you can contact our privacy officer, Saud
            Sarwar, at:</p>

          <div className=' w-[40%] gap-4'>
            <div className='border-black border-t-[1px]'></div>
            <p className='py-4'>(469) 396-1761</p>
            <div className='border-black border-t-[1px]'></div>
          </div>

          <button onClick={onClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default Modal;
