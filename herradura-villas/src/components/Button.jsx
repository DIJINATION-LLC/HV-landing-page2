import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ styles, text, onClick, to, tel, type }) => {
    const handleButtonClick = () => {
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scroll(0, 0);
        }

        if (onClick) {
            onClick();
        }
    };

    const renderContent = () => {
        if (to) {
            return <Link to={to}>{text}</Link>;
        } else if (tel) {
            return <a href={`tel:${tel}`}>{text}</a>;
        } else {
            return <span>{text}</span>;
        }
    };

    return (
        <button
            type={type}
            className={`flex flex-row gap-3 justify-center items-center text-center w-fit xs:py-[10px] xs:px-[35px] shadow-sm py-[10px] px-[28px] bg-blue-gradient bg-light-golden-gradient font-semibold xs:text-[18px] text-[14px] text-white rounded-[10px] outline-none ${styles} transition-all transform hover:scale-105 ease-in-out`}
            onClick={handleButtonClick}
        >
            {renderContent()}
        </button>


    );
};

export default Button;
