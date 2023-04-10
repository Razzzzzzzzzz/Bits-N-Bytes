const adminTemplate = `
    <div id="app">
        <div id="sidebar" class="active">
            <div class="sidebar-wrapper active shadow" style="background-color: #d5ecff;">
    <div class="sidebar-header position-relative">
        <div class="d-flex justify-content-between align-items-center">

            <div class="logo">
                <a href="index.html"><img style="height: 43px;width: 137px;" src="img/logo.png" alt="Logo" srcset=""></a>
            </div>
  
            <div class="sidebar-toggler  x">
                <a id="close-sidebar" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
            </div>
        </div>
    </div>
    <div class="sidebar-menu">
        <ul class="menu">
            <li class="sidebar-title">Admin Menu</li>

            <li
                class="sidebar-item admin" id="list-dashboard-menu">
                <a href="./admin-dashboard" class='sidebar-link'>
                    <i class="bi bi-house"></i>
                    <span>Dashboard</span>
                </a>
            </li>   

            <li
                class="sidebar-item admin" id="list-posts-menu">
                <a href="./list-posts" class='sidebar-link'>
                    <i class="bi bi-postcard"></i>
                    <span>Posts</span>
                </a>
            </li>   

            <li
                class="sidebar-item admin" id="list-tech-menu">
                <a href="./list-tech" class='sidebar-link'>
                    <i class="bi bi-piggy-bank"></i>
                    <span>List of Tech/Seller</span>
                </a>
            </li>
            <li
                class="sidebar-item admin" id="list-buyer-menu">
                <a href="./list-buyer" class='sidebar-link'>
                    <i class="bi bi-people"></i>
                    <span>List of Buyer</span>
                </a>
            </li>
            <li
                class="sidebar-item admin" id="admin-account-menu">
                <a href="./admin-account" class='sidebar-link'>
                    <i class="bi bi-person"></i>
                    <span>Manage Account</span>
                </a>
            </li>
            <li
                class="sidebar-item admin" id="logout-menu">
                <a href="./logout" class='sidebar-link'>
                    <i class="bi bi-box-arrow-right"></i>
                    <span>Logout</span>
                </a>
            </li>
            
 
            
        </ul>
    </div>
</div>
        </div>
        <div id="main" style="">
            <header class="mb-3">
                <a id="opensidebar" class="burger-btn d-block d-xl-none">
                    <i class="bi bi-justify fs-3"></i>
                </a>
            </header>
            
        <div class="page-heading">
            <h3>Admin Area</h3>
        </div>
        <div class="page-content">
            <section class="row">
                <div class="col-12 col-lg-12">
                    <div class="row" id="admin-content">




                    </div>
                </div>

            </section>
        </div>

            <footer>
                <div class="footer clearfix mb-0 text-muted">
                    <div class="float-start">
                        <p>2022-2023 &copy; Team Unkown</p>
                    </div>
                    <div class="float-end">
                        <p>Crafted with <span class="text-danger"><i class="bi bi-heart"></i></span> by <a
                                href="#">Team Unkown</a></p>
                    </div>
                </div>
            </footer>
        </div>
    </div>



`;

