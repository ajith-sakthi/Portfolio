import aboutImg from '../assets/Images/about.png';
const About = () =>{
    const config={
        line1:'Hi, My name is Ajithkumar. I am a Front-end web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap',
        line2:'I have skills in HTML, CSS, Javascript, React Js, Python, Tailwind Css, Bootstrap',
        line3:'I am always willing to learn a new things.'
    }
    const {line1,line2,line3}=config;
    return(
        <div className='flex justify-center  items-center bg-secondary' id="about">
                <img src={aboutImg} alt="aboutImage" className="md:w-1/2 hidden md:inline-flex"/>
                <div className='md:w-1/2 text-white '>
                <h2 className='text-3xl font-bold p-2 max-[768px]:text-center'>About Me</h2>
                <p className='p-2 text-lg'>{line1}</p>
                <p className='p-2 text-lg'>{line2}</p>
                <p className='p-2 text-lg'>{line3}</p>
                </div>
        </div>
    )
}


export default About;