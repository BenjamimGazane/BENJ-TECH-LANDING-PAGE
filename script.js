 // Script para mensagem pré-definida do WhatsApp
  document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsappButton');
    
    whatsappButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Mensagem pré-definida
      const message = "Olá! Gostaria de mais informações sobre as Landing Pages Premium da ConvertPageMZ.";
    
      const phoneNumber = "258834304861";
      
      // Codificar a mensagem para URL
      const encodedMessage = encodeURIComponent(message);
      
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      window.open(whatsappURL, '_blank');
    });
  });
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    // Navbar scroll effect
    $(window).scroll(function() {
      if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });

    // Form validation
    (function () {
      'use strict'
      var forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, false)
        })
    })()

    // Fade-in animation on scroll
    function checkFade() {
      $('.fade-in').each(function() {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (scroll + windowHeight - 100 > position) {
          $(this).addClass('visible');
        }
      });
    }
    
    $(window).scroll(function() {
      checkFade();
    });
    
    // Initial check on page load
    checkFade();

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);
      $('html, body').animate({
        'scrollTop': $target.offset().top - 80
      }, 800, 'swing');
    });

    // Contact form submission
     $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        if (this.checkValidity()) {
            // Get form values
            var name = $('#name').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var business = $('#business').val();
            var message = $('#message').val();
            
            // Create WhatsApp message
            var whatsappMessage = "Olá! Gostaria de solicitar uma proposta para Landing Page.%0A%0A";
            whatsappMessage += "*Nome:* " + name + "%0A";
            whatsappMessage += "*E-mail:* " + email + "%0A";
            whatsappMessage += "*Telefone/WhatsApp:* " + phone + "%0A";
            whatsappMessage += "*Tipo de Negócio:* " + business + "%0A";
            whatsappMessage += "*Mensagem:* " + message + "%0A%0A";
            whatsappMessage += "Por favor, entre em contato comigo!";
            
            // Open WhatsApp
            window.open('https://wa.me/258834304861?text=' + whatsappMessage, '_blank');
            
            // Optional: Reset form after submission
            this.reset();
            this.classList.remove('was-validated');
            
            // Optional: Show success message
            alert('Obrigado! Redirecionando para o WhatsApp para finalizar sua solicitação.');
        } else {
            // If form is not valid, show validation messages
            this.classList.add('was-validated');
        }
    });