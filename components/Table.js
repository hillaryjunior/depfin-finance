import React, { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { getApplications } from "../services/Auth";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices";

export default function LoansTable({ type }) {
  const user = useSelector(selectUser);
  const [loanData, setLoanData] = useState([]);
  const [businessRows, setBusinessRows] = useState([]);
  const [personalRows, setPersonalRows] = useState([]);
  const [mortageRows, setMortageRows] = useState([]);
  const [generalRows, setGeneralRows] = useState([]);
  const [consolidationRows, setConsolidationRows] = useState([]);

  useEffect(() => {
    getApplications(user?.uid)
      .then((res) => {
        setLoanData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  useEffect(() => {
    if (loanData) {
      setBusinessRows(loanData?.business);
      setPersonalRows(loanData?.personal);
      setMortageRows(loanData?.mortage);
      setGeneralRows(loanData?.general);
      setConsolidationRows(loanData?.consolidation);
    }
    return () => {
      setBusinessRows([]);
      setPersonalRows([]);
      setMortageRows([]);
      setGeneralRows([]);
      setConsolidationRows([]);
    };
  }, [loanData]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "loan_type", headerName: "Loan Type", width: 200 },
    { field: "date_created", headerName: "Date Created", width: 200 },
    {
      field: "rate",
      headerName: "rate",
      type: "string",
      width: 70,
    },
    {
      field: "loan_amount",
      headerName: "Loan Amount",

      width: 150,
    },
    {
      field: "term",
      headerName: "Term",
      type: "string",
      width: 70,
    },
    {
      field: "repayment",
      headerName: "Monthly Repayments",
      type: "string",
      width: 150,
    },
    {
      field: "method",
      headerName: "Repayment Method",
      type: "string",
      width: 150,
    },
    {
      field: "status",
      headerName: "Loan Status",
      type: "text",
      width: 90,
    },
  ];
  const bRow = [
    {
      id: "id",
      loan_type:  businessRows?.data?.loan_type,
      date_created: businessRows?.data?.date_created,
      rate: businessRows?.data?.rate,
      loan_amount: businessRows?.data?.loan_amount,
      term: businessRows?.data?.terms,
      repayment: businessRows?.data?.monthly_repayment_amount,
      method: businessRows?.data?.repayment_method,
      status: businessRows?.data?.status,
    },
  ];
  const pRow = [
    {
      id: "id",
      loan_type: personalRows?.data?.loan_type,
      date_created: personalRows?.data?.date_created,
      rate: personalRows?.data?.rate,
      loan_amount: personalRows?.data?.loan_amount,
      term: personalRows?.data?.terms,
      repayment: personalRows?.data?.monthly_repayment_amount,
      method: personalRows?.data?.repayment_method,
      status: personalRows?.data?.status,
    },
  ];
  const mRow = [
    {
      id: "id",
      loan_type: mortageRows?.data?.loan_type,
      date_created: mortageRows?.data?.date_created,
      rate: mortageRows?.data?.rate,
      loan_amount: mortageRows?.data?.loan_amount,
      term: mortageRows?.data?.terms,
      repayment: mortageRows?.data?.monthly_repayment_amount,
      method: mortageRows?.data?.repayment_method,
      status: mortageRows?.data?.status,
    },
  ];
  const gRow = [
    {
      id: "id",
      loan_type: generalRows?.data?.loan_type,
      date_created: generalRows?.data?.date_created,
      rate: generalRows?.data?.rate + '%',
      loan_amount: generalRows?.data?.loan_amount,
      term: generalRows?.data?.terms,
      repayment: generalRows?.data?.monthly_repayment_amount,
      method: generalRows?.data?.repayment_method,
      status: generalRows?.data?.status,
    },
  ];
  const cRow = [
    {
      id: "id",
      loan_type: consolidationRows?.data?.loan_type,
      date_created: consolidationRows?.data?.date_created,
      rate: consolidationRows?.data?.rate + "%",
      loan_amount: consolidationRows?.data?.loan_amount,
      term: consolidationRows?.data?.terms,
      repayment: consolidationRows?.data?.monthly_repayment_amount,
      method: consolidationRows?.data?.repayment_method,
      status: consolidationRows?.data?.status,
    },
  ];

  return (
    <div className="table_con">
      <div>
        {businessRows && (
          <div className="table">
            <h6>Business Loans</h6>
            <div style={{ height: 200, width: "100%" }}>
              <DataGrid
                rows={bRow}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        )}
        {personalRows && (
          <div className="table">
            <h6>Personal Loans</h6>
            <div style={{ height: 200, width: "100%" }}>
              <DataGrid
                rows={pRow}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        )}
        {mortageRows ? (
          <div className="table">
            <h6>Mortage Loans</h6>
            <div style={{ height: 200, width: "100%" }}>
              <DataGrid
                rows={mRow}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        ) : (
          <div className="table">
            <h6>Mortage Loans</h6>
            <div style={{ height: 200, width: "100%" }}>
              <p>No mortgage loans applications</p>
            </div>
          </div>
        )}
        {generalRows && (
          <div className="table">
            <h6>General Loans</h6>
            <div style={{ height: 200, width: "100%" }}>
              <DataGrid
                rows={gRow}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        )}
        {consolidationRows && (
          <div className="table">
            <h6>Consolidation Loans</h6>
            <div style={{ height: 200, width: "100%" }}>
              <DataGrid
                rows={cRow}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
