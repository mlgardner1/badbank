
function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [balance, setBalance]   = React.useState('100');
  const [withdraw, setWithdraw]   = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const ctx = React.useContext(UserContext);  

  const validate = amount => {
      if (!amount) {
        setStatus('Error: Enter withdrawal amount');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (balance - amount < 0) {
        setStatus('Error: Cannot withdraw more than is in the account')
        return false;
      }
      if (amount != Number) {
        setStatus('Error: Please enter a valid number');
        return false;
      }
      return true;
  }

  const withdrawMoney = amount => {
    if(!validate(amount)) return;
    setBalance(Number(balance) - Number(amount));
    setShow(false)
    setStatus('');
    ctx.users.push(Number(balance) - Number(amount));
  }


  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

  React.useEffect(() => {
    if (!withdraw) {
      setDisabled(true);
    }
    else {
      setDisabled(false);
    }
  }, [withdraw]);

  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
            <div>
           <h5>Balance: ${balance}</h5>
            </div>
              Withdrawal amount<br/>
              <input type="withdraw" className="form-control" id="withdraw" placeholder="$0.00" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={()=> withdrawMoney(withdraw)} disabled={disabled}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
              </>
            )}
    />
  )
}
