function generateHTML(data) {
  return `<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
        <meta name="theme-color" content="#2196C3">
        <title>Your Team</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <style>
        /* Custom Stylesheet */

    .default_color{background-color: #2196C3 !important}

    .default_color_text{color: #2196C3 !important}

    .icon-block {
        padding: 0 15px;
    }

    #intro, #work, #team {padding-top: 4rem;}


    #index-banner {
        min-height: 632px;
        max-height: 864px;
        position: relative;
        background-color: #2196C3;
    }

    #nav_f{
        box-shadow: none !important; 
        -webkit-box-shadow:none !important;
    }

    .text_h {
        padding: 15% 0;
        font-size: 6.0em;
        font-weight: 100;
        color:white;
    }

    .brand-logo{
        position: absolute;
        color: #fff;
        display: inline-block;
        font-size: 2.1rem;
        font-style: normal;
        font-weight: 100;
        padding: 0;
        letter-spacing: 7px;
    }

    .text_h2 {font-weight: 100;margin-bottom: 4%; line-height: 4.5rem;}

    .span_h2 {font-weight: 300;color: #2196C3;}

    .text_b{color: #2196C3;}

    .in{font-weight: 400 !important; font-style: normal !important;}

    .promo i {
        color: #2196C3;
        font-size: 7rem;
        display: block;
    }
    .card-content a {color: #2196C3;}

    .card-content a:hover {color: #2196C3;}

    #work, #team{background: rgb(247, 247, 247);}

    .text_pink{color:#EF9A9A;}

    nav ul a {
        font-size: 1.2rem;
        color: #FFF;
        letter-spacing: 2px;
        display: block;
        font-weight: 300;
        padding: 0px 15px;
    }

    .cd-headline.type .cd-words-wrapper {
        vertical-align: top;
        overflow: hidden;
    }

    .cd-headline.type .cd-words-wrapper::after {
        /* vertical bar */
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        bottom: auto;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        height: 90%;
        width: 1px;
        background-color: #aebcb9;
    }

    .cd-headline.type .cd-words-wrapper.waiting::after {
        -webkit-animation: cd-pulse 1s infinite;
        -moz-animation: cd-pulse 1s infinite;
        animation: cd-pulse 1s infinite;
    }
    .cd-headline.type .cd-words-wrapper.selected {
        background-color: #FFF;
    }

    .cd-headline.type .cd-words-wrapper.selected::after {
        visibility: hidden;
    }

    .cd-headline.type .cd-words-wrapper.selected b {
        color: #2196C3;
    }

    .cd-headline.type b {
        visibility: hidden;
    }

    .cd-headline.type b.is-visible {
        visibility: visible;
    }

    .cd-headline.type i {
        position: absolute;
        visibility: hidden;
    }
    .cd-headline.type i.in {
        position: relative;
        visibility: visible;
    }

    @-webkit-keyframes cd-pulse {
        0% {
            -webkit-transform: translateY(-50%) scale(1);
            opacity: 1;
        }
        40% {
            -webkit-transform: translateY(-50%) scale(0.9);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(-50%) scale(0);
            opacity: 0;
        }
    }
    @-moz-keyframes cd-pulse {
        0% {
            -moz-transform: translateY(-50%) scale(1);
            opacity: 1;
        }
        40% {
            -moz-transform: translateY(-50%) scale(0.9);
            opacity: 0;
        }
        100% {
            -moz-transform: translateY(-50%) scale(0);
            opacity: 0;
        }
    }

    @keyframes cd-pulse {
        0% {
            -webkit-transform: translateY(-50%) scale(1);
            -moz-transform: translateY(-50%) scale(1);
            -ms-transform: translateY(-50%) scale(1);
            -o-transform: translateY(-50%) scale(1);
            transform: translateY(-50%) scale(1);
            opacity: 1;
        }
        40% {
            -webkit-transform: translateY(-50%) scale(0.9);
            -moz-transform: translateY(-50%) scale(0.9);
            -ms-transform: translateY(-50%) scale(0.9);
            -o-transform: translateY(-50%) scale(0.9);
            transform: translateY(-50%) scale(0.9);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(-50%) scale(0);
            -moz-transform: translateY(-50%) scale(0);
            -ms-transform: translateY(-50%) scale(0);
            -o-transform: translateY(-50%) scale(0);
            transform: translateY(-50%) scale(0);
            opacity: 0;
        }
    }

    #status {
        width:200px;
        height:200px;
        position:absolute;
        left:50%; /* centers the loading animation horizontally one the screen */
        top:50%; /* centers the loading animation vertically one the screen */
        background-image:url(../img/status.gif); /* path to your loading animation */
        background-repeat:no-repeat;
        background-position:center;
        margin:-100px 0 0 -100px; /* is width and height divided by two */
    }

    @media only screen and (max-width: 480px) {
        .text_h {
            padding: 4% 0;
            font-size: 5em;
            font-weight: 100;
            color: white;
        }
    }

    input, textarea {
        border-bottom: 1px solid #fff;
    }

    nav a.button-collapse {
        left: -25px;
    }

    .card-avatar .waves-effect {
        text-align: center;
        margin-top: 20px;
    }

    .card-avatar img {
        height: 150px;
        width: 150px;
        border-radius: 75px;
    }

    .card-avatar .card-content {
        text-align: center;
    }

    .card .card-content p {
        margin: 15px 0px;
    }

    .card-avatar .card-content i {
    font-size: 1.5rem;
    }

    .card-avatar .card-content .card-title {
        line-height: 30px !important;
    }

    footer.page-footer {
        margin-top: 0px !important;
    }
        </style>
    </head>

    <div class="navbar-fixed">
        <nav id="nav_f" class="default_color" role="navigation">
            <div class="container">
                <div class="nav-wrapper">
                    <a href="#" id="logo-container" class="brand-logo center">Your Company</a>
                </div>
            </div>
        </nav>
    </div>
        <div class="container">
            <div class="row">
                <div  class="col s12">
                    <h2 class="center header text_h2">Meet your<span class="span_h2"> Team  </span></h2>
                </div>
            </div>
        </div> 

        <div class="container">
            <div class="row">
                <div class="col s12 m3" id="buildTeam">
                    
                </div>
            </div>
        </div>
    </div>

            <footer class="page-footer">
            <div class="container">
                <div class="row">
                <div class="col l3 s12">
                    <h5 class="white-text">Made by</h5>
                    <ul>
                    <li><a class="grey-text text-lighten-3" href="https://richardgermaine.herokuapp.com/">Richard Germaine</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                © 2020 Your Company
                </div>
            </div>
            </footer>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> 
        <script type="text/javascript"> 

                let teams = ${ JSON.stringify(data)};
                teams.forEach(function(res){
                    if (res.title == 'Manager') pic() {
                        $("#buildTeam").append('<div class="card card-avatar"><div class="waves-effect waves-block waves-light"> <img class="activator" src='#' /></div><div class="card-content"> <span class="card-title activator grey-text text-darken-4">'${res.name}'<br /> <small><em><a class="red-text text-darken-1" href="#">'${res.title}'</a></em></small></span><p><div class="blue-text text-lighten-2"> <i class="material-icons">Face</i></div><li><ul> Email: '${res.email}'</ul><ul> ID#: ${res.email}</ul><ul> Staplers Taken: '${res.staplers}'</ul></li></p></div></div>'); }
                    else if(res.title == 'Engineer') pic() {
                        $("#buildTeam").append('<div class="card card-avatar"><div class="waves-effect waves-block waves-light"> <img class="activator" src='#' /></div><div class="card-content"> <span class="card-title activator grey-text text-darken-4">'${res.name}'<br /> <small><em><a class="red-text text-darken-1" href="#">'${res.title}'</a></em></small></span><p><div class="blue-text text-lighten-2"> <i class="material-icons">developer_mode</i></div><li><ul> Email: '${res.email}'</ul><ul> ID#: ${res.email}</ul><ul> GitHub: '${res.gitHub}'</ul></li></p></div></div>'); }
                    else if(res.title == 'Intern') pic() {
                        $("#buildTeam").append('<div class="card card-avatar"><div class="waves-effect waves-block waves-light"> <img class="activator" src='#' /></div><div class="card-content"> <span class="card-title activator grey-text text-darken-4">'${res.name}'<br /> <small><em><a class="red-text text-darken-1" href="#">'${res.title}'</a></em></small></span><p><div class="blue-text text-lighten-2"> <i class="material-icons">child_care</i></div><li><ul> Email: '${res.email}'</ul><ul> ID#: ${res.email}</ul><ul> Bootcamp: '${res.bootCamp}'</ul></li></p></div></div>'); }
                });
            </script>
        </body>
    </html>`
        }