import { useEffect, useState } from 'react'
import '../sass/components/Table.module.scss'
import dynamic from 'next/dynamic'
import { getLoans } from '../services/Auth'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/slices'

const LazyDataGrid = dynamic(() =>
  import('@mui/x-data-grid').then((mod) => mod.DataGrid),
  { ssr: false, loading: () => <p>Loading table...</p> }
)

export default function LoansTable() {
  const user = useSelector(selectUser)
  const [BusinesLoanData, setBusinessLoanData] = useState([])
  const [PersonalLoanData, setPersonalLoanData] = useState([])
  const [GeneralLoanData, setGeneralLoanData] = useState([])
  const [MortgageLoanData, setMortgageLoanData] = useState([])
  const [ConsolidationLoanData, setConsolidationLoanData] = useState([])

  const [businessRows, setBusinessRows] = useState([])
  const [personalRows, setPersonalRows] = useState([])
  const [mortageRows, setMortageRows] = useState([])
  const [generalRows, setGeneralRows] = useState([])
  const [consolidationRows, setConsolidationRows] = useState([])

  useEffect(() => {
    getLoans('Business loan', user?.uid)
      .then((res) => {
        setBusinessLoanData(res?.data)
      })
      .catch((err) => {
        console.log(err)
      })

    getLoans('Personal loan', user?.uid)
      .then((res) => {
        setPersonalLoanData(res?.data)
      })
      .catch((err) => {
        console.log(err)
      })

    getLoans('Mortage loan', user?.uid)
      .then((res) => {
        setMortgageLoanData(res?.data)
      })
      .catch((err) => {
        console.log(err)
      })

    getLoans('General loan', user?.uid)
      .then((res) => {
        setGeneralLoanData(res?.data)
      })
      .catch((err) => {
        console.log(err)
      })

    getLoans('Consolidation loan', user?.uid)
      .then((res) => {
        setConsolidationLoanData(res?.data)
      })
      .catch((err) => {
        console.log(err)
      })

    return () => {
      // cleanup
      setBusinessLoanData([])
      setPersonalLoanData([])
    }
  }, [user])

  useEffect(() => {
    if (BusinesLoanData) {
      setBusinessRows(
        BusinesLoanData.map((item) => {
          return {
            id: item.id,
            ...item.data,
          }
        })
      )
    }
    if (PersonalLoanData) {
      setPersonalRows(
        PersonalLoanData.map((item) => {
          return {
            id: item.id,
            ...item.data,
          }
        })
      )
    }
    if (GeneralLoanData) {
      setGeneralRows(
        GeneralLoanData.map((item) => {
          return {
            id: item.id,
            ...item.data,
          }
        })
      )
    }
    if (MortgageLoanData) {
      setMortageRows(
        MortgageLoanData.map((item) => {
          return {
            id: item.id,
            ...item.data,
          }
        })
      )
    }
    if (ConsolidationLoanData) {
      setConsolidationRows(
        ConsolidationLoanData.map((item) => {
          return {
            id: item.id,
            ...item.data,
          }
        })
      )
    }

    return () => {
      setBusinessRows([])
      setPersonalRows([])
      setGeneralRows([])
      setMortageRows([])
      setConsolidationRows([])
    }
  }, [
    BusinesLoanData,
    ConsolidationLoanData,
    GeneralLoanData,
    MortgageLoanData,
    PersonalLoanData,
  ])

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'loan_type', headerName: 'Loan Type', width: 200 },
    { field: 'date_created', headerName: 'Date Created', width: 200 },
    {
      field: 'rate',
      headerName: 'rate',
      type: 'string',
      width: 70,
    },
    {
      field: 'loan_amount',
      headerName: 'Loan Amount',

      width: 150,
    },
    {
      field: 'term',
      headerName: 'Term',
      type: 'string',
      width: 70,
    },
    {
      field: 'repayment',
      headerName: 'Monthly Repayments',
      type: 'string',
      width: 150,
    },
    {
      field: 'method',
      headerName: 'Repayment Method',
      type: 'string',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Loan Status',
      type: 'string',
      width: 90,
    },
  ]
  const bRow = businessRows.map((row) => {
    return {
      id: row?.id,
      loan_type: row?.loan_type,
      date_created: row?.date_created,
      rate: `${row?.rate}%`,
      loan_amount: `R ${row?.loan_amount}`,
      term: `${row?.terms} Years`,
      repayment: `R ${row?.monthly_repayment_amount}`,
      method: row?.repayment_method,
      status: row?.status,
    }
  })
  const pRow = personalRows.map((row) => {
    return {
      id: row?.id,
      loan_type: row?.loan_type,
      date_created: row?.date_created,
      rate: `${row?.rate}%`,
      loan_amount: `R ${row?.loan_amount}`,
      term: `${row?.terms} Years`,
      repayment: ` R ${row?.monthly_repayment_amount}`,
      method: row?.repayment_method,
      status: row?.status,
    }
  })
  const gRow = generalRows.map((row) => {
    return {
      id: row?.id,
      loan_type: row?.loan_type,
      date_created: row?.date_created,
      rate: `${row?.rate}%`,
      loan_amount: `R ${row?.loan_amount}`,
      term: `${row?.terms} Years`,
      repayment: `R ${row?.monthly_repayment_amount}`,
      method: row?.repayment_method,
      status: row?.status,
    }
  })
  const mRow = mortageRows.map((row) => {
    return {
      id: row?.id,
      loan_type: row?.loan_type,
      date_created: row?.date_created,
      rate: `${row?.rate}%`,
      loan_amount: `R ${row?.loan_amount}`,
      term: `${row?.terms} Years`,
      repayment: `R ${row?.monthly_repayment_amount}`,
      method: row?.repayment_method,
      status: row?.status,
    }
  })

  const cRow = consolidationRows.map((row) => {
    return {
      id: row?.id,
      loan_type: row?.loan_type,
      date_created: row?.date_created,
      rate: `${row?.rate}%`,
      loan_amount: `R ${row?.loan_amount}`,
      term: `${row?.terms} Years`,
      repayment: `R ${row?.monthly_repayment_amount}`,
      method: row?.repayment_method,
      status: row?.status,
    }
  })

  return (
    <div className='table_con'>
      <div>
        {businessRows && (
          <div className='table'>
            <h6>Business Loans</h6>
            <div style={{ height: 200, width: '100%' }}>
              <LazyDataGrid
                rows={bRow}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        )}
        {personalRows && (
          <div className='table'>
            <h6>Personal Loans</h6>
            <div style={{ height: 200, width: '100%' }}>
              <LazyDataGrid
                rows={pRow}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        )}

        {mortageRows ? (
          <div className='table'>
            <h6>Mortage Loans</h6>
            <div style={{ height: 200, width: '100%' }}>
              <LazyDataGrid
                rows={mRow}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        ) : (
          <div className='table'>
            <h6>Mortage Loans</h6>
            <div style={{ height: 200, width: '100%' }}>
              <p>No mortgage loans applications</p>
            </div>
          </div>
        )}
        {generalRows && (
          <div className='table'>
            <h6>General Loans</h6>
            <div style={{ height: 200, width: '100%' }}>
              <LazyDataGrid
                rows={gRow}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
        )}
        {consolidationRows && (
          <div className='table'>
            <h6>Consolidation Loans</h6>
            <div style={{ height: 200, width: '100%' }}>
              <LazyDataGrid
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
  )
}
