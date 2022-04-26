
        setInterval(zamanHesapla, 1000);
        function zamanHesapla() {
            let zaman = new Date();
            let saat = zaman.getHours();
            let dakika = zaman.getMinutes();
            let saniye = zaman.getSeconds();
            am_pm = "AM";
  
            if (saat > 12) {
                saat -= 12;
                am_pm = "PM";
            }
            if (saat == 0) {
                hr = 12;
                am_pm = "AM";
            }
  
            saat = saat < 10 ? "0" + saat : saat;
            dakika = dakika < 10 ? "0" + dakika : dakika;
            saniye = saniye < 10 ? "0" + saniye : saniye;
  
            let anlıkSaat = saat + ":" 
                + dakika + ":" + saniye + am_pm;
  
            document.getElementById("clock")
                .innerHTML = anlıkSaat;
        }
  
        zamanHesapla();
