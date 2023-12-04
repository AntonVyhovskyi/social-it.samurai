
import Preloader from '../../commons/preloader/Preloader';
import cls from './ProfileInfo.module.scss'
import ProfileStatus from './ProfileStatus/ProfileStatus';
const ProfileInfo = (props) => {
  debugger

  if (!props.profile) {
    return <Preloader />
  }
  else {
    const onMainPhotoSelecter = (e) => {
      
      if (e.target.files.length) {
        props.savePhoto(e.target.files[0])
      }
    }
    
    return (

      <div>
        <div className={cls.profileContainer}>
          <img className={cls.profileContainerImg} alt="фон" src='https://img.freepik.com/free-vector/bokeh-background-design_23-2148452456.jpg?w=900&t=st=1696885976~exp=1696886576~hmac=07c24abada61f392cb5be3bb53a96671b84399cbb3de77a7a31a4fa7029dd18c' />

          <div className={cls.profileItems}>
            <div className={cls.profileAva}>
              <img src={props.profile.photos.large || "https://www.linhart-inserv.de/wp-content/uploads/2015/10/nopic.png"} alt="ava" />
              {props.isOwner &&
                <div className={cls.updateFotoButtonContainer}>
                  <input id='fotoUpdateInput' className={cls.updateFotoButton} type='file' onChange={onMainPhotoSelecter}
                  />
                  <label htmlFor='fotoUpdateInput'></label>
                </div>}
            </div>


            <div className={cls.profileDescrContainer}>
              <div className={cls.profileDescrFullName}>
                <h2>{props.profile.fullName}</h2>
              </div>
              <div className={cls.profileDescrStatus}>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} statusUpdateStatus={props.statusUpdateStatus} />
              </div>
              <div className={cls.profileDescrLookingJob}>
                {props.profile.lookingForAJob ? 'I  loocking for a job' : 'no loocking for a job'}
                {props.profile.lookingForAJobDescription ? `My Profile: ${props.prodile.lookingForAJobDescription}` : ''}
              </div>
              <div className={cls.profileDescrContacts}>
                {Object.keys(props.profile.contacts).map(key => {return <Contact key={key} title={key} value={props.profile.contacts[key]} />})}
              </div>


            </div>
          </div>
        </div>

      </div>
    )
  }
};

const Contact = ({title, value}) => {
  return (
    <div>
       <b>{title}</b>:{value || 'нема'}
    </div>
  )
}

export default ProfileInfo;