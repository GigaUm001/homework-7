import React from "react";
import first from './../../assets/img/first.png';
import second from './../../assets/img/second.png';

const Section_1 = () => {
  return (
    <section className="bg-white text-center py-16 px-6">
      <div className="w-[70%] mx-auto text-center">
        <h2 className="text-3xl font-bold">
          What is <span className="text-orange-500">Skilline?</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage assignments,
          quizzes and exams; monitor due dates; grade results and provide
          students with feedback all in one place.
        </p>

        <div className="flex justify-between mt-10">
          <div
            className="relative w-[400px] h-[300px] rounded-lg overflow-hidden flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${first})` }}
          >
            <div className="relative text-white text-center p-6">
              <h3 className="text-xl font-semibold">FOR INSTRUCTORS</h3>
              <button className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                Start a class today
              </button>
            </div>
          </div>

          <div
            className="relative w-[400px] h-[300px] rounded-lg overflow-hidden flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${second})` }}
          >
            <div className="relative text-white text-center p-6">
              <h3 className="text-xl font-semibold">FOR STUDENTS</h3>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_1;
