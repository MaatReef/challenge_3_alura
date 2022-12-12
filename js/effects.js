// Funcion para manejar la transición del carousel
window.addEventListener("load", () => {
    const carrusel1 = document.querySelector(".carrusel-items1");
    const carrusel2 = document.querySelector(".carrusel-items2");
    const carrusel3 = document.querySelector(".carrusel-items3");
    const carrusel4 = document.querySelector(".carrusel-items4");
  
    console.log("*****")
    console.log(carrusel1.scrollWidth);
    console.log(carrusel1.clientWidth);
    console.log("*****")
    console.log(carrusel2.scrollWidth);
    console.log(carrusel2.clientWidth);
    console.log("*****")
    console.log(carrusel3.scrollWidth);
    console.log(carrusel3.clientWidth);
    console.log("*****")
    console.log(carrusel4.scrollWidth);
    console.log(carrusel4.clientWidth);
  
    let maxScrollLeft1 = carrusel1.scrollWidth - carrusel1.clientWidth;
    let maxScrollLeft2 = carrusel2.scrollWidth - carrusel2.clientWidth;
    let maxScrollLeft3 = carrusel3.scrollWidth - carrusel3.clientWidth;
    let maxScrollLeft4 = carrusel4.scrollWidth - carrusel4.clientWidth;
    let intervalo1 = null;
    let intervalo2 = null;
    let intervalo3 = null;
    let intervalo4 = null;
    let step = 1;
    const start1 = () => {
      intervalo1 = setInterval(function () {
        carrusel1.scrollLeft = carrusel1.scrollLeft + step;
        if (carrusel1.scrollLeft === maxScrollLeft1) {
          step = step * -1;
        } else if (carrusel1.scrollLeft === 0) {
          step = step * -1;
        }
      }, 25);
    };
    const start2 = () => {
    intervalo2 = setInterval(function () {
        carrusel2.scrollLeft = carrusel2.scrollLeft + step;
        if (carrusel2.scrollLeft === maxScrollLeft2) {
            step = step * -1;
        } else if (carrusel2.scrollLeft === 0) {
            step = step * -1;
        }
        }, 25);
    };
    const start3 = () => {
    intervalo3 = setInterval(function () {
        carrusel3.scrollLeft = carrusel3.scrollLeft + step;
        if (carrusel3.scrollLeft === maxScrollLeft3) {
            step = step * -1;
        } else if (carrusel3.scrollLeft === 0) {
            step = step * -1;
        }
        }, 25);
    };
    const start4 = () => {
    intervalo4 = setInterval(function () {
        carrusel4.scrollLeft = carrusel4.scrollLeft + step;
        if (carrusel4.scrollLeft === maxScrollLeft4) {
            step = step * -1;
        } else if (carrusel4.scrollLeft === 0) {
            step = step * -1;
        }
        }, 25);
    };
  
    const stop1 = () => {
      clearInterval(intervalo1);
    };
    const stop2 = () => {
      clearInterval(intervalo2);
    };
    const stop3 = () => {
      clearInterval(intervalo3);
    };
    const stop4 = () => {
      clearInterval(intervalo4);
    };
  
    carrusel1.addEventListener("mouseover", () => {
      stop1();
    });
    carrusel2.addEventListener("mouseover", () => {
      stop2();
    });
    carrusel3.addEventListener("mouseover", () => {
      stop3();
    });
    carrusel4.addEventListener("mouseover", () => {
      stop4();
    });
  
    carrusel1.addEventListener("mouseout", () => {
      start1();
    });
    carrusel2.addEventListener("mouseout", () => {
      start2();
    });
    carrusel3.addEventListener("mouseout", () => {
      start3();
    });
    carrusel4.addEventListener("mouseout", () => {
      start4();
    });
  
    setTimeout(() => {
      start1();
      start2();
      start3();
      start4();
    }, 1500);
  });
  
  
