import HeroImg from "../assets/Images/hero.png"
import { AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";
const Hero
 =()=>{
    return (
        <div className="flex flex-col items-center md:flex-row justify-between py-10 md:p-32 bg-primary font-hero-font">
            <div className="m-2 md:w-1/2 text-white text-md md:text-5xl">
                <h1>Hi,</h1>
                <p>I'm Ajithkumar</p>
                <p className="text-sm md:text-2xl py-1">Front-end Developer</p>
                <div className="flex text-black md:py-5">
                    <a href="#" className="hover:text-white pr-2"><AiOutlineGithub/></a>
                    <a href="#" className="hover:text-white"><AiOutlineLinkedin/></a>
                </div>
            </div>
         
                <img className="w-7/12 md:w-1/3" alt="profile-pic" src={HeroImg}/>
            
        </div>
    )
}

export default Hero;
