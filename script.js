document.querySelector('.embed-link').addEventListener('click', function (e) {
  e.preventDefault();

  this.setAttribute('class', 'hidden');

  var options = {
    pdfOpenParams: {
      pagemode: 'thumbs',
      navpanes: 1,
      toolbar: 1,
      statusbar: 1,
      view: 'FitV',
    },
  };

  PDFObject.embed('./assets/sample.pdf', '#pdf', options);
});
