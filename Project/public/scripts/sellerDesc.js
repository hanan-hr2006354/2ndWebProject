//API
// sellerDesc.js

document.addEventListener('DOMContentLoaded', async function () {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
  
    if (!selectedProduct) {
      alert('No product selected.');
      window.location.href = '/seller.html';
      return;
    }
  
    try {
      const response = await fetch(`/api/products/${selectedProduct.id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const product = await response.json();
      displayProductDetails(product);
    } catch (error) {
      console.error('Error fetching product details:', error);
      alert('Failed to load product details. Please try again.');
    }
  
    function displayProductDetails(product) {
      document.getElementById('itemImage').src = `/images/${product.image}`;
      document.getElementById('itemname').value = product.name;
      document.getElementById('itemprice').value = product.price;
      document.getElementById('itemquantity').value = product.quantity;
  
      const updating = JSON.parse(localStorage.getItem('sellerUpdating'));
      if (updating) {
        setTimeout(() => {
          const additionalQuantity = prompt(`How much more quantity do you want to add for '${product.name}'?`);
          if (additionalQuantity !== null) {
            updateProductQuantity(product.id, additionalQuantity);
          }
        }, 5000);
      }
    }
  
    async function updateProductQuantity(productId, additionalQuantity) {
      try {
        const response = await fetch(`/api/products/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: additionalQuantity }),
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        alert('Product quantity updated successfully.');
        window.location.href = '/seller.html';
      } catch (error) {
        console.error('Error updating product quantity:', error);
        alert('Failed to update product quantity. Please try again.');
      }
    }
  });
  
// const selectedProduct=JSON.parse(localStorage.getItem('selectedProduct'));
// const loggedInUser=localStorage.getItem('loggedInUser');
// const users=localStorage.getItem('users');
// let allusers=[];
// allusers=JSON.parse(users);

// const items=localStorage.getItem('items');
// let arrayOfItems=[];
// arrayOfItems=JSON.parse(items);

// if (selectedProduct) {
//     document.getElementById('itemImage').src="/public/images/"+selectedProduct.image;
//     document.getElementById('itemname').value=selectedProduct.name;
//     document.getElementById('itemprice').value=selectedProduct.price;
//     document.getElementById('itemquantity').value=selectedProduct.quantity;
//     console.log(selectedProduct)
//     // Let seller update quantity if exists the image
//     const updating=JSON.parse(localStorage.getItem('sellerUpdating'));
//     if (updating) {
//         setTimeout(()=>{
//             const additionalQuantity=prompt(`How much more quantity do you want to add for '${selectedProduct.name}'?`);
//             if (additionalQuantity!== null) {
//                 //for sold
//                 if (selectedProduct.quantity==="sold") {
//                     document.getElementById('itemquantity').value=parseInt(additionalQuantity);
//                 }else{


//             // not sold
//                     document.getElementById('itemquantity').value=parseInt(selectedProduct.quantity)+parseInt(additionalQuantity);}
//                 localStorage.removeItem('sellerUpdating');

//                 const sellerIndex=allusers.seller.findIndex(seller=>seller.username===loggedInUser);
//                 if (sellerIndex!==-1) {
//                     const productIndex=allusers.seller[sellerIndex].sellings.findIndex(product=>product.id === selectedProduct.id);
//                     if (productIndex!==-1) {
//                         if (selectedProduct.quantity==="sold") {
//                             allusers.seller[sellerIndex].sellings[productIndex].quantity=parseInt(additionalQuantity);
//                         } else {
//                             allusers.seller[sellerIndex].sellings[productIndex].quantity=parseInt(selectedProduct.quantity) + parseInt(additionalQuantity);}
//                         localStorage.setItem('users',JSON.stringify(allusers));
//                         arrayOfItems.forEach(category => {
//                             const items=category.items;
//                             const productIndex=items.findIndex(item=>item.id===selectedProduct.id);
//                             if (productIndex!==-1) {
//                                 if (selectedProduct.quantity==="sold") {
//                                     items[productIndex].quantity=parseInt(additionalQuantity);
//                                 } else {
//                                     const newQuantity=parseInt(items[productIndex].quantity)+parseInt(additionalQuantity);
//                                     items[productIndex].quantity=newQuantity;}
//                             }
//                         });
//                         localStorage.setItem('items', JSON.stringify(arrayOfItems));
//                         setTimeout(() => {
//                             window.location.href="/public/seller.html";
//                         }, 3000); } }
//                 localStorage.removeItem('sellerUpdating');
//             }
//         }, 5000);
//     }
// } else {
//     document.getElementById('middle-section').innerHTML='<h1>No item selected</h1>';
// }
