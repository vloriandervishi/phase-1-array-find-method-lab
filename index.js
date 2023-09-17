// code your solution here
function superbowlWin(array) {
  const yearOfWin = array.find((wins) => wins.result === "W");
  return yearOfWin ? yearOfWin.year : undefined;
}
