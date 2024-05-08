//API
// profile.js

document.addEventListener('DOMContentLoaded', async function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
    if (!loggedInUser) {
      alert('Please log in to view your profile.');
      window.location.href = '/login.html';
      return;
    }
  
    try {
      const response = await fetch(`/api/users/${loggedInUser.id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const user = await response.json();
      displayUserProfile(user);
  
      // Fetch user purchases if they exist
      const purchasesResponse = await fetch(`/api/users/${loggedInUser.id}/purchases`);
      if (purchasesResponse.ok) {
        const purchases = await purchasesResponse.json();
        displayUserPurchases(purchases);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      alert('Failed to load user profile. Please try again.');
    }
  
    function displayUserProfile(user) {
      // Populate profile details using user data
      const profileHtmlString = `
        <img class="pimg" src="/images/${user.name}.jpg" alt="">
        <div class="AllInfo">
          <label class="name">Name: </label>
          <input id="name" type="text" value="${user.name}" readonly>
          <label class="Username">Username: </label>
          <input id="Username" type="text" value="${user.username}" readonly>
          <label class="Shipping">Shipping Address: </label>
          <input id="Shipping" type="text" value="${user.shippingAddress}" readonly>
          <label class="balance">Balance: </label>
          <input id="balance" type="text" value="${user.balance}" readonly>
        </div>
      `;
      document.getElementById('profileDetails').innerHTML = profileHtmlString;
    }
  
    function displayUserPurchases(purchases) {
      // Populate purchased items using purchase data
      const purchasesHtml = purchases.map(item => `
        <div class="item" id="${item.id}">
          <div class="card">
            <img src="/images/${item.image}" alt="${item.category}" width="250" height="300">
            <p>${item.name}</p>
            <div class="price">Total Price: $${item.price}</div>
            <div class="quantity">Quantity: ${item.quantity}</div>
          </div>
        </div>
      `).join('');
      document.getElementById('category').innerHTML = purchasesHtml;
    }
  });
  
// const loggedin=localStorage.getItem('loggedInUser');
// const items=localStorage.getItem('users');
// let arrayOfItems=[];
// if (items) {
//     arrayOfItems=JSON.parse(items); //prevents overwriting changes
// } else {
//     fetch('data/users.json')
//         .then(response => response.json())
//         .then(data => {
//             arrayOfItems = data;
//             localStorage.setItem('users', JSON.stringify(arrayOfItems));
//             renderProfile();});}

// function addDataToHTML(item) {
//     return `
//         <div class="item" id="${item.id}">
//             <div class="card">
//                 <img src="/public/images/${item.image}" alt="${item.category}" width="250" height="300">
//                 <p>${item.name}</p>
//                 <div class="price">Total Price: $${item.price}</div>
//                 <div class="quantity">Quantity: ${item.quantity}</div>
//             </div>
//         </div>`;}

// //display current user's informations
// function profileHtml(user) {
//     return `
//         <img class="pimg" src="/public/images/${user.name}.jpg" alt="">
//         <div class="AllInfo">
//             <label class="name">Name: </label>
//             <input id="name" type="text" value="${user.name}" readonly>
//             <label class="Username">Username: </label>
//             <input id="Username" type="text" value="${user.username}"readonly>
//             <label class="Shipping">Shipping Address: </label>
//             <input id="Shipping" type="text" value="${user.shipping_address}"readonly>
//             <label class="balance">balance: </label>
//             <input id="balance" type="text" value="${user.balance}" readonly>
//     </div>`;
// }


// //Display's all items user purchased
// if (loggedin) {
//     const user=arrayOfItems.customers.find(customer => customer.username===loggedin);
//     if (user) {
//         const profileHtmlString = profileHtml(user);
//         document.getElementById('profileDetails').innerHTML=profileHtmlString;
//         const purchases=user.purchase;
//         if (purchases && purchases.length>0) { // Corrected typo here
//             const choosenItemsHtml = purchases.map(item => addDataToHTML(item)).join('');
//             document.getElementById('category').innerHTML = choosenItemsHtml;} else {
//             console.log("No purchases found for this user.");}
//     }else{
//         console.log("User not found."); }
// }else{
//     console.log("No user logged in.");}
