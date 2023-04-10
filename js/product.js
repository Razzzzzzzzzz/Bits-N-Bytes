page("/:productid/product", (e)=>{ 


console.log("asdadsa");
// $.ajax({
//     url: "./api/view-product",
//     type: "POST",
//     dataType: "json",
//     data: {
//         id: e.params.productid
//     },
//     success: (data) => { 

//     $("#main-element").empty();
//     $("#main-element").html(guestTemplate).show();  

//     const collection = document.getElementsByClassName("menu-link");

//     for (let i = 0; i < collection.length; i++) {
//         document.getElementById(collection[i].attributes[2].nodeValue).setAttribute("class", "menu-link");
//     }

//     document.getElementById('home').setAttribute("class", "menu-link myactive");

//     if (data.login == 1) {

//         var role = '';

//         if (data.user[0].user_status == 1) {
//             role = 'Seller';
//         }else if (data.user[0].user_status == 2) {
//             role = 'Technician';
//         }else if (data.user[0].user_status == 0) {
//             role = 'Guest';    
//         }

//         $("#user-auth").empty().append(`
//             <div class="dropdown">
//                 <a href="#" id="topbarUserDropdown" class="user-dropdown d-flex align-items-center dropend dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
//                     <div class="avatar avatar-md2">
//                         <img src="${data.user[0].url}" alt="Avatar">
//                     </div>
//                     <div class="text">
//                         <h6 class="user-dropdown-name">${data.user[0].username}</h6>
//                         <p class="user-dropdown-status text-sm text-muted">${role}</p>
//                     </div>
//                 </a>
//                 <ul class="dropdown-menu dropdown-menu-end shadow-lg" aria-labelledby="topbarUserDropdown">
//                     <li>
//                         <a style="cursor: pointer;" class="dropdown-item" id="my-account" data-id="${data.user[0].id}" data-name="${data.user[0].username}" data-email="${data.user[0].email}">
//                         <i class="bi bi-person"></i> My Account</a>
//                     </li>
                  
//                     <li><hr class="dropdown-divider"></li>
//                     <li>
//                         <a style="cursor: pointer;" class="dropdown-item" id="my-settings" data-id="${data.user[0].id}" data-name="${data.user[0].username}" data-email="${data.user[0].email}">
//                         <i class="bi bi-gear"></i> Settings</a>
//                     </li>
                    
//                     <li><hr class="dropdown-divider"></li>
                    
//                     <li><a style="cursor: pointer;" class="dropdown-item" id="logout"><i class="bi bi-box-arrow-left"></i> Logout</a></li>
//                 </ul>
//             </div>
//             <!-- Burger button responsive -->
//             <a id="side-trigger" data-hide="0" class="burger-btn d-block d-xl-none" >
//                 <i class="bi bi-justify fs-3" style="pointer-events: none;"></i>
//             </a>

//         `);
        
//     if (data.user[0].user_status == 1) {

//         $("#seller-card").empty().append(`
//             <div class="card shadow">
//                 <div class="card-body px-4 py-4-5" style="cursor: pointer;" id="sell-products" data-id="${data.user[0].id}">
//                     <div class="avatar bg-warning me-3">
//                         <img src="${data.user[0].url}" alt="" srcset="">
//                     </div>
//                     Post some items here..
//                 </div>
//             </div>
//         `);

//     }


//     }

//         $("#products-lists").empty().append(`
//             sasdasdsa

//         `);


//     }

//  });   

})