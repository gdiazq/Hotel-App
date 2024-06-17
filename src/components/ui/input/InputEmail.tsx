import React from "react";
import { Input } from "@nextui-org/react";

export default function InputEmail() {
  return (
    <Input
      isRequired
      type="email"
      id="email"
      label="Email"
      placeholder="email@example.com"
      className="max-w-xs pb-4 mx-auto"
    />
  );
}