

page("/technicians", (e)=>{


clearInterval(interval);

$.ajax({
    url: "./api/technicians",
    type: "POST",
    dataType: "json",
    data: {
        data: 1
    },
    success: (data) => { 

    $("#main-element").empty();
    $("#main-element").html(guestTemplate).show();  

    const collection = document.getElementsByClassName("menu-link");

    for (let i = 0; i < collection.length; i++) {
        document.getElementById(collection[i].attributes[2].nodeValue).setAttribute("class", "menu-link");
    }

    document.getElementById('technicians').setAttribute("class", "menu-link myactive");

    $("#home-only").hide();

    if (data.login == 1) {

        var role = '';

        if (data.user[0].user_status == 1) {
            role = 'Seller';
        }else if (data.user[0].user_status == 2) {
            role = 'Technician';
        }else if (data.user[0].user_status == 0) {
            role = 'Buyer';    
        }

        $("#user-auth").empty().append(`
            <div class="dropdown">
                <a href="#" id="topbarUserDropdown" class="user-dropdown d-flex align-items-center dropend dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="avatar avatar-md2">
                        <img src="${data.user[0].url}" alt="Avatar">
                    </div>
                    <div class="text">
                        <h6 class="user-dropdown-name">${data.user[0].username}</h6>
                        <p class="user-dropdown-status text-sm text-muted">${role}</p>
                    </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end shadow-lg" aria-labelledby="topbarUserDropdown">
                    <li>
                        <a href="./account" class="dropdown-item" id="my-account" data-id="${data.user[0].id}" data-name="${data.user[0].username}" data-email="${data.user[0].email}">
                        <i class="bi bi-person"></i> My Account</a>
                    </li>
                  
                    <li><hr class="dropdown-divider"></li>
                    <li>
                        <a href="./messages-${data.user[0].id}-${data.user[0].user_status}" class="dropdown-item" id="my-messages" data-id="${data.user[0].id}" data-name="${data.user[0].username}" data-email="${data.user[0].email}">
                        <i class="bi bi-chat-dots"></i> Messages</a>
                    </li>
                    
                    <li><hr class="dropdown-divider"></li>
                    
                    <li><a style="cursor: pointer;" class="dropdown-item" id="logout"><i class="bi bi-box-arrow-left"></i> Logout</a></li>
                </ul>
            </div>
            <!-- Burger button responsive -->
            <a id="side-trigger" data-hide="0" class="burger-btn d-block d-xl-none" >
                <i class="bi bi-justify fs-3" style="pointer-events: none;"></i>
            </a>

        `);
        
    if (data.user[0].user_status == 1) {

        $("#seller-card").empty().append(`
            <div class="card shadow">
                <div class="card-body px-4 py-4-5" style="cursor: pointer;" id="sell-products" data-id="${data.user[0].id}">
                    <div class="avatar bg-warning me-3">
                        <img src="${data.user[0].url}" alt="" srcset="">
                    </div>
                    Post some items here..
                </div>
            </div>
        `);

    }


    }

    $("#products-lists").empty();

    $('#pagination-container').pagination({
        dataSource: data.tech,
        pageSize: 10,
        callback: function(tech, pagination) { 
        	$("#products-lists").empty();
        	// console.log(data.tech);
            for (let i = 0; i < tech.length; i++) { 

                // console.log(tech[i].rate[0].avg);

                $("#products-lists").append(`
                    <div class="col-12 col-lg-4 col-md-6">
                        <div class="card product shadow" >

                            <div class="card-content">
                            	<img style="height: 221px;" class="img-fluid w-100" src="${tech[i].url}" alt="Card image cap">
                                <div class="card-body" id="div-${i}">
                                    <h5 style="white-space: nowrap; width: 250px; overflow: hidden; text-overflow: ellipsis;">${tech[i].username}
                                    ${tech[i].verified_status == 1 ? '<i style="color: green;" class="bi bi-patch-check-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified"></i>' : '<i class="bi bi-patch-exclamation-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="Not Verified"></i>' }
                                    </h5>
                                    <p></p>
                                	${tech[i].rate[0].avg}
                                    <div id="basic-${i}" class="star-rating" style="width: 160px; height: 32px; background-size: 32px;" title="3/5">
                                    </div>
                                    <div id="tech-services-${tech[i].id}">

                                    </div>
                                </div>
                                
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="./tech-profile-${tech[i].id}" class="btn btn-light-primary">View Profile</a>
                            </div>

                        </div>
                    </div>
                `);

                // console.log(tech[i].rate[0].avg);    
                if (tech[i].rate[0].avg == null) {
    
                raterJs({
                        max:5, 
                        rating: 0.0, 
                        element:document.querySelector("#basic-"+i), 
                        disableText:"Custom disable text!", 
                        ratingText:"My custom rating text {rating}",
                        showToolTip:true,
                        rateCallback:function rateCallback(rating, done) {
                            starRating.setRating(rating); 
                            starRating.disable(); 
                            done(); 
                        }
                    })
                }else{

                raterJs({
                        max:5, 
                        rating: Number(tech[i].rate[0].avg), 
                        element:document.querySelector("#basic-"+i), 
                        disableText:"Custom disable text!", 
                        ratingText:"My custom rating text {rating}",
                        showToolTip:true,
                        rateCallback:function rateCallback(rating, done) {
                            starRating.setRating(rating); 
                            starRating.disable(); 
                            done(); 
                        }
                    })
                }

                if (tech[i].services == 0) {

                }else{
                    $.each(tech[i].services, (i, s)=>{
                        $("#tech-services-"+s.userid).append(`
                            <span class="badge bg-primary" style="height: 20px; font-size: 12px;">${s.service}</span>
                        `);
                    });

                }

            }

            let arraynum = [];

            for (let i = 0; i < tech.length; i++) { 

                let clientHeight = document.getElementById('div-'+i).clientHeight;

                arraynum.push(clientHeight);
                    
            }

            let height = Math.max(...arraynum);

            for (let i = 0; i < tech.length; i++) { 

                document.getElementById('div-'+i).style.height = height+"px";
                    
            }
          
        }
    });    

  	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
	});

	}

});	


});



