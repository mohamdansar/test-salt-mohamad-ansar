import { Link } from "react-router-dom"
import CompanyLogoFooter from '../image/company-logo-footer.svg'

const Footer = () => {
    return (
    <div>
        <footer className="py-16 bg-[#07477A]">
            <div
              className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start"
            >
              <img src="images/logo.svg" alt="" />
      
              <div className="flex flex-col space-y-4 md:space-x-20 md:flex-row md:space-y-0">
                <div className="flex flex-col items-center w-full md:items-start">
                <div className="p-10">
                      <div className="flex mb-4 items-center px-auto">
                        <img src={CompanyLogoFooter} alt="" />
                      </div>
                        <div className="bg-white h-full min-h-full p-4 rounded-lg">
                        <div class="py-1 border-b outline-none group" tabindex="2">
                          <div class="flex items-center justify-between py-3 text-blue-800 transition duration-500 cursor-pointer group ease">
                            <h2 class="transition duration-500 ease group-hover:text-blue-800">
                              TECHNOLOGY DEPARTMENT
                            </h2>
                            
                            <div class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-blue-800">
                           
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="3"
                                  d="M1 1l8 8 8-8"
                                />
                              </svg>
                            </div>
                          </div>
                          
                          <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p class="py-2 text-justify text-gray-400">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                              repellat amet doloribus consequuntur eos
                            </p>
                          </div>
                        </div>
                        <p className="text-left text-sm mt-12 font-light text-blue-400">
                        Jl. Lembong No 8
                        Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat
                        </p>
                    </div>
                    </div>
                </div>
              </div>

              <div className="flex flex-col mt-80 items-center justify-center w-full md:flex-row">
                  <Link to="#" className="md:ml-4 text-white">Who We Are</Link>
                  <Link to="#" className="md:ml-4 text-white">Our Values</Link>
                  <Link to="#" className="md:ml-4 text-white">The Perks</Link>
              </div>
      
            </div>
          </footer>
    </div>
    )
}

export default Footer