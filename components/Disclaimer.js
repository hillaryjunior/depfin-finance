import React from "react";
import { Modal,  Button, Text } from "@nextui-org/react";


export default function Disclaimer() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
 
  };
  return (
    <div>
      <p
        style={{ cursor: "pointer" }}
        color="warning"
        onClick={handler}
      >
        Disclaimer
      </p>
      <Modal
        closeButton
        blur
        width="800px"
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Loan Repayment Calculator and General Disclaimer
          </Text>
        </Modal.Header>
        <Modal.Body>
          <p>
            The use of the online calculator is discretionary and calculations
            are estimates. Depfin Finance gives no warranty, express or implied,
            as to the accuracy of such estimates and does not accept any
            liability for loss or damage of any nature whatsoever, which may
            result from the use and/or reliance of estimates provided by the
            calculator. All loans are subject to a full credit assessment.
            Depfin Finace loan offerings are made available through Depfin Finace
            Finance (Pty) Ltd, a Licensed Financial Services and Registered
            Credit Provider .Payment options range from 6 to 72 months.
            Interest calculated monthly. Loans are calculated at a 6% interest rate. Representative
            Example: Loan of R3,0000 borrowed for 2 years will have a monthly repayment of R 1325.00.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
