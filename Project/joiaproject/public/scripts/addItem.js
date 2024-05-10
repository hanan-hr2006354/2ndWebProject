//API 
// addItem.js

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add');
  
    addButton.addEventListener('click', async function() {
      const itemCategory = document.getElementById('itemcategory').value;
      const itemName = document.getElementById('itemname').value;
      const itemPrice = parseFloat(document.getElementById('itemprice').value);
      const itemQuantity = parseInt(document.getElementById('itemquantity').value);
  
      const newItem = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
        category: itemCategory,
      };
  
      try {
        const response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem),
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        const createdItem = await response.json();
        console.log('New item created:', createdItem);
        // Redirect to seller page or show a success message
        window.location.href = '/seller.html';
      } catch (error) {
        console.error('Error adding item:', error);
        alert('Failed to add the item. Please try again.');
      }
    });
  });
  



// const loggedInUser=localStorage.getItem('loggedInUser');
// const users=localStorage.getItem('users');
// let allusers=[];
// allusers=JSON.parse(users);

// const seller=allusers.seller.find(seller=>seller.username===loggedInUser);

// document.addEventListener('DOMContentLoaded', function() {
//     const addButton=document.getElementById('add');

//     addButton.addEventListener('click', function() {
//         const itemcategory=document.getElementById('itemcategory').value;
//         const itemImageInput=document.getElementById('itemimage'); 
//         const itemImage=itemImageInput.files[0];
//         if (itemImage instanceof Blob) {
//             const itemName=document.getElementById('itemname').value;
//             const itemPrice=document.getElementById('itemprice').value;
//             const itemQuantity=document.getElementById('itemquantity').value;
//                 const newItem={
//                     id:Date.now(),
//                     name:itemName,
//                     price:itemPrice,
//                     image:`${itemcategory.toLowerCase()}/${itemImage.name}`,
//                     quantity: itemQuantity}
//             console.log('New item:',newItem);

//             //updating existing item, set selected product locally
//             //return item if existing
//         const existingItem=getExistingItem(itemName);
//         if (existingItem) {
//             const updateQuantity=confirm(`Item '${itemName}'already exists. Do you want to see your sales on the product?`);
//             if (updateQuantity) {
//                 localStorage.setItem('selectedProduct', JSON.stringify(existingItem));
//                 window.location.href="/public/sellerDesc.html"
//                 const update="true";
//                 localStorage.setItem('sellerUpdating', JSON.stringify(update));}
//         document.getElementById('itemimage').value = '';
//         document.getElementById('itemname').value = '';
//         document.getElementById('itemprice').value = '';
//         document.getElementById('itemquantity').value = '';
//         }else{
//         let items=localStorage.getItem('items');
//         items=JSON.parse(items)||[];

//         // Find the category in items localStorage, and add new item or update it
//         const categoryIndex=items.findIndex(category=>category.category===itemcategory);
//         console.log(categoryIndex)
//         if (categoryIndex!==-1) {
//             items[categoryIndex].items.push(newItem);
//         } else {
//             items.push({
//                 category:itemcategory,
//                 items:[newItem]
//             });}
//         localStorage.setItem('items', JSON.stringify(items));
//         //add new item under seller
//         if (seller) {
//             seller.sellings.push(newItem);
//             localStorage.setItem('users', JSON.stringify(allusers));
//         }
//         window.location.href="/public/seller.html"
//     }}
//     });
// });
// function getExistingItem(itemName){
//     for (const item of seller.sellings) {
//         if (item.name.toLowerCase()===itemName.toLowerCase()) {
//             return item;
//         }
//     }
// }
