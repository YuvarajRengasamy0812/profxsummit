import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import axios from "axios";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { Globe, Mail, PhoneCall, Pin } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");
  const [nationality, setNationality] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [specialReq, setSpecialReq] = useState("");
  const [sponsorPackage, setSponsorPackage] = useState("");
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // ✅ Password match check
    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password and Confirm Password do not match",
      });
    }

    setLoading(true);

    try {
    const res = await axios.post(
  "https://profxsummit.com/adminpanel/api/v1/register",
  {
    api_key: "772414293281728",
    full_name: fullName,
    email: email,
    company_name: companyName,
    phone: phone,
    user_type: userType,
    nationality: nationality,
    password: password,
    password_confirmation: confirmPassword, // ✅ important fix
    special_requirements: specialReq,
    sponsor_package: sponsorPackage,
    products_services: products
  },
  {
    headers: { "Content-Type": "application/json" }
  }
);

      if (res.data.code === "1" || res.data.code === 1) {
        // ✅ Success SweetAlert
        await Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You can now login with your credentials",
          showConfirmButton: false,
          timer: 2000
        });

        // ✅ Redirect to Login page
        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: res.data.msg || "Something went wrong"
        });
      }

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.msg || "Something went wrong. Try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHelmet pageTitle="Register" />
      <Breadcrumb title="Register" />
      <div className="container-fluid min-vh-100 py-6 d-flex align-items-center bg-lightgrey">
        <div className="container">
          <div className="row g-4 align-items-stretch">

            {/* LEFT SIDE – CONTACT INFO */}
            <div className="col-12 col-lg-5">
              <div className="h-100 bg-white rounded shadow p-4 d-flex flex-column gap-3">
                <h5 className="pink mb-2">Contact Info:</h5>
                <p className="mb-1 fw-semibold"><Pin /> Yashobhoomi, New Delhi</p>
                <Link className="text-grey d-flex align-items-center gap-1" to="https://www.profinsummit.com" target="_blank" rel="noreferrer"><Globe /> www.profinsummit.com</Link>
                <Link className="text-grey d-flex align-items-center gap-1" to="tel:+919629896298"><PhoneCall /> +91 9629896298</Link>
                <Link className="text-grey d-flex align-items-center gap-1" to="mailto:info@profinsummit.com"><Mail /> info@profinsummit.com</Link>
                <div className="ratio ratio-16x9 rounded overflow-hidden mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12685.506297821054!2d77.03068256378171!3d28.555189676178713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b86c10b12cf%3A0xa6d41303342b088c!2sYashobhoomi!5e1!3m2!1sen!2sus!4v1766669955282!5m2!1sen!2sus"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Yashobhoomi Map"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – REGISTER FORM */}
            <div className="col-12 col-lg-7">
              <div className="h-100 bg-white rounded shadow p-4">
                <h4 className="pink mb-4 text-center">Register for PROFIN BLOCKCHAIN SUMMIT 2026</h4>

                <form onSubmit={handleRegister} className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
                      <option value="">User Type</option>
                      <option value="Exhibitor">Exhibitor</option>
                      <option value="Sponsor">Sponsor</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <input type="password" className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Special Requirements (Optional)" value={specialReq} onChange={(e) => setSpecialReq(e.target.value)} />
                  </div>

                  <div className="col-md-6">
                    <select value={sponsorPackage} onChange={(e) => setSponsorPackage(e.target.value)}>
                      <option value="">Sponsor Package</option>
                      <option value="Summit Partner">Summit Partner</option>
                      <option value="Track Sponsor">Track Sponsor</option>
                      <option value="Session Ally">Session Ally</option>
                      <option value="Content Collaborator">Content Collaborator</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <textarea rows="3" placeholder="Products / Services to Showcase" value={products} onChange={(e) => setProducts(e.target.value)} />
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms" required />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <Link to="/terms" className="pink">Terms & Conditions</Link>
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn bg-pink text-white w-100" disabled={loading}>
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </div>

                  <div className="col-12 text-center">
                    <small className="text-grey">
                      Already have an account? <Link to="/Login" className="pink">Login</Link>
                    </small>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
