import React, { useEffect, useRef } from 'react';
import DentistNew from "../assets/images/dentist.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'; // Import SplitType for text animation

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Image data for the gallery
const images = [
    { src: DentistNew, alt: 'Project 1', label: 'Personal Website' },
    { src: DentistNew, alt: 'Project 2', label: 'Text 2' },
];

export const Gallery = () => {
    const imageRefs = useRef([]);

    useEffect(() => {
        imageRefs.current.forEach((image, index) => {
            gsap.fromTo(
                image,
                { opacity: 0.3, y: 50 }, // Start hidden
                {
                    opacity: 1, // Fade in
                    y: 0, // Move to original position
                    duration: 1,
                    scrollTrigger: {
                        trigger: image,
                        start: "top 80%", // Start when the top of the image reaches 80% of the viewport height
                        toggleActions: "play none none reverse", // Play on enter, reverse on leave
                    },
                }
            );
        });

        // Apply SplitType and GSAP animation to text labels
        images.forEach((image, index) => {
            const textElement = document.getElementById(`my-text-${index}`);
            if (textElement) {
                const splitText = new SplitType(textElement, { types: 'lines, words, chars' });
                gsap.from(splitText.chars, {
                    opacity: 0,
                    y: 50,
                    stagger: 0.1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: textElement,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            }
        });

        return () => {
            // Clean up ScrollTrigger instances when component unmounts
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className='py-10 md:py-16 min-h-screen px-5 sm:px-8 md:px-16 lg:px-24 xl:px-32' style={{ minHeight: '100vh' }}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 justify-around'>
                {images.map((image, index) => (
                    <React.Fragment key={index}>
                        {index % 2 === 0 ? (
                            <>
                                <div className='relative flex flex-col items-center w-full group overflow-hidden '>
                                    <img
                                        ref={el => (imageRefs.current[index] = el)} // Assign ref to image
                                        src={image.src}
                                        alt={image.alt}
                                        className='w-full h-auto shadow-lg grayscale transition-all duration-500 group-hover:grayscale-0'
                                    />
                                </div>
                                <div className=' text-white text-[20px] sm:text-[25px] md:text-[40px] lg:text-[60px] xl:text-[80px] p-2 text-start w-full border-gray-300 '>
                                    <p id={`my-text-${index}`} className='font-montserrat border-b-2'>{image.label}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className=' text-white text-[20px] sm:text-[25px] md:text-[40px] lg:text-[60px] xl:text-[80px] p-2 text-start w-full border-gray-300 mb-4'>
                                    <p id={`my-text-${index}`} className='font-montserrat border-b-2'>{image.label}</p>
                                </div>
                                <div className='relative flex flex-col items-center w-full group'>
                                    <img
                                        ref={el => (imageRefs.current[index] = el)}
                                        src={image.src}
                                        alt={image.alt}
                                        className='w-full h-auto shadow-lg grayscale transition-all duration-500 group-hover:grayscale-0'
                                    />
                                </div>
                            </>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};