page("/admin-account", ()=>{ 

document.getElementById('main-body').setAttribute("style", "overflow-y: auto;");

$.ajax({
    url: "./api/admin-account",
    type: "POST",
    dataType: "json",
    data: {
        data: 1
    },
    success: (data) => { 

     $("#main-element").empty();
     $("#main-element").html(adminTemplate).show();     

     const collection = document.getElementsByClassName("admin");

     for (let i = 0; i < collection.length; i++) {
        document.getElementById(collection[i].attributes[1].nodeValue).setAttribute("class", "sidebar-item admin");
     }

     document.getElementById('admin-account-menu').setAttribute("class", "sidebar-item admin active");

     $("#admin-content").empty().append(`

        <div class="card shadow">
            <div class="card-header">
            </div>
            <div class="card-body">

                <div class="card">
                    <div class="card-header">
                      
                        <h5 class="card-title">Account Information</h5>
                    </div>
                    <div class="card-body">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Account</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" tabindex="-1">Password</a>
                            </li>

                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                <br>
                                <div class="form-body">
                                    <div class="row">

                                        <div class="col-12">
                                            <div class="form-group has-icon-left">
                                                <label for="first-name-icon">Username</label>
                                                <div class="position-relative">
                                                    <input type="text" class="form-control" value="${data.users[0].username}" id="admin-account-username">
                                                    <div class="form-control-icon">
                                                        <i class="bi bi-person"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">

                                            <div class="form-group has-icon-left">
                                                <label for="email-id-icon">Email</label>
                                                <div class="position-relative">
                                                    <input type="text" class="form-control" value="${data.users[0].email}"  id="admin-account-email">
                                                    <div class="form-control-icon">
                                                        <i class="bi bi-envelope"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group has-icon-left">
                                                <label for="mobile-id-icon">Account Registered</label>
                                                <div class="position-relative">
                                                    <input type="text" class="form-control" value="${data.users[0].registered}" disabled>
                                                    <div class="form-control-icon">
                                                        <i class="bi bi-calendar"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group has-icon-left">
                                                <label for="password-id-icon">Account Last Login</label>
                                                <div class="position-relative">
                                                    <input type="text" class="form-control"  value="${data.users[0].lastlogin}"  disabled>
                                                    <div class="form-control-icon">
                                                        <i class="bi bi-box-arrow-in-left"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
     
                                        <div class="col-12 d-flex justify-content-end">
                                            <button type="button" class="btn btn-primary me-1 mb-1" id="update-admin-info" data-id="${data.users[0].id}">Update</button>
                  
                                        </div>

                                    </div>

                                </div>    

                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <br>
                                <div class="form-body">
                                    <div class="row">

                                        <div class="col-12">
                                            <div class="form-group has-icon-left">
                                                <label for="first-name-icon">Old Password</label>
                                                <div class="position-relative">
                                                    <input type="password" class="form-control"   id="admin-account-password-old">
                                                    <div class="form-control-icon">
                                                        <i class="bi bi-key"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-12">

                                            <div class="form-group has-icon-left">
                                                <label for="email-id-icon">New Password</label>
                                                <div class="position-relative">
                                                    <input type="password" class="form-control" id="admin-account-password-new">
                                                    <div class="form-control-icon">
                                                        <i class="bi bi-key"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

     
                                        <div class="col-12 d-flex justify-content-end">
                                            <button type="button" class="btn btn-primary me-1 mb-1" id="update-admin-password" data-id="${data.users[0].id}">Update Password</button>
                  
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

  
            </div>

       </div>     
    `);

    }

   });
   
});    

$(document).on("click", "#update-admin-password", (e)=>{

$.ajax({
    url: "./api/update-admin-password",
    type: "POST",
    dataType: "json",
    data: {
        id: e.target.dataset.id,
        oldPassword: $("#admin-account-password-old").val(),
        newPassword: $("#admin-account-password-new").val()
    },
    success: (data) => { 

    if (data.status == 1) {

    page("/admin-account");

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Updated successfully'
    })

    }else{

    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: data.response
    });


    }    



    }
  });


});

$(document).on("click", "#update-admin-info", (e)=>{

$.ajax({
    url: "./api/update-admin-account",
    type: "POST",
    dataType: "json",
    data: {
        id: e.target.dataset.id,
        email: $("#admin-account-email").val(),
        username: $("#admin-account-username").val()
    },
    success: (data) => { 
    page("/admin-account");

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Updated successfully'
    })

    }
  });


});

