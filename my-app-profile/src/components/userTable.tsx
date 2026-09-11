import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { User } from '../constants/types';

type SortableKey = 'id' | 'name' | 'email' | 'age' | 'username' | 'city' | 'country';

const UserTable = () => {
  const usersResult = useSelector((state: any) => state.user);
  const { data, loading, error } = usersResult;
  const [filteredData, setFilteredData] = useState<User[]>(data || []);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const users = data || [];
    setFilteredData(
      users.filter((user: User) => user.name.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [data, searchTerm]);

  const [sortConfig, setSortConfig] = useState<{
    key: SortableKey | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });

  const getSortValue = (user: User, key: SortableKey): string | number => {
    switch (key) {
      case 'id':
        return user.id;
      case 'name':
        return user.name;
      case 'email':
        return user.email;
      case 'age':
        return user.age;
      case 'username':
        return user.username;
      case 'city':
        return user.address?.city ?? '';
      case 'country':
        return user.address?.country ?? '';
    }
  };

  const sortData = (key: SortableKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sorted = [...filteredData].sort((a, b) => {
      const valueA = getSortValue(a, key);
      const valueB = getSortValue(b, key);

      if (valueA < valueB) return direction === 'asc' ? -1 : 1;
      if (valueA > valueB) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredData(sorted);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row g-3 align-items-center mb-3 mt-3">
          <div className="col-auto">
            <label htmlFor="search" className="col-form-label">
              Search Users:{' '}
            </label>
          </div>
          <div className="col-auto">
            <input
              type="search"
              id="search"
              className="form-control ml-2"
              placeholder="Type to search..."
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </form>
      {searchTerm && <p>Showing results for : {searchTerm}</p>}
      {filteredData.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" onClick={() => sortData('id')}>
                Id
                {sortConfig.key === 'id' ? (sortConfig.direction === 'asc' ? '🔼' : '🔽') : ''}
              </th>
              <th scope="col" onClick={() => sortData('name')}>
                Name{' '}
                {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '🔼' : '🔽') : ''}
              </th>
              <th scope="col" onClick={() => sortData('email')}>
                Email
                {sortConfig.key === 'email' ? (sortConfig.direction === 'asc' ? '🔼' : '🔽') : ''}
              </th>
              <th scope="col" onClick={() => sortData('username')}>
                Username
                {sortConfig.key === 'username'
                  ? sortConfig.direction === 'asc'
                    ? '🔼'
                    : '🔽'
                  : ''}
              </th>
              <th scope="col" onClick={() => sortData('age')}>
                Age{sortConfig.key === 'age' ? (sortConfig.direction === 'asc' ? '🔼' : '🔽') : ''}
              </th>
              <th scope="col" onClick={() => sortData('city')}>
                City
                {sortConfig.key === 'city' ? (sortConfig.direction === 'asc' ? '🔼' : '🔽') : ''}
              </th>
              <th scope="col" onClick={() => sortData('country')}>
                Country
                {sortConfig.key === 'country' ? (sortConfig.direction === 'asc' ? '🔼' : '🔽') : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user: User) => (
              <tr key={user.id}>
                <th scope="row">
                  <Link to={`/${user.id}`}>{user.id}</Link>
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.address?.city}</td>
                <td>{user.address?.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
};

export default UserTable;
