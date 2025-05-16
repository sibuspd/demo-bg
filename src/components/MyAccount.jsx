import React from "react";

function MyAccount() {
  return (
    <div className="p-6 max-w-3xl text-gray-800 mx-auto font-light">
      <img
        src="https://github.com/sibuspd.png"
        alt="profile photo"
        className="w-40 h-40 rounded-full mx-auto mb-4 border-2 border-gray-300 shadow-md object-cover"
      />
      <h1 className="text-center text-3xl font-bold mb-4">Sabyasachi Sahani</h1>
      <p className="text-justify leading-7 mb-4">
        I am a <strong>fullstack developer</strong> who loves everything
        pertaining to Computers - Wedb Development, Machine Learning, Cyber
        Security, Embedded System and Quantum Computing . I'm passionate about
        building clean and responsive Web Applications using technologies like{" "}
        <italic className="italic ">
          {" "}
          React, Next js, Redux, Vite, Tailwind CSS, Node js, Express js,
          MongoDB, PostgreSQL, Prisma, Firebase, mySQL, AWS
        </italic>{" "}
        etc.{" "}
      </p>

      <p className="text-justify leading-7 mb-4">
        Beyond coding, I enjoy singing, travelling and martial arts.
      </p>
    </div>
  );
}

export default MyAccount;
