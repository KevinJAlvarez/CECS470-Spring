<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CECS 470 Homepage</title>
    <link rel="stylesheet" href="home_style.css" />
  </head>
  <body>
    <header>
      <h1><strong>Welcome to Our Webpage!</strong></h1>
    </header>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Website Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <img
              src="/images/shinji.jpg"
              alt="Shinji being sad"
              width="250"
              height="auto"
            />
          </th>
          <th>Kevin Alvarez</th>
          <th><a href="Kevin_Webpage.html">Kevin's Page</a></th>
        </tr>
        <tr>
          <th>
            <img
              src="/images/Red_Panda_Plush.jpg"
              alt="Red Panda Plushie"
              width="250"
              height="auto"
            />
          </th>
          <th>James Curran</th>
          <th><a href="james_webpage.html">James's Page</th>
        </tr>
        <tr>
          <th>
            <img
              src="Simon.jpg"
              alt="SIMON THE DIGGER"
              width="250"
              height="auto"
              />
          </th>
          <th>Anthony Theng</th>
          <th><a href="Anthony_Webpage.html">Anthony's Page</a></th>
        </tr>
      </tbody>
    </table>

    <h2 class="month-title">March 2026</h2>
    <table class="calendar">
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>

      <tbody>
        <?php
        $year = 2026;
        $month = 3;
        $totalDays = cal_days_in_month(CAL_GREGORIAN, $month,  $year);
        $startDay = date('w', mktime(0,0,0, $month,1, $year));

        $day = 1;
        $cellCount = 0;
        $rows = ceil(($startDay + $totalDays) / 7);

        for ($row = 0; $row < $rows; $row++) {
          echo "<tr>";
          for ($col = 0; $col < 7; $col++) {
            if ($cellCount < $startDay || $day > $totalDays) {
              echo "<td></td>";
            } else {
              echo "<td class='day' onclick='changeTheme($day)'>$day</td>";
              $day++;
            }
            $cellCount++;
          }
          echo "</tr>";
        }
        ?>
      </tbody>
    </table>
    
    <script>
      var dayColors = {
        17: '#1a6316'
      }

      function changeTheme(day) {
        document.body.style.background = dayColors[day];
      }

    </script>
  </body>
</html>