page("/list-buyer", ()=>{ 

document.getElementById('main-body').setAttribute("style", "overflow-y: auto;");

$.ajax({
    url: "./api/list-buyer",
    type: "POST",
    dataType: "json",
    data: {
        data: 1
    },
    success: (data) => { 

     $("#main-element").empty();
     $("#main-element").html(adminTemplate).show();     

     const collection = document.getElementsByClassName("admin");

     for (let i = 0; i < collection.length; i++) {
        document.getElementById(collection[i].attributes[1].nodeValue).setAttribute("class", "sidebar-item admin");
     }

     document.getElementById('list-buyer-menu').setAttribute("class", "sidebar-item admin active");

     $("#admin-content").empty().append(`
        <div class="card shadow">
            <div class="card-header">
                List of Technicians & Sellers
            </div>
            <div class="card-body">
                <table class="table" id="table3">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Verified Status</th>
                            <th>Tools</th>
                        </tr>
                    </thead>
                    <tbody id="tech-tbody">

                    </tbody>
                </table>    
            </div>
        </div>    
     `);

     $.each(data.users, (i, p)=>{

        if (p.block_status == 1) {
        $("#tech-tbody").append(`
            <tr style="background-color: #f7bcbc;">
                <td>${p.username}</td>
                <td>${p.email}</td>
                <td>${p.address}</th>
                <td>${p.contact}</td>
                <td>${p.verified_status == 1 ? '<span class="badge bg-light-success">Verified</span>' : '<span class="badge bg-light-danger">Not Verified</span>'}</td>
                <td>
                    <button id="unblock-buyer" data-id="${p.id}" class="btn btn-danger btn-sm">Unblock</button>
                </td>
            </tr>
        `);
        }else{
        $("#tech-tbody").append(`
            <tr>
                <td>${p.username}</td>
                <td>${p.email}</td>
                <td>${p.address}</th>
                <td>${p.contact}</td>
                <td>${p.verified_status == 1 ? '<span class="badge bg-light-success">Verified</span>' : '<span class="badge bg-light-danger">Not Verified</span>'}</td>
                <td>
                    <button id="block-buyer" data-id="${p.id}" class="btn btn-primary btn-sm">Block</button>
                </td>
            </tr>
        `);
        }

     });

    let jquery_datatable = $("#table3").DataTable({
        pageLength: 50,
        dom: 'Bfrtip',
        buttons: [
            "copy", "csv", "excel", "pdf", "print"
        ]

    }).buttons().container().appendTo('#table3 .col-md-6:eq(0)');



    }
 });   

});

$(document).on("click", "#block-buyer", (e)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, block it!'
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
            url: "./api/block-user",
            type: "POST",
            dataType: "json",
            data: {
                id: e.target.dataset.id
            },
            success: (data) => { 

            page("/list-buyer");    

            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Blocked successfully'
            })
         
          

            }
          }) 
      }
    })


});

$(document).on("click", "#unblock-buyer", (e)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, unblock it!'
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
            url: "./api/unblock-user",
            type: "POST",
            dataType: "json",
            data: {
                id: e.target.dataset.id
            },
            success: (data) => { 

            page("/list-buyer");    

            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Unblocked successfully'
            })
         
          

            }
          }) 
      }
    })


});


