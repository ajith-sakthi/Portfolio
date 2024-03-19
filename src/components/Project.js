import netflixImg from '../assets/Images/netflix.jpg'
import foodappImg from '../assets/Images/food-ecommerce.jpg'
const Project =()=>{
    const config = {
        projects:[
            {
                image:netflixImg,
                description:'Netflix-Clone with integration of GPT',
                link:'https://github.com/ajith-sakthi/netflix-gpt'
            },
            {
                image:foodappImg,
                description:"Food Delivery App using Swigg's live data.",
                link:'https://github.com/ajith-sakthi/Food-app'
            }
        ]
    }
    return(
        <div className='flex flex-col bg-primary text-white p-5' id="project">
            <div className="w-full">
                <h2 className="text-3xl font-bold p-2 text-center ">Projects</h2>
            </div>

            <p className="text-center m-5">These Projects are done using React Js Library.</p>

            <div className="flex md:flex-row flex-col justify-around">
                {
                    config.projects.map((pro) => (
                        <div className="relative md:my-0 my-5" key={pro.image}>
                         <img src={pro.image}  className="w-[400px] h-[250px]"/>
                         <div className="desc-project">
                             <p >{pro.description} </p>
                        <div className="p-5 text-center">
                             <a className="btn" target='_blank'href={pro.link}>View Project</a>
                         </div>
                         </div>
                         
                      </div>

                    ))
                }
            </div>

        </div>
        
        
    )
}

export default Project; 