jQuery(() => {
  (function countdown() {
    const dayEl = document.querySelector("[data-day]");
    const hourEl = document.querySelector("[data-hour]");
    const minEl = document.querySelector("[data-min]");
    const secEl = document.querySelector("[data-sec]");

    const currYear = new Date().getFullYear();

    const newYearDate = new Date(`January 1 ${currYear + 1} 00:00:00`);

    function updateCounter() {
      const currentDate = new Date();
      const dateDiff = newYearDate.getTime() - currentDate.getTime();

      const days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
      const hours = Math.floor(
        (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

      const addZero = (str: string) => {
        return `0${str}`;
      };

      if (dayEl && hourEl && minEl && secEl) {
        dayEl.textContent =
          days < 10 ? addZero(days.toString()) : days.toString();
        hourEl.textContent =
          hours < 10 ? addZero(hours.toString()) : hours.toString();
        minEl.textContent =
          minutes < 10 ? addZero(minutes.toString()) : minutes.toString();
        secEl.textContent =
          seconds < 10 ? addZero(seconds.toString()) : seconds.toString();
      }
    }

    const interval = setInterval(updateCounter, 1 * 1000);
  })();

  (function addToCart() {
    const addToCartEl = $(".add-to-cart");
    const basketCounterEl = $("#basket-counter");
    console.log(addToCartEl, basketCounterEl);
    if (addToCartEl && basketCounterEl) {
      addToCartEl.on("click", () => {
        const currCount = parseInt(basketCounterEl.text());
        if (currCount >= 99) return basketCounterEl.text(`${currCount}+`);
        basketCounterEl.text(currCount + 1);
      });
    }
  })();
});
