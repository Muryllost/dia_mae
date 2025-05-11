$(function() {
    // Scroll suave
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 600);
          return false;
        }
      }
    });
  
    // Mostrar CTA após 5 segundos
    setTimeout(function() {
      $('.cta').fadeIn();
    }, 5000);
  
    // Compartilhar nas redes sociais
    $('.social-share a').click(function(e) {
      e.preventDefault();
      const platform = $(this).data('platform');
      const url = window.location.href;
  
      let shareUrl = '';
      switch (platform) {
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
          break;
        case 'whatsapp':
          shareUrl = `https://wa.me/?text=${url}`;
          break;
      }
  
      if (shareUrl) {
        window.open(shareUrl, '_blank');
      }
    });
  
    // Mostrar "feito com amor" ao rolar
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
        $('.made-with-love').fadeIn();
      } else {
        $('.made-with-love').fadeOut();
      }
    });
  
    // Efeito de clique nos links
    $('a').on('click', function() {
      $(this).css({
        'transform': 'scale(1.1)',
        'transition': 'transform 0.3s ease'
      });
  
      setTimeout(() => {
        $(this).css('transform', 'scale(1)');
      }, 300);
    });
  });
  