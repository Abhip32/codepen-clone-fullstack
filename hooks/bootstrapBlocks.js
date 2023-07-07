import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function myPlugin(editor) {
  editor.BlockManager.add('divBlock', {
    label: 'Div',
    category: 'Components',
    content: '<div class="my-block">This is a simple block</div>',
  });

  editor.BlockManager.add('cardBlock', {
    label: 'Card',
    category: 'Components',
    content: '<div class="card" style="width: 18rem;"><img class="card-img-top" src="..." alt="Card image cap"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p> <a href="#" class="btn btn-primary">Go somewhere</a></div></div>',
  });

  editor.BlockManager.add('accordionBlock', {
    label: 'Accordion',
    category: 'Components',
    content:'<div class="accordion" id="accordionPanelsStayOpenExample"> <div class="accordion-item"> <h2 class="accordion-header" id="panelsStayOpen-headingOne"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"> Accordion Item #1 </button> </h2> <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne"> <div class="accordion-body"> <strong>This is the first item accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header" id="panelsStayOpen-headingTwo"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"> Accordion Item #2 </button> </h2> <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo"> <div class="accordion-body"> <strong>This is the second item accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header" id="panelsStayOpen-headingThree"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"> Accordion Item #3 </button> </h2> <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree"> <div class="accordion-body"> <strong>This is the third item accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. </div> </div> </div> </div>',
  });

  editor.BlockManager.add('alert', {
    label: 'Alert',
    category: 'Components',
    content:'<div class="alert alert-primary" role="alert">A simple primary alert—check it out</div>',
  });

  editor.BlockManager.add('badge', {
    label: 'badge',
    category: 'Components',
    content:'<span class="badge bg-secondary">New</span>',
  });

  editor.BlockManager.add('button', {
    label: 'button',
    category: 'Components',
    content:'<button type="button" class="btn btn-primary">Primary</button>',
  });

  
  editor.BlockManager.add('buttonGroup', {
    label: 'button group',
    category: 'Components',
    content:'<div class="btn-group" role="group" aria-label="Basic example"> <button type="button" class="btn btn-primary">Left</button> <button type="button" class="btn btn-primary">Middle</button> <button type="button" class="btn btn-primary">Right</button> </div>',
  });


  editor.BlockManager.add('carousel', {
    label: 'carousel',
    category: 'Components',
    content:'<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel"> <div class="carousel-indicators"> <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button> <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button> </div> <div class="carousel-inner"> <div class="carousel-item active" data-bs-interval="10000"> <img src="..." class="d-block w-100" alt="..."> <div class="carousel-caption d-none d-md-block"> <h5>First slide label</h5> <p>Some representative placeholder content for the first slide.</p> </div> </div> <div class="carousel-item" data-bs-interval="2000"> <img src="..." class="d-block w-100" alt="..."> <div class="carousel-caption d-none d-md-block"> <h5>Second slide label</h5> <p>Some representative placeholder content for the second slide.</p> </div> </div> <div class="carousel-item"> <img src="..." class="d-block w-100" alt="..."> <div class="carousel-caption d-none d-md-block"> <h5>Third slide label</h5> <p>Some representative placeholder content for the third slide.</p> </div> </div> </div> <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span> </button> <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span> </button> </div>',
  });

  editor.BlockManager.add('collapse', {
    label: 'collapse',
    category: 'Components',
    content:'<p> <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a> <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button> <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button> </p> <div class="row"> <div class="col"> <div class="collapse multi-collapse" id="multiCollapseExample1"> <div class="card card-body"> Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. </div> </div> </div> <div class="col"> <div class="collapse multi-collapse" id="multiCollapseExample2"> <div class="card card-body"> Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. </div> </div> </div> </div>',
  });

  editor.BlockManager.add('dropdown', {
    label: 'dropdown',
    category: 'Components',
    content:'<div class="dropdown"> <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown button </button> <ul class="dropdown-menu"> <li><a class="dropdown-item" href="#">Action</a></li> <li><a class="dropdown-item" href="#">Another action</a></li> <li><a class="dropdown-item" href="#">Something else here</a></li> </ul> </div>',
  });

  editor.BlockManager.add('list', {
    label: 'list',
    category: 'Components',
    content:'<ul class="list-group"> <li class="list-group-item">An item</li> <li class="list-group-item">A second item</li> <li class="list-group-item">A third item</li> <li class="list-group-item">A fourth item</li> <li class="list-group-item">And a fifth one</li> </ul>',
  });

  editor.BlockManager.add('modal', {
    label: 'modal',
    category: 'Components',
    content:'<div class="modal" tabindex="-1"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title">Modal title</h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body"> <p>Modal body text goes here.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> <button type="button" class="btn btn-primary">Save changes</button> </div> </div> </div> </div>',
  });

  editor.BlockManager.add('navbar', {
    label: 'navbar',
    category: 'Components',
    content:'<nav class="navbar navbar-expand-lg bg-light"> <div class="container-fluid"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <a class="navbar-brand" href="#">Navbar</a> <div class="collapse navbar-collapse" id="navbarTogglerDemo03"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li> <li class="nav-item"> <a class="nav-link disabled">Disabled</a> </li> </ul> <form class="d-flex" role="search"> <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> <button class="btn btn-outline-success" type="submit">Search</button> </form> </div> </div> </nav>',
  });

  editor.BlockManager.add('nav-tabs', {
    label: 'nav-tabs',
    category: 'Components',
    content:'<ul class="nav nav-tabs" id="myTab" role="tablist"> <li class="nav-item" role="presentation"> <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button> </li> <li class="nav-item" role="presentation"> <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button> </li> <li class="nav-item" role="presentation"> <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button> </li> <li class="nav-item" role="presentation"> <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button> </li> </ul> <div class="tab-content" id="myTabContent"> <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div> <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div> <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div> <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div> </div>',
  });

  editor.BlockManager.add('nav-links', {
    label: 'nav-links',
    category: 'Components',
    content:'<ul class="nav nav-pills"> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Active</a> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a> <ul class="dropdown-menu"> <li><a class="dropdown-item" href="#">Action</a></li> <li><a class="dropdown-item" href="#">Another action</a></li> <li><a class="dropdown-item" href="#">Something else here</a></li> <li><hr class="dropdown-divider"></li> <li><a class="dropdown-item" href="#">Separated link</a></li> </ul> </li> <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li> <li class="nav-item"> <a class="nav-link disabled">Disabled</a> </li> </ul>',
  });

  editor.BlockManager.add('navtabshl', {
    label: 'horizontal nav tabs',
    category: 'Components',
    content:'<div class="d-flex align-items-start"> <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical"> <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button> <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button> <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button> <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button> <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button> </div> <div class="tab-content" id="v-pills-tabContent"> <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">...</div> <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div> <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div> <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div> <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div> </div> </div>',
  });

  editor.BlockManager.add('offcanvas', {
    label: 'offcanvas',
    category: 'Components',
    content:'<div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel"> <div class="offcanvas-header"> <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5> <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> </div> <div class="offcanvas-body"> Content for the offcanvas goes here. You can place just about any Components component or custom elements here. </div> </div>',
  });

  editor.BlockManager.add('pagination', {
    label: 'pagination',
    category: 'Components',
    content:'<nav aria-label="Page navigation example"> <ul class="pagination"> <li class="page-item"> <a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span> </a> </li> <li class="page-item"><a class="page-link" href="#">1</a></li> <li class="page-item"><a class="page-link" href="#">2</a></li> <li class="page-item"><a class="page-link" href="#">3</a></li> <li class="page-item"> <a class="page-link" href="#" aria-label="Next"> <span aria-hidden="true">&raquo;</span> </a> </li> </ul> </nav>',
  });

  editor.BlockManager.add('placeholders', {
    label: 'placeholders',
    category: 'Components',
    content:'<div class="card"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Card title</h5> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p> <a href="#" class="btn btn-primary">Go somewhere</a> </div> </div> <div class="card" aria-hidden="true"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title placeholder-glow"> <span class="placeholder col-6"></span> </h5> <p class="card-text placeholder-glow"> <span class="placeholder col-7"></span> <span class="placeholder col-4"></span> <span class="placeholder col-4"></span> <span class="placeholder col-6"></span> <span class="placeholder col-8"></span> </p> <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a> </div> </div>',
  });

  editor.BlockManager.add('popovers', {
    label: 'popovers',
    category: 'Components',
    content:'<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And heres some amazing content. Its very engaging. Right?">Click to toggle popover</button>',
  });

  editor.BlockManager.add('progress', {
    label: 'progress',
    category: 'Components',
    content:'<div class="progress"> <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div> </div>',
  });

  editor.BlockManager.add('scrollspy', {
    label: 'scroll spy',
    category: 'Components',
    content:'<nav id="navbar-example2" class="navbar bg-light px-3 mb-3"> <a class="navbar-brand" href="#">Navbar</a> <ul class="nav nav-pills"> <li class="nav-item"> <a class="nav-link" href="#scrollspyHeading1">First</a> </li> <li class="nav-item"> <a class="nav-link" href="#scrollspyHeading2">Second</a> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a> <ul class="dropdown-menu"> <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li> <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li> <li><hr class="dropdown-divider"></li> <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li> </ul> </li> </ul> </nav> <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0"> <h4 id="scrollspyHeading1">First heading</h4> <p>...</p> <h4 id="scrollspyHeading2">Second heading</h4> <p>...</p> <h4 id="scrollspyHeading3">Third heading</h4> <p>...</p> <h4 id="scrollspyHeading4">Fourth heading</h4> <p>...</p> <h4 id="scrollspyHeading5">Fifth heading</h4> <p>...</p> </div>',
  });

  editor.BlockManager.add('scrollspyl', {
    label: 'scroll spy horizontal',
    category: 'Components',
    content:'<div class="row"> <div class="col-4"> <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end"> <nav class="nav nav-pills flex-column"> <a class="nav-link" href="#item-1">Item 1</a> <nav class="nav nav-pills flex-column"> <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a> <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a> </nav> <a class="nav-link" href="#item-2">Item 2</a> <a class="nav-link" href="#item-3">Item 3</a> <nav class="nav nav-pills flex-column"> <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a> <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a> </nav> </nav> </nav> </div> <div class="col-8"> <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0"> <div id="item-1"> <h4>Item 1</h4> <p>...</p> </div> <div id="item-1-1"> <h5>Item 1-1</h5> <p>...</p> </div> <div id="item-1-2"> <h5>Item 1-2</h5> <p>...</p> </div> <div id="item-2"> <h4>Item 2</h4> <p>...</p> </div> <div id="item-3"> <h4>Item 3</h4> <p>...</p> </div> <div id="item-3-1"> <h5>Item 3-1</h5> <p>...</p> </div> <div id="item-3-2"> <h5>Item 3-2</h5> <p>...</p> </div> </div> </div> </div>',
  });

  editor.BlockManager.add('spinner', {
    label: 'spinner',
    category: 'Components',
    content:'<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>',
  });

  editor.BlockManager.add('toast', {
    label: 'toast',
    category: 'Components',
    content:'<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <img src="..." class="rounded me-2" alt="..."> <strong class="me-auto">Components</strong> <small>11 mins ago</small> <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> </div> <div class="toast-body"> Hello, world! This is a toast message. </div> </div>',
  });


  editor.BlockManager.add('imager', {
    label: 'responsive image',
    category: 'Content',
    content:'<img src="..." class="img-fluid" alt="...">',
  });

  editor.BlockManager.add('imager', {
    label: 'responsive image',
    category: 'Content',
    content:'<img src="..." class="img-fluid" alt="...">',
  });

  editor.BlockManager.add('table', {
    label: 'responsive table',
    category: 'Content',
    content:'<table class="table"> <thead> <tr> <th scope="col">#</th> <th scope="col">First</th> <th scope="col">Last</th> <th scope="col">Handle</th> </tr> </thead> <tbody> <tr> <th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope="row">3</th> <td colspan="2">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table>',
  });

  editor.BlockManager.add('figure', {
    label: 'figure',
    category: 'Content',
    content:'<figure class="figure"> <img src="..." class="figure-img img-fluid rounded" alt="..."> <figcaption class="figure-caption">A caption for the above image.</figcaption> </figure>',
  });

  editor.BlockManager.add('formbasic', {
    label: 'Basic Form',
    category: 'Form Components',
    content:'<div class="mb-3"> <label for="exampleFormControlInput1" class="form-label">Email address</label> <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> </div> <div class="mb-3"> <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> </div>',
  });

  editor.BlockManager.add('formSize', {
    label: 'Form Heading Sizes',
    category: 'Form Components',
    content:'<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example"> <input class="form-control" type="text" placeholder="Default input" aria-label="default input example"> <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">',
  });

  editor.BlockManager.add('formreadonly', {
    label: 'readonly input',
    category: 'Form Components',
    content:'<input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>',
  });

  editor.BlockManager.add('formcolor', {
    label: 'Form Color Picker',
    category: 'Form Components',
    content:'<label for="exampleColorInput" class="form-label">Color picker</label> <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">',
  });

  editor.BlockManager.add('formfile', {
    label: 'Form File Input',
    category: 'Form Components',
    content:'<div class="mb-3"> <label for="formFile" class="form-label">Default file input example</label> <input class="form-control" type="file" id="formFile"> </div> <div class="mb-3"> <label for="formFileMultiple" class="form-label">Multiple files input example</label> <input class="form-control" type="file" id="formFileMultiple" multiple> </div> <div class="mb-3"> <label for="formFileDisabled" class="form-label">Disabled file input example</label> <input class="form-control" type="file" id="formFileDisabled" disabled> </div> <div class="mb-3"> <label for="formFileSm" class="form-label">Small file input example</label> <input class="form-control form-control-sm" id="formFileSm" type="file"> </div> <div> <label for="formFileLg" class="form-label">Large file input example</label> <input class="form-control form-control-lg" id="formFileLg" type="file"> </div>',
  });

  editor.BlockManager.add('dropdown', {
    label: 'Form Dropdown',
    category: 'Form Components',
    content:'<select class="form-select" aria-label="Default select example"> <option selected>Open this select menu</option> <option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option> </select>',
  });

  
  editor.BlockManager.add('checkbox', {
    label: 'Form Checkbox',
    category: 'Form Components',
    content:'<div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> <label class="form-check-label" for="flexCheckDefault"> Default checkbox </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> Checked checkbox </label> </div>',
  });

  editor.BlockManager.add('formGroup', {
    label: 'Form Input Group',
    category: 'Form Components',
    content:' <div class="input-group mb-3"> <span class="input-group-text" id="basic-addon1">@</span> <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"> </div> <div class="input-group mb-3"> <input type="text" class="form-control" placeholder="Recipients username" aria-label="Recipients username" aria-describedby="basic-addon2"> <span class="input-group-text" id="basic-addon2">@example.com</span> </div> <label for="basic-url" class="form-label">Your vanity URL</label> <div class="input-group mb-3"> <span class="input-group-text" id="basic-addon3">https://example.com/users/</span> <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"> </div> <div class="input-group mb-3"> <span class="input-group-text">$</span> <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"> <span class="input-group-text">.00</span> </div> <div class="input-group mb-3"> <input type="text" class="form-control" placeholder="Username" aria-label="Username"> <span class="input-group-text">@</span> <input type="text" class="form-control" placeholder="Server" aria-label="Server"> </div> <div class="input-group"> <span class="input-group-text">With textarea</span> <textarea class="form-control" aria-label="With textarea"></textarea> </div>',
  });


  editor.BlockManager.add('floatingLabels', {
    label: 'Form Floating Label',
    category: 'Form Components',
    content:'<div class="form-floating mb-3"> <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"> <label for="floatingInput">Email address</label> </div> <div class="form-floating"> <input type="password" class="form-control" id="floatingPassword" placeholder="Password"> <label for="floatingPassword">Password</label> </div>',
  });

  editor.BlockManager.add('fromExample', {
    label: 'Basic form example',
    category: 'Form Components',
    content:'<form class="row g-3 needs-validation" novalidate> <div class="col-md-4"> <label for="validationCustom01" class="form-label">First name</label> <input type="text" class="form-control" id="validationCustom01" value="Mark" required> <div class="valid-feedback"> Looks good! </div> </div> <div class="col-md-4"> <label for="validationCustom02" class="form-label">Last name</label> <input type="text" class="form-control" id="validationCustom02" value="Otto" required> <div class="valid-feedback"> Looks good! </div> </div> <div class="col-md-4"> <label for="validationCustomUsername" class="form-label">Username</label> <div class="input-group has-validation"> <span class="input-group-text" id="inputGroupPrepend">@</span> <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required> <div class="invalid-feedback"> Please choose a username. </div> </div> </div> <div class="col-md-6"> <label for="validationCustom03" class="form-label">City</label> <input type="text" class="form-control" id="validationCustom03" required> <div class="invalid-feedback"> Please provide a valid city. </div> </div> <div class="col-md-3"> <label for="validationCustom04" class="form-label">State</label> <select class="form-select" id="validationCustom04" required> <option selected disabled value="">Choose...</option> <option>...</option> </select> <div class="invalid-feedback"> Please select a valid state. </div> </div> <div class="col-md-3"> <label for="validationCustom05" class="form-label">Zip</label> <input type="text" class="form-control" id="validationCustom05" required> <div class="invalid-feedback"> Please provide a valid zip. </div> </div> <div class="col-12"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required> <label class="form-check-label" for="invalidCheck"> Agree to terms and conditions </label> <div class="invalid-feedback"> You must agree before submitting. </div> </div> </div> <div class="col-12"> <button class="btn btn-primary" type="submit">Submit form</button> </div> </form>',
  });
 


  
  
}




