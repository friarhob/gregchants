var tableInputs = [];

$.getJSON("../data/music-files.json", function(data) {
  data.music.forEach(function(music) {
    line = [];
    line.push(music.name);
    line.push(
      '<audio controls><source src="' +
        music.url +
        '" type="audio/mpeg"></audio>'
    );
    line.push('<a href="' + music.url + '">' + music.filename + "</a>");
    tableInputs.push(line.slice(0)); // .slice(0) is cloning line
  });

  $("#chants-table").DataTable({
    data: tableInputs,
    pageLength: 2,
    columnDefs: [{ orderable: false, targets: 1 }]
  });
});

console.log(tableInputs);

// $(document).ready(function() {
//   $("#chants-table").DataTable({
//     data: tableInputs,
//     pageLength: 2,
//     columnDefs: [{ orderable: false, targets: 1 }]
//   });
// });
