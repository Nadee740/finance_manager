import React, { useEffect, useState } from 'react';
import '../styles/ProfilePage.css';
import { baseUrl } from '../utils/baseurl';
import axios from 'axios';

function ProfilePage() {
  // Sample user data - in a real app, you'd fetch this
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);

  useEffect(() => { 
    let user_id = localStorage.getItem("userid");
    user_id = parseInt(user_id);
    if (!user_id || user_id.length < 1) {
      localStorage.removeItem("userid");
      window.location = "/";
    }

    axios
      .get(`${baseUrl}/user/info?id=${user_id}`)
      .then((response) => {
        setUserData(response.data.data);
        setFormData({...response.data.data});
        setLoading(false);
      })
      .catch((error) => {
        console.log("expense list Page :" + error);
        setLoading(true);
      });
  }, [isEditing]);
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      let user_id = localStorage.getItem("userid");
      const { data } = await axios.post(`${baseUrl}/user/update?id=${user_id}`, formData);
      setIsEditing(false);
    } catch (error) {
      console.log("error")
    }

    setUserData({...formData});

  };
  
  const handleCancel = () => {
    setFormData({...userData});
    setIsEditing(false);
  };

  return (
    <div className="app">
      {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading expense months...</p>
            </div>
          ) : ( <>
                <section className="profile-header">
        <div className="profile-container">
          <div className="profile-cover">
            <div className="profile-avatar">
              <img src={"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"} alt={userData.name} />
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-meta">
              <h1>{userData.name}</h1>
              <p className="profile-role">{userData.occupation}</p>
            </div>
            <div className="profile-actions">
              <button 
                className="edit-btn" 
                onClick={() => setIsEditing(true)}
                disabled={isEditing}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Profile Edit Form */}
      <section className="profile-edit">
        <div className="profile-container">
          <div className="edit-container">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="edit-form">
                <h2>Edit Profile</h2>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="occupation">Occupation</label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="place">Place</label>
                  <input
                    type="text"
                    id="place"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="save-btn">Save Changes</button>
                  <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
              </form>
            ) : (
              <div className="profile-details">
                <h2>Profile Information</h2>

                <div className="detail-group">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">{userData.name}</span>
                </div>
                
                <div className="detail-group">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{userData.email}</span>
                </div>
                
                <div className="detail-group">
                  <span className="detail-label">Occupation:</span>
                  <span className="detail-value">{userData.occupation}</span>
                </div>
                
                <div className="detail-group">
                  <span className="detail-label">Place:</span>
                  <span className="detail-value">{userData.place}</span>
                </div>
                
                <div className="detail-group">
                  <span className="detail-label">Salary:</span>
                  <span className="detail-value">{userData.salary}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
           </>) }

    </div>
  );
}

export default ProfilePage;