import { useState } from 'react';
import styles from '../style';
import { user, phoneicon, emailicon, dropicon, messageicon } from '../assets';
import emailjs from '@emailjs/browser';


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
                    className={`${styles.paragraph} w-full font-poppins xs:px-[50px] px-[40px] py-[10px] pr-10 rounded-[5px] border-0 focus:outline-yaleblue focus:border-black appearance-none overflow-y-auto`}
                    value={role}
                    onChange={handleroleChange}
                    required
                >
                    <option value="" >Select Your Role</option>
                    <option value="General Question">Broker/Agent</option>
                    <option value="Recycling">Listing Broker/Agent</option>
                    <option value="Sales">Buyer Broker/Agent</option>
                    <option value="Legal and Compliance">Selling/Buying Broker/Agent</option>
                    <option value="Legal and Compliance">Transaction Coordinator</option>
                    <option value="General Question">Landlord Broker/Agent</option>
                    <option value="General Question">Principal</option>
                    <option value="General Question">Lender</option>
                    <option value="General Question">Assessor</option>
                    <option value="General Question">Appraiser</option>
                    <option value="General Question">Third Party Service</option>
                    <option value="General Question">Tenant</option>
                    <option value="General Question">Owner/Property Manager</option>
                    <option value="General Question" className={`${styles.paragraph}`}>Other</option>
                </select>
                {errors.role && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.role}</p>
                )}
            </div>

            <div className="mb-4 relative justify-center">
                <img
                    src={messageicon}
                    alt="Drop-Icon"
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

            <button className='flex flex-row gap-3 justify-center items-center text-center xs:py-3 xs:px-5 shadow-sm py-4 px-6 w-full rounded-[10px] bg-blue-gradient bg-light-golden-gradient font-poppins font-normal xs:text-[20px] text-[16px] text-white outline-none' type='submit'>Submit</button>
        </form>
    );
};

export default LeadForm;
