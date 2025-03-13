import { RevealOnScroll } from "./RevealOnScroll";


export const Home = () => {

    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-400 
                bg-clip-text text-transparent leading-right">Hi, I`m Gaya Andersson</h1>

                <p className="text-white-400 text-lg mb-8 max-w-3xl mx-auto">
                I have several years of experience working with Laboratory Information Systems (LIS) and data management, 
                which has given me a strong analytical ability and technical understanding. 
                I am now furthering my education to become a full-stack developer, aiming to create innovative and 
                user-friendly digital solutions. With my experience in LIS administration and development, 
                I strive to optimize processes and drive technological projects forward across various industries. 
                </p>

                <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>

                <a href="#contact" className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all
                duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-orange-500/10">Contact Me</a>


            </div>
            </div> 
        </RevealOnScroll>
    </section>
    );
};