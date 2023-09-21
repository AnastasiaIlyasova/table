<!DOCTYPE html>

<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Table</title>
  </head>
<body>
<form action="" method="post">
 <p><label>Производитель <input required="" id="company" type="text" name="company"></label></p>
 <p><label>Наименование <input required="" id="model" type="text" name="model" ></label></p>
 <p><label>Цена <input required="" id="price" type="text" name="price" ></label></p>
 <p><label>Количество <input required="" id="amount" type="text" name="amount" ></label></p>
 <p><input type="submit" name="test" value="Добавить" id="test"></p>
</form>
<?php
//Save info to file
$arr = file("text.txt");

  if(!empty($_POST['test'])){
    file_put_contents('text.txt', htmlspecialchars($_POST['company'])." :: ".htmlspecialchars($_POST['model'])." :: ".htmlspecialchars($_POST['price'])." :: ".htmlspecialchars($_POST['amount'])."\n", FILE_APPEND);
}

//Table output
       echo '<table id="table" cellpadding="10" border="1">
              <thead>
                 <tr>
                 <th data-type="string">Производитель</th>
                 <th data-type="string">Наименование</th>
                 <th data-type="number">Цена</th>
                 <th data-type="number">Количество</th>
                 </tr>
              </thead>';
 
//Create function     
function element($argument){
$all  = $argument;
$part = explode("::", $all);
           echo '<tr>';
for($i = 0; $i <= count($part)-1; $i++){
           echo '<td>'.$part[$i].'</td>';
  }                 
           echo '</tr>';
};

//Function call
for($i = 0; $i <= count($arr)-1; $i++){
element($arr[$i]);
}
?>
<script src="script.js"></script>
</body>
</html>