page("/list-tech", ()=>{ 

document.getElementById('main-body').setAttribute("style", "overflow-y: auto;");

$.ajax({
    url: "./api/list-tech",
    type: "POST",
    dataType: "json",
    data: {
        data: 1
    },
    success: (data) => { 

     $("#main-element").empty();
     $("#main-element").html(adminTemplate).show();     

     const collection = document.getElementsByClassName("admin");

     for (let i = 0; i < collection.length; i++) {
        document.getElementById(collection[i].attributes[1].nodeValue).setAttribute("class", "sidebar-item admin");
     }

     document.getElementById('list-tech-menu').setAttribute("class", "sidebar-item admin active");

     $("#admin-content").empty().append(`
        <div class="card shadow">
            <div class="card-header">
                List of Technicians & Sellers
            </div>
            <div class="card-body">
                <table class="table" id="table2">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>User Type</th>
                            <th>Verified Status</th>
                            <th>Tools</th>
                        </tr>
                    </thead>
                    <tbody id="tech-tbody">

                    </tbody>
                </table>    
            </div>
        </div>    
     `);

     $.each(data.users, (i, p)=>{

        if (p.block_status == 1) {
        $("#tech-tbody").append(`
            <tr style="background-color: #f7bcbc;">
                <td>${p.username}</td>
                <td>${p.email}</td>
                <td>${p.address}</th>
                <td>${p.contact}</td>
                <td>${p.user_status == 1 ? '<span class="badge bg-light-success">Seller</span>' : p.user_status == 2 ? '<span class="badge bg-light-info">Technician</span>' : '' }</td>
                <td>${p.verified_status == 1 ? '<span class="badge bg-light-success">Verified</span>' : '<span class="badge bg-light-danger">Not Verified</span>'}</td>
                <td>
                    <button id="unblock-user" data-id="${p.id}" class="btn btn-danger btn-sm">Unblock</button>
                </td>
            </tr>
        `);
        }else{
        $("#tech-tbody").append(`
            <tr>
                <td>${p.username}</td>
                <td>${p.email}</td>
                <td>${p.address}</th>
                <td>${p.contact}</td>
                <td>${p.user_status == 1 ? '<span class="badge bg-light-success">Seller</span>' : p.user_status == 2 ? '<span class="badge bg-light-info">Technician</span>' : '' }</td>
                <td>${p.verified_status == 1 ? '<span class="badge bg-light-success">Verified</span>' : '<span class="badge bg-light-danger">Not Verified</span>'}</td>
                <td>
                    <button id="block-user" data-id="${p.id}" class="btn btn-primary btn-sm">Block</button>
                </td>
            </tr>
        `);
        }

     });

    let jquery_datatable = $("#table2").DataTable({
        dom: 'Bfrtip',
        buttons: [
            "copy", "csv", "excel", "pdf", "print"
        ]

    }).buttons().container().appendTo('#table2 .col-md-6:eq(0)');



    }
 });   

});

$(document).on("click", "#block-user", (e)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, block it!'
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
            url: "./api/block-user",
            type: "POST",
            dataType: "json",
            data: {
                id: e.target.dataset.id
            },
            success: (data) => { 

            page("/list-tech");    

            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Blocked successfully'
            })
         
          

            }
          }) 
      }
    })


});

$(document).on("click", "#unblock-user", (e)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, unblock it!'
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
            url: "./api/unblock-user",
            type: "POST",
            dataType: "json",
            data: {
                id: e.target.dataset.id
            },
            success: (data) => { 

            page("/list-tech");    

            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Unblocked successfully'
            })
         
          

            }
          }) 
      }
    })


});



