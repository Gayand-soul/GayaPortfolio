import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {


    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-orange-700 to-yellow-300 bg-clip-text
                        text-transparent text-center"> Featured Projects</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blure-500/30 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] trasnistion-all">
                            <h3 className="text-xl font-bold mb-2">Shetland – "A Journey Through Nature" interactive website</h3>
                            <p className="text-gray-400 mb-4"> 
                                This is an interactive website that celebrates the breathtaking 
                                landscapes, wildlife, and culture of the Shetland Islands. 
                                The goal of this project was to create an engaging digital 
                                experience with a visually appealing design and intuitive navigation.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                { ["HTML","CSS","JavaScript"].map((tech, key) => (
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] trasnistion-all">
                                        {tech}
                                        </span>
                                )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://gayand-soul.github.io/Shetland/" className="text-yellow-400 pl-2 hover:text-blue-300 transition-colors my-4"> 
                                    View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blure-500/30 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] trasnistion-all">
                            <h3 className="text-xl font-bold mb-2">Multiple Choice Question Quiz 1</h3>
                            <p className="text-gray-400 mb-4"> 
                            This quiz contains multiple choice questions (MCQs) in Swedish, designed to help practice
                             and understand local storage and session storage in JavaScript.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                { ["HTML","CSS","JavaScript"].map((tech, key) => (
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] trasnistion-all">
                                        {tech}
                                        </span>
                                )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://gayand-soul.github.io/MCQ-local-sessionStorage/" className="text-yellow-400 pl-2 hover:text-blue-300 transition-colors my-4">
                                    View Project </a>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};