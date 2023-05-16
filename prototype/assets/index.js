// MANAGE COOP CARD MODAL
function setModalElement(elemID, value) {
    elem = document.getElementById(elemID);
    elem.innerHTML = value;
  }
  
  function setModalElementAttr(elemID, attr, value) {
    elem = document.getElementById(elemID);
    elem.setAttribute(attr, value);
  }
  
  function setModalServices (cooperative) {
    coopServices = document.getElementById("modal-coop-services");
    for (let service of cooperative.services) {
      let serviceItem = document.createElement("li");
      serviceItem.innerHTML = service;
      coopServices.appendChild(serviceItem);
    }
  }
  
  function openModal(country, cooperative) {
    setModalElement("modal-coop-country", country);
    setModalElement("modal-coop-name", cooperative.name)
    setModalElement("modal-coop-tagline", getTranslation(cooperative.tagline));
    setModalElement("modal-coop-description", getTranslation(cooperative.description));
  
    logoPath = cooperative.logo ? './media/logos/' + cooperative.logo : './media/logos/no-logo.png';
    setModalElementAttr("modal-coop-logo", "src", logoPath);
    setModalElementAttr("modal-coop-url", "href", cooperative.url);
  
    setModalServices(cooperative);
  
    // Show modal
    document.body.classList.add("no_scroll");
    var modal = document.getElementById("cooperative-card-modal");
    modal.style.display = "block";
  }
  
  function closeModal(modal) {
    // Hide modal
    modal.style.display = "none";
    document.body.classList.remove("no_scroll");
  
    setModalElement("modal-coop-country", "");
    setModalElement("modal-coop-name", "")
    setModalElement("modal-coop-tagline", "");
    setModalElement("modal-coop-description", "");
    setModalElement("modal-coop-services", "");
  
    setModalElementAttr("modal-coop-logo", "src", './media/logos/no-logo.png');
    setModalElementAttr("modal-coop-url", "href", '#');
  }
  
  // CLOSE MODAL ACTIONS
  var modal = document.getElementById("cooperative-card-modal");
  // Get the <span> element that closes the modal
  var closeBtn = document.getElementById("modal-close");
  // When the user clicks on <span> (x), close the modal
  closeBtn.onclick = function(e) {
    closeModal(modal);
    e.preventDefault();
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal(modal);
    }
  }
  
  
  // STICKY NAVBAR
  const navbar = document.querySelector('.navbar-fixed')
  window.addEventListener('scroll', function (e) {
    const lastPosition = window.scrollY
    if (lastPosition > 110) {
      navbar.classList.add('scrolled')
    } else if (navbar.classList.contains('scrolled')) {
      navbar.classList.remove('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  });
  
  
  // HANDLE CALL TO ACTIONS FROM BUTTONS
  function addActionToBtns(btnClass, actionValue) {
    var btns = document.querySelectorAll('a[class$="'+ btnClass+'"]')
    for (let btn of btns) {
      btn.addEventListener('click', function(e) {
        document.getElementById("form-why-input").value = actionValue
        document.getElementById("get-in-touch").scrollIntoView({behavior: 'smooth'});
        e.preventDefault();
      });
    }
  }
  
  addActionToBtns("join-community", "join-patio-community");
  addActionToBtns("work-together", "work-with-us");