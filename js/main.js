var theNum = "0";

let arr = ["morning", "day", "evening", "night"];

function go_to_right()

{

  theNum++;

  if(theNum == arr.length){theNum="0";}

  change_image_2.src='https://dwweb.ru/__img/php/img_php/'+arr[theNum]+'.png';

}

function go_to_left()

{

  theNum--;

  if(theNum == "-1"){theNum = arr.length -1; } console.log(theNum );

  change_image_2.src='https://dwweb.ru/__img/php/img_php/'+arr[theNum]+'.png';

}

