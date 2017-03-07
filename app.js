$(document).ready(()=>{
  $('.btn').on('click',(e)=>{
    var wrdCount = 0;
    var unique = 0;
    var largeStr = 0;
    var avg = 0;
    var uniqueArr=[];
    var lengthArr=[];
    //Prevents default button behavior
    e.preventDefault();
    var str = $('#user-text').val();
    str = str.replace(/\s/g, '');
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var str = $('#user-text').val().toLowerCase().trim().split(' ');
    wrdCount = str.length;
    $('dl').removeClass('hidden');
    $('.wordCount').html(wrdCount);
    //Filters words and puts them in the unique array
    uniqueArr = str.filter((item, i, ar)=>{
      return ar.indexOf(item) === i;
    });
    $('.unique').html(uniqueArr.length);
    //Average length of words inside of array
    var total = 0;
    for(var j=0;j<wrdCount;j++){
      total += str[j].length
    }
    avg = total / wrdCount;
    $('.average').html(avg);
  })
})
