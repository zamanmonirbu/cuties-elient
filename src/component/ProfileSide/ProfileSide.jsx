import FollowersCart from '../FollowersCart/FollowersCart'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCart from '../profileCart/ProfileCart'
import './ProfileSide.css'


export default function ProfileSide() {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCart/>
      <FollowersCart/>
    </div>
  )
}