page("/tech-profile-:techid", (e)=>{

$.ajax({
    url: "./api/technician-profile",
    type: "POST",
    dataType: "json",
    data: {
        techid: e.params.techid
    },
    success: (data) => { 

    $("#main-element").empty();
    $("#main-element").html(guestTemplate).show();  

    const collection = document.getElementsByClassName("menu-link");

    for (let i = 0; i < collection.length; i++) {
        document.getElementById(collection[i].attributes[2].nodeValue).setAttribute("class", "menu-link");
    }

    document.getElementById('technicians').setAttribute("class", "menu-link myactive");

    $("#home-only").hide();

    if (data.login == 1) {

        var role = '';

        if (data.user[0].user_status == 1) {
            role = 'Seller';
        }else if (data.user[0].user_status == 2) {
            role = 'Technician';
        }else if (data.user[0].user_status == 0) {
            role = 'Buyer';    
        }

        $("#user-auth").empty().append(`
            <div class="dropdown">
                <a href="#" id="topbarUserDropdown" class="user-dropdown d-flex align-items-center dropend dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="avatar avatar-md2">
                        <img src="${data.user[0].url}" alt="Avatar">
                    </div>
                    <div class="text">
                        <h6 class="user-dropdown-name">${data.user[0].username}</h6>
                        <p class="user-dropdown-status text-sm text-muted">${role}</p>
                    </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end shadow-lg" aria-labelledby="topbarUserDropdown">
                    <li>
                        <a href="./account" class="dropdown-item" id="my-account" data-id="${data.user[0].id}" data-name="${data.user[0].username}" data-email="${data.user[0].email}">
                        <i class="bi bi-person"></i> My Account</a>
                    </li>
                  
                    <li><hr class="dropdown-divider"></li>
                    <li>
                        <a href="./messages-${data.user[0].id}-${data.user[0].user_status}" class="dropdown-item" id="my-messages" data-id="${data.user[0].id}" data-name="${data.user[0].username}" data-email="${data.user[0].email}">
                        <i class="bi bi-chat-dots"></i> Messages</a>
                    </li>
                    
                    <li><hr class="dropdown-divider"></li>
                    
                    <li><a style="cursor: pointer;" class="dropdown-item" id="logout"><i class="bi bi-box-arrow-left"></i> Logout</a></li>
                </ul>
            </div>
            <!-- Burger button responsive -->
            <a id="side-trigger" data-hide="0" class="burger-btn d-block d-xl-none" >
                <i class="bi bi-justify fs-3" style="pointer-events: none;"></i>
            </a>

        `);
        
    if (data.user[0].user_status == 1) {

        $("#seller-card").empty().append(`
            <div class="card shadow">
                <div class="card-body px-4 py-4-5" style="cursor: pointer;" id="sell-products" data-id="${data.user[0].id}">
                    <div class="avatar bg-warning me-3">
                        <img src="${data.user[0].url}" alt="" srcset="">
                    </div>
                    Post some items here..
                </div>
            </div>
        `);

    }


    }

	$("#products-lists").empty().append(`

    <div class="card shadow">
        <div class="card-body px-4 py-4-5 row" >

        	<div class="col-md-5">
        		<img src="${data.tech[0].url}" style="height: 100%; width: 100%">
        	</div>

        	<div class="col-md-7">
				<ul class="list-group">
	                <li class="list-group-item"><i class="bi bi-person"></i> ${data.tech[0].username}</li>
	                <li class="list-group-item"><i class="bi bi-envelope"></i> ${data.tech[0].email}</li>
	                <li class="list-group-item"><i class="bi bi-telephone"></i> ${data.tech[0].contact == 0 ? 'No Contact' : data.tech[0].contact}</li>
	                <li class="list-group-item"><i class="bi bi-geo-alt"></i> ${data.tech[0].address == 0 ? 'No Address' : data.tech[0].address}</li>
	                <li class="list-group-item"> ${data.tech[0].verified_status == 0 ? '<i class="bi bi-patch-exclamation-fill"></i> Not verified' : '<i style="color: green;" class="bi bi-patch-check-fill"></i> Verified Tectnician'}</li>
	                <li class="list-group-item">
	                ${data.tech[0].rate[0].avg}
                    <div id="basics-lang" class="star-rating" style="width: 160px; height: 32px; background-size: 32px;" title="3/5">
                    </div>
	                </li>
	            </ul>
	            <button id="create-message" data-login="${data.login == 1 ? '1' : '0'}" data-id="${data.tech[0].id}" class="btn btn-primary btn-sm" style="margin-top: 5px;"><i class="bi bi-chat-dots"></i> Send Message</a>
	            <button class="btn btn-primary btn-sm" data-id="${data.tech[0].id}" id="tech-rate" style="margin-top: 5px; margin-left: 5px;"><i class="bi bi-star-half"></i> Rate Me</button>
        	</div>	

        </div>
    </div>


    <div class="card shadow">
    	<div class="card-header">
    		<h4>Reviews</h4>
    	</div>
        <div class="card-body px-4 py-4-5" >
          <div class="form-group mb-3">	
            <label for="exampleFormControlTextarea1" class="form-label">Leave a comment here</label>
            <textarea class="form-control" id="guest-comment" rows="3"></textarea>
            <button class="btn btn-primary btn-sm float-end" id="submit-comment" data-id="${data.tech[0].id}" style="margin-top: 5px;">Submit</button>
         </div> 
        </div>
        <div class="card-footer">
            <div class="row" id="list-reviews">

    


            </div>
        </div>    
    </div>

	`);

        $.each(data.tech[0].reviews, (i, rev)=>{

          $("#list-reviews").prepend(`
            <div class="card-header shadow">
                <div class="media d-flex align-items-center">
                    <div class="avatar me-3">
                        <img src="${rev.url}" alt="" srcset="">
                        
                    </div>
                    <div class="name flex-grow-1">
                        <h6 class="mb-0">${rev.username}</h6>
                        <span class="text-xs">${rev.review_on}</span>
                    </div>
                </div>
                ${rev.review}
            </div>
          `)  

        });

    raterJs({
            max:5, 
            rating: Number(data.tech[0].rate[0].avg), 
            element:document.querySelector("#basics-lang"), 
            disableText:"Custom disable text!", 
            ratingText:"My custom rating text {rating}",
            showToolTip:true,
            rateCallback:function rateCallback(rating, done) {
                starRating.setRating(rating); 
                starRating.disable(); 
                done(); 
            }
        })
	}

});	

});

