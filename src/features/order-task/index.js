export const orderTaskColor = (task) => {
  let colorClass = 'yellow';
  if (!task.start_date) {
      colorClass = 'gray';
  } else if (task.end_date) {
      colorClass = 'green';
  } else if (task.overdue) {
      colorClass = 'red';
  }

  return colorClass;
};

export function orderTaskIcon(task) {
  return task.end_date ? "check-square" : "window-close";
};
