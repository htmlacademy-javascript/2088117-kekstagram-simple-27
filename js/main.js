
function checkLineWidth (lineWidth) {
  const MINLENGTH = 20;
  const MAXLENGTH = 140;
  if (lineWidth > MINLENGTH && lineWidth < MAXLENGTH) {
    return true;
  } else {
    return false;
  }
}

checkLineWidth(59);
