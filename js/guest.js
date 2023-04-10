 var guestTemplate = `
    
    <style>

        .box {
          height: 105px;
          width: 125px;
        }

        @media (min-width: 40em) {

        .box {
          height: 200px;
          width: 200px;
        }


        }

        .myactive {
            border-bottom: 1px solid white;
        }

        .product:hover {
            border: 1px solid red;
        }

        .my-body {
          font-faimly: "Helvetica", sans-serif;
        }

        .img {
          width: 100%;
        }

        .atag {
          text-decoration: none;
          color: black;
        }

        .banner {
          display: block;
          width: 200px;
          height: 600px;
          margin: 20px auto;
          border: 1px solid black;
          padding: 10px;
          position: relative;
        }
        .banner:hover .section2 .clock {
          transform: rotate(0deg);
        }
        .banner:hover .section2 .cclock {
          transform: rotate(0deg);
        }

        .section2 img {
          width: 37%;
          margin: 0 10px;
        }

        .sec {
          margin: 0 auto;
          text-align: center;
        }

        .ptag {
          margin: 0;
        }

        .ptag .small {
          font-size: 9px;
        }

        .logo {
          -webkit-animation: 2s opacity;
                  animation: 2s opacity;
        }

        .section1 h1 {
          -webkit-animation: 1s scale;
                  animation: 1s scale;
          -webkit-animation-fill-mode: forwards;
                  animation-fill-mode: forwards;
        }

        .section2 {
          opacity: 0;
          -webkit-animation: 2s opacity 1s;
                  animation: 2s opacity 1s;
          -webkit-animation-fill-mode: forwards;
                  animation-fill-mode: forwards;
        }

        .clock {
          transform: rotate(10deg);
          -webkit-animation: 1s clock 0.5s 3;
                  animation: 1s clock 0.5s 3;
          -webkit-animation-timing-function: step-start;
                  animation-timing-function: step-start;
        }

        .cclock {
          transform: rotate(-10deg);
          -webkit-animation: 1s cclock 0.5s 3;
                  animation: 1s cclock 0.5s 3;
          -webkit-animation-timing-function: step-start;
                  animation-timing-function: step-start;
        }

        .scale {
          -webkit-animation: 1s scale 3s;
                  animation: 1s scale 3s;
        }

        .slidedown {
          overflow-y: hidden;
          max-height: 0;
          -webkit-animation: 5s slidedown 1.5s;
                  animation: 5s slidedown 1.5s;
          -webkit-animation-fill-mode: forwards;
                  animation-fill-mode: forwards;
        }

        .slideright {
          overflow-x: hidden;
          max-width: 0;
          -webkit-animation: 4s slideright 3s;
                  animation: 4s slideright 3s;
          white-space: nowrap;
          -webkit-animation-fill-mode: forwards;
                  animation-fill-mode: forwards;
        }

        .lip {
          position: absolute;
          width: 150px;
          opacity: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) rotate(15deg);
          z-index: -1;
          -webkit-animation: 2s lips 4s;
                  animation: 2s lips 4s;
          -webkit-animation-fill-mode: forwards;
                  animation-fill-mode: forwards;
        }

        @-webkit-keyframes opacity {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes opacity {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-webkit-keyframes scale {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.5);
          }
          75% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes scale {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.5);
          }
          75% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        @-webkit-keyframes lips {
          0% {
            transform: translateX(-50%) rotate(15deg) scale(0);
            opacity: 1;
          }
          30% {
            transform: translateX(-50%) rotate(15deg) scale(1.3);
          }
          80% {
            transform: translateX(-50%) rotate(15deg) scale(0.9);
            opacity: 0.5;
          }
          100% {
            transform: translateX(-50%) rotate(15deg) scale(1);
            opacity: 1;
          }
        }
        @keyframes lips {
          0% {
            transform: translateX(-50%) rotate(15deg) scale(0);
            opacity: 1;
          }
          30% {
            transform: translateX(-50%) rotate(15deg) scale(1.3);
          }
          80% {
            transform: translateX(-50%) rotate(15deg) scale(0.9);
            opacity: 0.5;
          }
          100% {
            transform: translateX(-50%) rotate(15deg) scale(1);
            opacity: 1;
          }
        }
        @-webkit-keyframes slidedown {
          from {
            max-height: 0;
          }
          to {
            max-height: 500px;
          }
        }
        @keyframes slidedown {
          from {
            max-height: 0;
          }
          to {
            max-height: 500px;
          }
        }
        @-webkit-keyframes slideright {
          from {
            max-width: 0;
          }
          to {
            max-width: 500px;
          }
        }
        @keyframes slideright {
          from {
            max-width: 0;
          }
          to {
            max-width: 500px;
          }
        }
        @-webkit-keyframes clock {
          0% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(10deg);
          }
        }
        @keyframes clock {
          0% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(10deg);
          }
        }
        @-webkit-keyframes cclock {
          0% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-10deg);
          }
        }
        @keyframes cclock {
          0% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-10deg);
          }
        }

    </style>

    <div id="app">
        <div id="main" class="layout-horizontal">
            <header class="mb-5">
                <div class="header-top">
                    <div class="container">
                        <div class="logo">
                            <a href="index.html"><img style="height: 43px;width: 137px;" src="img/logo.png" alt="Logo"></a>
                        </div>
                        <div class="header-top-right" id="user-auth">

                            <button id="login" class="btn btn-outline-primary">Login</button>
                            <button id="register" class="btn btn-outline-primary">Register</button>
                            <!-- Burger button responsive -->
                            <a id="side-trigger" data-hide="0" class="burger-btn d-block d-xl-none" >
                                <i class="bi bi-justify fs-3" style="pointer-events: none;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <nav class="main-navbar" id="top-bar">
                    <div class="container">
                        <ul>
                            
                            
                            <li class="menu-item " >
                                <a href="./home" class="menu-link" id="home">
                                <i class="bi bi-cart-check"></i>
                                <span>Buy & Sell</span>
                                </a>
                            </li>
                            
                            <li class="menu-item  " >
                                <a href="./technicians" class="menu-link" id="technicians">
                                <i class="bi bi-tools"></i>
                                <span>Services</span>
                                </a>
                            </li>

                            <li class="menu-item  " >
                                <a href="./team" class="menu-link" id="team">
                                <i class="bi bi-people"></i>
                                <span>Our Team</span>
                                </a>
                            </li>


                        </ul>
                    </div>
                </nav>

            </header>

            <div class="content-wrapper container">
                
<div class="page-heading">

<!--<h3>Recent Promotions</h3> -->

</div>
<div class="page-content">
    <section class="row">
        <div class="col-12 col-lg-12">
          <div class="row" id="home-only">
            <div class="col-12 col-lg-9">
              <div class="row">
              <div class="card shadow">
                <div class="card-body">

                <div class="input-group mb-3">
                <input list="browsers" type="text" id="item-search" class="form-control" placeholder="Search Items"  aria-describedby="button-addon2">
                <button class="btn btn-info" type="button" id="search-item"><i class="bi bi-search"></i> Search</button>
                <datalist id="browsers">
                  <option value="Edge">
                  <option value="Firefox">
                  <option value="Chrome">
                  <option value="Opera">
                  <option value="Safari">
                </datalist>
                </div>

                </div>
              </div>
              </div>
            </div>

            <div class="col-12 col-lg-3">
        
              <div class="card shadow">
                <div class="card-body">

                    <div class="form-group">
                        
                        <select class="form-select" id="product-category-main" >
                            <option value="0">Select Item Category</option>
                            <option value="1">Add-on Cards</option>
                            <option value="2">Cables and Adapters</option>
                            <option value="3">Casings and Power Supplies</option>
                            <option value="4">CD/DVD-R/RW Drives</option>
                            <option value="5">Cooling Devices</option>
                            <option value="6">Desktops Systems</option>
                            <option value="7">Digital Media Players</option>
                            <option value="8">Digital and Web Cameras</option>
                            <option value="9">Game Consoles</option>
                            <option value="10">Game Controllers</option>
                            <option value="11">Games and Software</option>
                            <option value="12">Graphics Cards</option>
                            <option value="13">Hard Disk Drives</option>
                            <option value="14">IT Books and References</option>
                            <option value="15">LAN and Net Devices</option>
                            <option value="16">Laptops and PDAs</option>
                            <option value="17">Laptops/PDA Accessories/Parts</option>
                            <option value="18">Media Players</option>
                            <option value="19">Memory Modules</option>
                            <option value="20">Mice, Keyboards</option>
                            <option value="21">Monitors, CRT/LCD </option>
                            <option value="22">Motherboards</option>
                            <option value="23">Multiple Items/Combos</option>
                            <option value="24">Portable Media Drives</option>
                            <option value="25">Portable Media and Storage</option>
                            <option value="26">Printers /Scanners</option>
                            <option value="27">Printers Inks/CIS/Toner</option>
                            <option value="28">Processors</option>
                            <option value="29">Repair Services PC/Laptop</option>
                            <option value="30">Sound Cards</option>
                            <option value="31">Speakers, Headsets, Mics</option>
                            <option value="32">Tech/IT Services</option>
                            <option value="33">UPS and AVRs</option>
                            <option value="34">Other PC Devices</option>
                            <option value="35">Smartphones</option>
                        </select>
                    </div>
                
                </div>
              </div>
          
            </div>

          </div>

          <div class="row" id="tech-only">
            <div class="col-12 col-lg-12">
              <div class="row">
              <div class="card shadow">
                <div class="card-body">

                <div class="input-group mb-3">
                <input list="browsers-tech" type="text" id="tech-search" class="form-control" placeholder="Search Services"  aria-describedby="button-addon2">
                <button class="btn btn-info" type="button" id="search-tech"><i class="bi bi-search"></i> Search</button>
                <datalist id="browsers">
                  <option value="Edge">
                  <option value="Firefox">
                  <option value="Chrome">
                  <option value="Opera">
                  <option value="Safari">
                </datalist>
                </div>

                </div>
              </div>
              </div>
            </div>
         </div> 


            

            <div class="row" id="list-of-vet">

                <div class="col-12 col-lg-9">

                    <div class="row" id="seller-card">

                    </div>

                    <div class="row">

                        <div class="card shadow">
                            <div class="card-body px-4 py-4-5" >

                                <div class="row" id="products-lists">



                                </div>

                                <div id="pagination-container"></div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="col-12 col-lg-3">

                <div class="card shadow" >
                    <div class="card-content">
                        <div class="card-body my-body">
                        
                        <a class="banner atag" href="http://sephora.ca">
                          <img style="height: 15px; width: 100px;" class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABOCAMAAADLqJhBAAAAe1BMVEX///8AAADg4ODm5uZERER5eXmwsLA6OjqkpKQHBwfFxcXJycnv7+/d3d0kJCScnJwwMDD19fV/f3++vr7p6ekcHBzy8vJHR0dfX182NjbT09MUFBSzs7NaWlpkZGQ8PDyRkZFubm5RUVGGhoaPj49ra2tNTU0qKioXFxcfpu07AAAOrElEQVR4nO2d6YKrqhKFE03SZo4x8zx3v/8T3sysUpQFaWPvc7P+7d2CBD+hKIqyVIppNPDazUUQLGae34r/8aPX1fK9qFud7MZf0+nX+ND8v+jmMOqueuWHOsvNYmZZgW+jAVtto3nXmXaH4n9HjdphXI6pvtwHjdC9Ttnnf5LS7m4e/9W9XXdkUUM0rVho55PVljt39dZQfLxbTVb9oOnwUEa14KEuxScUCDz7+10VdiedeP8+3uFd37XWUu0L+3S8nExW22q1vwmCWvP3MetWQQFTYtBN+dHlSpMeG2ppdWj1TYNl0DjwbfAvldpQuEEV+FYFala3uiucTQw/Yh3Z/YaHUp/bVV+H2W+O7M2hqJx4G5qJIRp/c7fN3dcOrOlvgXXWamHzyntQkgPrSxVwAatZJX7DcuFQswGss9YH6idSCmTV5gbXhvpGPXTiyLIDa/2LYJ1rO/Jz4pvBalUN3XtXfWdp015kBKtcHlbZnjYo3MqK+6YuP5iaNuFuXCRYZ9H24FvBColH/5Q9Alzte7d5NiYvVmvdME2YeaDMNFuwvn4brPKKnA/fCZa3suqUqe28RWK7dBgME0o83+y+iOrGZrneOFO/D1Z5zXXfG8Ga9RKNzFadfIkfYsfDTmRXr06nRH9nXd1OOBnm55W9+A9yJizQeH+K4uR9YAWJBpq1tXKg8BPt62NWss6sJedSXPnTD2pRo9modVcKLnZ4tgOrlwdYZWaZ8TawgrTJYNirrNO8WuWqjf+JB6tHru1TpXm8m/Srm+LCwHu+LiO/Wbn9J+1wsgOrzHoIoMgw6D4UbCZTTaVL4n1/F1gL3a8eHqK25/sD3/fa7aivWzBWLcYsBGvWfmp2+EpUazcUJrXV9HbqxSHOm7v4nQfVyzy5Ye+MYDn5EfWCWnvxvzUPS3BelrnWvgms5Hv2vawlHq5/2CWuY22PkgQrtvQbBasfUe1rz6SteY/nqZYbWu46oqNj+YdeqGBPWtqgWcoC66yZnA2G5oHwPWBF8bnup6s3c0aLhP+0y95EgJWcQht9US1dq05q/AVmNmlX79U1+lVaWJvSPpBiwDqjJZb0B2OFbwFrFF8UVdOJD9uxGbFOr+GywTr3DVbr5Nt/SKECU/w4xXz3Yax8ffIqCqzY6stY4TvACmMT3LSZfX0Q45Bdw5nAKg3W6oKErWMh/zkAT8O1sZ3Is/s9HyoOLNG/xkf/DrBiq7WjcYJuSrLSzeL0++hXk+BK6xjozmzfs5Y9vscr/dUbdcXO/Z4PFQhWCcyUqqnCN4DlSUyYdV6MLHIyNIOFi9MXZqUtVILhIfqrwYnF24upKhIsTz1744D/BrAqApI+Vaa9xjJrLt6FAKukhiwbR0ZMqmGe2I3W9wf8/pcMu5uKBAtsy57JPskfrIbgyjiE3iUMbfJNZ8BSQ1bFOTpLzYTHkrBpj9rL/0NgqeH5xzSL5A5WKLYzKrQnPcJiPQoCBiy1RPtxjlRVfovLk50p5+FU69AH9yg3XGeqULDgMtM7kjtY0jVqMUpssNyeKcGANVLuGNdtnZaKBL3+Gxw82icNb1bmTjWnYsFSP9307PMGSwbE2RivA2GbMSUYsIBX1xiH6LmyuHGC60KdnxN7wHmUfKpYsPr0vfMGCxdN5aVVjJ3YXmSsEwoshYHrY+nGagjhtjrHOjaL9Zykq1iwNvS98wZrC/XzPvSbcMhinoglWBu71jwEI6mfaKduq0PENjjeVOmvjFhFT4XYqUy0BQqfiHF5W7KeCh0fixqDHxMfPOu6poCIYrYNXkyoWLCUPVkwWMJrYNsPIzwnRkDMgBUq77GjjaXIfFiM2IeaFUFLhvkZj11kq1iwnvu4xtknZ7BErAJTvRB2IuHPpNwNyjnguCp8ln9uCoWGrY7YltbqpfjVP+JuKNpBii/rlqleCKPkiehtBixw17qBpTpM7WrAw9aFODRjQUOdV2IcCgVLrafGJodkvmCJnRmHXV/k0rxSZ8BShjZ9gEVKzYTK2wkvgHaKSMSYTV2yIdxUJFgQpqLfZAAhWNST94AVI1gLiIOjo7pB6CQ1OxwIsMDnRPlck1J9C6QfVbU657ofB+s8ZboGVyBY/aZeM3tsKbDg3kamEax+QOgA47oRLIwNOzocFMV1oXmX0QxWZNN4fYtUDfC/0OMd3fsDMaQPDVduIyaC9dPRa2w/yzNgeRD5bkQ3fqLXSsZng4/aKWQEyp+MFxvBCoCrqZsTXL0qwmSEO+vmwpFcGN7lZMUzp3T0e5aZgtJpYOG4a3Yr5gqW2M9xGiEgLkvnIpIygOWJLDduoVEtVYegAmJkv3TldKcvztrbo1UYWBGeNza3O1ewWtDf6YdYsoSZf4wXZ4HVip8uc7OeVXfJGDGMxdBO+WJrS6lnHe9QEFitI8ZeEqfncgXLhxXkt5P3BqxiO7Dwl4eLw/EUi6N3jIxSj1Xa/j5Ur7drZ7GjeQ/NLVtSAFihH8lTC8yzzBcsGD3XTm4jXBYaQ7kQrPlD+gPYG5fGlCAANeZWCOFsWUpgezst35xdWp38wfpuQcLNWWMR9ONJNxg3R75gwVu6djKWcVlp7C3+iH3fMXOkCmSoxGiAUIy0YxphWsq5k81gnj9Y9TEk3OwNk28mFaKRK1gemDUVJ7DQdjF6fmiwUo7TmFVLrQKt89QXOkqe9ec6UtuEdL0GlrH3KPM03xELwHIbsTBg/rfA6rnvqCivQcIy2qobpEfTe/tEPiOuJ5UQrLpeLmYH13UXHbkoYAQrpZ3xZvPdgTaWw1tUksF+vzQVHt0zzcCwlNnSjKmtncxOQXXlUwjWxve0cnC9Ul130YRcTiNYtZR2ijY3YMy3WRUyAVVJYTcau4sBq7N4IWpFwaMJXoebZPoQool21GL9avnvFWapQjuNct0rHIAbauiUsBj3QoxEmMFyc6Y9lB3LhYu+7Hoax2TL6EQCRYI1PPBjYa7RDS3sbCfPEaY4MV5MjFgvPQqVsqGu6WBcZxj4DXUp3+PrzBQVCNbmz+R5R++O25YO7oQYL0awtveUdFFb7uS8ko1bbYnrTuP4sBFpDj2bVRMOU+5odjFgzStby4Eh33gsdENt7Bp2E5Q3n8lL87zjeqPyQjJuZXdrfzhM28xKZZZwa1GriveD1dsdu5H1C5kvWNgL2jN3BrWgvDG0LHWvUJwjM6cMS9Wzjm+tNYq3oc6IN2IebSr9wBsC/VaTi/rX8b7d9vyWy8uYL1gRLIBcAv3sEm6mbkKLscE54lz51PSbNrisITOObOw3xvMHyzECMqZ8wfLxaKBDzCTa7i+EJotmOMY1oAt0o78A+SWdZZGwtGxTFuQD1i8kmCjlfpgCDWfzXJZoHIwBRIh6etiMyDDCJryJCXwnyvccnjUatc4aDFpoUbLPXEQtM8dNPmBdJRLKWjcOrRbiOF5GPJaI4HQLmYHcx2cjZHnV7qrTWeOz8ORIh60WP1rBeBw+YN2uxgdq/U2nrV3hDLBauP1bdzKzRPYbs2ifD9TLpK/8gHUT9rVFyvbbraDsq0fs8bxQeWzZkItk8huzaBMYDEAmucUHrJvQoJ1b7upg2ZeTgog05Q4B7ymxxaniszKDuUB06Aesm4RxapfGSDxKZpMv+zAFDlkOe4bMh2FRddqSszmt9wHrIZl4zaYnQjHGMCWywRJu0pN1CKklVzZzoSpDjKQfsO6SX2eyaJkIlfyNVJFizLH1OdjOhOXylE6LaUXKB6y7ZHJb3vIQyZa5h2QAS7pJLSdD+SEeSuwd4BF8wLrJIR032+qB2OzgetB0ElomYrYKJMWvtsznP8NO57vXm07X68p4fNrtlsvJZLU6brf4LXX2MxSAysd4twCrJL4FQDZ7JAys3/qAgBg8rT5ZCCkbgkuc7f1w1OCq1lWj0SgMRWQiWff2WYAJhvyApW4hQ3EZc2kmnUakm8IIlnCTWvkcoOrsC33rG4CDjDlw8gFLKRbZWTU6HWKZytjTWuZsM8JNapF5DUJhs/LdlWReSM4hDDuMjLPuA5aS+HTtWSfDzBbIj6EOWQCI/FhihuWT7cI4ZIrngkao3YLBNPXj1miCMkPcBywQxutdtc/YbW3HYnbndLgNk9FPDFm0qwlqNlGOORqeoJzpqQTakiL7L+M//oCFWsTPafdqKZ3YTOQo47eu7T7SdBHrEVCwmKN3YC5cPlpxHbKn+2SjDrj4pab8/D82/i+BpTlAc+onH5HfXcU/Hm3jyaTyvAs36ZyreAS9bpw+MQri/hOf3tVOtz14VBAOPPEx3PKcCrFljtiD2CALKPJPgaUPOhl3Z95txT7wvKivO8i5sfgtFFjSTcrZ11Cx+SfjF1Dub8UW/uurH9QWi1rQrcbDJbhofDuwiM/N3wRl/i2wdGk4r6pcQuTGlaH+rxsbZxMFlnSTcj9BrQn1xyikEkfW0lJjSa257csPWHFZBspdZXekhgNLukm1uWhjgpQNjDcdJ7grh2nvlFCdROADVkIN6sUFdSz380iwpJv021yvZQ5vzO53ifP3UjLMCPXY3/oBK6mZNndwqiq2EcQkWLE1qtF5hAnTmC7CSKG1zw3VfCLND1gajQ4WfWKXQfEiFizpJh2azCY8O0+1A+fCxdlCM49Y7H516QNWivwjMy9cutrhwAMNlnSTrg0Eg7VfodqB2f0uW92Rwcia2yxRPmClqCGGixQtay6nSnmwpJvUcJwPImZIVzekKbo5p9pZQ7XdJyrswGKXBAiW47nLmOzBski8ptWoGds6TGgaueWe5cGKRbBnG85woUMOq0foe7Ov+9m9pe0hx9m2aiGNs1+voyrjmKk8Jl+lyJ1S3eZNVEpd1zRmg8PyR9PLF3V2fedUjg3V56ZgK3+P3X/Iujqqq2/UsNHGqshQmU+tRdAfYzKL5b720qcL/7YGKqe3dQH3rIthVNsnUwhPq4H799bykt9QX9Viy+CnuMQfWr43a0a1WnQJFnTMCf6RQQPPWxy2k934azpdn/a1ptpH+y/pf3hE0qI4o0OJAAAAAElFTkSuQmCC" alt="sephora logo">
                          
                          <section class="section1">
                            <h1>Get 20% off</h1>
                          </section>
                          
                          <section class="section2 sec">
                            <img class="cclock img" src="https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png" alt="">
                            <img class="clock img" src="https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png" alt="">
                          </section>
                          
                          <section class="section3 slidedown sec">
                            <h3>Summer Event:</h3>
                            <h1 class="scale">2X</h1>
                            <p class="ptag">Bonus points</p>
                            <p class="small ptag">Ends August 31*</p>
                          </section>
                          
                          <section class="section4 slideright sec">
                            <h3>SHOP NOW!!</h3>
                          </section>
                          
                          <section class="section5 sec">
                            <img class="lip img" src="http://designingflicks.com/images/kiss-svg-12.jpg" alt="">
                          </section>
                          
                        </a>



                        </div>
                    </div>

                </div>

                </div>



            </div>
            
        </div>

    </section>
</div>

            </div>

        <!--    <footer>
                <div class="footer clearfix mb-0 text-muted">
                    <div class="float-start">
                        <p>2022-2023 &copy; BUPC-BSIS23</p>
                    </div>
                    <div class="float-end">
                        <p>Crafted with <span class="text-danger"><i class="bi bi-heart"></i></span> by <a
                                href="#">BUPC-BSIS23</a></p>
                    </div>
                </div>
            </footer> -->
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="register-guest-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">Register User</h4>

                            <div class="form-body">
                                <div class="form-group">
                                    <label for="user-username" class="sr-only">Username</label>
                                    <input type="text" id="user-username" class="form-control" placeholder="Username">
                                </div>
                                <div class="form-group">
                                    <label for="user-email" class="sr-only">Email</label>
                                    <input type="email" id="user-email" class="form-control" placeholder="Email" name="email">
                                </div>
                                <div class="form-group">
                                    <label for="user-email" class="sr-only">Account Type</label>
                                    <select class="form-select" id="account-type" >
                                        <option value="0">Buyer</option>
                                        <option value="1">Seller</option>
                                        <option value="2">Technician</option>
                                    </select>  
                                </div>  
                                <div class="form-group">
                                    <label for="user-pass" class="sr-only">Passowrd</label>
                                    <input type="password" id="user-pass" class="form-control" placeholder="Password">
                                </div>

                            </div>
                            <div class="form-actions d-flex justify-content-end">
                                <button type="button" id="submit-user-data" class="btn btn-primary me-1">Register</button>
                                <button type="button" class="btn btn-light-primary" data-bs-dismiss="modal">Cancel</button>
                            </div>
            
                    </div>
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="register-owner-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">Register Clinic</h4>

                            <div class="form-body">
                                <div class="form-group">
                                    <label for="owner-clinicname" class="sr-only">Clinic Name</label>
                                    <input type="text" id="owner-clinicname" class="form-control" placeholder="clinic name">
                                </div>
                                <div class="form-group">
                                    <label for="user-owner-clinicaddress" class="sr-only">Clinic Address</label>
                                    <input type="text" id="owner-street" class="form-control" placeholder="Street" style="margin-bottom: 4px;">
                                    <input type="text" id="owner-barangay" class="form-control" placeholder="Barangay" style="margin-bottom: 4px;">
                                    <input type="text" id="owner-city" class="form-control" placeholder="City/Municipality" style="margin-bottom: 4px;">
                                    <input type="text" id="owner-province" class="form-control" placeholder="Province" style="margin-bottom: 4px;">
                                </div>
                                <div class="form-group">
                                    <label for="user-owner-openhours" class="sr-only">Clinic Open Hours</label>
                                    <input type="text" id="owner-openhours" class="form-control" placeholder="ex: 8:00am - 5:00pm">
                                </div>
                                <div class="form-group">
                                    <label for="owner-username" class="sr-only">Username</label>
                                    <input type="text" id="owner-username" class="form-control" placeholder="Username">
                                </div>
                                <div class="form-group">
                                    <label for="owner-email" class="sr-only">Email</label>
                                    <input type="email" id="owner-email" class="form-control" placeholder="Email" name="email">
                                </div>
                                <div class="form-group">
                                    <label for="owner-pass" class="sr-only">Passowrd</label>
                                    <input type="password" id="owner-pass" class="form-control">
                                </div>
                                <div class="form-group">
                                 <label for="" class="sr-only">Business Permit (1 copy)</label>
                                 <input type="file" name="image22" class="imgbb-filepond" >
                                </div>
                            </div>
                            <div class="form-actions d-flex justify-content-end">
                                <button type="button" id="submit-owner-data" data-url="0" class="btn btn-primary me-1">Submit</button>
                                <button type="button" class="btn btn-light-primary" data-bs-dismiss="modal">Cancel</button>
                               
                            </div>
            
                    </div>
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>



    <!-- Modal -->
    <div class="modal fade" id="login-owner-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" >

            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">Login Owner</h4>

                            <div class="form-body">
                                <div class="form-group">
                                    <label for="user-email" class="sr-only">Email</label>
                                    <input type="email" id="login-owner-email" class="form-control" placeholder="Email" name="email">
                                </div>
                                <div class="form-group">
                                    <label for="user-pass" class="sr-only">Passowrd</label>
                                    <input type="password" id="login-owner-pass" class="form-control">
                                </div>

                            </div>
                            <div class="form-actions d-flex justify-content-end">
                                <button type="button" id="login-owner-data" class="btn btn-primary me-1">Login</button>
                                <button type="button" class="btn btn-light-primary" data-bs-dismiss="modal">Cancel</button>
                               
                            </div>
            
                    </div>
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>



    <!-- Modal -->
    <div class="modal fade" id="login-user-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" >

            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">Login User</h4>

                            <div class="form-body">
                                <div class="form-group">
                                    <label for="user-email" class="sr-only">Email</label>
                                    <input type="email" id="login-user-email" class="form-control" placeholder="Email" name="email">
                                </div>
                                <div class="form-group">
                                    <label for="user-pass" class="sr-only">Passowrd</label>
                                    <input type="password" id="login-user-pass" class="form-control" placeholder="Password">
                                </div>

                            </div>
                            <div class="form-actions d-flex justify-content-end">
                                <button type="button" id="login-user-data" class="btn btn-primary me-1">Login</button>
                                <button type="button" class="btn btn-light-primary" data-bs-dismiss="modal">Cancel</button>
                               
                            </div>
            
                    </div>
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>

<!-- Modal -->
<div class="modal fade" id="user-profile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">User Profile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="my-profile">



      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="tech-rating-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="my-profile">

                <div class="card">
                    <div class="card-header">
                        <center>
                        <h4 class="card-title">Rate me :)</h4>
                        </center>
                    </div>
                    <div class="card-body">
                        <center>
                        <div id="tech-rating"></div>
                        </center>
                    </div>
                </div>

      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="guest-rating-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="my-profile">

                <div class="card">
                    <div class="card-header">
                        <center>
                        <h4 class="card-title">Rate me :)</h4>
                        </center>
                    </div>
                    <div class="card-body">
                        <center>
                        <div id="basic-rate"></div>
                        </center>
                    </div>
                </div>

      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="sell-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4>Sell Product</h4>    
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <div class="form-body">
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="first-name-vertical">Subject</label>
                        <input type="text" id="product-subject" class="form-control" placeholder="Subject for this post">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="first-name-vertical">Price</label>
                        <input type="number" id="product-price" class="form-control" placeholder="Product Price">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="email-id-vertical">Product Category</label>
                        <select class="form-select" id="product-category" >
                            <option value="1">Add-on Cards</option>
                            <option value="2">Cables and Adapters</option>
                            <option value="3">Casings and Power Supplies</option>
                            <option value="4">CD/DVD-R/RW Drives</option>
                            <option value="5">Cooling Devices</option>
                            <option value="6">Desktops Systems</option>
                            <option value="7">Digital Media Players</option>
                            <option value="8">Digital and Web Cameras</option>
                            <option value="9">Game Consoles</option>
                            <option value="10">Game Controllers</option>
                            <option value="11">Games and Software</option>
                            <option value="12">Graphics Cards</option>
                            <option value="13">Hard Disk Drives</option>
                            <option value="14">IT Books and References</option>
                            <option value="15">LAN and Net Devices</option>
                            <option value="16">Laptops and PDAs</option>
                            <option value="17">Laptops/PDA Accessories/Parts</option>
                            <option value="18">Media Players</option>
                            <option value="19">Memory Modules</option>
                            <option value="20">Mice, Keyboards</option>
                            <option value="21">Monitors, CRT/LCD </option>
                            <option value="22">Motherboards</option>
                            <option value="23">Multiple Items/Combos</option>
                            <option value="24">Portable Media Drives</option>
                            <option value="25">Portable Media and Storage</option>
                            <option value="26">Printers /Scanners</option>
                            <option value="27">Printers Inks/CIS/Toner</option>
                            <option value="28">Processors</option>
                            <option value="29">Repair Services PC/Laptop</option>
                            <option value="30">Sound Cards</option>
                            <option value="31">Speakers, Headsets, Mics</option>
                            <option value="32">Tech/IT Services</option>
                            <option value="33">UPS and AVRs</option>
                            <option value="34">Other PC Devices</option>
                            <option value="35">Smartphones</option>
                        </select>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="email-id-vertical">Contact No.</label>
                        <input type="number" id="product-contact" class="form-control" placeholder="09XXXXXXXXXXX">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="email-id-vertical">Details</label>
                        <textarea class="form-control" id="product-details" rows="3"></textarea>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <label for="contact-info-vertical">Photos</label>
                        <small class="text-muted">note:<i> maximum of 4 images.</i></small>
                        <input type="file" name="image22" class="imgbb-filepond-seller" multiple>
                    </div>
                </div>

            </div>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" id="insert-seller-post" class="btn btn-primary me-1 mb-1">Post</button>
        <button type="button" class="btn btn-secondary me-1 mb-1" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="edit-sell-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4>Update Product</h4>    
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <div class="form-body">
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="first-name-vertical">Subject</label>
                        <input type="text" id="edit-product-subject" class="form-control" placeholder="Subject for this post">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="first-name-vertical">Price</label>
                        <input type="number" id="edit-product-price" class="form-control" placeholder="Product Price">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="email-id-vertical">Product Category</label>
                        <select class="form-select" id="edit-product-category" >
                            <option id="1" value="1">Add-on Cards</option>
                            <option id="2" value="2">Cables and Adapters</option>
                            <option id="3" value="3">Casings and Power Supplies</option>
                            <option id="4" value="4">CD/DVD-R/RW Drives</option>
                            <option id="5" value="5">Cooling Devices</option>
                            <option id="6" value="6">Desktops Systems</option>
                            <option id="7" value="7">Digital Media Players</option>
                            <option id="8" value="8">Digital and Web Cameras</option>
                            <option id="9" value="9">Game Consoles</option>
                            <option id="10" value="10">Game Controllers</option>
                            <option id="11" value="11">Games and Software</option>
                            <option id="12" value="12">Graphics Cards</option>
                            <option id="13" value="13">Hard Disk Drives</option>
                            <option id="14" value="14">IT Books and References</option>
                            <option id="15" value="15">LAN and Net Devices</option>
                            <option id="16" value="16">Laptops and PDAs</option>
                            <option id="17" value="17">Laptops/PDA Accessories/Parts</option>
                            <option id="18" value="18">Media Players</option>
                            <option id="19" value="19">Memory Modules</option>
                            <option id="20" value="20">Mice, Keyboards</option>
                            <option id="21" value="21">Monitors, CRT/LCD </option>
                            <option id="22" value="22">Motherboards</option>
                            <option id="23" value="23">Multiple Items/Combos</option>
                            <option id="24" value="24">Portable Media Drives</option>
                            <option id="25" value="25">Portable Media and Storage</option>
                            <option id="26" value="26">Printers /Scanners</option>
                            <option id="27" value="27">Printers Inks/CIS/Toner</option>
                            <option id="28" value="28">Processors</option>
                            <option id="29" value="29">Repair Services PC/Laptop</option>
                            <option id="30" value="30">Sound Cards</option>
                            <option id="31" value="31">Speakers, Headsets, Mics</option>
                            <option id="32" value="32">Tech/IT Services</option>
                            <option id="33" value="33">UPS and AVRs</option>
                            <option id="34" value="34">Other PC Devices</option>
                            <option id="35" value="35">Smartphones</option>
                        </select>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="email-id-vertical">Contact No.</label>
                        <input type="number" id="edit-product-contact" class="form-control" placeholder="09XXXXXXXXXXX">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="email-id-vertical">Details</label>
                        <textarea class="form-control" id="edit-product-details" rows="3"></textarea>
                    </div>
                </div>

            </div>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" id="update-seller-post" class="btn btn-primary me-1 mb-1">Update</button>
        <button type="button" class="btn btn-secondary me-1 mb-1" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="services-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="vet-services">




      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="rating-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <center>
        <h4>Rate my product</h4>    
        <div id="product-to-rate" class="star-rating" style="width: 160px; height: 32px; background-size: 32px;" >
        </center>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="upload-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <input type="file" name="image" class="imgbb-filepond-file" >

      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="view-image-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="image-body">

      

      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="update-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="update-body">

      </div>
      <div class="modal-footer" id="update-footer">

      </div>
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="update-picture-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="update-body">

        <input type="file" name="image" class="imgbb-filepond-picture" >

      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="rating-tech-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <center>
        <h4>Rate my product</h4>    
        <div id="tech-to-rate" class="star-rating" style="width: 160px; height: 32px; background-size: 32px;" >
        </center>
      </div>
    </div>
  </div>
</div>


`;

