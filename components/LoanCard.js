import Card from "@mui/material/Card";
import '../sass/components/Loan-cards.module.scss'
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { getLoans } from "../services/Auth";
import { useEffect } from "react";
import { useState } from "react";

export default function LoanCard({uid}) {
  const [data, setData] = useState([]);



  useEffect(() => {
    getLoans("Approved loans",uid).then((loans) => {
      setData(loans?.data);
    });
  }, [uid]);

  return (
    <div className="loan__cards">
      {data.length ? (
        <>
          {data?.map((item) => (
            <Card key={item?.data?.ref_no} sx={{ maxWidth: 355 }}>
              <CardContent>
                <Typography gutterBottom variant="p" component="div">
                  Loan Type : {item?.data?.loan_type}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  Loan Amount : R {item?.data?.loan_amount}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  Montly repayment : R {item?.data?.monthly_repayment_amount}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  Rate : 6%
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  Loan Term : {item?.data?.terms} Years
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  Message: {item?.data?.message}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </>
                  ) : (
                                  <p>No loans have have approved yet</p>
      )}
    </div>
  );
}
