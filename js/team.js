

page("/team", (e)=>{ 


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

    document.getElementById('team').setAttribute("class", "menu-link myactive");
    $("#tech-only").hide();
    $("#home-only").hide();
    $("#list-of-vet").empty().append(`

 <section class="team text-center py-5">
   <div class="container">
     <div class="header my-5">
       <h1>Meet our Team </h1>
       <p class="text-muted">Meet and Greet our Team Members</p>
     </div>
     <div class="row">
       <div class="col-md-6 col-lg-3">
         <div class="img-block mb-5">
           <img src="./profile/1.png" class="img-fluid  img-thumbnail rounded-circle" alt="image1">
           <div class="content mt-2">
             <h4 style="color: white;">Zain Knob</h4>
             <p style="color: white;">Founder CEO</p>
           </div>
         </div>
       </div>
       <div class="col-md-6 col-lg-3 ">
         <div class="img-block mb-5">
           <img src="./profile/2.png" class="img-fluid  img-thumbnail rounded-circle" alt="image1">
           <div class="content mt-2">
             <h4 style="color: white;">Syndia Lee</h4>
             <p style="color: white;">Software Engineer</p>
           </div>
         </div>
       </div>
       <div class="col-md-6 col-lg-3">
         <div class="img-block mb-5">
           <img src="./profile/3.png" class="img-fluid  img-thumbnail rounded-circle" alt="image1">
           <div class="content mt-2">
             <h4 style="color: white;">Noel Flantier</h4>
             <p class="" style="color: white;">Core JS Specialist</p>
           </div>
         </div>
       </div>
       <div class="col-md-6 col-lg-3">
         <div class="img-block mb-5">
           <img src="./profile/4.png" class="img-fluid  img-thumbnail rounded-circle" alt="image1">
           <div class="content mt-2">
             <h4 style="color: white;">Bobby Doe</h4>
             <p style="color: white;">Web Developer</p>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>

    `);

    } 
});

});