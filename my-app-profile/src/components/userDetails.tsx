import React from 'react';

const UserDetails = ({ user }: { user: any }) => {
  return (
    <>
      {user ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mb-3">{user.name}</h5>
            <div className="card-text">
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">First Name</label>
                  <span className="form-control" id="inputFirstName">
                    {user.firstName}
                  </span>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Middle Name</label>
                  <span className="form-control" id="inputMiddleName">
                    {user.maidenName}
                  </span>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Last Name</label>
                  <span className="form-control" id="inputLastName">
                    {user.lastName}
                  </span>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <span className="form-control" id="inputEmail">
                    {user.email}
                  </span>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Username</label>
                  <span className="form-control" id="inputUsername">
                    {user.username}
                  </span>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Age</label>
                  <span className="form-control" id="inputAge">
                    {user.age}
                  </span>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Gender</label>
                  <span className="form-control" id="inputGender">
                    {user.gender}
                  </span>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Date of Birth</label>
                  <span className="form-control" id="inputDateOfBirth">
                    {user.birthDate}
                  </span>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Blood Group</label>
                  <span className="form-control" id="inputBloodGroup">
                    {user.bloodGroup}
                  </span>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Role</label>
                  <span className="form-control" id="inputRole">
                    {user.role}
                  </span>
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <span className="form-control" id="inputAddress">
                    {user.address?.address}, {user.address?.city}, {user.address?.state}
                  </span>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Country</label>
                  <span className="form-control" id="inputCountry">
                    {user.address?.country}
                  </span>
                </div>
                <div className="col-md-3">
                  <label className="form-label">State Code</label>
                  <span className="form-control" id="inputStateCode">
                    {user.address?.stateCode}
                  </span>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Zip</label>
                  <span className="form-control" id="inputZip">
                    {user.address?.postalCode}
                  </span>
                </div>
                <div className="col-12"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </>
  );
};

export default UserDetails;
