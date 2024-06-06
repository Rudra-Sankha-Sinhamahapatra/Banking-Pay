"use client";
import { Center } from "@repo/ui/center";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/text-input";
import { useState } from "react";
import { Button } from "@repo/ui/button";
import { p2pTransfer } from "../lib/actions/p2pTransfer";

export const SendCard = () => {
  const [amount, setAmount] = useState("");
  const [number, setNumber] = useState("");
  return (
    <>
      <div className="h-fit  bg-white pb-0">
        <Card title="Send">
          <div className="min-w-72 pt-2">
            <TextInput
              placeholder={"Number"}
              label="Number"
              onChange={(value) => {
                setNumber(value);
              }}
            />
            <TextInput
              placeholder={"Amount"}
              label="Amount"
              onChange={(value) => {
                setAmount(value);
              }}
            />
            <div className="flex justify-center pt-6">
              <Button
                onClick={async () => {
                  amount === ""
                    ? alert("Select an amount")
                    : number === ""
                      ? alert("Select a number")
                      : await p2pTransfer(number, Number(amount) * 100).then(
                          () => alert(`${amount} INR Transferred`)
                        );
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
