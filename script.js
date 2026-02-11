document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    
    const user = {
        name: name,
        email: email,
        password: password
    };
    
  
    let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    users.push(user);
    
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    
   
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 201) {
            console.log(`Data posted successfully: ${JSON.stringify(xhr.responseText)}`);
            
        }
    };
    xhr.send(JSON.stringify(user));
});

//localStorage.removeItem("registeredUsers");