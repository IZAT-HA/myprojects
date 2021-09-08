<?php 
// function select(){

  // echo "<select name = 'year'>";
  // for ( $i=1900; $i<=2015; $i++)
  // { 
  //   echo "<option value='$i'>".$i."</option>";
  // }
  // echo "</select>";
  // }
  // select();
  // echo" <br>";

/*----------------
-----------------
-----------------
-----------------
-----------------
 */

echo"<head><link rel='stylesheet' type='text/css' href='../css/p.css'></head>";

echo'
<a href="../html/main.html" class="back">Home <span class="left"><<</span><span class="right">>></span> </a>
';
echo'<div class="overflow-mask"></div>';
echo "<div class='continar'>";
echo'<h1 class="proj"> <span>O</span>UR PROJECTS </h1>';
echo' <video loop autoplay muted>
<source src="../videos/video.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>';


echo"
<div id='lightbox'>


<article>

<div>
<h1>Hor<span>IZ</span>ons</h1><br>
<aside>
<p>Lorem ipsum dolor amet, consecte adipiscing elit, quisque dictum convallis mi.</p> 
<p>In dapibus auctor dictum donec mattis quis eros ultricies feugiat. </p><p>
Morbi congue faucibus mi, ague blandit curabitur ac lacinia.</p>
</aside>
 </div>
</article>
</div>
<div id=\"lightboxOverlay\">
<button onclick=\"closeoverlay()\" id=\"close\">
<img src=\"../img/close.png\">
</button>
</div>
";


function table()
{
  # code...
  echo "<table class='tab'>";
  for ($i=1; $i<=3; $i++) { 

    
      echo "<tr>";
    
    for ($j=1; $j<=3; $j++) 
    { 
      echo "
      <td id='tdbtn0$i$j'>
      <button onclick='tdbtn0$i$j()'>
      <img src='../img/project-item-0$i$j.jpg'>
      <a>Learn More</a>
      </button>
      </td>";
      
    }
   
    }

    echo "</tr>";
  echo "</table>";
}
table();
echo "
<div class='continar'>";
echo '<script src="../js/p.js" type="text/javascript"></script>';
 ?>
