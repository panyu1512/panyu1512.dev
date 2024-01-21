"use client";

import React from "react";
import { motion } from "framer-motion";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [label, setLabel] = React.useState("Email");
    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const validationState = React.useMemo(() => {
        if (email === "") return undefined;
    
        return validateEmail(email) ? "valid" : "invalid";
      }, [email]);

      const onValueChange = React.useCallback(
        (value: string) => {
            setEmail(value);
            setLabel(value === "" ? "Email" : "");
        },
        [setEmail, setLabel]
        );

    const onMessageChange = React.useCallback(
        (value: string) => {
            setMessage(value);
            setLabel(value === "" ? "Message" : "");
        },
        [setMessage]
        );

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
        <form
          className="space-y-4"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully");
            setMessage("");
            setEmail("");
            setLabel("Email");
          }}
        >
          <Input
              isRequired
              name="senderEmail"
              value={email}
              type="email"
              label={label}
              description="We'll never share your email with anyone else."
              labelPlacement="outside"
              variant="bordered"
              color={validationState === "invalid" ? "danger" : "default"}
              errorMessage={validationState === "invalid" && "Please enter a valid email"}
              onValueChange={onValueChange}
          />
          <Textarea
              isRequired
              name="message"
              label="Message"
              variant="bordered"
              placeholder="Enter your message"
              value={message}
              onValueChange={onMessageChange}
          />
          <SubmitBtn/>
      </form>
    </motion.section>
  );
}