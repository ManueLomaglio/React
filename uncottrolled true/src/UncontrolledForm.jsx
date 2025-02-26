export default function UncontrolledLogin() {
    function handleFormSubmit(event) {
      event.preventDefault();
 
      const username = event.target.elements.namedItem("username").value;
      const password = event.target.elements.namedItem("password").value;
      const session = event.target.elements.namedItem("session").checked;
  
      const data = {
        username,
        password,
        session,
      };
  
      console.log(data);
    
    }
    function print(event){
      event.preventDefault();


      const form = event.currentTarget.closest("form"); // Ensure we get the form
      if (!form) return;

    const formData = new FormData(form);
  
      const dataFromForm = {
        username: formData.get('username'),
        password: formData.get('password'),
        session: formData.get('session')
      };
      
     console.log(dataFromForm)};
   

    
    
        
  
    return (
      <form onSubmit={handleFormSubmit}>
        <h1>My Uncontrolled Form</h1>
  
        <label>
          Username:
          <input name="username" />
        </label>
        <br />
  
        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <br />
  
        <label>
          Remember Me:
          <input name="session" type="checkbox" />
        </label>
        <br />
  
        <button  type="submit" >Login</button>
        <button  type="button" onClick={(e)=>print(e)} >Click for Form method </button>
        <button type="reset">Reset</button>
      </form>
    );
  }