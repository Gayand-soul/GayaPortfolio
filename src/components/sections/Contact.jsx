import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact  = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });
   
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(import.meta.env.VITE_service_ID, import.meta.env.VITE_Template_ID, e.target, import.meta.env.VITE_Public_Key)
        .then(() => {
            alert("Message Sent!");
            setFormData({name: "", email:"", message:""});
        })
        .catch(() => alert ("OOps! Something went wrong. Please try again."))
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-6 w-300px">
                    <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-red-500 to-green-400 bg-clip-text
                        text-transparent text-center">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value= {formData.name}
                            className="w-full bg-white/5 border 
                            border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
                            focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder = "Name..."
                            onChange={(e) => setFormData ({...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            className="w-full bg-white/5 border 
                            border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
                            focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder = "example@gmail.com.."
                            onChange={(e) => setFormData ({...formData, email: e.target.value })}
                            />
                            
                        </div>

                        <div className="relative">
                            <textarea
                            id="message" 
                            name="message" 
                            rows={5}
                            value={formData.message}
                            className="w-full bg-white/5 border 
                            border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
                            focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder = "Your message.."
                            onChange={(e) => setFormData ({...formData, message: e.target.value })}
                            />
                            
                        </div>

                        <button type="submit" className="w-full bg-green-900 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                        hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59,130,246,0.4)">
                            Send Message</button>

                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );

};