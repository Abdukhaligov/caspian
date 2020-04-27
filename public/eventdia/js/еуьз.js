function fileManagerDownloadSVG() {
  ga('send', 'event', 'Icogram', 'Download SVG');
  var svgContent = fileManagerGetSVGContent();
  var blob = new Blob([svgContent], {type: 'image/svg+xml'});
  saveAs(blob, fileManagerGetProposedFileName("svg"));
}