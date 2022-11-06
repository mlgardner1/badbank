function Home(){
  return (
    <Card
      bgcolor="success"
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to BadBank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
