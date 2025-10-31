"use client"
import { Button } from "../button";
import { Card } from "../card";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { useState } from 'react';

export default function InquiryForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const key = process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY ? process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY : ""
    formData.append("access_key",  key);
    

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <Card className="w-2/3 p-4  mx-auto">
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
          <h1 className="text-2xl font-semibold text-muted-foreground">
            Have Questions?
          </h1>
          <Input type="text" name="firstName" placeholder="First Name" />
          <Input type="text" name="lastName" placeholder="Last Name" />
          <Input type="text" name="email" placeholder="Email" />
          <Textarea name="inquiry" placeholder="Inquiry..." />
          <Button className="hover:cursor-pointer">Submit</Button>
          <p>{result}</p>
      </form>
    </Card>
  );
}
