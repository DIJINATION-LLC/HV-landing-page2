import { useState } from 'react';
import styles from '../style';
import { user, phoneicon, emailicon, dropicon, messageicon } from '../assets';
import emailjs from '@emailjs/browser';
import Modal from './Modal';


const LeadForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setrole] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            user_name: name,
            user_email: email,
            user_phone: phone,
            role: role,
            message: message
        };

        try {
            await emailjs.send('service_mh7zqec', 'template_81s374w', templateParams, 'Ju6KN0wf2NlRiCQK5');
            window.alert('Form submitted successfully');
            // Reset form fields after successful submission
            setName('');
            setEmail('');
            setPhone('');
            setrole('');
            setMessage('');
        } catch (error) {
            console.error('Failed to send email:', error);
        }

        // Validate form fields
        const validationErrors = {};
        if (!name) {
            validationErrors.name = 'Name is required';
        }

        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!isValidEmail(email)) {
            validationErrors.email = 'Invalid email format';
        }

        if (!role) {
            validationErrors.role = 'Role is required';
        }

        if (!message) {
            validationErrors.message = 'This field is required';
        }

        if (phone && !isValidPhoneNumber(phone)) {
            validationErrors.phone = 'Invalid phone number format';
        }

        setErrors(validationErrors);
    };

    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleTermsChange = (e) => {
        setIsTermsChecked(e.target.checked);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleroleChange = (e) => {
        setrole(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handlePhoneBlur = () => {
        if (phone && !isValidPhoneNumber(phone)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: 'Invalid phone number format',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: '',
            }));
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const isValidEmail = (email) => {
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phone) => {
        // Phone number format validation for US numbers in any format
        const phoneRegex = /^(\+\d{1,2}\s?)?(\()?\d{3}(\))?(\s|-|\d)*\d{3}(\s|-|\d)*\d{4}$/;
        return phoneRegex.test(phone);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px] w-full mx-auto">

            <div className="mb-4 relative">
                <img
                    src={user}
                    alt="User-Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
                <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    className={`${styles.paragraph} w-full bg-white font-poppins xs:px-[50px] px-[40px] py-[10px] rounded-[5px] border-0 focus:outline-yaleblue focus:border-black`}
                    value={name}
                    onChange={handleNameChange}
                    required
                />

                {errors.name && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.name}</p>
                )}
            </div>

            <div className="mb-4 relative">
                <img
                    src={phoneicon}
                    alt="Phone-Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    id="phone"
                    className={`${styles.paragraph} w-full font-poppins xs:px-[50px] px-[40px]  py-[10px] rounded-[5px] border-0 focus:outline-yaleblue focus:border-black`}
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                />
                {errors.phone && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.phone}</p>
                )}
            </div>

            <div className="mb-4 relative">
                <img
                    src={emailicon}
                    alt="Email-Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className={`${styles.paragraph} w-full font-poppins xs:px-[50px] px-[40px] py-[10px] rounded-[5px] border-0 focus:outline-yaleblue focus:border-black`}
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                {errors.email && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.email}</p>
                )}
            </div>

            <div className="mb-4 relative">
                <img
                    src={dropicon}
                    alt="Drop-Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
                <select
                    id="role"
                    className={`${styles.paragraph} w-full font-poppins xs:px-[50px] px-[40px] py-[10px] pr-10 rounded-[5px] border-0 focus:outline-yaleblue focus:border-black overflow-y-auto`}
                    value={role}
                    onChange={handleroleChange}
                    required
                >
                    <option value="" >Select Your Role</option>
                    <option value="1">Broker/Agent</option>
                    <option value="2">Listing Broker/Agent</option>
                    <option value="3">Buyer Broker/Agent</option>
                    <option value="4">Selling/Buying Broker/Agent</option>
                    <option value="5">Transaction Coordinator</option>
                    <option value="5">Landlord Broker/Agent</option>
                    <option value="6">Principal</option>
                    <option value="7">Lender</option>
                    <option value="8">Assessor</option>
                    <option value="9">Appraiser</option>
                    <option value="10">Third Party Service</option>
                    <option value="11">Tenant</option>
                    <option value="12">Owner/Property Manager</option>
                    <option value="13" className={`${styles.paragraph}`}>Other</option>
                </select>
                {errors.role && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.role}</p>
                )}
            </div>

            <div className="mb-4 relative justify-center">
                <img
                    src={messageicon}
                    alt="Message-Icon"
                    className="absolute left-3 xs:top-7 top-6 transform -translate-y-1/2  h-5 w-5"
                />
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Message"
                    className={`${styles.paragraph} w-full font-poppins xs:px-[50px] px-[40px] py-[10px] rounded-[5px] border-0 focus:outline-yaleblue focus:border-black`}
                    value={message}
                    onChange={handleMessageChange}
                    required
                ></textarea>
                {errors.message && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.message}</p>
                )}
            </div>

            <button
                className={`${!isTermsChecked ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-gradient bg-light-golden-gradient'
                    } flex flex-row gap-3 justify-center items-center text-center xs:py-3 xs:px-5 shadow-sm py-4 px-6 w-full rounded-[10px]  font-poppins font-normal xs:text-[20px] text-[16px] text-white outline-none`}
                type='submit'
                disabled={!isTermsChecked} // Disable button if terms are not checked
            >
                Submit
            </button>

            <div className='flex flex-row items-center justify-center'>
                <input
                    id="terms"
                    type="checkbox"
                    className="mr-2"
                    checked={isTermsChecked} // Controlled component
                    onChange={handleTermsChange} // Update state on checkbox change
                />

                <label htmlFor="terms" className={`${styles.paragraph} text-white`}>
                    I agree to the <a className='text-orange hover:text-goldenbrown' onClick={openModal}>Terms & Conditions</a>
                </label>
            </div>
            <Modal show={showModal} onClose={closeModal} />
        </form>
    );
};

export default LeadForm;
