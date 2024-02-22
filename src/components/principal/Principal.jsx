import { useState } from 'react';
import linkedin from '../img/linkedin.jpg';
import logo from '../img/logo10.png';
import github from '../img/github.webp';
import atlas from '../img/atlas.jpg';

const Principal = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const themeClass = darkMode ? 'bg-cyan-950 ' : '  bg-slate-500 ';
    return (
        // <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-cyan-950 min-h-screen overflow-y-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-screen overflow-y-auto ${themeClass}`}>
            {/* Primera parte */}
            <div className='text-white  grid grid-cols-1'>
                <div className='text-center text-6xl font-bold my-20 '>
                    <h1> Wilson Fabian Delgado Pachon</h1>
                    <div className='text-center text-3xl my-20 p-10'>
                        <h3>¡Hola! Soy un apasionado desarrollador fullstack con formación en ingeniería electrónica.
                            He adquirido habilidades técnicas en el desarrollo web a través de emocionantes proyectos grupales.
                            Valoro enormemente el trabajo en equipo, manejo metodologías ágiles y utilizo la comunicación efectiva para lograr resultados excepcionales.
                            Estoy entusiasmado por colaborar con otros profesionales y aprender de sus experiencias.
                        </h3>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <a href="https://www.linkedin.com/in/wilson-fabian-delgado-pachon-a7459514a/">
                        <img src={linkedin} alt="linkedin" className='w-20 h-20 rounded-full ' />
                    </a>
                </div>
            </div>
            {/* Segunda parte */}
            <div className=' text-center  text-3xl font-bold text-white p-20 '>
                <h2>Mis habilidades y tecnologías que manejo</h2>
                <div className="flex flex-wrap justify-center overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
                    {/* Aquí van las imágenes de las tecnologías */}
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-4 my-10 bg-emerald-900 bg-transparent">
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" alt="Java" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg" alt="Bash" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/xampp.png" alt="XAMPP" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" /></a>
                        <a><img className="w-20 h-20 rounded-full" src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" /></a>
                    </div>
                    <div >
                        <h2 className='p-10'>Mis proyectos</h2>
                        <div className='flex justify-center '>
                            <a href="https://pf-rentify-frontend.vercel.app">
                                <img src={logo} alt="Logo de Rentify" />
                            </a>
                        </div>
                        <div className=' my-5'>
                            <p>Proyecto Rentify -{'>'} Use estas tegnologias: </p>
                        </div>
                        <div className='grid grid-rows-1 p-2 mb-9'>
                            <div className='flex space-x-4'>
                                <div className='bg-teal-800 w-36 h-10 rounded-full'>
                                    <p>React</p>
                                </div>
                                <div className='bg-teal-800 w-36 h-10 rounded-full'>
                                    <p>Redux</p>
                                </div>
                                <div className='bg-teal-800 w-40 h-10 rounded-full'>
                                    <p>javascript</p>
                                </div>
                                <div className='bg-teal-800 w-36 h-10 rounded-full'>
                                    <p>tailwind</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-center'>
                            <a href="https://github.com/FabianDP/pf-rentify-backend">
                                <img src={github} alt="" className='w-10 h-10   justify-center' /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className='p-10' >Paises</h3>
                        <div className='flex justify-center'>
                            <a href="https://github.com/FabianDP/PIcountries/tree/main/PI-Countries-main">
                                <img src={atlas} alt="Atlas" className='w-30 h-30 rounded-full' />
                            </a>
                        </div>
                        <div className='my-5'>
                            <p>Proyecto Paises -{'>'} Use estas tegnologias:</p>
                        </div>
                        <div className='grid grid-rows-1 p-2 mb-9'>
                            <div className='flex space-x-4'>
                                <div className='bg-teal-800 w-36 h-10 rounded-full'>
                                    <p>React</p>
                                </div>
                                <div className='bg-teal-800 w-36 h-10 rounded-full'>
                                    <p>Redux</p>
                                </div>
                                <div className='bg-teal-800 w-40 h-10 rounded-full'>
                                    <p>javascript</p>
                                </div>
                                <div className='bg-teal-800 w-40 h-10 rounded-full'>
                                    <p>cssModuel</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-center'>
                            <a href="https://github.com/FabianDP/PIcountries/tree/main/PI-Countries-main">
                                <img src={github} alt="" className='w-10 h-10 my-5' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleDarkMode} className="fixed top-4 right-4 px-2 py-1 bg-gray-800 text-white rounded">Cambiar Modo</button>
        </div>
    );
};

export default Principal;
