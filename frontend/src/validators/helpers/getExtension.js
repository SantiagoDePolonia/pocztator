
function getExtension(filename) {
  return filename.split('.').pop().toLowerCase();
}

export default getExtension;