page("/admin-dashboard", ()=>{ 

document.getElementById('main-body').setAttribute("style", "overflow-y: auto;");

$.ajax({
    url: "./api/check-admin",
    type: "POST",
    dataType: "json",
    data: {
        data: 1
    },
    success: (e) => { 

     if (e.status == 1) {
     $("#main-element").empty();
     $("#main-element").html(adminTemplate).show();     

     const collection = document.getElementsByClassName("admin");

     for (let i = 0; i < collection.length; i++) {
        document.getElementById(collection[i].attributes[1].nodeValue).setAttribute("class", "sidebar-item admin");
     }

     document.getElementById('list-dashboard-menu').setAttribute("class", "sidebar-item admin active");


     $("#admin-content").empty().append(`

            <div class="row" style="margin-bottom: 65px;">
                <canvas id="myChart12" height="400" style="background-color: white;"></canvas>
            </div>

            <div class="row">

                <div class="col-md-6">
                    <canvas id="myChart" style="background-color: white;"></canvas>
                </div>
                <div class="col-md-6">
                    <canvas id="myChart2" style="background-color: white;"></canvas>
                </div>

            </div>
    `);

    const data12 = {
      labels: ['Total Buyer', 'Total Seller', 'Total Techs', 'Total Posted', 'Services'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [Number(e.buyer), Number(e.seller), Number(e.tech), Number(e.product), Number(e.services)],
          backgroundColor: ['#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB']
        }
      ]
    };

    Chart.register(ChartDataLabels);

    const ctx12 = document.getElementById('myChart12');
      new Chart(ctx12, {
          type: 'bar',
          data: data12,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Bar Chart'
              }
            }
          },
      });

    const data = {
      labels: ['Verified Users', 'Not Verified Users'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [e.verified, e.notverified],
          backgroundColor: ['#FF6384', '#FF9F40']
        }
      ]
    };

    Chart.register(ChartDataLabels);

    const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Users Verified Status'
            },
            datalabels: {
              formatter: (value, ctx) => {

                let sum = 0;

                for (let i = 0; i < ctx.dataset.data.length; i++) {
                    sum += ctx.dataset.data[i];
                }

                let percentage = (value * 100 / sum).toFixed(2) + "%";
                return percentage;


              },
              anchor: 'center',
              color: '#fff',
            }
          }
        },
      });

    const data1 = {
      labels: e.catarray,
      datasets: [
        {
          label: 'Dataset 1',
          data: e.catcount,
          backgroundColor: e.colors
        }
      ]
    };



    const ctx1 = document.getElementById('myChart2');
      new Chart(ctx1, {
        type: 'doughnut',
        data: data1,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Post per category'
            },
            datalabels: {
              formatter: (value, ctx) => {

                let sum = 0;

                for (let i = 0; i < ctx.dataset.data.length; i++) {
                    sum += ctx.dataset.data[i];
                }

                let percentage = (value * 100 / sum).toFixed(2) + "%";
                return percentage;


              },
              anchor: 'center',
              color: '#fff',
            }
          }
        },
      });

     }else{
     page("/user");   
     }   

    }
  });  

});


page("/list-posts", ()=>{

$.ajax({
    url: "./api/get-posts",
    type: "POST",
    dataType: "json",
    data: {
        data: 1
    },
    success: (data) => { 
  
     $("#main-element").empty();
     $("#main-element").html(adminTemplate).show();     

     const collection = document.getElementsByClassName("admin");

     for (let i = 0; i < collection.length; i++) {
        document.getElementById(collection[i].attributes[1].nodeValue).setAttribute("class", "sidebar-item admin");
     }

     document.getElementById('list-posts-menu').setAttribute("class", "sidebar-item admin active");

     $("#admin-content").empty().append(`

        <div class="card shadow">
            <div class="card-header">
                List of posts
            </div>
            <div class="card-body">
                <table class="table" id="table1">
                    <thead>
                        <tr>
                            <th>Posted By</th>
                            <th>Subject</th>
                            <th>Details</th>
                            <th>Posted On</th>
                            <th>Tools</th>
                        </tr>
                    </thead>
                    <tbody id="post-tbody">

                    </tbody>
                </table>    
            </div>
        </div>    
  
     `);

     $.each(data.products, (i, p)=>{

        $("#post-tbody").append(`
            <tr>
                <td>${p.username}</td>
                <td>${p.title}</td>
                <td>${p.details}</th>
                <td>${p.posted}</td>
                <td>
                    <button id="remove-post" data-id="${p.id}" class="btn btn-primary">Remove</button>
                </td>
            </tr>
        `);

     });

    let jquery_datatable = $("#table1").DataTable({
        dom: 'Bfrtip',
        buttons: [
            "copy", "csv", "excel", "pdf", "print"
        ]

    }).buttons().container().appendTo('#table1 .col-md-6:eq(0)');

    }

 });   

});


$(document).on("click", "#remove-post", (e)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
            url: "./api/remove-post",
            type: "POST",
            dataType: "json",
            data: {
                id: e.target.dataset.id
            },
            success: (data) => { 

            page("/list-posts");    

            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Removed successfully'
            })
         
          

            }
          }) 
      }
    })


});


page("/logout", ()=>{

$.ajax({
    url: "./api/logout",
    type: "POST",
    dataType: "json",
    data: {
        data: 1
    },
    success: (data) => { 

        page("/home");
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Logout successfully'
        })
    }
  });  

});