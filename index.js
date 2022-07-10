const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;
  const numberCounter = () => {
    const targetData = +counter.getAttribute("data-target");
    // console.log(targetData);
    const starting = Number(counter.innerHTML);
    const increment = targetData / 100;
    if (starting < targetData) {
      counter.innerHTML = `${Math.round(starting + increment)}`;
      setTimeout(() => {
        numberCounter();
      }, 10);
    } else {
      counter.innerHTML = targetData;
    }
  };

  numberCounter();
});
