import React, { useState } from "react";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import { User, Camera } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [avatar, setAvatar] = useState("assets/images/resources/avatar.png");

  // Dummy user data for UI only
  const user = {
    full_name: "John Doe",
    email: "john@example.com",
    company_name: "Example Corp",
    phone: "+971 50 123 4567",
    nationality: "UAE",
    sponsor_package: "Gold",
    special_requirements: "None",
    user_type: "Attendee",
  };

  // Handle profile picture change
  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setAvatar(file);
    }
  };

  return (
    <>
      <PageHelmet pageTitle="My Profile" />
      <Breadcrumb title="My Profile" />

      <div className="container-fluid bg-lightgrey py-6 min-vh-100">
        <div className="container">

          {/* PROFILE HEADER */}
          <div className="bg-white rounded shadow p-4 mb-4 d-flex flex-wrap align-items-center gap-4">
            <div className="position-relative d-inline-block">
              <img
                src={avatar}
                alt="Profile"
                className="rounded-circle img-fluid"
                width={80}
              />
              <label
                htmlFor="avatarUpload"
                className="position-absolute bottom-0 end-0 rounded-circle bg-pink text-white d-flex align-items-center justify-content-center"
                style={{ width: 28, height: 28, cursor: "pointer" }}
              >
                <Camera size={14} />
              </label>
              <input
                type="file"
                id="avatarUpload"
                accept="image/*"
                hidden
                onChange={handleAvatarChange}
              />
            </div>
            <div>
              <h4 className="mb-1">{user.full_name}</h4>
              <p className="text-grey mb-1">{user.email}</p>
              <span className="badge border border-pink pink">{user.user_type}</span>
            </div>
          </div>

          <div className="row g-4">

            {/* SIDEBAR */}
            <div className="col-lg-3">
              <div className="bg-white rounded shadow p-3">
                <button
                  className={`w-100 btn text-start mb-2 ${activeTab === "profile" ? "bg-pink text-white" : ""}`}
                  onClick={() => setActiveTab("profile")}
                >
                  <User size={16} className="me-2" />
                  My Profile
                </button>

                <button
                  className={`w-100 btn text-start ${activeTab === "booth" ? "bg-pink text-white" : ""}`}
                  onClick={() => setActiveTab("booth")}
                >
                  My Booth
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-lg-9">

              {/* MY PROFILE FORM */}
              {activeTab === "profile" && (
                <div className="bg-white rounded shadow p-4">
                  <h5 className="pink mb-3">Profile Information</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" placeholder="Full Name" defaultValue={user.full_name} />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Email" defaultValue={user.email} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Company Name" defaultValue={user.company_name} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Phone" defaultValue={user.phone} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Nationality" defaultValue={user.nationality} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Sponsor Package" defaultValue={user.sponsor_package} />
                    </div>
                    <div className="col-12">
                      <textarea placeholder="Special Requirements" rows={3} defaultValue={user.special_requirements} />
                    </div>
                  </div>
                </div>
              )}

              {/* MY BOOTH SECTION */}
              {activeTab === "booth" && (
                <div className="bg-white rounded shadow p-4">
                  <h5 className="pink mb-3">My Booth</h5>
                  <div className="row g-4">

                    {/* Booth Card Example */}
                    {["Booth A", "Booth B", "Booth C"].map((booth, i) => (
                      <div key={i} className="col-md-4">
                        <div className="border rounded shadow-sm p-3 text-center hover-shadow" style={{ transition: "0.3s", cursor: "pointer" }}>
                          <div className="mb-2" style={{ fontSize: 32, color: "#ff66b3" }}>🏟️</div>
                          <h6>{booth}</h6>
                          <p className="text-muted">Location: Hall {i+1}</p>
                          <span className="badge bg-pink text-white">Reserved</span>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
