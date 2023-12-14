import React from 'react'
import LeadForm from './LeadForm'
import styles from '../style'
export const LeadGen = () => (
    <div className="bg-lead-form flex w-full justify-center py-20">

        <div className={`${styles.flexCenter} flex w-[635px] bg-black-shade py-[25px] rounded-[20px]`}>

            <div className='flex flex-col w-[585px] gap-[50px]'>
                <div className='flex flex-col gap-[15px] items-center'>
                    <h3 className={`${styles.heading3} text-white`}>Learn more about this opportubity</h3>
                    <p className={`${styles.paragrah} text-white text-center`}>
                        Commercial Realestate Opportunities like this come once in a while, seize it while it lasts.
                    </p>
                </div>

                <LeadForm />

                <div>
                    <p className={`${styles.paragrah} text-white text-center`}>
                        Lorem ipsum dolor sit amet consectetur. Interdum penatibus tempor sit commodo magna est convallis fringilla.
                    </p>
                </div>

            </div>


        </div>
    </div>
)
export default LeadGen