$(document).on("change", "#product-category-main", ()=>{

$.ajax({
    url: "./api/item-category",
    type: "POST",
    dataType: "json",
    data: {
        category: $("#product-category").val()
    },
    success: (data) => { 

    $("#products-lists").empty();

    $('#pagination-container').pagination({
        dataSource: data.products,
        pageSize: 9,
        callback: function(items, pagination) { 
            $("#products-lists").empty();

            for (let i = 0; i < items.length; i++) { 

                $("#products-lists").append(`
                    <div class="col-12 col-lg-4 col-md-6">
                        <div class="card product shadow" >

                            <div class="card-content">
                                <div class="card-body">
                                    <h5 style="white-space: nowrap; width: 250px; overflow: hidden; text-overflow: ellipsis;">${items[i].title}</h5>
                                    <p>₱${Number(items[i].price).toLocaleString("en")}.00</p>
                                    ${items[i].ratings[0].average}
                                    <div id="basic-${i}" class="star-rating" style="width: 160px; height: 32px; background-size: 32px;" title="3/5">
                                    </div>
                                </div>
                                <img style="height: 221px;" class="img-fluid w-100" src="${items[i].image}" alt="Card image cap">
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="./product-${items[i].id}" class="btn btn-light-primary">View More</a>
                            </div>

                        </div>
                    </div>
                `);

                raterJs({
                        max:5, 
                        rating: Number(items[i].ratings[0].average), 
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



        }
    });    


    } 
  });


});

$(document).on("click", "#search-tech", ()=>{ 

$.ajax({
    url: "./api/tech-to-search",
    type: "POST",
    dataType: "json",
    data: {
        search: $("#tech-search").val()
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


$(document).on("click", "#search-item", ()=>{
$.ajax({
    url: "./api/item-to-search",
    type: "POST",
    dataType: "json",
    data: {
        search: $("#item-search").val()
    },
    success: (data) => { 

    $("#products-lists").empty();

    $('#pagination-container').pagination({
        dataSource: data.products,
        pageSize: 9,
        callback: function(items, pagination) { 
            $("#products-lists").empty();

            for (let i = 0; i < items.length; i++) { 

                $("#products-lists").append(`
                    <div class="col-12 col-lg-4 col-md-6">
                        <div class="card product shadow" >

                            <div class="card-content">
                                <div class="card-body">
                                    <h5 style="white-space: nowrap; width: 250px; overflow: hidden; text-overflow: ellipsis;">${items[i].title}</h5>
                                    <p>₱${Number(items[i].price).toLocaleString("en")}.00</p>
                                    ${items[i].ratings[0].average}
                                    <div id="basic-${i}" class="star-rating" style="width: 160px; height: 32px; background-size: 32px;" title="3/5">
                                    </div>
                                </div>
                                <img style="height: 221px;" class="img-fluid w-100" src="${items[i].image}" alt="Card image cap">
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="./product-${items[i].id}" class="btn btn-light-primary">View More</a>
                            </div>

                        </div>
                    </div>
                `);

                raterJs({
                        max:5, 
                        rating: Number(items[i].ratings[0].average), 
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



        }
    });    


    } 
  });
});


$(document).on("keyup", "#item-search", ()=>{

if ($("#item-search").val() === "") {
$("#browsers").empty();
}else{
$.ajax({
    url: "./api/item-search",
    type: "POST",
    dataType: "json",
    data: {
        search: $("#item-search").val()
    },
    success: (data) => { 

    $("#browsers").empty();

    $.each(data.result, (i, item)=>{
      $("#browsers").append(`
        <option value="${item.title}">  
        `)
    })

    } 
  });
}

});



page("/home", ()=>{

clearInterval(interval);



$.ajax({
    url: "./api/authenticate",
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

    document.getElementById('home').setAttribute("class", "menu-link myactive");

    $("#home-only").show();
    $("#tech-only").hide();
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
        dataSource: data.products,
        pageSize: 9,
        callback: function(items, pagination) { 
            $("#products-lists").empty();

            for (let i = 0; i < items.length; i++) { 

                $("#products-lists").append(`
                    <div class="col-12 col-lg-4 col-md-6">
                        <div class="card product shadow" >

                            <div class="card-content">
                                <div class="card-body">
                                    <h5 style="white-space: nowrap; width: 250px; overflow: hidden; text-overflow: ellipsis;">${items[i].title}</h5>
                                    <p>₱${Number(items[i].price).toLocaleString("en")}.00</p>
                                    ${items[i].ratings[0].average}
                                    <div id="basic-${i}" class="star-rating" style="width: 160px; height: 32px; background-size: 32px;" title="3/5">
                                    </div>
                                </div>
                                <img style="height: 221px;" class="img-fluid w-100" src="${items[i].image}" alt="Card image cap">
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="./product-${items[i].id}" class="btn btn-light-primary">View More</a>
                            </div>

                        </div>
                    </div>
                `);

                raterJs({
                        max:5, 
                        rating: Number(items[i].ratings[0].average), 
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



        }
    });    


    }

 });   


$(document).on("click", "#sell-products", (e)=>{

let randomid = Math.floor(Math.random() * 100000);

$("#sell-modal").data("id", e.target.dataset.id);
$("#sell-modal").data("randomid", randomid);

$("#sell-modal").modal("show");

    FilePond.create(document.querySelector(".imgbb-filepond-seller"), {
      credits: null,
      allowImagePreview: false,
      server: {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
          // We ignore the metadata property and only send the file

          const formData = new FormData()
          formData.append(fieldName, file, file.name)

          const request = new XMLHttpRequest()
          // you can change it by your client api key
          request.open(
            "POST",
            "./api/"+randomid+"/upload-image-product"
          )

          request.upload.onprogress = (e) => {
            progress(e.lengthComputable, e.loaded, e.total)
          }

          request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
              load(request.responseText)
            } else {
              error("oh no")
            }
          }

          request.onreadystatechange = function () {
            if (this.readyState == 4) {
              if (this.status == 200) {
                let response = JSON.parse(this.responseText)

                Toastify({
                  text: "Success uploading to server!",
                  duration: 3000,
                  close: true,
                  gravity: "bottom",
                  position: "right",
                  backgroundColor: "#4fbe87",
                }).showToast()

                console.log(response)
              } else {
                Toastify({
                  text: "Failed uploading to server! see console f12",
                  duration: 3000,
                  close: true,
                  gravity: "bottom",
                  position: "right",
                  backgroundColor: "#ff0000",
                }).showToast()

                console.log("Error", this.statusText)
              }
            }
          }

          request.send(formData)
        },
      },
    }); 

});


});

$(document).on("click", "#insert-seller-post", ()=>{

$.ajax({
    url: "./api/insert-seller-post",
    type: "POST",
    dataType: "json",
    data: {
        subject: $("#product-subject").val(),
        category: $("#product-category").val(),
        details: $("#product-details").val(),
        contact: $("#product-contact").val(),
        randomid: $("#sell-modal").data("randomid"),
        userid: $("#sell-modal").data("id"),
        price: $("#product-price").val()
    },
    success: (data) => {  
        $("#sell-modal").modal("hide");
        page("/home");    
    } 
});


$("#sell-modal").data("id", e.target.dataset.id);
$("#sell-modal").data("randomid", randomid);

});


$(document).on("click", "#login", ()=>{

$("#login-user-modal").modal("show");

});


$(document).on("click", "#login-user-data", ()=>{

$.ajax({
    url: "./api/login-user",
    type: "POST",
    dataType: "json",
    data: {
        email: $("#login-user-email").val(),
        password: $("#login-user-pass").val(),
    },
    success: (data) => { 

    if (data.status == 1) {
    $("#login-user-modal").modal("hide");  

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
                    <img src="assets/images/faces/1.jpg" alt="Avatar">
                </div>
                <div class="text">
                    <h6 class="user-dropdown-name">${data.user[0].username}</h6>
                    <p class="user-dropdown-status text-sm text-muted">User</p>
                </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end shadow-lg" aria-labelledby="topbarUserDropdown">
                <li>
                    <i class="bi bi-person"></i>
                    <a class="dropdown-item" href="./account" data-id="${data.user[0].id}" data-name="${data.user[0].username}" data-email="${data.user[0].email}">My Account</a>
                </li>
              
                <li><hr class="dropdown-divider"></li>
                <li>
                        <a href="./messages-${data.user[0].id}-${data.user[0].user_status}" class="dropdown-item" id="my-messages" data-id="${data.user[0].id}" data-name="${data.user[0].username}" data-email="${data.user[0].email}">
                        <i class="bi bi-chat-dots"></i> Messages</a>
                </li>
                
                <li><hr class="dropdown-divider"></li>
                
                <li><a class="dropdown-item" id="logout">Logout</a></li>
            </ul>
        </div>
        <!-- Burger button responsive -->
        <a id="side-trigger" data-hide="0" class="burger-btn d-block d-xl-none" >
            <i class="bi bi-justify fs-3" style="pointer-events: none;"></i>
        </a>
    `);
    location.reload();
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

$(document).on("click", "#register", (e)=>{

$("#register-guest-modal").modal("show");

});


$(document).on("click", "#submit-user-data", ()=>{

    $.ajax({
        url: "./api/register-user",
        type: "POST",
        dataType: "json",
        data: {
            email: $("#user-email").val(),
            username: $("#user-username").val(),
            password: $("#user-pass").val(),
            type: $("#account-type").val()
        },
        success: (data) => { 

        $("#register-guest-modal").modal("hide");  

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
          title: 'Registered successfully'
        });

        }
     });   

});


$(document).on("click", "#logout", ()=>{

    $.ajax({
        url: "./api/logout",
        type: "POST",
        dataType: "json",
        data: {
            data: 1
        },
        success: (data) => { 
    // $("#user-auth").empty().append(`
    //     <button id="login" class="btn btn-outline-primary">Login</button>
    //     <button id="register" class="btn btn-outline-primary">Register</button>
    //     <!-- Burger button responsive -->
    //     <a href="#" class="burger-btn d-block d-xl-none">
    //         <i class="bi bi-justify fs-3"></i>
    //     </a>
    // `);  

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






page("/product-:productid", (e)=>{ 



$.ajax({
    url: "./api/view-product",
    type: "POST",
    dataType: "json",
    data: {
        id: e.params.productid
    },
    success: (data) => { 

    $("#main-element").empty();
    $("#main-element").html(guestTemplate).show();  

    const collection = document.getElementsByClassName("menu-link");

    for (let i = 0; i < collection.length; i++) {
        document.getElementById(collection[i].attributes[2].nodeValue).setAttribute("class", "menu-link");
    }

    document.getElementById('home').setAttribute("class", "menu-link myactive");

    $("#home-only").hide();
    $("#tech-only").hide();
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

        $("#products-lists").empty().append(`

         <div class="row">
            
            <div class="col-md-6">
                <div class="card-body shadow" >
                    <div class="row" id="product-images">
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card shadow">
                <div class="card-header">
                    <h4>${data.products[0].title}</h4>
                    <p>${data.products[0].details}</p>
                    <span class="badge bg-light-primary">₱${Number(data.products[0].price).toLocaleString("en")}.00</span> <br><br>
                    <div id="product-rate" class="star-rating" style="width: 160px; height: 32px; background-size: 32px;" title="3/5">
                    </div>
                     | ${data.products[0].ratings[0].count} ratings
                            <button class="btn btn-sm btn-primary" data-id="${data.products[0].id}" id="rate-product">
                                <i class="bi bi-star-half" style="pointer-events: none;"></i>
                            </button>
                </div>
                <div class="card-body" >
                    <div class="card-header shadow">
                        <div class="media d-flex align-items-center">
                            <div class="avatar me-3">
                                <img src="${data.products[0].userprof[0].url}" alt="" srcset="">
                                <span class="avatar-status ${data.products[0].userprof[0].active == 1 ? 'bg-success' : 'bg-secondary'}"></span>
                            </div>
                            <div class="name flex-grow-1">
                                <h6 class="mb-0">${data.products[0].userprof[0].username} ${data.products[0].verified[0].verified_status == 1 ? '<i style="color: green" class="bi bi-patch-check-fill"></i>' : '<i class="bi bi-patch-exclamation-fill"></i>'}</h6>
                                <span class="text-xs">${data.products[0].userprof[0].active == 1 ? 'Online' : 'Offline'}</span>
                            </div>
                            <a href="./chatbox-${data.products[0].userid}" class="btn btn-sm btn-primary" style="${data.login == 1 ? '' : 'pointer-events: none'}; display: ${data.user[0].id == data.products[0].userid ? 'none' : 'block'}" >
                                <i class="bi bi-chat-dots"></i>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>

         </div> 

        <div class="divider">
            <div class="divider-text">Comments</div>
        </div>

        <div class="row">
            <div class="form-group mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Write a comment</label>
                <textarea id="created-comment" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                <button data-id="${data.products[0].id}" id="post-comment" class="btn btn-primary btn-sm float-end" style="margin-top: 5px;">Post comment</button>
            </div>

            <div class="row" id="list-comments">

    


            </div>
        </div>

        <div class="divider">
            <div class="divider-text">Suggested Products</div>
        </div>

        <div class="row">

        </div>

        `);


    }

        $("#products-lists").empty().append(`

         <div class="row">
            
            <div class="col-md-6">
                <div class="card-body shadow" >
                    <div class="row" id="product-images">
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card shadow">
                <div class="card-header">
                    <h4>${data.products[0].title}</h4>
                    <p>${data.products[0].details}</p>
                    <span class="badge bg-light-primary">₱${Number(data.products[0].price).toLocaleString("en")}.00</span> <br><br>
                    <div id="product-rate" class="star-rating" style="width: 160px; height: 32px; background-size: 32px;" title="3/5">
                    </div>
                     | ${data.products[0].ratings[0].count} ratings
                            <button class="btn btn-sm btn-primary" data-id="${data.products[0].id}" id="rate-product">
                                <i class="bi bi-star-half" style="pointer-events: none;"></i>
                            </button>
                </div>
                <div class="card-body" >
                    <div class="card-header shadow">
                        <div class="media d-flex align-items-center">
                            <div class="avatar me-3">
                                <img src="${data.products[0].userprof[0].url}" alt="" srcset="">
                                <span class="avatar-status ${data.products[0].userprof[0].active == 1 ? 'bg-success' : 'bg-secondary'}"></span>
                            </div>
                            <div class="name flex-grow-1">
                                <h6 class="mb-0">${data.products[0].userprof[0].username} ${data.products[0].verified[0].verified_status == 1 ? '<i style="color: green" class="bi bi-patch-check-fill"></i>' : '<i class="bi bi-patch-exclamation-fill"></i>'}</h6>
                                <span class="text-xs">${data.products[0].userprof[0].active == 1 ? 'Online' : 'Offline'}</span>
                            </div>
                            <a href="./chatbox-${data.products[0].userid}" class="btn btn-sm btn-primary" style="${data.login == 1 ? '' : 'pointer-events: none'}; " >
                                <i class="bi bi-chat-dots"></i>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>

         </div> 

        <div class="divider">
            <div class="divider-text">Comments</div>
        </div>

        <div class="row">
            <div class="form-group mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Write a comment</label>
                <textarea id="created-comment" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                <button data-id="${data.products[0].id}" id="post-comment" class="btn btn-primary btn-sm float-end" style="margin-top: 5px;">Post comment</button>
            </div>

            <div class="row" id="list-comments">

    


            </div>
        </div>

        <div class="divider">
            <div class="divider-text">Suggested Products</div>
        </div>

        <div class="row">

        </div>

        `);

        $.each(data.products[0].comments, (i, com)=>{

          $("#list-comments").append(`
            <div class="card-header shadow">
                <div class="media d-flex align-items-center">
                    <div class="avatar me-3">
                        <img src="${com.url}" alt="" srcset="">
                        
                    </div>
                    <div class="name flex-grow-1">
                        <h6 class="mb-0">${com.username}</h6>
                        <span class="text-xs">${com.date}</span>
                    </div>
                </div>
                <p style="margin-left: 46px;">${com.comment}</p>
            </div>
          `)  

        });


        raterJs({
                max:5, 
                rating: Number(data.products[0].ratings[0].average), 
                element:document.querySelector("#product-rate"), 
                disableText:"Custom disable text!", 
                ratingText:"My custom rating text {rating}",
                showToolTip:true,
                rateCallback:function rateCallback(rating, done) {
                    starRating.setRating(rating); 
                    starRating.disable(); 
                    done(); 
                }
            })

       $.each(data.products[0].image, (i, img) => {

        $("#product-images").append(`

            <div class="col-md-6">
            <div class="card shadow-lg">
            <a href="${img.url}" data-fancybox="gallery" data-caption="Optional caption" >
                <img src="${img.url}" style="height: 180px" width="180px" />
            </a>
            </div>
            </div>

            `);



       }); 

      Fancybox.bind('[data-fancybox="gallery"]', {
        infinite: false,

      });


    }

 });   

})


 $(document).on("click", "#post-comment", (e)=>{

    $.ajax({
        url: "./api/checking",
        type: "POST",
        dataType: "json",
        data: {
            data: 1
        },
        success: (data) => { 

        if (data.login == 1) {

            $.ajax({
                url: "./api/insert-comment",
                type: "POST",
                dataType: "json",
                data: {
                    productid: e.target.dataset.id,
                    comment: $("#created-comment").val()
                },
                success: (data) => {
                    $("#created-comment").val("");
                    page("/product-"+e.target.dataset.id); 
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
                      title: 'Posted successfully'
                    })
                } 
            });

        }else{

          $("#login-user-modal").modal("show");    

        } 

        } 
    });

 });


 $(document).on("click", "#rate-product", (e)=>{


    $.ajax({
        url: "./api/checking",
        type: "POST",
        dataType: "json",
        data: {
            data: 1
        },
        success: (data) => { 

        if (data.login == 1) {
            $("#rating-modal").modal("show");
            raterJs({
                starSize:32,
                element:document.querySelector("#product-to-rate"),
                rateCallback:function rateCallback(rating, done) {

                $.ajax({
                    url: "./api/rate-product",
                    type: "POST",
                    dataType: "json",
                    data: {
                        productid: e.target.dataset.id,
                        rating: rating
                    },
                    success: (data) => { 
                    page("/product-"+e.target.dataset.id);    
                    $("#rating-modal").modal("hide");    
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


var interval;

page("/chatbox-:userid", (e)=>{ 


$.ajax({
    url: "./api/view-message",
    type: "POST",
    dataType: "json",
    data: {
        // productid: e.params.productid,
        userid: e.params.userid
    },
    success: (data) => { 

    $("#main-element").empty();
    $("#main-element").html(guestTemplate).show();  

    const collection = document.getElementsByClassName("menu-link");

    for (let i = 0; i < collection.length; i++) {
        document.getElementById(collection[i].attributes[2].nodeValue).setAttribute("class", "menu-link");
    }

    document.getElementById('home').setAttribute("class", "menu-link myactive");

    $("#home-only").hide();
    $("#tech-only").hide();

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

        $("#products-lists").empty().append(`

         <div class="row">
            
          <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="media d-flex align-items-center">
                            <div class="avatar me-3">
                                <img src="${data.receiver[0].url}" alt="" srcset="">
                                <span class="avatar-status ${data.receiver[0].active == 1 ? 'bg-success' : 'bg-secondary'}"></span>
                            </div>
                            <div class="name flex-grow-1">
                                <h6 class="mb-0">${data.receiver[0].username}</h6>
                                <span class="text-xs">${data.receiver[0].active == 1 ? 'Online' : 'Offline'}</span>
                            </div>
 
                        </div>
                    </div>
                    <div class="divider">
                        <div class="divider-text">Conversations</div>
                    </div>
                    <div class="card-body pt-4 bg-grey">
                        <div class="chat-content" style="height: 400px; overflow: auto;" id="chat-content">


                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="message-form d-flex flex-direction-column align-items-center">

                            <div class="d-flex flex-grow-1 ml-4" style="margin-right: 4px;">
                                <span data-id="${data.receiver[0].id}" style="cursor: pointer;" id="upload-file" class="input-group-text"><i style="pointer-events: none;" class="bi bi-image"></i></span>
                                <input type="text" id="text-message" class="form-control" placeholder="Type your message..">
                            </div>
                            <button id="send-text" data-id="${data.receiver[0].id}" class="btn btn-primary"><i style="pointer-events: none;" class="bi bi-send"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        `);

        $.each(data.messages, (i, mes)=>{

          if (mes.sender == data.user[0].id) {

            if (mes.file_status == 0) {
            $("#chat-content").append(`

                <div class="chat" style="margin-right: 10px;">
                    <div class="chat-body">
                        <div class="chat-message">${mes.text}</div>
                    </div>
                </div>
            `)
            }else{
            $("#chat-content").append(`

                <div class="chat" style="margin-right: 10px;">
                    <div class="chat-body">
                        <div class="chat-message" ><img class="box" id="view-image" data-url="${mes.text}" src="${mes.text}" ></div>
                    </div>
                </div>
            `)
            }

          }else{

            if (mes.file_status == 0) {
            $("#chat-content").append(`

              <div class="chat chat-left" style="margin-right: 10px;">
                  <div class="chat-body">
                      <div class="chat-message">${mes.text}</div>
                  </div>
              </div>

            `)
            }else{
            $("#chat-content").append(`

              <div class="chat chat-left" style="margin-right: 10px;">
                  <div class="chat-body">
                       <div class="chat-message" ><img class="box" id="view-image" data-url="${mes.text}"  src="${mes.text}" ></div>
                  </div>
              </div>

            `)
            }

          }

        });


        $('#chat-content').animate({
            scrollTop: $('#chat-content').get(0).scrollHeight
        }, 1500);


        clearInterval(interval);

        var count = 0;

        interval = setInterval(function() {
          $.ajax({
          url: "./api/get-single-message",
          type: "POST",
          data: {
            userid: data.receiver[0].id
          },
          success: (data)=>{  

            if (count ==  data.count) {
                console.log(count, data.messages);
            }else{
                console.log(data.new[0].message);

              if (data.new[0].file_status == 0) {
              $("#chat-content").append(`

                <div class="chat chat-left" style="margin-right: 10px;">
                    <div class="chat-body">
                        <div class="chat-message">${data.new[0].text}</div>
                    </div>
                </div>

              `)
              }else{
              $("#chat-content").append(`

                <div class="chat chat-left" style="margin-right: 10px;">
                    <div class="chat-body">
                         <div class="chat-message" ><img class="box" id="view-image" data-url="${data.new[0].text}"  src="${data.new[0].text}" ></div>
                    </div>
                </div>

              `)
              }
                count = data.count;

                $('#chat-content').animate({
                    scrollTop: $('#chat-content').get(0).scrollHeight
                }, 1500);


            }


        }
        })
        }, 3000);




    }else{

    }


    }

    });

 })

$(document).on("click", "#view-image", (e)=>{

$("#view-image-modal").modal("show");
console.log(e.target.dataset);
$("#image-body").empty().append(`
<img src="${e.target.dataset.url}" style="height: 100%; width: 100%;">
`);

});


$(document).on("click", "#upload-file", (e)=>{


$("#upload-modal").modal("show");

  FilePond.create(document.querySelector(".imgbb-filepond-file"), {
    credits: null,
    allowImagePreview: true,
    server: {
      process: (fieldName, file, metadata, load, error, progress, abort) => {
        // We ignore the metadata property and only send the file

        const formData = new FormData()
        formData.append(fieldName, file, file.name)

        const request = new XMLHttpRequest()
        // you can change it by your client api key
        request.open(
          "POST",
          "./api/upload-file-chat/"+e.target.dataset.id
        )

        request.upload.onprogress = (e) => {
          progress(e.lengthComputable, e.loaded, e.total)
        }

        request.onload = function () {
          if (request.status >= 200 && request.status < 300) {
            load(request.responseText)
          } else {
            error("oh no")
          }
        }

        request.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              let response = JSON.parse(this.responseText)
              $("#upload-modal").modal("hide");
              $("#chat-content").append(`

                  <div class="chat" style="margin-right: 10px;">
                      <div class="chat-body">
                          <div class="chat-message "><img  class="box" id="view-image" data-url="${response.response}" src="${response.response}" ></div>
                      </div>
                  </div>
              `)

              $('#chat-content').animate({
                  scrollTop: $('#chat-content').get(0).scrollHeight
              }, 1500);


              Toastify({
                text: "Success uploading to server!",
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "right",
                backgroundColor: "#4fbe87",
              }).showToast()

              console.log(response)
            } else {
              Toastify({
                text: "Failed uploading to server! see console f12",
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "right",
                backgroundColor: "#ff0000",
              }).showToast()

              console.log("Error", this.statusText)
            }
          }
        }

        request.send(formData)
      },
    },
  }); 


});


$(document).on("click", "#send-text", (e)=>{

  $.ajax({
      url: "./api/send-message",
      type: "POST",
      dataType: "json",
      data: {
          userid: e.target.dataset.id,
          text: $("#text-message").val()
      },
      success: (data) => { 
      $("#chat-content").append(`

          <div class="chat" style="margin-right: 10px;">
              <div class="chat-body">
                  <div class="chat-message">${$("#text-message").val()}</div>
              </div>
          </div>
      `)
      $("#text-message").val("");  
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
        title: 'Sent successfully'
      });

      $('#chat-content').animate({
          scrollTop: $('#chat-content').get(0).scrollHeight
      }, 1500);


      }
    });

});



page("/messages-:id-:status", (e)=>{



  $.ajax({
      url: "./api/get-messages",
      type: "POST",
      dataType: "json",
      data: {
          userid: e.params.id,
          status: e.params.status
      },
      success: (data) => { 
      
      console.log(data);

      $("#main-element").empty();
      $("#main-element").html(guestTemplate).show();  

      const collection = document.getElementsByClassName("menu-link");

      for (let i = 0; i < collection.length; i++) {
          document.getElementById(collection[i].attributes[2].nodeValue).setAttribute("class", "menu-link");
      }

      document.getElementById('home').setAttribute("class", "menu-link myactive");

      $("#home-only").hide();
      $("#tech-only").hide();

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

        $("#products-lists").empty().append(`

         <div class="row" id="list-groups">
            <h4>List of Conversations</h4>
         </div>

        `);

        $.each(data.group, (i, group)=>{
   
          if (group.user_status == 0) {
          $("#list-groups").append(`
          <div class="col-md-6">
            <div class="card shadow">
                <div class="card-body py-4 px-4">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-xl">
                            <img src="${group.url}" alt="Face 1">
                        </div>
                        <div class="ms-3 name">
                            <h5 class="font-bold">${group.username}</h5>
                            <span class="badge bg-light-success">Buyer</span>
                            ${group.active == 1 ? '<span class="badge bg-light-success">Active</span>' : '<span class="badge bg-light-secondary">Offline</span>'}
                        </div>

                    </div>
                    <a href="./chatbox-${group.userid}" class="btn btn-primary float-end"><i class="bi bi-chat-dots"></i></a>
                </div>
            </div>
          </div>
          `);
          }else if (group.user_status == 1) {
          $("#list-groups").append(`
          <div class="col-md-6">
            <div class="card shadow">
                <div class="card-body py-4 px-4">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-xl">
                            <img src="${group.url}" alt="Face 1">
                        </div>
                        <div class="ms-3 name">
                            <h5 class="font-bold">${group.username}</h5>
                            <span class="badge bg-light-warning">Seller</span>
                            ${group.active == 1 ? '<span class="badge bg-light-success">Active</span>' : '<span class="badge bg-light-secondary">Offline</span>'}
                        </div>

                    </div>
                    <a href="./chatbox-${group.userid}" class="btn btn-primary float-end"><i class="bi bi-chat-dots"></i></a>
                </div>
            </div>
          </div>
          `);
          }else if (group.user_status == 2) {
          $("#list-groups").append(`
          <div class="col-md-6">
            <div class="card shadow">
                <div class="card-body py-4 px-4">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-xl">
                            <img src="${group.url}" alt="Face 1">
                        </div>
                        <div class="ms-3 name">
                            <h5 class="font-bold">${group.username}</h5>
                            <span class="badge bg-light-info">Technician</span>
                            ${group.active == 1 ? '<span class="badge bg-light-success">Active</span>' : '<span class="badge bg-light-secondary">Offline</span>'}
                        </div>

                    </div>
                    <a href="./chatbox-${group.userid}" class="btn btn-primary float-end"><i class="bi bi-chat-dots"></i></a>
                </div>
            </div>
          </div>
          `);
          }

        });


        // $.each(data.group1, (i, group)=>{
   
        //   if (group.user_status == 0) {
        //   $("#list-groups").append(`
        //   <div class="col-md-6">
        //     <div class="card shadow">
        //         <div class="card-body py-4 px-4">
        //             <div class="d-flex align-items-center">
        //                 <div class="avatar avatar-xl">
        //                     <img src="${group.url}" alt="Face 1">
        //                 </div>
        //                 <div class="ms-3 name">
        //                     <h5 class="font-bold">${group.username}</h5>
        //                     <span class="badge bg-light-success">Buyer</span>
        //                     ${group.active == 1 ? '<span class="badge bg-light-success">Active</span>' : '<span class="badge bg-light-secondary">Offline</span>'}
        //                 </div>

        //             </div>
        //             <a href="./chatbox-${group.productid}" class="btn btn-primary float-end"><i class="bi bi-chat-dots"></i></a>
        //         </div>
        //     </div>
        //   </div>
        //   `);
        //   }else if (group.user_status == 1) {
        //   $("#list-groups").append(`
        //   <div class="col-md-6">
        //     <div class="card shadow">
        //         <div class="card-body py-4 px-4">
        //             <div class="d-flex align-items-center">
        //                 <div class="avatar avatar-xl">
        //                     <img src="${group.url}" alt="Face 1">
        //                 </div>
        //                 <div class="ms-3 name">
        //                     <h5 class="font-bold">${group.username}</h5>
        //                     <span class="badge bg-light-warning">Seller</span>
        //                     ${group.active == 1 ? '<span class="badge bg-light-success">Active</span>' : '<span class="badge bg-light-secondary">Offline</span>'}
        //                 </div>

        //             </div>
        //             <a href="./chatbox-${group.productid}" class="btn btn-primary float-end"><i class="bi bi-chat-dots"></i></a>
        //         </div>
        //     </div>
        //   </div>
        //   `);
        //   }else if (group.user_status == 2) {
        //   $("#list-groups").append(`
        //   <div class="col-md-6">
        //     <div class="card shadow">
        //         <div class="card-body py-4 px-4">
        //             <div class="d-flex align-items-center">
        //                 <div class="avatar avatar-xl">
        //                     <img src="${group.url}" alt="Face 1">
        //                 </div>
        //                 <div class="ms-3 name">
        //                     <h5 class="font-bold">${group.username}</h5>
        //                     <span class="badge bg-light-info">Technician</span>
        //                     ${group.active == 1 ? '<span class="badge bg-light-success">Active</span>' : '<span class="badge bg-light-secondary">Offline</span>'}
        //                 </div>

        //             </div>
        //             <a href="./chatbox-${group.productid}" class="btn btn-primary float-end"><i class="bi bi-chat-dots"></i></a>
        //         </div>
        //     </div>
        //   </div>
        //   `);
        //   }

        // });




      }
    });


});


page("/account", ()=>{


$.ajax({
    url: "./api/authenticate",
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

    document.getElementById('home').setAttribute("class", "menu-link myactive");


    var role = '';

    if (data.user[0].user_status == 1) {
        role = 'Seller';
    }else if (data.user[0].user_status == 2) {
        role = 'Technician';
    }else if (data.user[0].user_status == 0) {
        role = 'Buyer';    
    }


    $("#home-only").hide();
    $("#tech-only").hide();

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

  let percent = 35;

  if (data.info[0].contact == 0) {

  }else{
      percent = percent+20;
  } 


  if (data.info[0].address == 0) {

  }else{
    percent = percent+20;
  }

  if (data.info[0].verified_status == 0) {

  }else{
    percent = percent+25;
  }

  if (data.user[0].user_status == 0) {

      $("#list-of-vet").empty().append(buyerTemplate(data)); 

  }else if (data.user[0].user_status == 1) {
      $("#list-of-vet").empty().append(sellerTemplate(data, percent)); 
      $("#my-list-items").empty();

      $('#pagination-container-user').pagination({
          dataSource: data.myproducts,
          pageSize: 9,
          callback: function(items, pagination) { 

              console.log(items)
              for (let i = 0; i < items.length; i++) { 

                  $("#my-list-items").append(`
                      <div class="col-12 col-lg-4 col-md-6">
                          <div class="card product shadow" >

                              <div class="card-content">
                                  <div class="card-body">
                                      <h5 style="white-space: nowrap; width: 250px; overflow: hidden; text-overflow: ellipsis;">${items[i].title}</h5>
                                      <p>₱${Number(items[i].price).toLocaleString("en")}.00</p>
                                      ${items[i].ratings[0].average}
                                      <div id="basic-${i}" class="star-rating" style="width: 160px; height: 32px; background-size: 32px;" title="3/5">
                                      </div>
                                  </div>
                                  <img style="height: 221px;" class="img-fluid w-100" src="${items[i].image}" alt="Card image cap">
                              </div>
                              <div class="card-footer">
                                  <button data-id="${items[i].id}" id="edit-item" class="btn btn-primary btn-sm">Edit</button>
                                  <button data-id="${items[i].id}" id="delete-item" class="btn btn-danger btn-sm">Delete</button>
                              </div>

                          </div>
                      </div>
                  `);

                  raterJs({
                          max:5, 
                          rating: Number(items[i].ratings[0].average), 
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



          }
      });    

  }else if (data.user[0].user_status == 2) {
  $("#list-of-vet").empty().append(techTemplate(data)); 

  $.each(data.services[0].services, (i, s)=>{

    $("#services-body").append(`
      <span class="badge bg-primary">
        <i class="bi bi-bookmark-star"></i> 
          ${s.service} 
        <i data-id="${s.id}" data-service="${s.service}" id="edit-service" style="cursor: pointer;" class="bi bi-pencil"></i> | 
        <i style="cursor: pointer;" class="bi bi-trash3"></i>
      </span>
    `);

  });

  }    

    FilePond.create(document.querySelector(".imgbb-filepond-45"), {
      credits: null,
      allowImagePreview: true,
      server: {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
          // We ignore the metadata property and only send the file

          const formData = new FormData()
          formData.append(fieldName, file, file.name)

          const request = new XMLHttpRequest()
          // you can change it by your client api key
          request.open(
            "POST",
            "./api/"+data.info[0].user_id+"/upload-verify"
          )

          request.upload.onprogress = (e) => {
            progress(e.lengthComputable, e.loaded, e.total)
          }

          request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
              load(request.responseText)
            } else {
              error("oh no")
            }
          }

          request.onreadystatechange = function () {
            if (this.readyState == 4) {
              if (this.status == 200) {
                let response = JSON.parse(this.responseText)

                $("#update-picture-modal").modal("hide");

                // page("/account"); 

                Toastify({
                  text: "Success uploading to server!",
                  duration: 3000,
                  close: true,
                  gravity: "bottom",
                  position: "right",
                  backgroundColor: "#4fbe87",
                }).showToast()

                console.log(response)
              } else {
                Toastify({
                  text: "Failed uploading to server! see console f12",
                  duration: 3000,
                  close: true,
                  gravity: "bottom",
                  position: "right",
                  backgroundColor: "#ff0000",
                }).showToast()

                console.log("Error", this.statusText)
              }
            }
          }

          request.send(formData)
        },
      },
    }); 

  
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })    

  }

});  

}); 

$(document).on("click", "#edit-item", (e)=>{

$.ajax({
    url: "./api/get-item",
    type: "POST",
    dataType: "json",
    data: {
        id: e.target.dataset.id
    },
    success: (data) => { 

    $("#edit-sell-modal").modal("show");
    $("#edit-sell-modal").data("id", e.target.dataset.id);  
    $("#edit-product-subject").val(data.item[0].title);
    $("#edit-product-price").val(data.item[0].price);
    $("#edit-product-contact").val(data.item[0].contact);
    $("#edit-product-details").val(data.item[0].details);

    $("#"+data.item[0].category).attr("selected", "");

    } 
  });

});

$(document).on("click", "#update-seller-post", (e)=>{

$.ajax({
    url: "./api/update-item",
    type: "POST",
    dataType: "json",
    data: {
        id: $("#edit-sell-modal").data("id"),
        title: $("#edit-product-subject").val(),
        price: $("#edit-product-price").val(),
        contact: $("#edit-product-price").val(),
        details:  $("#edit-product-details").val(),
        category: $("#edit-product-category").val()
    },
    success: (data) => { 

    $("#edit-sell-modal").modal("hide");
    page("/account");


    } 
  });

});


const sellerTemplate = (data, percent) => `

    <div class="col-12 col-lg-3">
        <div class="card shadow">
            <div class="card-body py-4 px-4">
                <div class="d-flex align-items-center">
                    <div class="avatar avatar-xl">
                        <img src="${data.user[0].url}" id="update-picture" style="cursor: pointer;" data-id="${data.user[0].id}" alt="Face 1">

                    </div>
                    <div class="ms-3 name">
                        <h5 class="font-bold">${data.user[0].username} ${data.info[0].verified_status == 1 ? '<i class="bi bi-patch-check-fill" style="color: green;" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified"></i>' : '<i class="bi bi-patch-exclamation-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="Not Verified"></i>'}</h5>
                        <h6 class="text-muted mb-0">${data.user[0].user_status == 1 ? 'Seller' : data.user[0].user_status == 2 ? 'Tech' : 'Buyer'}</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow">
            <div class="card-header">
                <h4>Profile Validation Progress</h4>
            </div>
            <div class="card-content pb-4">
              <div class="card-body">
                <div class="progress progress-success  mb-4">
                    <div class="progress-bar progress-label" role="progressbar" style="width: ${percent}%" aria-valuenow="${percent}"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
        </div>
        <div class="card shadow">
            <div class="card-header">
                <h4>Information</h4>
            </div>
            <div class="card-content pb-4">
                    <div class="recent-message d-flex px-4 py-3">
                        <div class="name ms-4">
                            <h5 class="mb-1">${data.user[0].email}</h5>
                            <h6 class="text-muted mb-0"><i class="bi bi-envelope"></i> Email</h6>
                        </div>
                    </div>
                    <div class="recent-message d-flex px-4 py-3">
                        <div class="name ms-4">
                            <h5 class="mb-1">${data.info[0].address == 0 ? 'Not set' : data.info[0].address} 
                            <i data-address="${data.info[0].address == 0 ? '' : data.info[0].address}" data-id="${data.user[0].id}" id="set-address" style="cursor: pointer; font-size: 15px;" class="bi bi-pencil"></i></h5>
                            <h6 class="text-muted mb-0"><i class="bi bi-geo-alt"></i> Address</h6>
                        </div>
                    </div>
                    <div class="recent-message d-flex px-4 py-3">
                        <div class="name ms-4">
                            <h5 class="mb-1">${data.info[0].contact == 0 ? 'Not set' : data.info[0].contact}  
                            <i data-contact="${data.info[0].contact == 0 ? '' : data.info[0].contact}" data-id="${data.user[0].id}" id="set-contact" style="cursor: pointer; font-size: 15px;" class="bi bi-pencil"></i></h5>
                            <h6 class="text-muted mb-0"><i class="bi bi-telephone"></i> Contact Number</h6>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <div class="col-12 col-lg-9">
      <div class="card shadow">
          <div class="card-header">
              <h4>Login Information</h4>
          </div>
          <div class="card-body">

          <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
              </li>
              <li class="nav-item" role="presentation">
                  <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" tabindex="-1">Password</a>
              </li>
              <li class="nav-item" role="presentation">
                  <a class="nav-link" id="verify-tab" data-bs-toggle="tab" href="#verify" role="tab" aria-controls="verify" aria-selected="false" tabindex="-1">Upload Valid ID</a>
              </li>
          </ul>
          <div class="tab-content" id="myTabContent">

              <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">

              <br>
              <div class="form-body">
                  <div class="row">

                      <div class="col-12">
                          <div class="form-group has-icon-left">
                              <label for="first-name-icon">Username</label>
                              <div class="position-relative">
                                  <input type="text" class="form-control" value="${data.user[0].username}" id="user-account-username">
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
                                  <input type="text" class="form-control" value="${data.user[0].email}"  id="user-account-email">
                                  <div class="form-control-icon">
                                      <i class="bi bi-envelope"></i>
                                  </div>
                              </div>
                          </div>
                      </div>


                      <div class="col-12 d-flex justify-content-end">
                          <button type="button" class="btn btn-primary me-1 mb-1" id="update-user-info" data-id="${data.user[0].id}">Update</button>

                      </div>

                  </div>

              </div>    

              </div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

              <br>
              <div class="form-body">
                  <div class="row">

                      <div class="col-12">
                          <div class="form-group has-icon-left">
                              <label for="first-name-icon">Old Password</label>
                              <div class="position-relative">
                                  <input type="password" class="form-control"   id="user-account-password-old">
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
                                  <input type="password" class="form-control" id="usesr-account-password-new">
                                  <div class="form-control-icon">
                                      <i class="bi bi-key"></i>
                                  </div>
                              </div>
                          </div>

                      </div>


                      <div class="col-12 d-flex justify-content-end">
                          <button type="button" class="btn btn-primary me-1 mb-1" id="update-user-password" data-id="${data.user[0].id}">Update Password</button>

                      </div>

                  </div>

              </div>

              </div>

              <div class="tab-pane fade" id="verify" role="tabpanel" aria-labelledby="verify-tab">

              <br>

              <input class="imgbb-filepond-45" name="image23">

              <table class="table table-bordered mb-0 table-dark">

                <thead>
                  <tr>
                    <td>Date Uploaded</td>
                    <td>Status</td>
                  </tr>
                <thead>
                <tbody>
                  <tr>
                    <td>${data.info[0].verified_id != 1 ? data.info[0].date_uploaded : 'No data'}</td>
                    <td>${data.info[0].verified_id != 1 ? 'Pending' : 'Approved'}</td>
                  </tr>  
                </tbody>

              </table>

              </div>

          </div>


          </div>
      </div>

      <div class="card shadow">
          <div class="card-header">
              <h4>Recent Posted Items</h4>
          </div>
          <div class="card-body">
            <div class="row" id="my-list-items">

            </div>
            <div id="pagination-container-user">
            </div>
          </div>
      </div>

    </div>

`;

const techTemplate = (data) => `

    <div class="col-12 col-lg-3">
        <div class="card shadow">
            <div class="card-body py-4 px-4">
                <div class="d-flex align-items-center">
                    <div class="avatar avatar-xl">
                        <img src="${data.user[0].url}" id="update-picture" style="cursor: pointer;" data-id="${data.user[0].id}" alt="Face 1">

                    </div>
                    <div class="ms-3 name">
                        <h5 class="font-bold">${data.user[0].username}</h5>
                        <h6 class="text-muted mb-0">${data.user[0].user_status == 1 ? 'Seller' : data.user[0].user_status == 2 ? 'Tech' : 'Buyer'}</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow">
            <div class="card-header">
                <h4>Information</h4>
            </div>
            <div class="card-content pb-4">
                    <div class="recent-message d-flex px-4 py-3">
                        <div class="name ms-4">
                            <h5 class="mb-1">${data.user[0].email}</h5>
                            <h6 class="text-muted mb-0"><i class="bi bi-envelope"></i> Email</h6>
                        </div>
                    </div>
                    <div class="recent-message d-flex px-4 py-3">
                        <div class="name ms-4">
                            <h5 class="mb-1">${data.info[0].address == 0 ? 'Not set' : data.info[0].address} 
                            <i data-address="${data.info[0].address == 0 ? '' : data.info[0].address}" data-id="${data.user[0].id}" id="set-address" style="cursor: pointer; font-size: 15px;" class="bi bi-pencil"></i></h5>
                            <h6 class="text-muted mb-0"><i class="bi bi-geo-alt"></i> Address</h6>
                        </div>
                    </div>
                    <div class="recent-message d-flex px-4 py-3">
                        <div class="name ms-4">
                            <h5 class="mb-1">${data.info[0].contact == 0 ? 'Not set' : data.info[0].contact}  
                            <i data-contact="${data.info[0].contact == 0 ? '' : data.info[0].contact}" data-id="${data.user[0].id}" id="set-contact" style="cursor: pointer; font-size: 15px;" class="bi bi-pencil"></i></h5>
                            <h6 class="text-muted mb-0"><i class="bi bi-telephone"></i> Contact Number</h6>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <div class="col-12 col-lg-9">
      <div class="card shadow">
          <div class="card-header">
              <h4>Login Information</h4>
          </div>
          <div class="card-body">

          <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
              </li>
              <li class="nav-item" role="presentation">
                  <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" tabindex="-1">Password</a>
              </li>
          </ul>
          <div class="tab-content" id="myTabContent">

              <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">

              <br>
              <div class="form-body">
                  <div class="row">

                      <div class="col-12">
                          <div class="form-group has-icon-left">
                              <label for="first-name-icon">Username</label>
                              <div class="position-relative">
                                  <input type="text" class="form-control" value="${data.user[0].username}" id="user-account-username">
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
                                  <input type="text" class="form-control" value="${data.user[0].email}"  id="user-account-email">
                                  <div class="form-control-icon">
                                      <i class="bi bi-envelope"></i>
                                  </div>
                              </div>
                          </div>
                      </div>


                      <div class="col-12 d-flex justify-content-end">
                          <button type="button" class="btn btn-primary me-1 mb-1" id="update-user-info" data-id="${data.user[0].id}">Update</button>

                      </div>

                  </div>

              </div>    

              </div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

              <br>
              <div class="form-body">
                  <div class="row">

                      <div class="col-12">
                          <div class="form-group has-icon-left">
                              <label for="first-name-icon">Old Password</label>
                              <div class="position-relative">
                                  <input type="password" class="form-control"   id="user-account-password-old">
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
                                  <input type="password" class="form-control" id="usesr-account-password-new">
                                  <div class="form-control-icon">
                                      <i class="bi bi-key"></i>
                                  </div>
                              </div>
                          </div>
                      </div>


                      <div class="col-12 d-flex justify-content-end">
                          <button type="button" class="btn btn-primary me-1 mb-1" id="update-user-password" data-id="${data.user[0].id}">Update Password</button>

                      </div>

                  </div>

              </div>

              </div>
          </div>

          </div>
      </div>
      <div class="card shadow">
          <div class="card-header">
              <h4>Services Offered</h4>
              <button class="btn btn-primary btn-sm" data-id="${data.user[0].id}" id="add-service"><i class="bi bi-wrench-adjustable"></i> Add Services</button>
          </div>
          <div class="card-body" id="services-body">


          </div>

      </div>    


    </div>

`;


const buyerTemplate = (data) => `

    <div class="col-12 col-lg-3">
        <div class="card shadow">
            <div class="card-body py-4 px-4">
                <div class="d-flex align-items-center">
                    <div class="avatar avatar-xl">
                        <img src="${data.user[0].url}" id="update-picture" style="cursor: pointer;" data-id="${data.user[0].id}" alt="Face 1">

                    </div>
                    <div class="ms-3 name">
                        <h5 class="font-bold">${data.user[0].username}</h5>
                        <h6 class="text-muted mb-0">${data.user[0].user_status == 1 ? 'Seller' : data.user[0].user_status == 2 ? 'Tech' : 'Buyer'}</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow">
            <div class="card-header">
                <h4>Information</h4>
            </div>
            <div class="card-content pb-4">
                    <div class="recent-message d-flex px-4 py-3">
                        <div class="name ms-4">
                            <h5 class="mb-1">${data.user[0].email}</h5>
                            <h6 class="text-muted mb-0"><i class="bi bi-envelope"></i> Email</h6>
                        </div>
                    </div>
                    <div class="recent-message d-flex px-4 py-3">
                        <div class="name ms-4">
                            <h5 class="mb-1">${data.info[0].address == 0 ? 'Not set' : data.info[0].address} 
                            <i data-address="${data.info[0].address == 0 ? '' : data.info[0].address}" data-id="${data.user[0].id}" id="set-address" style="cursor: pointer; font-size: 15px;" class="bi bi-pencil"></i></h5>
                            <h6 class="text-muted mb-0"><i class="bi bi-geo-alt"></i> Address</h6>
                        </div>
                    </div>
                    <div class="recent-message d-flex px-4 py-3">
                        <div class="name ms-4">
                            <h5 class="mb-1">${data.info[0].contact == 0 ? 'Not set' : data.info[0].contact}  
                            <i data-contact="${data.info[0].contact == 0 ? '' : data.info[0].contact}" data-id="${data.user[0].id}" id="set-contact" style="cursor: pointer; font-size: 15px;" class="bi bi-pencil"></i></h5>
                            <h6 class="text-muted mb-0"><i class="bi bi-telephone"></i> Contact Number</h6>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <div class="col-12 col-lg-9">
      <div class="card shadow">
          <div class="card-header">
              <h4>Login Information</h4>
          </div>
          <div class="card-body">

          <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
              </li>
              <li class="nav-item" role="presentation">
                  <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" tabindex="-1">Password</a>
              </li>
          </ul>
          <div class="tab-content" id="myTabContent">

              <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">

              <br>
              <div class="form-body">
                  <div class="row">

                      <div class="col-12">
                          <div class="form-group has-icon-left">
                              <label for="first-name-icon">Username</label>
                              <div class="position-relative">
                                  <input type="text" class="form-control" value="${data.user[0].username}" id="user-account-username">
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
                                  <input type="text" class="form-control" value="${data.user[0].email}"  id="user-account-email">
                                  <div class="form-control-icon">
                                      <i class="bi bi-envelope"></i>
                                  </div>
                              </div>
                          </div>
                      </div>


                      <div class="col-12 d-flex justify-content-end">
                          <button type="button" class="btn btn-primary me-1 mb-1" id="update-user-info" data-id="${data.user[0].id}">Update</button>

                      </div>

                  </div>

              </div>    

              </div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

              <br>
              <div class="form-body">
                  <div class="row">

                      <div class="col-12">
                          <div class="form-group has-icon-left">
                              <label for="first-name-icon">Old Password</label>
                              <div class="position-relative">
                                  <input type="password" class="form-control"   id="user-account-password-old">
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
                                  <input type="password" class="form-control" id="usesr-account-password-new">
                                  <div class="form-control-icon">
                                      <i class="bi bi-key"></i>
                                  </div>
                              </div>
                          </div>
                      </div>


                      <div class="col-12 d-flex justify-content-end">
                          <button type="button" class="btn btn-primary me-1 mb-1" id="update-user-password" data-id="${data.user[0].id}">Update Password</button>

                      </div>

                  </div>

              </div>

              </div>
          </div>

          </div>
      </div>
    </div>

`;



$(document).on("click", "#edit-service", async(e)=>{

const { value: text } = await Swal.fire({
  title: 'Edit Service',
  input: 'text',
  inputValue: e.target.dataset.service,
  inputLabel: 'Edit Service'
})

if (text) {

  if (text == e.target.dataset.service) {

  }else{
  $.ajax({
      url: "./api/edit-service",
      type: "POST",
      dataType: "json",
      data: {
          id: e.target.dataset.id,
          service: text
      },
      success: (data) => { 
      page("/account");  
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
    })
  }

}

});

$(document).on("click", "#add-service", async(e)=>{

const { value: text } = await Swal.fire({
  title: 'Input Service',
  input: 'text',
  inputLabel: 'Input Service',
  inputPlaceholder: 'Enter Service'
})

if (text) {

$.ajax({
    url: "./api/insert-service",
    type: "POST",
    dataType: "json",
    data: {
        id: e.target.dataset.id,
        service: text
    },
    success: (data) => { 
    page("/account");  
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

    }
  })

}

});


$(document).on("click", "#set-contact", (e)=>{

$("#update-modal").modal("show");

$("#update-body").empty().append(`

  <div class="col-12">
      <div class="form-group">
          <label for="email-id-vertical">Contact No.</label>
          <input type="text" id="user-contact" class="form-control" value="${e.target.dataset.contact}">
      </div>
  </div>

`);

$("#update-footer").empty().append(`
  <button type="button" data-id="${e.target.dataset.id}" id="update-info" data-text="contact"  class="btn btn-primary me-1 mb-1">Update</button>
  <button type="button" class="btn btn-secondary me-1 mb-1" data-bs-dismiss="modal">Cancel</button>
`);


});

$(document).on("click", "#set-address", (e)=>{

$("#update-modal").modal("show");

$("#update-body").empty().append(`

  <div class="col-12">
      <div class="form-group">
          <label for="email-id-vertical">Address</label>
          <input type="text" id="user-address" class="form-control" value="${e.target.dataset.address}">
      </div>
  </div>

`);

$("#update-footer").empty().append(`
  <button type="button" data-id="${e.target.dataset.id}" id="update-info" data-text="address"  class="btn btn-primary me-1 mb-1">Update</button>
  <button type="button" class="btn btn-secondary me-1 mb-1" data-bs-dismiss="modal">Cancel</button>
`);


});


$(document).on("click", "#update-picture", (e)=>{

$("#update-picture-modal").modal("show");

    FilePond.create(document.querySelector(".imgbb-filepond-picture"), {
      credits: null,
      allowImagePreview: true,
      server: {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
          // We ignore the metadata property and only send the file

          const formData = new FormData()
          formData.append(fieldName, file, file.name)

          const request = new XMLHttpRequest()
          // you can change it by your client api key
          request.open(
            "POST",
            "./api/"+e.target.dataset.id+"/update-profile-picture"
          )

          request.upload.onprogress = (e) => {
            progress(e.lengthComputable, e.loaded, e.total)
          }

          request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
              load(request.responseText)
            } else {
              error("oh no")
            }
          }

          request.onreadystatechange = function () {
            if (this.readyState == 4) {
              if (this.status == 200) {
                let response = JSON.parse(this.responseText)

                $("#update-picture-modal").modal("hide");

                page("/account"); 

                Toastify({
                  text: "Success uploading to server!",
                  duration: 3000,
                  close: true,
                  gravity: "bottom",
                  position: "right",
                  backgroundColor: "#4fbe87",
                }).showToast()

                console.log(response)
              } else {
                Toastify({
                  text: "Failed uploading to server! see console f12",
                  duration: 3000,
                  close: true,
                  gravity: "bottom",
                  position: "right",
                  backgroundColor: "#ff0000",
                }).showToast()

                console.log("Error", this.statusText)
              }
            }
          }

          request.send(formData)
        },
      },
    }); 


});


$(document).on("click", "#update-info", (e)=>{

let value = '';

if (e.target.dataset.text == "address") {
  value = $("#user-address").val();
}else{
  value = $("#user-contact").val();
}

$.ajax({
    url: "./api/update-account-info",
    type: "POST",
    dataType: "json",
    data: {
        id: e.target.dataset.id,
        value: value, 
        text: e.target.dataset.text
    },
    success: (data) => { 

    page("/account");   
    $("#update-modal").modal("hide");
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


$(document).on("click", "#update-user-info", (e)=>{

$.ajax({
    url: "./api/update-admin-account",
    type: "POST",
    dataType: "json",
    data: {
        id: e.target.dataset.id,
        email: $("#user-account-email").val(),
        username: $("#user-account-username").val()
    },
    success: (data) => { 

    page("/account");     

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


$(document).on("click", "#update-user-password", (e)=>{

$.ajax({
    url: "./api/update-user-password",
    type: "POST",
    dataType: "json",
    data: {
        id: e.target.dataset.id,
        oldPassword: $("#user-account-password-old").val(),
        password: $("#user-account-password-new").val()
    },
    success: (data) => { 

    if (data.status == 1) {

    page("/account");    

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
