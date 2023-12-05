import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const LandingPage: React.FC = () => {
  const [qaVisible, setQaVisible] = useState<boolean[]>(Array(8).fill(false));

  const toggleAnswer = (index: number) => {
    setQaVisible((prev) => {
      const updatedVisibility = [...prev];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  const questionsAndAnswers = [
    {
      question: "What is PeakPulse?",
      answer:
        "PeakPulse is a comprehensive fitness app that offers a diverse range of workouts, personalized nutrition plans, progress tracking, and a supportive community.",
    },
    {
      question: "How do I track my progress?",
      answer:
        "Within the app, you can easily track your progress with intuitive tools for monitoring workouts, nutrition, and overall fitness metrics. Set goals, monitor achievements, and celebrate milestones!",
    },
    {
      question: "Are the workouts suitable for beginners?",
      answer:
        "Yes, our app caters to all fitness levels, including beginners. We provide beginner-friendly workouts with step-by-step instructions and modifications for a comfortable start to your fitness journey.",
    },
    {
      question: "Is there a community for users to connect?",
      answer:
        "Absolutely! Join our vibrant community of fitness enthusiasts. Share experiences, get motivation, and connect with like-minded individuals on their fitness journeys.",
    },
    {
      question: "Can I use the app on multiple devices?",
      answer:
        "Yes, you can access our app on multiple devices. Whether you prefer working out on your phone, tablet, or computer, your progress and preferences sync seamlessly across all devices.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free trial period for new users. Explore the app, try out features, and experience firsthand how it can benefit your fitness routine.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Our customer support team is here to help! Reach us through the app's support section, where you'll find FAQs and the option to contact us directly.",
    },
    {
      question: "What types of workouts are offered?",
      answer:
        "The app provides a diverse range of workouts, including cardio, strength training, yoga, and more. Each workout is designed to cater to different fitness levels and goals.",
    },
  ];

  return (
    <div className="landing-page-container">
      <div
        className="first-section bg-opacity-50 justify-center my-auto text-white relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="text-center bg-black bg-opacity-70 w-full h-full">
          <nav className="top-0 left-0 w-full bg-transparent  p-4 flex justify-between items-center">
            <div className="nav-links flex space-x-4 text-gray-400 font-bold">
              <Link
                to="/dietplans"
                className=" hover:border-white border-transparent border-2 px-4 py-2 rounded"
              >
                Diet Plans
              </Link>
              <Link
                to="/exercises"
                className="hover:border-white border-transparent border-2 px-4 py-2 rounded"
              >
                Exercises
              </Link>
              <Link
                to="/blog"
                className="hover:border-white border-transparent border-2 px-4 py-2 rounded"
              >
                Blog
              </Link>
              <Link
                to="/aboutus"
                className="hover:border-white border-transparent border-2 px-4 py-2 rounded"
              >
                About Us
              </Link>
              <Link
                to="/premium"
                className="hover:border-white border-transparent border-2 px-4 py-2 rounded"
              >
                Premium
              </Link>
            </div>
            <div className="auth-links flex space-x-4 text-gray-400 font-bold">
              <Link
                to="/login"
                className="hover:border-white border-transparent border-4 px-4 py-2 rounded-xl"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:border-white border-transparent border-4 px-4 py-2 rounded-xl"
              >
                Sign Up
              </Link>
            </div>
          </nav>
          <h1 className="text-5xl text-red-400 font-extrabold flex justify-start px-10 pointer-events-none">
            PeakPulse
          </h1>
          <div className="m-40">
            <p className="font-extrabold text-4xl">
              Empowering Lives, Transforming Bodies.
            </p>
            <p className=" my-12 w-1/2 mx-auto">
              Build healthy habits with the all-in-one food, exercise, and
              calorie tracker.
            </p>
            <Link
              className="bg-red-400 p-6 rounded-full font-bold text-2xl"
              to={"/signup"}
            >
              Join Now!
            </Link>
          </div>
        </div>
      </div>

      {/* Second Section with Clients - Scrolling Section */}
      <div className="min-h-screen bg-gray-100 p-8 text-center">
        <h1 className="text-4xl font-bold my-8">Our Clients</h1>
        <h1 className="text-4xl font-bold my-8">⭐⭐⭐⭐⭐</h1>
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="max-w-sm overflow-hidden shadow-lg mx-4 my-8 rounded-lg">
            <img
              className="w-full h-48 object-cover"
              src="https://3f76ee1ce067134369ef-f23b5995d77526a95a1605453309cdf1.ssl.cf1.rackcdn.com/events/photos/189/63b54f99aae4e.png"
              alt="Client 1"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Kevin</div>
              <p className="text-gray-700 text-base">
                "Amazing app! The progress tracking, personalized plans, and
                motivating community make PeakPulse stand out. It's more than
                just an app; it's a lifestyle changer."
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 my-8">
            <img
              className="w-full h-48 object-cover"
              src="https://hips.hearstapps.com/hmg-prod/images/mh-1-2-20-transformation-social-1577981157.jpg"
              alt="Client 2"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">John</div>
              <p className="text-gray-700 text-base">
                "Incredible transformations happen here! PeakPulse not only
                reshaped my body but transformed my entire outlook on health and
                fitness. Highly recommended!"
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 my-8">
            <img
              className="w-full h-48 object-cover"
              src="https://i.ytimg.com/vi/D7YSX9dVrwM/mqdefault.jpg"
              alt="Client 2"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Rahul</div>
              <p className="text-gray-700 text-base">
                Being a part of PeakPulse has been a life-altering experience.
                The support, guidance, and effective plans helped me surpass my
                fitness goals. I can't thank this app enough
              </p>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* Q&A Section */}
      <div className="min-h-screen bg-gray-100 p-8 text-center">
        <h1 className="text-4xl font-bold mb-20">Q&A</h1>
        <div className="max-w-xl mx-auto  ">
          {questionsAndAnswers.map((qa, index) => (
            <div key={index} className="mb-4 hover:bg-gray-200">
              <div
                className="cursor-pointer border-b border-gray-300 py-2"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold">{qa.question}</h3>
              </div>
              {qaVisible[index] && (
                <p className="mt-2 text-gray-600">{qa.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className=" fixed-bottom max-w-full mx-auto p-8 bg-gray-200 rounded-md text-center">
        <div className="flex items-center justify-center mb-4">
          {/* Social Media Logos */}
          <img
            src="https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet.png"
            alt="Facebook"
            className="w-8 h-8 mr-4"
          />
          <img
            src="https://w7.pngwing.com/pngs/133/360/png-transparent-social-media-computer-icons-tulane-university-facebook-drawing-twitter-twitter-logo-blue-logo-computer-wallpaper-thumbnail.png"
            alt="Twitter"
            className="w-8 h-8 mr-4"
          />
          <img
            src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png"
            alt="Instagram"
            className="w-8 h-8 mr-4"
          />
          {/* Add more social media logos as needed */}
        </div>
        <h2 className="text-2xl font-bold mb-4">Subscribe for Updates</h2>
        <p className="text-gray-600 mb-4">
          Provide your email to receive the latest and greatest updates from us.
        </p>
        <div className="flex items-center justify-center mb-4">
          {/* Email Input Area */}
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-400 p-2 mr-2 rounded-md"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      <footer className="fixed-bottom w-full text-center bg-gray-300">
        <p className="text-black ">
          &copy; 2023 PeakPulse. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
