"use client";

import React, { useState } from "react";
import { SignUpEmailPass, SignUpUsername } from "../components";

const SignUpPageToLogin = () => {
  const [step, setStep] = useState<number>(0);
  const [username, setUsername] = useState<string>("");

  if (step === 0) {
    return <SignUpUsername setStep={setStep} setUsername={setUsername} />;
  } else {
    return <SignUpEmailPass username={username} />;
  }
};

export default SignUpPageToLogin;
