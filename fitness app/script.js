const ctx = document.getElementById('progressChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Workouts Completed',
      data: [1, 2, 1, 3, 2, 1, 0],
      borderColor: '#28a745',
      fill: false,
      tension: 0.4
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});
