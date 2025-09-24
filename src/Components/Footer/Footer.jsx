import React from "react";
import logo from "../../assets/Logo/insurance-agent_7985060.png"; // নিজের insurance logo ব্যবহার করবি

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content px-6 py-10">
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center sm:text-left">
        {/* Logo & Address */}
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
            <img src={logo} className="w-10 h-10" alt="logo" />
            <span className="font-bold text-lg">Life Insurance Platform</span>
          </div>
          <p className="text-sm">House #12, Road #7</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
        </div>

        {/* Terms & Policies */}
        <div>
          <h6 className="text-lg font-bold mb-2">Terms & Policies</h6>
          <ul className="space-y-1 text-sm">
            <li className="link link-hover">Accurate Information Required</li>
            <li className="link link-hover">No Illegal Use</li>
            <li className="link link-hover">User Data Protection</li>
            <li className="link link-hover">Company Not Liable for Misuse</li>
            <li className="link link-hover">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h6 className="text-lg font-bold mb-2">Connect With Us</h6>
          <div className="flex justify-center sm:justify-start gap-6 mt-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/g.lap.raj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 rounded-full p-2 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M22.675 0h-21.35C.597 0 0 .597 
        0 1.326v21.348C0 23.403.597 24 1.326 
        24H12.82v-9.294H9.692V11.41h3.128V8.797c0-3.1 
        1.894-4.788 4.66-4.788 1.325 0 2.463.099 
        2.795.143v3.24l-1.918.001c-1.505 0-1.796.715-1.796 
        1.763v2.314h3.59l-.467 3.296h-3.123V24h6.116C23.403 
        24 24 23.403 24 22.674V1.326C24 .597 23.403 
        0 22.675 0z"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/md-tahmid-hasan-golap"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 rounded-full p-2 hover:bg-black hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56 
        0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 
        1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.58-2.55-.29-5.23-1.28-5.23-5.7 
        0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.12-3.08 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 2.9-.39c.98 0 
        1.96.13 2.88.39 2.22-1.49 3.18-1.18 3.18-1.18.64 1.6.24 2.78.12 3.08.75.81 1.2 1.84 1.2 3.1 
        0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.09.8 2.2 0 1.59-.01 2.88-.01 3.27 0 .31.21.68.8.56A10.52 10.52 
        0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 rounded-full p-2 hover:bg-pink-600 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 
        16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 
        3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.25a1 1 0 1 1 0 
        2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 
        2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © 2025 Life Insurance Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
