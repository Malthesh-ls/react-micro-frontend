import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { getUsers } from '../../services';
import { userMapper } from '../../utils/mappers';

interface ProfileWrapperProps {
  children: React.ReactNode;
}

const ProfileWrapper = ({ children }: ProfileWrapperProps) => {
  const dispatch = useDispatch();

  const handleOnLoad = async () => {
    try {
      const result = await getUsers();
      const users = result?.data ?? [];
      dispatch(setUser(userMapper(users)));
    } catch (error) {
      dispatch(setUser([]));
    }
  };

  useEffect(() => {
    handleOnLoad();
  }, []);

  return <>{children}</>;
};

export default ProfileWrapper;
