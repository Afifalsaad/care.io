import Footer from "@/Layouts/Footer";
import NavBar from "@/Layouts/NavBar";
import React from "react";
import { ToastContainer, Zoom } from "react-toastify";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <section>
        <NavBar></NavBar>
      </section>
      <main className="md:max-w-300 mx-auto">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
        {children}
      </main>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default PublicLayout;
