"use client";
import * as React from "react";
import { Button } from "@fluentui/react-components";

export default function CustomButton({ cats }) {
  return cats.map((cat, index) => <Button key={index}>{cat.catName}</Button>);
}
