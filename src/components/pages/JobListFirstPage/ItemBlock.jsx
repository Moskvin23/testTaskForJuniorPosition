import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from './ItemBlock.module.scss'
import picture from '../../../images/universityPicture.jpeg'
import bookmark from '../../../images/bookmark.svg'
import location from '../../../images/location.svg'
import moment from 'moment/moment';


const ItemBlock = (props) => {

  
  const { title, id, createdAt, pictures, address,name } = props;
  const [value, setValue] = useState();
  const pic = pictures.map((item) => item + `?random=${id}`);
  let posted = moment('YYYYMMDD').fromNow();  
 
  return (
    <>
    <li className={style.container}>
      <div className={style.content}>
          <div className={style.containerContent}>
          <Link to={`/JobDetails/${id}`}>
            <div className={style.uniPic}>
                <img src={pictures} alt="logo" className={style.universityPicture} />
            </div>
            </Link>
            <Link to={`/JobDetails/${id}`}>
          <div className={style.mainNameUniversity}>
              <div className={style.newStyle}>
                
              <div>Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d)</div>
                <div className={style.secondPartMainNameUni}>{title}</div>
              </div>
              <div className={style.departmentName}>Department name • {name}
            <div className={style.location}>
                  <img src={location} alt='locationLogo' className={style.locationLogo} />
                  {address}
             </div>
          </div>
              </div>
              </Link>
          
        </div>
        <div className={style.selectedPart}>
          <img className={style.bookmark} src={bookmark} alt="bookmark" />
        <div className={style.posted}>Posted {posted}</div>
        </div>
        </div>
    </li>
    </>
  )
}

export default ItemBlock