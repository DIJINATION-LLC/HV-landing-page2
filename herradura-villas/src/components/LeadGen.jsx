import React from 'react';
import LeadForm from './LeadForm';
import styles from '../style';

export const LeadGen = () => (
    <section id='leadgen' className="bg-lead-form flex w-full justify-center py-20">

        <div className={`${styles.flexCenter} flex xs:w-[635px] w-full bg-black-shade py-[25px] rounded-[20px]`}>

            <div className={`flex flex-col w-[585px] text-center gap-[50px] xs:px-0 px-2`}>
                <div className='flex flex-col gap-[15px] items-center '>
                    <h3 className={`${styles.heading3} text-white`}>Learn more about this opportunity</h3>
                    <p className={`${styles.paragrah} text-white `}>
                        Commercial Realestate Opportunities like this come once in a while, seize it while it lasts.
                    </p>
                </div>

                <LeadForm />

                <div>
                    <p className={`${styles.paragrah} text-white`}>
                        Lorem ipsum dolor sit amet consectetur. Interdum penatibus tempor sit commodo magna est convallis fringilla.
                    </p>
                </div>

            </div>

        </div>

    </section>
);
export default LeadGen