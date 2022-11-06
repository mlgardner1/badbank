function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [balance, setBalance]   = React.useState('');
  const ctx = React.useContext(UserContext);  

  let currentBalance =  `Balance: $ ${name.balance}`;

  function validate(field){
      if (!field) {
        setStatus('Error: incomplete deposit amount');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name);
    if (!validate(name,     'name'))     return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
            <div>
           <h5>Balance: ${ctx.users.balance}</h5>
            </div>
              Deposit Amount<br/>
              <input type="input" className="form-control" id="withdraw" placeholder="Withdrawl amount" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawl</button>
              </>
            )}
    />
  )
}
// function CreateAccount(){
  //const ctx = React.useContext(UserContext);
  //
  //function handle(data){
    //ctx.users.push({name:data.name,email:data.email,password:data.password,balance:100});
    //return true;
  //}
  //return(
    //<BankForm
      //bgcolor="primary"
      //label="Create Account"
      //handle={handle}
      //hideAmount={true}
      //successButton="Add another account"
      // />
  //)
//}