import React from 'react'
import {opportunity} from '../assets'

export const Opportunity = () => (
    <div>
        <div className='justify-center'>
            <h2 className='text-yaleblue'>Unlock Success: Seize this Prime CRE Opportunity Today</h2>
            <p className='text-black'>Nestled in the heart of Midtown Phoenix, this mid-century apartment community stands as a beacon of modern living. Herradura Villas is a distinguished 19-unit property, boasts four new construction units alongside 15 fully remodeled units, all compliant with City of Phoenix permits.
                Convenience defines Herradura Villas, located just a mile from the nearest SR-51 and I-10 Freeway on-ramp. A mere seven-minute drive lands residents in the bustling heart of Downtown Phoenix, while easy access to the Phoenix Metro Light Rail Station ensures seamless connectivity. Attention to detail defines the renovations, encompassing brand-new roofs, tankless water heaters, sewer and water lines, smooth stucco, kitchen cabinets, flooring, bathrooms, and structural reinforcement. This prime investment opportunity assures investors of a turn-key, trophy asset with low-stress management.</p>
        </div>
        <div className='justify-center'>
            <img src={opportunity} className='h-[631] w-[607.5px]' />
        </div>
    </div>
)

export default Opportunity