import React from 'react'
import { TypeProfile } from '../../Model/types';
import "./Profile.css"

type Props = {
    profile: TypeProfile;
}

function Profile({ profile }: Props) {
  return (
    <div className='profile'>
        <div className='profile-image'>
            <img src={profile.pfpURL} alt='profile' />
        </div>
        <div className='profile-name'>
            {profile.name}
        </div>
    </div>
  )
}

export default Profile