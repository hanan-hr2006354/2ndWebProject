//API 
// login.js

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      localStorage.setItem('loggedInUser', JSON.stringify(result.user));
      window.location.href = '/joia.html'; // Redirect based on user role or preferences
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid username or password. Please try again.');
    }
  });
  

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     var username=document.getElementById('username').value;
//     var password=document.getElementById('password').value;
    
//     fetch('data/users.json')
//     .then(response=>response.json())
//     .then(data=>{
//         var customers=data.customers;
//         var seller=data.seller;
//         var admin=data.admin;

//         var loggedInCustomer=customers.find(customer=>customer.username===username && customer.password===password);
//         var loggedInSeller=seller.find(seller=>seller.username===username && seller.password===password);
//         var loggedInAdmin=admin.find(admin=>admin.username===username && admin.password===password);
        
//         if (loggedInCustomer || loggedInSeller || loggedInAdmin) {
//             localStorage.setItem('loggedInUser', username);

//             if (loggedInCustomer) {
//                 window.location.href = '/public/joia.html';
//             } else if (loggedInSeller) {
//                 window.location.href = '/public/seller.html';
//             } else if (loggedInAdmin) {
//                 window.location.href = '/public/joia.html';
//             }
//         } else {
//             alert('Invalid Username or Password.')} })
//     .catch(error => console.error('Error fetching user data:', error));
// });
// const items=localStorage.getItem('users');
// let arrayOfItems=[];
// if (items) {
//     arrayOfItems=JSON.parse(items); //prevents overwriting changes
// } else {
//     fetch('data/users.json')
//         .then(response =>response.json())
//         .then(data=>{
//             arrayOfItems = data;
//             localStorage.setItem('users', JSON.stringify(arrayOfItems));});}