$(document).on("click", "#submit-comment", (e)=>{
    console.log(e.target.dataset.id); 

    $.ajax({
        url: "./api/submit-comment",
        type: "POST",
        dataType: "json",
        data: {
            techid: e.target.dataset.id,
            comment: $("#guest-comment").val()
        },
        success: (data) => { 
            $("#guest-comment").val("");
            if (data.response == 1) {
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
                  title: 'Inserted successfully'
                })

              $("#list-reviews").prepend(`
                <div class="card-header shadow">
                    <div class="media d-flex align-items-center">
                        <div class="avatar me-3">
                            <img src="${data.user[0].url}" alt="" srcset="">
                            
                        </div>
                        <div class="name flex-grow-1">
                            <h6 class="mb-0">${data.user[0].username}</h6>
                            <span class="text-xs">${data.datenow}</span>
                        </div>
                    </div>
                    ${$("#guest-comment").val()}
                </div>
              `)  


            }else{
                Swal.fire('Please login.');
            }

        }
     });   

})


$(document).on("click", "#tech-rate", (e)=>{

    $.ajax({
        url: "./api/checking",
        type: "POST",
        dataType: "json",
        data: {
            data: 1
        },
        success: (data) => { 

        if (data.login == 1) {
            $("#tech-rating-modal").modal("show");
            raterJs({
                starSize:32,
                element:document.querySelector("#tech-rating"),
                rateCallback:function rateCallback(rating, done) {

                $.ajax({
                    url: "./api/rate-tech",
                    type: "POST",
                    dataType: "json",
                    data: {
                        techid: e.target.dataset.id,
                        rating: rating
                    },
                    success: (data) => { 
                    page("/tech-profile-"+e.target.dataset.id);    
                    $("#tech-rating-modal").modal("hide");    
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
                      title: 'Rated successfully'
                    })
                    done();     
                    } 

                });

                    
                }
            })

        }else{
          $("#login-user-modal").modal("show");  
        }    
 
        } 

    });

});


$(document).on("click", "#create-message", (e)=>{

if (e.target.dataset.login == 1) {

    page("/chatbox-"+e.target.dataset.id);

}else{
    Swal.fire('Please login.');
}

});