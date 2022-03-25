import { Icon } from '@mui/material';
import React from 'react'
import Profile from '../../components/Profile/Profile';
import "./Profiles.css"

type Props = {
    setSelectedProfile: (selectedProfile: string) => void;
    profiles: Array<object>;
    setProfiles: (profiles: object) => void;
}

function Profiles({ setSelectedProfile, profiles, setProfiles }: Props) {
  return (
    <div className='profilesContainer'>
        <h1 className='title'>Profils</h1>
        <div className='profiles'>
            {profiles.map((profile: any, index: number) => {
                return (
                    <div className='profile' key={index} onClick={() => {
                        setSelectedProfile(profile);
                    }}>
                        <Profile profile={profile} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Profiles