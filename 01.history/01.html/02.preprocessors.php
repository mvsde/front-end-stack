<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>
  </head>
  <body>
    <h1><?php echo $title; ?></h1>
    <ul>
      <?php for ($i = 1; $i <= 4; $i++): ?>
        <li>List item <?php echo $i; ?></li>
      <?php endfor; ?>
    </ul>
  </body>
</html>
