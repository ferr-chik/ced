const holidays = {
  "1-1": { name: "New Year's Day", url: "Holidays/new-year.html" },
    "3-8": { name: "International Women's Day", url: "Holidays/womens-day.html" },
    "3-21": { name: "Nauryz", url: "Holidays/nauryz.html" },
    "3-22": { name: "Nauryz", url: "Holidays/nauryz.html" },
    "5-1": { name: "Unity Day", url: "Holidays/unity-day.html" },
    "5-7": { name: "Defender of the Fatherland Day", url: "Holidays/defender-day.html" },
    "5-9": { name: "Victory Day", url: "Holidays/victory-day.html" },
    "7-6": { name: "Capital City Day", url: "Holidays/capital-day.html" },
    "8-30": { name: "Constitution Day", url: "Holidays/constitution-day.html" },
    "12-16": { name: "Independence Day", url: "Holidays/independence-day.html" }
};

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function updateCalendar() {
  const monthYear = document.getElementById("monthYear");
  const calendarBody = document.getElementById("calendarBody");

  calendarBody.innerHTML = "";

  const monthNames = [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                cell.textContent = "";
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.textContent = date;
                const holidayKey = `${currentMonth + 1}-${date}`;

                if (holidays[holidayKey]) {
                    cell.classList.add("holiday");
                    cell.title = holidays[holidayKey].name;
                    cell.onclick = function() {
                        window.location.href = holidays[holidayKey].url;
                    };
                }

              date++;
          }
          row.appendChild(cell);
      }

      calendarBody.appendChild(row);
  }
}
updateCalendar();
function changeMonth(offset) {
  currentMonth += offset;
  if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
  } else if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
  }
  updateCalendar();


updateCalendar();
}