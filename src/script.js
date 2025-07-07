const mMenu = document.getElementById("mobile-menu");

function handleClick(){
    mMenu.classList.toggle("hidden");
}

function startCounter(id, target, speed) {
     const element = document.getElementById(id);
     let count = 0;
     const interval = setInterval(() => {
       count++;
       element.innerText = count;
       if (count >= target) {
         clearInterval(interval);
       }
     }, speed);
}

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter("section1", 120, 50);
          startCounter("section2", 80, 60);
          startCounter("section3", 1000, 10);
          observer.disconnect(); // Run only once
        }
      });
    });

    observer.observe(document.getElementById("counterSection"));

