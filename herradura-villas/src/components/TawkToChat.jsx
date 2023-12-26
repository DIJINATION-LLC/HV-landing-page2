import React, { useEffect } from 'react';
import { chatbot_icon } from '../assets';

const TawkToChat = () => {
    useEffect(() => {
        const Tawk_LoadStart = new Date();
        const s1 = document.createElement('script');
        const s0 = document.getElementsByTagName('script')[0];

        s1.async = true;
        s1.async = true;
        s1.src = 'https://embed.tawk.to/658ad58707843602b805a2c9/1hij54708';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);

        return () => {
            s1.parentNode.removeChild(s1);
        };
    }, []);

    return (
        <div>
            <img onClick={() => { Tawk_API.toggle(); }} src={chatbot_icon} alt='' className='bg-yaleblue rounded p-2' />
        </div>
    );
};

export default TawkToChat;
