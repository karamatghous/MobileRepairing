document.addEventListener("DOMContentLoaded", function () {
  const headerContent = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <!-- important for compatibility charset -->
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
            <title>Blog Template</title>
        
            <meta name="author" content="Webful Creations">
            <meta name="keywords" content="">
            <meta name="description" content="">
        
            <!-- FavIcon for Website /-->
            <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png">
        
            <!-- important for responsiveness remove to make your site non responsive. -->
            <meta name="viewport" content="width=device-width, initial-scale=1">
        
            <!-- Theme Styles CSS File -->
            <link rel="stylesheet" type="text/css" href="style.css" media="all" />
            <script>
                window.addEventListener('scroll', function () {
                    var header = document.querySelector('.header');
                    var isScrolled = window.scrollY > header.offsetTop + header.offsetHeight;
        
                    if (isScrolled) {
                        header.classList.add('sticky-header');
                    } else {
                        header.classList.remove('sticky-header');
                    }
                });
            </script>
            <style>
                .sticky-header {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 1000;
                    background-color: #ffffff;
                    /* Add your desired background color */
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                    /* Add a subtle shadow for separation */
                }
                .navigation {
                    position: fixed;
                }
                @media (max-width: 768px) {
                    .sticky-header {
                        position: static;
                    }
                    .navigation {
                        position: static;
                    }
                }
                /* General Navbar Styles */
                .navbar-nav {
                    background-color: #2d2b2b; /* Dark background for the navbar */
                    border-radius: 5px;
                }
                .navbar-nav .nav-item .nav-link {
                    color: white;
                    padding: 10px 15px; /* Add padding to the links */
                    transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover and active states */
                }
               
                .navbar-nav .nav-item .nav-link.active {
                    background-color: #ffc107; /* Yellow background for active link */
                    color: #ffffff; /* White text color for active link */
                }
                /* Logo Styling */
                .logo{
                margin-right: 30px;
                }
                .logo img {
                    width: 150px; /* Adjust the logo size */
                    height: auto;
                }
                     #google_translate_element {
                  position: absolute;
                  top: 10px;
                  right: 10px;
                  z-index: 1001;
                  background-color: #f2b705;
                  padding: 5px;
                  border-radius: 5px;
              }
              .goog-te-combo {
                  background-color: #f2b705;
                  border: none;
                  padding: 5px;
                  font-size: 16px;
              }
                    
            </style>
        
        </head>
        
        <body class="loaded enable-rfs">
        <div id="google_translate_element"></div>
            <!----------- Header Area Starts Here ------------>
         
            <div class="header sticky-header">
                <div id="top-line"></div>
                <div class="top-bar">
                    <div class="container">
                        <div class="row">
                            <!-- Logo on Left Side -->
                            <div class="col-sm-12 col-md-12 col-lg-6 d-flex align-items-center">
    <div class="logo">
        <a href="index.html">
            <img src="assets/images/smartlogo.png" alt="Smart City Logo" style="margin-top: 20px;" />
        </a>
        <!-- Add SmartPhoneCity text below the logo -->
        
    </div>

    <div class="left-side" style="margin-left: 20px;">
        <ul class="menu">
            <li><i class="fas fa-map-marked-alt"></i>
                <a href="http://maps.google.com/?q=44200 82 Boulevard Victor Hugo, Nantes 44200" target="_blank" rel="noopener noreferrer">
                    82 Boulevard Victor Hugo, Nantes 44200
                </a>
            </li>
            <li><i class="fas fa-envelope"></i><a href="#">smartphonecity.nantes@gmail.com</a></li>
        </ul>
    </div><!-- Left Side /-->
</div><!-- Columns /-->

                        </div><!-- Row /-->
                    </div><!-- Container /-->
                </div>
                <!-- Top Bar /-->
                <div class="navigation">
                    <div class="container" style="border-radius: 16px;">
                        <div class="row">
                            <div class="col-12 col-lg-7 col-md-4 col-sm-4">
                                <div class="nav-container clearfix">
                                    <nav class="navbar navbar-expand-lg navbar-light">
                                        <button class="navbar-toggler" style="border: 2px solid white" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <i class="fas fa-bars" style="color: white;"></i>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav rounded" style="background: #2d2b2b">
        
                                                <li class="nav-item">
                                                    <a class="nav-link" href="index.html">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Home</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="about-us.html">About Us</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="fixes.html">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="contact-us.html">Contact us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div><!-- Columns /-->
                            <div class="col-12 col-lg-3 col-md-5 col-sm-4 bg-yel rounded">
                                <div class="nav-icons d-flex">
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                        </li>
                                        <li class="list-inline-item"><a href="#"><i class="fas fa-mobile-alt" style="font-size: 25px;"></i> <span style="font-size: 25px;">
                                        0253975039</span> </a></li>
                                        </li>
                                    </ul>
                                </div>
                            </div><!-- Columns /-->
                        </div><!-- Row /-->
                    </div><!-- Container /-->
                </div>
                <!-- Navigation /-->
            </div>
            <!------------- Header End /------------->
        
    
        </body>
        
        </html>
      `;

  document.querySelector(".header").innerHTML = headerContent;

  // Dynamically set active class based on the current URL
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
