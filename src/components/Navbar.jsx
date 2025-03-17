import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden": "";
    }, [menuOpen]);
    return (
        <nav className={`fixed top-0 w-full z-40 ${menuOpen ? "bg-yellow-500" : "bg-[rgba(10,10,10,0.8)]"} backdrop-blur-lg 
        border-b border-white/10 shadow-lg`}>

        <div className="max-w-5xl mx-auto px-4">
            {/* Hamburgermeny-just the lines of hamburger */}
            <div className="flex justify-between items-center h-16">
                
                <a href="#home" className="font-mono text-xl font-bold text-green-500">
                    gaya<span className="text-yellow-300">&&soul</span>
                </a>
                {/* Hamburgermeny for small screen */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev)=> !prev)}>
                    &#9776;
                </div>

                  {/* Meny for big screen */}   
                <div className={`hidden md:flex items-center space-x-8 ${menuOpen ? "block" : "hidden"}`}>
                    <a href="#home"
                    className="text-orange-300 hove:text-white transition-colors"
                    >
                    {""}
                    Home{""}
                    </a>

                    <a href="#about"
                    className="text-orange-300 hove:text-white transition-colors"
                    >
                    {""}
                    About{""}
                    </a>

                    <a href="#projects"
                    className="text-orange-300 hove:text-white transition-colors"
                    >
                    {""}
                    Projects{""}
                    </a>

                    <a href="#contact"
                    className="text-orange-300 hove:text-white transition-colors"
                    >
                    {""}
                    Contact{""}
                    </a>
                </div>
                

            </div>
        </div>
    </nav>

    );
    
};