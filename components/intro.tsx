'use client';
import {Avatar} from "@nextui-org/react"
import React from "react"
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export const Intro = () => {

    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["I am a software engineer", "Living in Mallorca", "With almost two years of experience in the industry", "I am looking for a new challenge!"],
            typeSpeed: 60,
            backSpeed: 60,
            cursorChar: "|",
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <section>
                <div className="flex flex-col text-center items-center justify-center">
                    <div>
                        <Avatar className="mb-4" isBordered color="secondary" size="lg" src="https://media.licdn.com/dms/image/D4D03AQH2JFOaJ3rGfg/profile-displayphoto-shrink_200_200/0/1665775544515?e=1698278400&v=beta&t=J_-YROKiEXPlwlPGvHpHBNiCtNlnL7vZ2s90sNKrQoE" />
                    </div>
                    <div>
                        <h1 className="text-4xl mb-4">Hi, my name is Enrique</h1>
                    </div>  
                    <div>
                        <span className="text-xl text-[#9028A3]" ref={el}></span>
                    </div>
                </div>
            </section>
        </div>
    )
}