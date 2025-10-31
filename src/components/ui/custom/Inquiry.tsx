import { Button } from "../button";
import { Card } from "../card";
import { Input } from "../input";
import { Textarea } from "../textarea";

export const Inquiry = () => {
  return (
    <div className="flex justify-center items-center p-10  w-full my-10 py-10">
      <Card className="w-2/3 p-4">
        <h1 className="text-2xl font-semibold text-muted-foreground">
          Have Questions?
        </h1>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="text" placeholder="Email" />
        <Textarea placeholder="Inquiry..." />
        <Button className="hover:cursor-pointer">Submit</Button>
      </Card>
    </div>
  );
};
