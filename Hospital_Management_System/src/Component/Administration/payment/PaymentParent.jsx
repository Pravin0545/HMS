import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Payment } from "./Payment";
import { Paymentdetails } from "./Paymentdetails";

export const PaymentParent = () => {
  const [val, setVal] = useState("payment");

  return (
    <div>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="payment" label="Payment" />
        <Tab value="paymentdetails" label="Payment Details" />
      </Tabs>

      {val === "payment" && <Payment />}
      {val === "paymentdetails" && <Paymentdetails />}
    </div>
  );
};
