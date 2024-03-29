import React from 'react'
import styles from '../style'
import Button from './Button'

export const CTA = () => (
    <section id='docsecure' className={`${styles.flexCenter} bg-docs-vault flex w-full justify-center py-20`}>

        <div className={`${styles.boxWidth}  flex flex-col gap-[20px] items-center text-center xs:w-[640px] w-full xs:px-0 px-2`}>

            <h2 className={`${styles.heading2} text-white `}>
                Login to DocSecure
            </h2>

            <p className={`${styles.paragrah} text-white`}>
                Our DocSecure contains all legal and financial information necessary for you to make an informed decision.
            </p>
            <Button to={'https://docsend.com/view/9vfnfcqwdt257654'} text={'Login Here'} />

        </div>

    </section>
)
export default CTA
