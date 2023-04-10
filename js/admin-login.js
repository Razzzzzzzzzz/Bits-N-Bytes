const adminLogin = `
<div id="auth">
        
<div class="row h-100">
    <div class="col-lg-5 col-12">
        <div id="auth-left">
            <div class="auth-logo">
                <a href="index.html"><img src="img/logo.png" style="height: 43px;width: 137px;" alt="Logo"></a>
            </div>
            <h1 class="auth-title">Admin</h1>
            <p class="auth-subtitle mb-5">Log in your admin credentials.</p>

                <div class="form-group position-relative has-icon-left mb-4">
                    <input type="email" class="form-control form-control-xl" id="admin-email" placeholder="Enail">
                    <div class="form-control-icon">
                        <i class="bi bi-person"></i>
                    </div>
                </div>
                <div class="form-group position-relative has-icon-left mb-4">
                    <input type="password" class="form-control form-control-xl" id="admin-password" placeholder="Password">
                    <div class="form-control-icon">
                        <i class="bi bi-shield-lock"></i>
                    </div>
                </div>
  
                <button type="button" id="login-admin" class="btn btn-primary btn-block btn-lg shadow-lg mt-5">Log in</button>


        </div>
    </div>
    <div class="col-lg-7 d-none d-lg-block">
        <div id="auth-right" style="background: url('./img/pet.png') center center; background-size: cover;">

        </div>
    </div>
</div>

</div>
`;

page("/admin-login", ()=>{ 

 $("#main-element").empty();
 $("#main-element").html(adminLogin).show();

});


$(document).on("click", "#login-admin", ()=>{

$.ajax({
    url: "./api/login-admin",
    type: "POST",
    dataType: "json",
    data: {
        email: $("#admin-email").val(),
        password: $("#admin-password").val()
    },
    success: (data) => { 

    if (data.status == 1) {

    page("/admin-dashboard");
    	
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
	  title: data.response
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
	})	
    }	

    } 
   });

});