// Chart 구성
const ctx = document.getElementById("mychart");

const data = {
  labels: ["HTML", "CSS", "JavaScript", "Python", "Java", "C / C++", "Rudy"],
  datasets: [
    {
      label: "지금 나의 능력치",
      data: [15, 20, 10, 0, 0, 5, 0],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "5개월 뒤 나의 능력치",
      data: [90, 90, 80, 50, 50, 50, 50],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

const config = {
  type: "radar",
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
};

new Chart(ctx, config);
