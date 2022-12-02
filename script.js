let section = document.querySelector("section"),
    icons = document.querySelector(".icons");

    icons.onclick = ()=>{
      section.classList.toggle("dark");
    }

    // creating a function and calling it in every seconds

    setInterval(()=>{

      //Hour code 
      let date = new Date();
      hour = date.getHours();
      document.querySelector(".hour_num").innerText = hour;

      // Minutes codes
      let min = new Date();
      min = min.getMinutes();
      document.querySelector(".min_num").innerText = min;


      // Sec codes
      let sec = new Date();
      sec = date.getSeconds()
      sec = document.querySelector(".sec_num").innerText = sec;
    },1000); // 1000 millisecond = 1s