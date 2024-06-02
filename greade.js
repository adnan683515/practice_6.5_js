var gpa = 50;
if (gpa <= 100 && gpa >= 80) {
    console.log("A+");
}
else if (gpa >= 70 && gpa < 80) {
    console.log("A");
}
else if (gpa >= 60 && gpa < 70) {
    console.log("A-");
}
else if (gpa >= 50 && gpa < 60) {
    console.log("B");
}
else if (gpa >= 40 && gpa < 50) {
    console.log("C");
}
else if (gpa >= 33 && gpa < 40) {
    console.log("D")
}
else {
    console.log("F");
}