'use client';
import {Avatar} from "@nextui-org/react"
import React from "react"
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import {Button, Link} from "@nextui-org/react";
import { GithubIcon, ArrowIcon} from "@/components/icons";
import Confetti from "@/components/confetti";
export const Intro = () => {
    const [isVisible, setIsVisible] = useState(false);
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
        <section>
            <div className="flex flex-col text-center items-center justify-center">
                <div>
                    <Avatar className="my-4" isBordered color="secondary" size="lg" src="https://media.licdn.com/dms/image/D4D03AQH2JFOaJ3rGfg/profile-displayphoto-shrink_200_200/0/1665775544515?e=1698278400&v=beta&t=J_-YROKiEXPlwlPGvHpHBNiCtNlnL7vZ2s90sNKrQoE" />
                </div>
                <div>
                    <h1 className="text-4xl my-4">Hi, my name is Enrique</h1>
                </div>  
                <div>
                    <span className="my-4 text-xl" ref={el}></span>
                </div>
            </div>
            <div className="justify-end space-x-6 my-4">
                <Button color="secondary" variant="shadow">
                    Contact me here <ArrowIcon />
                </Button>  
                <Button onPress={() => setIsVisible(true)} color="secondary" variant="ghost" as={Link} href="/next.svg" download >
                    Download CV
                </Button>
                {isVisible && <Confetti />}
                <Button color="secondary" variant="ghost" as={Link} href="https://github.com/panyu1512" target="_blank">
                    Github <GithubIcon/>
                </Button>
            </div>
        </section>
    )
}