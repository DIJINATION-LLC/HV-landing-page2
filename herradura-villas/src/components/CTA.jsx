import React from 'react'
import styles from '../style'
import Button from './Button'

export const CTA = () => (
    <div className={`${styles.flexCenter} bg-docs-vault flex w-full justify-center py-20`}>

        <div className={`${styles.boxWidth}  flex flex-col gap-[20px] items-center`}>

            <h2 className={`${styles.heading2} text-white`}>
                Login to Secure Data-vault
            </h2>

            <p className={`${styles.paragrah} text-white text-center w-[640px]`}>
                Our Secure Data-vault contains all legal and financial information necessary for you to make an informed decision.
            </p>
            <Button to={'/'} text={'Make an Offer'} />

        </div>

    </div>
)
export default CTA
