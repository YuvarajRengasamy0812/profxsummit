import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import axios from "axios";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { Globe, Mail, PhoneCall, Pin } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://profxsummit.com/adminpanel/api/v1/login", // Laravel API URL
        {
          api_key: "772414293281728", // Replace with your actual API key
          email: email,
          password: password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      // ✅ Check code === 1
      if (res.data.code === "1" || res.data.code === 1) {
        // Save user data in localStorage
        localStorage.setItem("user", JSON.stringify(res.data.data));

        // ✅ SweetAlert Success
        await Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome ${res.data.data.full_name}!`,
          showConfirmButton: false,
          timer: 2000
        });

     

  navigate("/");

  // 🔥 FORCE REFRESH (not recommended usually)
  window.location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: res.data.msg || "Invalid credentials"
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
      <PageHelmet pageTitle="Login" />
      <Breadcrumb title="Login" />

      <div className="container-fluid min-vh-100 py-6 d-flex align-items-center bg-lightgrey">
        <div className="container">
          <div className="row g-4 align-items-stretch">

            {/* LEFT SIDE – CONTACT INFO */}
            <div className="col-12 col-lg-5">
              <div className="h-100 bg-white rounded shadow p-4 d-flex flex-column gap-3">
                <h5 className="pink mb-2">Contact Info:</h5>
                <p className="mb-1 fw-semibold d-flex align-items-center gap-1"><Pin /> Yashobhoomi, New Delhi</p>
                <Link className="text-grey d-flex align-items-center gap-1" to="https://www.profinsummit.com" target="_blank"><Globe /> www.profinsummit.com</Link>
                <Link className="text-grey d-flex align-items-center gap-1" to="tel:+919629896298"><PhoneCall /> +91 9629896298</Link>
                <Link className="text-grey d-flex align-items-center gap-1" to="mailto:info@profinsummit.com"><Mail /> info@profinsummit.com</Link>
                <div className="ratio ratio-16x9 rounded overflow-hidden mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12685.506297821054!2d77.03068256378171!3d28.555189676178713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b86c10b12cf%3A0xa6d41303342b088c!2sYashobhoomi!5e1!3m2!1sen!2sus!4v1766669955282!5m2!1sen!2sus"
                    loading="lazy"
                    title="Yashobhoomi Map"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – LOGIN FORM */}
            <div className="col-12 col-lg-7">
              <div className="h-100 bg-white rounded shadow p-4 d-flex flex-column justify-content-center">
                <h4 className="pink mb-4 text-center">Login to PROFIN BLOCKCHAIN SUMMIT 2026</h4>

                <form onSubmit={handleLogin} className="row g-3">

                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-12 text-end">
                    <Link to="/ForgotPassword" className="pink small">Forgot Password?</Link>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn bg-pink text-white w-100" disabled={loading}>
                      {loading ? "Logging in..." : "Login"}
                    </button>
                  </div>

                  <div className="col-12 text-center">
                    <small className="text-grey">
                      Don’t have an account?{" "}
                      <Link to="/Register" className="pink">Register</Link>
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

export default Login;
