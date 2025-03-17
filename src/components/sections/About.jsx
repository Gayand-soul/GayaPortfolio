import { RevealOnScroll } from "./RevealOnScroll";
export const About =() => {

    const frontendSkills = ["React", "Vite", "TypeScript", "TailwindCSS", "HTML", "CSS", "JavaScript"];
    //const BackendSkills = ["Node.js", "Java", "", ""]; framtiden kommer jag fylla i.

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text
                        text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transitiio-all">
                            <p className="text-white-300 mb-6">
                            I am now taking the next step in my career by furthering my education as a full-stack 
                            developer, where I combine my unique experience in data management and laboratory 
                            information system (LIS) administration with modern web development. 
                            With this broad skill set, I strive to develop innovative and efficient digital 
                            solutions that optimize processes and create value.  
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {frontendSkills.map((tech, key) => (
                                            <span 
                                            key={key}
                                            className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm 
                                            hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] trasnistion">
                                            {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 
                            transition-all">
                                <h3 className="text-xl font-bold mb-4"> Education </h3>
                                <ul>
                                    <li>
                                        <strong className="text-lg"> Fullstack Developer </strong> : Företagsuniversitetet (2024 - 2026)
                                    </li>
                                    <li className="rounded-xl pl-3 pt-3 pb-3 mt-2 bg-gradient-to-r from-red-500 to-green-400 text-sm min-h-45 ">
                                        <p className="text-white-700 font-bold h-full flex items-center text-lg">Frontend Development: (Currently Learning)</p>
                                        <ul className="flex flex-col space-y-4 h-full">
                                            <li className="text-lg text-green-700 font-bold">Technologies: HTML, CSS, JavaScript, TypeScript.</li>
                                            <li className="text-lg text-green-700 font-bold">Frameworks & Libraries: React, Angular, TailwindCSS.</li>
                                            <li className="text-lg text-green-700 font-bold">Tools: Figma, Git.</li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>

                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 
                            transition-all">
                                <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                                <div className="space-y-4 text-white-300">
                                    <div>
                                        <h4 className="font-semibold text-cyan-500">Laboratory Information Management System consultant at Plantvision AB, Stockholm (2022 - 2024)</h4>
                                        {" "}
                                        <p>
                                        Developed landing pages to showcase the Labdata system, trained staff on ELN usage, 
                                        created workflows for new method implementation, and managed system maintenance and user support. 
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-cyan-500">Labsystem Administrator at Synlab AB, Stockholm (2019 - 2022)</h4>
                                        {" "}
                                        <p>
                                        Responsible for troubleshooting middleware issues between laboratory instruments and data systems, 
                                        configuring and integrating new methods, conducting system testing and documentation, and providing 
                                        2nd-line support to ensure system stability and efficiency.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                </div>
            </RevealOnScroll>
        </section>
    );

};