import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate  } from 'react-router-dom';
import { UserDetails } from '../../components';

const ProfileDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id: string = location.pathname.split('/').pop() || '';
  const userData = useSelector((state: any) => state.user);
  const user = userData.data.find((user: any) => user.id === parseInt(id, 10));
  return (
    <>
      <h3>User details for ID: {id}</h3>
      <UserDetails user={user} />
      <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-primary mt-3">
        Go Back
      </button>
    </>
  )
}

export default ProfileDetails