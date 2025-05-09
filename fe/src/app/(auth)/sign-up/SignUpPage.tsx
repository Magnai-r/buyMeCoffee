"use client";

import React, { useState } from "react";
import { SignUpEmailPass, SignUpUsername } from "../components";

const SignUpPage = () => {
  const [step, setStep] = useState<number>(0);
  if (step === 0) {
    return <SignUpUsername setStep={setStep} />;
  } else {
    return <SignUpEmailPass />;
  }
};

export default SignUpPage;
