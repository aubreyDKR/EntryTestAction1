function showHiddenRow(hiddenHeadRow1, hiddenHeadRow2, hiddenHeadRow3, hiddenHeadRow4,
    hiddenBodyRow1, hiddenBodyRow2, hiddenBodyRow3, hiddenBodyRow4,
    chevId) {

    //Show HiddenHeadRows
    document.getElementById(hiddenHeadRow1).classList.toggle("show");
    document.getElementById(hiddenHeadRow2).classList.toggle("show");
    document.getElementById(hiddenHeadRow3).classList.toggle("show");
    document.getElementById(hiddenHeadRow4).classList.toggle("show");

    //Show HiddenBodyRows
    document.getElementById(hiddenBodyRow1).classList.toggle("show");
    document.getElementById(hiddenBodyRow2).classList.toggle("show");
    document.getElementById(hiddenBodyRow3).classList.toggle("show");
    document.getElementById(hiddenBodyRow4).classList.toggle("show");


    document.getElementById(chevId).classList.toggle("fa-chevron-right");
    document.getElementById(chevId).classList.toggle("fa-chevron-down");
}