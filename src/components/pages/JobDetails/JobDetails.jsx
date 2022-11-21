import React from 'react'
import style from './JobDetails.module.scss'
import bookmark from '../../../images/bookmark.svg'
import shareIcon from '../../../images/shareIcon.svg'

const JobDetails = () => {
    
    return (
        <>
        <div className={style.container}>
            <div className={style.mainContent}>
                    <div className={style.header}>
                        <div className={style.columnHeader}>
                            <div className={style.headerTitle}>Job Details</div>
                            <div className={style.headerSaveList}>
                            <img src={bookmark} alt='bookmarkLogo' className={style.bookmarkLogo} />
                            <div>Save to my list</div>
                            </div>
                            <div className={style.headerShare}>
                            <img src={shareIcon} alt='shareIconLogo' className={style.shareIcon} />
                            <div>Share</div>
                            </div>
                            
                        </div>
                        <div className={style.buttonHeader}>
                        <button>APPLY NOW</button>
                        </div>
                        </div>
                    <div className={style.mainInfo}>
                        <div>
                        <div> Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d)
                            für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)
                        </div>
                        <div>
                            <div>$ 54 000 - 60 000</div>
                            <div>Brutto, per year</div>
                            </div>
                        </div>
                        <div>Posted 2 days ago</div>
                        <div>At WellStar, we all share common goals. That’s what makes us so successful – and such an integral part of our communities. We want the same things, for our organization, for our patients, and for our colleagues. As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. We continue to provide innovative care models, focused on improving quality and access to healthcare.
</div>
                    </div>
                    <div className={style.additionalInfo}>Additional Info</div>
                    <div className={style.attachedImages}>Attached Images</div>
                    <button className={style.buttonReturnToMainBlock}>Button Return to Main Block</button>
                </div>
                <div className={style.locationBlock}>Location Block</div>
    </div>
    
        </>  
)
}

export default JobDetails