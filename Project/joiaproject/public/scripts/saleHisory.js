//API
// saleHistory.js

document.addEventListener('DOMContentLoaded', async function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
    if (!loggedInUser) {
      alert('Please log in to view your sale history.');
      window.location.href = '/login.html';
      return;
    }
  
    try {
      const response = await fetch(`/api/users/${loggedInUser.id}/sales`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const sales = await response.json();
      populateSaleHistory(sales);
    } catch (error) {
      console.error('Error fetching sale history:', error);
      alert('Failed to load sale history. Please try again.');
    }
  
    function populateSaleHistory(sales) {
      const soldTable = document.getElementById('sold-purchase-history-table');
      const notSoldTable = document.getElementById('purchase-history-table');
      soldTable.innerHTML = ''; // Clear existing items
      notSoldTable.innerHTML = '';
  
      sales.forEach(sale => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><img src="/images/${sale.image}" alt="Item Image"></td>
          <td>${sale.name}</td>
          <td>${sale.quantity}</td>
          <td>${sale.price} $</td>
          <td>${calculateTotalSalePrice(sale)} $</td>
          <td>${sale.purchaseUsernames ? sale.purchaseUsernames.map(username => `${username.username} [ (${username.purchase.quantity}) ]`).join(' - ') : ''}</td>
        `;
  
        if (sale.status === 'sold') {
          soldTable.appendChild(row);
        } else {
          notSoldTable.appendChild(row);
        }
      });
    }
  
    function calculateTotalSalePrice(sale) {
      let totalPrice = 0;
      if (sale.purchaseUsernames) {
        sale.purchaseUsernames.forEach(purchase => {
          totalPrice += purchase.purchase.price;
        });
      }
      return totalPrice;
    }
  });

  
// const loggedInUser=localStorage.getItem('loggedInUser');
// const users=localStorage.getItem('users');
// let allusers=[];

// if (users) {
//     allusers=JSON.parse(users);
// } 
// //setting total number of soldouts
// const seller=allusers.seller.find(seller=>seller.username===loggedInUser);
// let soldouts=[];
// if (seller) {soldouts=seller.sellings.filter(s => s.quantity==="sold");}
// document.getElementById('sold').value = soldouts.length;

// //Total Price calculation

// function calculateTotalPurchasePrice(item) {
//     let totalPrice=0;
//     if (item.purchaseusernames) { // Check if item.purchaseusernames is defined
//         item.purchaseusernames.forEach(purchase => {
//             totalPrice += purchase.purchase.price;});}
//     return totalPrice;}


// const soldTable=document.getElementById('sold-purchase-history-table');
// soldouts.forEach(item=>{
//     const row=document.createElement('tr');
//     row.innerHTML=`
//         <td><img src="/public/images/${item.image}" alt="Item Image"></td>
//         <td>${item.name}</td>
//         <td>${item.quantity}</td>
//         <td>${item.price} $</td>
//         <td>${calculateTotalPurchasePrice(item)} $</td>
//         <td>${item.purchaseusernames ? item.purchaseusernames.map(username=> `${username.username} [ (${username.purchase.quantity}) ]`).join(' - ') : ''}</td>
//         `;
//     soldTable.appendChild(row); // Append the created row to the table body
// });


// let notSoldItems=[];
// if (seller) {
//     notSoldItems=seller.sellings.filter(s =>s.quantity!=="sold");}
// const fillSoldTable=document.getElementById('purchase-history-table');
// notSoldItems.forEach(item=>{
//     const row=document.createElement('tr');
//     row.innerHTML=`
//         <td><img src="/public/images/${item.image}" alt="Item Image"></td>
//         <td>${item.name}</td>
//         <td>${item.quantity}</td>
//         <td>${item.price} $</td>
//         <td>${calculateTotalPurchasePrice(item)} $</td>
//         <td>${item.purchaseusernames ? item.purchaseusernames.map(username=> `${username.username} [ (${username.purchase.quantity}) ]`).join(' - ') : ''}</td>
//     `; fillSoldTable.appendChild(row);
// });








