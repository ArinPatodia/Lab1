/* Authors: Arin Patodia (100814989)
 * Date   : 2022-02-10
 * Program: The main java script file for my webdsite
 */

"use strict";

//#region HOME/INDEX PAGE CONTENT
(function()
{
    function displayHome()
    {
      //Sets the default Background Image and Colour
      document.body.style.backgroundColor = "#49A4B0";
      document.body.style.backgroundImage = "url(https://www.teahub.io/photos/full/178-1784687_game-of-thrones-dragon-wall.jpg)";
    
        // Step 1. document.createElement
        let homeTitle = document.createElement("h1");
        let homeParagraph = document.createElement("p");
        let backgroundButtons = document.createElement("div");
        
        // Step 2. configure the elements
        homeTitle.setAttribute("id","homeHeader");
        homeParagraph.setAttribute("id", "homeParagraph");


        //Home Page Main Content
        homeTitle.textContent = "Welcome To AP Software (WEBD-6201) - By. Arin Patodia";
        homeParagraph.textContent = "This is the Home-page for my site, which I am building for my WEBD-6201 course.";
        

        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];

        // Step 4. Add / Insert the element
        mainContent.appendChild(homeTitle);
        mainContent.appendChild(homeParagraph);
        mainContent.appendChild(backgroundButtons);
        mainContent.style.background = "rgba(46,46,46,.94)";
        mainContent.style.borderRadius = ".7rem";
        mainContent.style.marginTop = "80px";
        mainContent.classList.add("w-75", "p-5");
        mainContent.style.maxWidth = "800px";
        homeTitle.className = "text-light outline";
        homeParagraph.className = "text-light outline";

    }
//#endregion

//#region ABOUT PAGE CONTENT
    function displayAbout()
    {
      // Grab container element
      let container = document.querySelector(".container");

      // Heading element
      let heading = document.createElement("h1");
      heading.innerText = "This is me! Arin";
      heading.style.textDecoration = "underline";
      heading.style.textDecorationColor = "green";

      // Inject page heading into the DOM
      container.appendChild(heading);
      
      // About Arin container and contents
      let aboutArinContainer = document.createElement("div");
      let aboutArinTextContainer = document.createElement("div");
      aboutArinTextContainer.innerHTML = '<h3 class="pb-4">Arin Patodia</h3>';
      let aboutArinText = document.createElement("p");
      aboutArinContainer.classList.add("my-5", "border-bottom", "p-4", "justify-content-center");
      aboutArinTextContainer.classList.add("col-lg-6", "p-4");
      aboutArinText.innerText = "I am a programming student at Durham collge, Oshawa. I enjoy working with python and C#. I love playing games on my PC and mobile. As a hobby I edit videos and image. ";
      
      // Inject Arin's about text into about container
      aboutArinTextContainer.appendChild(aboutArinText);
            
      // Button to view Arin's resume
      let ArinResumeButton = document.createElement("a");
      ArinResumeButton.innerText = "View Resume";
      ArinResumeButton.classList.add("btn", "btn-success");
      ArinResumeButton.setAttribute("href", "./Assets/Arin_resume.pdf");
      ArinResumeButton.setAttribute("target", "_blank");
      aboutArinTextContainer.appendChild(ArinResumeButton);

      // Arin image 
      let aboutArinImage = document.createElement("div");
      aboutArinImage.innerHTML = `<img src="./Assets/Arin_photo.jpg" class="col-lg-6" />`
      aboutArinImage.classList.add("col-lg-4", "about-img");
      aboutArinContainer.classList.add("row");
      
      // Inject elements into about container
      aboutArinContainer.appendChild(aboutArinTextContainer);
      aboutArinContainer.appendChild(aboutArinImage);
      
      // Inject both about containers into the DOM
      container.appendChild(aboutArinContainer);
      
       
    }
//#endregion

//#region PROJECTS/PRODUCTS PAGE CONTENT
    function displayProjects()
    {
      // Store array of projects of Arin
      let arinProjects = [
        {
          name: "Feedback Page, A ready to apply page on any website for customer feedbacks!",
          image: "./Assets/feedback.jpg",
          
        },
        {
          name: "Plants Info. An Informative page with many differnet options!",
          image: "./Assets/plants.jpeg",
           
        },
        {
          name: "Records. A Page to keep your records updated always!",
          image: "./Assets/record.jpeg",
         
        },
      ];


      // Build projects container
      let container = document.querySelector(".container");
      let projectsContainer = document.createElement("div");
      projectsContainer.classList += "container mx-auto row g-lg-3 justify-content-center projects";
      container.after(projectsContainer);

      // String to store HTML for project cards
      let projectsHTML = "";

      /**
       * displayProjectCards - renders an array of project objects into DOM
       * @param {Array} projects
       */
      function displayProjectCards(projects) {
        projects.forEach(project => {
          const { name, image } = project;
           projectsHTML += `
            <div class="card text-center col-md-5 col-lg-3 p-4 my-2 mx-2">
              <h4>${name}</h4>
              <img src="${image}" class="mx-auto" />
              <div class="row p-4 ">
                <target="_blank" class="col-6">Advanced C# Project with html/CSS </a>
              </div>
            </div>
          `;
        });
      }

      // Call displayProjects function to render HTML for all project cards
      displayProjectCards([...arinProjects]);

      document.querySelector('.projects').innerHTML += projectsHTML;
    }
//#endregion

//#region SERVICES PAGE CONTENT
    function displayServices()
    {
      // Store array of services
      let ArinServices = [
        {
          serviceType: "Video Editing",
          name: "Arin Patodia",
          image: "./Assets/editing.jpg",
          content: "Edit any type of videos, with 3D Animations & graphics"
        },
        {
          serviceType: "Game Developmet",
          name: "Arin Patodia",
          image: "./Assets/gamedev.jpg",
          content: "Need a C# game developer? I can make monogames for both iOS & Android.",  
        },
        {
          serviceType: "python Programming",
          name: "Arin Patodia",
          content: "Worried about your python assignment? Let me help you with my advanced pyhton programming skills", 
          image: "./Assets/python.jpeg",
        },
      ];
      
      // Create container to store services cards
      let containerOne = document.querySelector(".container");
      let servicesContainer = document.createElement("div");
      servicesContainer.classList += "container mx-auto row g-lg-3 mb-5 justify-content-center services mb-3";
      containerOne.after(servicesContainer);

      // Empty string to store HTML containing services cards
      let servicesHTML = "";

      /**
       * displayServiceCards - renders an array of project objects into DOM
       * @param {Array} services
       */
      function displayServiceCards(services) {
        services.forEach(service => {
          const { name,serviceType, image, content } = service;
          servicesHTML += `
            <div class="card text-center col-md-5 col-lg-3 p-4 mb-5 mx-2">
              <h4>${serviceType}</h4>
              <h6>${name}</h6>
              <p>${content}</p>
              <img src="${image}" class="mx-auto services-img mb-3" />
            </div>
          `;
        });
      }  
      
      // Call displayServiceCards function to render HTML for all project cards
      displayServiceCards([...ArinServices]);

      document.querySelector('.services').innerHTML += servicesHTML;
    }
//#endregion

//#region CONTACT PAGE CONTENT
    /**
     * A function to display contact.html 
     */
    function displayContact()
    {     
      let heading = document.querySelector("h1");
      let subHeading = document.createElement("p");
      subHeading.className += "lead w-50 mb-4 text-bold mx-auto";
      subHeading.innerText = "Reach out to discuss your next project today!"
      heading.after(subHeading);

      let messageArea = document.getElementById("messageArea");
      messageArea.hidden = true;

      // form validation
      let fullName = document.getElementById("fullName");
      fullName.addEventListener("blur", function() {
        if(fullName.value.length < 2)
        {
          fullName.focus();
          fullName.select();
          messageArea.hidden = false;
          messageArea.className = "alert alert-danger w-50 mx-auto";
          messageArea.textContent = "Please enter an appropriate Name";
        }
        else
        {
          messageArea.removeAttribute("class");
          messageArea.hidden = true;
        }  
      });

      // sendButton - submits form and redirects user to homepage once validated
      let sendButton = document.getElementById("sendButton");
      sendButton.addEventListener("click", function(event){
        event.preventDefault();
        let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
        co-ole.log(contact.serialize);
            
        // Check if the serialized object exists once validations are performed, and so, redirect user to homepage
        if(contact.serialize()) 
        {
          localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
        }       

        location.href = "index.html";
      });
    }
//#endregion

//#region CONTACT LIST DISPLAY PAGE CONTENT
    /**
     * A function to display contact-list.html
     */
    function displayContactList()
    {

      // Check if records exist in local store
      if(localStorage.length > 0)
      {
        let contactList = document.getElementById("contactList");
        let data = "";

        // Loop through each record in localStorage and render 
        for (let index = 0; index < localStorage.length; index++)
        {
          let contactData = localStorage.getItem((index + 1).toString());

          let contact = new Contact();
          contact.deserialize(contactData);

          data += `<tr>
                  <th scope="row">${index + 1}</th>
                  <td>${contact.FullName}</td>
                  <td>${contact.ContactNumber}</td>
                  <td>${contact.EmailAddress}</td>
                  </tr>`;
        }
        contactList.innerHTML = data;
      }
    }
//#endregion
    /**
     * A function to load all of the pages
     */
    function Start()
    {
        // Dynamically update Products nav link to Projects
        document.querySelectorAll("nav ul li a")[1].innerHTML = '<i class="fa fa-code"></i> Projects';
        
        // Dynamically generate footer navbar
        let mainContent = document.querySelector("main");
        console.log(mainContent);

        // Create footer
        let footer = document.createElement("footer");
        footer.innerHTML = `        
        <nav class="navbar fixed-bottom text-white navbar-dark bg-dark justify-content-center">
          <p class="my-2"><i class="far fa-copyright"></i> Copyright AP Software, 2022.</p>
        </nav>
        `;

        // Inject footer into bottom of each page
        mainContent.after(footer);
        
        // Create new nav link item and inject into navbar after about us
        const navLinkItem = document.createElement("li");
        navLinkItem.classList.add("nav-item");
        const navLink = document.createElement("a");
        navLink.classList.add("nav-link");
        navLink.setAttribute("href", "human-resources.html")
        navLink.innerHTML = '<i class="fa fa-globe"></i> Human Resources';
        navLinkItem.appendChild(navLink);
        
        // Insert HR link into navbar
        document.querySelectorAll("nav ul li")[3].after(navLinkItem)

        //A switch-case that checks for the title of the current .html page and displays a different display funciton depending
        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
          case "Contact-List":
              displayContactList();
            break;
        }        
    }
    window.addEventListener("load", Start);

})();