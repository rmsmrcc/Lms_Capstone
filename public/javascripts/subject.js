document.getElementById('addSubjectBtn').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('addSubjectModal'));
    myModal.show();
  });

  document.getElementById('subjectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var subjectName = document.getElementById('subjectName').value;
    // Here, you can handle the subject creation logic
    // For example, send an AJAX request to save the subject to your database

    // After successfully adding the subject, you can close the modal
    var myModal = new bootstrap.Modal(document.getElementById('addSubjectModal'));
    myModal.hide();
  });