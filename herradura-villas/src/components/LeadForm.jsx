import { useState } from 'react';
import styles from '../style';


const LeadForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            user_name: name,
            user_email: email,
            user_phone: phone,
            subject: subject,
            message: message
        };

        try {
            await emailjs.send('service_b6yw8g4', 'template_qpmufbi', templateParams, 'OOY5-sokRrziRFEup');
            window.alert('Form submitted successfully');
            // Reset form fields after successful submission
            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
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

        if (!subject) {
            validationErrors.subject = 'Subject is required';
        }

        if (!message) {
            validationErrors.message = 'This field is required';
        }

        if (phone && !isValidPhoneNumber(phone)) {
            validationErrors.phone = 'Invalid phone number format';
        }

        setErrors(validationErrors);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
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

            <div className="mb-4">
                <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    className={`${styles.paragraph} w-full bg-white font-poppins px-[10px] py-[10px] border-0 focus:outline-yaleblue focus:border-black`}
                    value={name}
                    onChange={handleNameChange}
                    required
                />

                {errors.name && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.name}</p>
                )}
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Phone Number"
                    id="phone"
                    className={`${styles.paragraph} w-full font-poppins px-[10px] py-[10px] border-0 focus:outline-yaleblue focus:border-black`}
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                />
                {errors.phone && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.phone}</p>
                )}
            </div>

            <div className="mb-4">
                <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className={`${styles.paragraph} w-full font-poppins px-[10px] py-[10px] border-0 focus:outline-yaleblue focus:border-black`}
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                {errors.email && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.email}</p>
                )}
            </div>

            <div className="mb-4 relative">
                <select
                    id="subject"
                    className={`${styles.paragraph} w-full font-poppins px-[10px] py-[10px] pr-10 border-0 focus:outline-yaleblue focus:border-black appearance-none`}
                    value={subject}
                    onChange={handleSubjectChange}
                    required
                >
                    <option value="">Select Your Role</option>
                    <option value="General Question">List Broker/Agent</option>
                    <option value="Recycling">Buyer Broker/Agent</option>
                    <option value="Sales">Selling/Buying Broker/Agent</option>
                    <option value="Legal and Compliance">Transaction coordinator</option>
                    <option value="Legal and Compliance">Landlord Broker/Agent</option>
                </select>
                {errors.subject && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.subject}</p>
                )}
            </div>

            <div className="mb-4">
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Message"
                    className={`${styles.paragraph} w-full font-poppins px-[10px] py-[10px] border-0 focus:outline-yaleblue focus:border-black`}
                    value={message}
                    onChange={handleMessageChange}
                    required
                ></textarea>
                {errors.message && (
                    <p className={`font-poppins text-red-500 font-normal text-[14px]`}>{errors.message}</p>
                )}
            </div>

            <button className='flex flex-row gap-3 justify-center items-center text-center xs:py-3 xs:px-5 shadow-sm py-4 px-6 w-full bg-blue-gradient bg-light-golden-gradient font-poppins font-normal xs:text-[20px] text-[16px] text-white outline-none' type='submit'>Submit</button>
        </form>
    );
};

export default LeadForm;
