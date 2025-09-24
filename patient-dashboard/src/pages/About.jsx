const About = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <header className="text-center py-8 bg-blue-600 text-white rounded-b-xl shadow-lg mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">About Jarurat Care</h1>
        <p className="text-xl mt-2 font-light">Committed to your well-being, one patient at a time.</p>
      </header>

      <br />
      <br />

      <main className="container mx-auto px-4">
        {/* Our Mission Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 pb-2 border-blue-200">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At **Jarurat Care**, our mission is to revolutionize patient care through technology. We believe in creating a seamless and secure digital environment where healthcare professionals can efficiently manage patient records, and patients can have better access to their health information. This platform is a testament to our commitment to improving the quality of healthcare administration.
          </p>
        </section>

        <br />
        <br />

        {/* The Dashboard Section */}
        <section className="bg-white p-6  rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 pb-2 border-blue-200">The Dashboard</h2>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
              <img 
                src="/public/dashboard_mockup.png" 
                alt="A mockup of a clean and modern dashboard interface." 
                className="rounded-lg shadow-inner w-full h-120"
              />
            </div>
            <div className="md:w-1/2 text-gray-700 leading-relaxed ">
              <p className="mb-4">
                This dashboard is a **proof of concept**, built to demonstrate a modern approach to managing patient data. It showcases key features such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ">
                <li><strong className="text-blue-600">Secure Patient Records:</strong> A secure and organized database for storing patient history, vitals, and reports.</li>
                <li><strong className="text-blue-600">Appointment Scheduling:</strong> An intuitive system for managing patient appointments and doctor availability.</li>
                <li><strong className="text-blue-600">Data Visualization:</strong> Charts and graphs to analyze health trends and patient demographics.</li>
                <li><strong className="text-blue-600">User Authentication:</strong> Role-based access to ensure data privacy and security.</li>
              </ul>
            </div>
          </div>
        </section>

        <br />
        <br />

        {/* Our Philosophy Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 pb-2 border-blue-200">Our Philosophy</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe that technology should serve humanity, not the other way around. Our philosophy is rooted in simplicity, security, and a deep respect for patient privacy. This practice project reflects our dedication to building tools that are not only powerful and efficient but also ethical and user-friendly. It is a stepping stone towards our goal of creating a comprehensive, real-world solution for the healthcare industry.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;