document.getElementById('addSubjectBtn').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('addSubjectModal'));
    myModal.show();
  });

  document.getElementById('subjectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var subName = document.getElementById('subName').value;
    var myModal = new bootstrap.Modal(document.getElementById('addSubjectModal'));
    myModal.hide();
  });