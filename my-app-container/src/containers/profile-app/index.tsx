import React from 'react';
import { mount } from 'profile/ProfileApp';
import { useMicroApp } from '../../hooks/useMicroApp';
import { appPrefix } from '../../constants';

const baseName = appPrefix.profile;

const ProfileApp = () => {
  const [wrapperRef] = useMicroApp('profile', baseName, mount);

  return <div ref={wrapperRef} id='profile-mfe' />;
}

export default ProfileApp;