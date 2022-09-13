const ftoc = far => {
  far -= 32;
  far /= 1.8;
  return Math.round(far*10)/10;
};

const ctof = cen => {
  cen *= 1.8;
  cen += 32;
  return Math.round(cen*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
