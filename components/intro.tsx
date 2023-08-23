'use client';
import {Avatar} from "@nextui-org/react"
import React from "react"

export const Intro = () => {
    return (
        <div>
            <section>
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <Avatar isBordered color="default" size="lg" src="https://media.licdn.com/dms/image/D4D03AQH2JFOaJ3rGfg/profile-displayphoto-shrink_200_200/0/1665775544515?e=1698278400&v=beta&t=J_-YROKiEXPlwlPGvHpHBNiCtNlnL7vZ2s90sNKrQoE" />
                    </div>
                </div>
            </section>
        </div>
    )
}