(function($) {
  
  var proj = [
   {id: 0, title: "Chicago School App", description: "Search for different school type and recieve the location on a map", languages: "HTML, CSS, Material Components, JQuery, AJAX", repoLink: "https://github.com/kraju3/it202spr2018/tree/master/projects/p2", pageLink: "https://kraju3.github.io/it202spr2018/projects/p2/index.html"},
   {id: 1, title: "Game", description: "A game created using JavaScript and HTML", languages: "HTML Canvas, jQuery", repoLink: "https://github.com/kraju3/it202spr2018/tree/master/labs/lab3", pageLink: "https://kraju3.github.io/it202spr2018/labs/lab3/index.html"}
  ];
    
  $.each(proj, function( key, value ) {
      
      var output = $('#project').clone();
      $("h5",output).text(value.title);
      $("p",output).text("Info: " + value.description + "Languages used: " + value.languages);
       var index2 = 1;
        output.find("p").each(function() {
            var myName = $(this).attr("href");
            if(index2 == 1)
            {
              $(this).text("Description: " + value.description);
            }
            else if(index2 == 2)
            {
               $(this).text("Languages Used: " + value.technologies);
            }
            index2++;
        });
      
      
        var index = 1;
        output.find("a").each(function() {
            var myName = $(this).attr("href");
            if(index == 1)
            {
              $(this).attr("href", myName+value.repoLink);
            }
            else if(index == 2)
            {
               $(this).attr("href", myName+value.pageLink);
            }
            index++;
        });
      
      $('#appending').append(output);
      $(output).show()
    }

  );  
  
  

})(jQuery); // End of use strict