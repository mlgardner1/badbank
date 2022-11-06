function Balance(){
  const [name, setName]     = React.useState('');
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor='info'
      header='Balance'
      status={status}
      body={
        show ? (
          <>
            <BalanceForm
              user={props.user}
              setShow={setShow}
              setStatus={setStatus}
              setBalance={setBalance}
            />
          </>
        ) : (
          <>
            {' '}
            <BalanceMsg setShow={setShow} setStatus={setStatus} />
            <h5>Your Current Balance is ${balance}</h5>
          </>
        )
      }
    />
  )
}
