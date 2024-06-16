import React from "react";
import { Input } from "@nextui-org/react";

export default function FormEmail() {
  return (
    <Input
      isRequired
      type="email"
      label="Email"
      placeholder="email@example.com"
      className="max-w-xs pb-4"
    />
  );
}