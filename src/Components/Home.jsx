import React from 'react';
import backgroundImage from "../assets/backgroundImage.png";
export const Home=()=>{
    return(
        <div  className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
         <div className="pt-[230px] items-center justify-center text-center text-white  absolute inset-0 h-[10%] bg-gradient-to-bl from-blue from-20% via-transparent via-60% to-transparent to-60% ...">
            <div className='px-[300px] text-left items-start whitespace-nowrap'>
            <h1 className="text-6xl font-bold mb-4 ">Empowering Lives Through</h1>
                <h1 className="text-6xl font-bold mb-4 ">Innovative <span className='border-b-[10px] border-custom-blue '>AI</span> Technologies.</h1>
                <p className='text-xl mt-8'>Finding new horizons for visinaries to accelarate their innovation and progress.</p>
             
                <button className='bg-purple  px-5 py-2 rounded-xl text-m font-bold mt-6 mr-10'>Explore Our Services</button>
                <button className='border-2 border-custom-blue px-5 py-2 rounded-xl text-m font-bold '>Learn more</button>
                <h1 className='mt-10'><span className='bg-gradient-to-l from-slate-100 to-slate-700 bg-clip-text text-transparent'>From Ideas to Software Solutions</span>💡✨From Ideas to Software Solutions🌟✨<span className='bg-gradient-to-r from-slate-100 to-slate-700 bg-clip-text text-transparent'>From Ideas to </span> </h1>
                
            </div>
                
                
                
            </div>
        </div>
    );
};