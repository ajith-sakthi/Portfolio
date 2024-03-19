import resume from "../assets/Images/resume.jpg";
const Resume = () => {
  const config = {
    line1: "You can view my Resume",
  };
  const { line1 } = config;
  return (
    <div className="flex justify-center  items-center bg-secondary" id="resume">
      <div>
        <img
          src={resume}
          alt="aboutImage"
          className="md:w-[300px] h-[350px] p-2 hidden md:inline-flex"
        />
      </div>
      <div className="md:w-1/2 text-white flex justify-center">
        <div>
          <h2 className="text-3xl font-bold p-2 max-[768px]:text-center">
            Resume
          </h2>
          <p className="p-2 text-lg">You can view my Resume<a className="btn" href="#">Download</a></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
