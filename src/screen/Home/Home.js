import Hero from '../../image/hero.svg'
import ChairMan from '../../image/chairman.svg'

const Home = () =>{
    return (
        <div>
           {/* Hero Section  */}
            <section className="bg-[#4097DB] relative top-16">
                {/* Hero Container */}
                <div className="flex flex-col-reverse mx-auto lg:flex-row ">
                    {/* Content Container */}
                    <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2 xl:mb-52">
                    {/* <img src={Hero} alt="hero"  /> */}
                        <h1 className="text-4xl font-medium pt-8 lg:pt-0 text-center lg:text-6xl lg:max-w-md lg:text-left text-white px-4">
                            Discover Your Wonder
                        </h1>
                        <p className="text-sm text-center lg:pb-0 pb-8 lg:max-w-md lg:text-left text-white px-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste vel cumque labore magnam. Cupiditate voluptatibus illo facere, nemo animi impedit distinctio placeat dignissimos sapiente. Vitae optio in cupiditate nostrum.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="md:w-100 md:h-100">
                        <img src={Hero} alt="" width={990}/>
                    </div>
                </div>
            </section>

            {/* Feature Box Section */}
            <section id="features" className="py-40 bg-gray-100">
            <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">

                {/* Box 1 */}
                <div className="relative flex flex-col p-6 h-96 bg-white rounded-lg md:w-1/3">
                    <h2 className="pt-6 text-2xl text-[#029FE4] font-bold text-center capitalize md:text-left">Who We Are</h2>
                    <h5 className="pt-6 text-xl text-center capitalize md:text-left">
                        Technology Company
                    </h5>
                    <p className="text-center text-gray-400 md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste vel cumque labore magnam. Cupiditate voluptatibus illo facere, 
                    </p>
                </div>

                {/* Box 2 */}
                <div className="relative flex flex-col p-6 h-96 bg-white rounded-lg md:w-1/3">
                    <h2 className="pt-6 text-2xl text-[#029FE4] font-bold text-center capitalize md:text-left">
                        What We Do
                    </h2>
                    <h5 className="pt-6 text-xl text-center capitalize md:text-left">
                        Professional Brand Management
                    </h5>
                    <p className="text-center text-gray-400 md:text-left">
                        Gain insights into who is clicking your links. Knowing when and
                        where people engage with your content helps inform better decisions.
                    </p>
                </div>

                {/* Box 3 */}
                <div className="relative flex flex-col p-6 h-96 bg-white rounded-lg md:w-1/3">
                    <h2 className="pt-6 text-2xl text-[#029FE4] font-bold text-center capitalize md:text-left">
                        What We Do
                    </h2>
                    <h5 className="pt-6 text-xl text-center capitalize md:text-left">
                        Strategize, Design, Collaborate
                    </h5>
                    <p className="text-center text-gray-400 md:text-left">
                        Improve brand awareness and content discoverability through
                        customizable links, supercharging audience engagement.
                    </p>
                </div>
            </div>
            </section>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="p-10 order-1 bg-[#F8F8F8]">
                        <h2 className="pt-6 text-2xl mb-4 text-[#029FE4] font-bold text-center capitalize md:text-left">
                            Our Core Values
                        </h2>
                        <p className="text-center text-gray-400 md:text-left">
                            Gain insights into who is clicking your links. Knowing when and
                            where people engage with your content helps inform better decisions.
                        </p>
                        <p className="text-center text-gray-400 md:text-left">
                            Gain insights into who is clicking your links. Knowing when and
                            where people engage with your content helps inform better decisions.
                        </p>
                        <h5 className="pt-6 text-xl text-left capitalize">
                            - Dedication
                        </h5>
                        <p className="text-left text-gray-400">
                            Gain insights into who is clicking your links. Knowing when and
                            where people engage with your content helps inform better decisions.
                        </p>
                        <h5 className="pt-6 text-xl text-left capitalize">
                            - Intelectual Honesty
                        </h5>
                        <p className="text-left text-gray-400">
                            Gain insights into who is clicking your links. Knowing when and
                            where people engage with your content helps inform better decisions.
                        </p>
                        <h5 className="pt-6 text-xl text-left capitalize">
                            - Curiousity
                        </h5>
                        <p className="text-left text-gray-400">
                            Gain insights into who is clicking your links. Knowing when and
                            where people engage with your content helps inform better decisions.
                        </p>
                    </div>
                    <div className="p-10 order-3 md:order-2 bg-[#4097DB]">
                        <div className="bg-white h-full min-h-full p-4 rounded-lg">
                            <h2 className="pt-6 mb-4 text-2xl text-[#029FE4] font-bold text-center capitalize">
                                Our Speciality
                            </h2>
                            <p className="text-center text-sm font-light md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, 
                            in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                            </p>
                        </div>
                    </div>
                    <div className="p-10 order-2 md:order-3 bg-[#F8F8F8]">
                        <div className="md:w-100 md:h-100">
                            <img src={ChairMan} alt="" width={990}/>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Home;