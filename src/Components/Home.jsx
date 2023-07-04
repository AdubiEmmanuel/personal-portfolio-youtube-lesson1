import { Link } from "react-scroll";
import {AiOutlineArrowRight} from "react-icons/ai";

const Home = () => {
    return (
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-pink-950 via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full md:pt-0 pt-32">
            <h2 className="text-4xl md:text-7xl font-bold text-white">
              I am a Fronted Developer
            </h2>
            <p className="text-gray-300 py-4 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              distinctio et modi, facilis corporis ratione nihil rerum,
              provident nemo exercitationem molestias, dolore ducimus sit odio
              nisi esse at expedita eos animi quibusdam optio excepturi
              asperiores quisquam. Dolor cumque laborum non sapiente voluptate,
              eos necessitatibus eaque enim. Laudantium saepe veniam reiciendis.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-slate-500 to-gray-800 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <AiOutlineArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="my profile"
              className="rounded-2xl mx-auto w-1/3 md:w-full"
            />
          </div>
        </div>
      </div>
    );
}

export default Home
