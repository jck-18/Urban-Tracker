function signUp() {
    const email = prompt("Enter email:");
    const password = prompt("Enter password:");
  
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert("User signed up successfully");
      })
      .catch(error => {
        alert(error.message);
      });
  }
  
  function signIn() {
    const email = prompt("Enter email:");
    const password = prompt("Enter password:");
  
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert("User signed in successfully");
      })
      .catch(error => {
        alert(error.message);
      });
  }
  