const Home = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <header className="text-center py-8 bg-blue-600 text-white rounded-b-xl shadow-lg mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Welcome to Jarurat Care</h1>
        <p className="text-xl mt-2 font-light">Your health, our priority. Experience compassionate care.</p>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 w-120%">
        {/* About Us Card */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 pb-2 border-blue-200">About Us</h2>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
                <img
              src="/public/group_doc.jpg"
                alt="A team of doctors smiling" 
                className="rounded-lg shadow-inner w-100% object-cover h-cover"
              />
            </div>
            <div className="md:w-1/2 text-gray-700 leading-relaxed">
              <p className="mb-4">
                Jarurat Care is dedicated to providing high-quality, patient-centered healthcare. Our mission is to make top-notch medical services accessible to everyone, ensuring your well-being with a personalized approach.
              </p>
              <p>
                Our team of experienced medical professionals and support staff are here to guide you on your health journey, from routine check-ups to comprehensive treatment plans.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 pb-2 border-blue-200">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-blue-50 shadow-sm">
              <div className="text-4xl text-blue-500 mb-2">🩺</div>
              <h3 className="font-bold text-lg">General Checkups</h3>
              <p className="text-sm text-gray-600 mt-1">Preventive care for a healthier life.</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50 shadow-sm">
              <div className="text-4xl text-blue-500 mb-2">💉</div>
              <h3 className="font-bold text-lg">Vaccinations</h3>
              <p className="text-sm text-gray-600 mt-1">Stay protected with our vaccination programs.</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50 shadow-sm">
              <div className="text-4xl text-blue-500 mb-2">🩹</div>
              <h3 className="font-bold text-lg">Emergency Care</h3>
              <p className="text-sm text-gray-600 mt-1">Immediate attention for urgent health needs.</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 pb-2 border-blue-200">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
            <div>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Address:</span> 123 Care Street, Health City, CA 90210
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold text-gray-900">Phone:</span> (555) 123-4567
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold text-gray-900">Email:</span> contact@jaruratcare.com
              </p>
            </div>
            <div className="w-full md:w-1/2 h-48 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.279612345678!2d-122.0842496!3d37.4224764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb56000000000%3A0x808fb56000000000!2sGoogleplex!5e0!3m2!1sen!2sus!4v1617173295841!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps Location of Jarurat Care"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;