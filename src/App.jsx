import "./styles.css";

import colorData from "./data/colorData";
import Header from "./components/Header";



export default function App({color}) {
  /* Challenge

	Frontend Dergisi, okuyucularına front-end geliştirmedeki en iyi 100 rengi göstermenizi bekliyor. Göreviniz onları aşağıdaki gibi oluşturmak: 
	
		1. colorData dizisindeki 100 hex kodlu rengin her biri için aşağıda işaretli alanda bir ColorCard elementi bulunmalıdır. Renkler zaten sıralanmıştır, bu nedenle elementlerin sırası array'deki renklerin sırası ile eşleşmelidir. 
		   
		2. colorData bileşenindeki sabit kodlu bilgiler, prop'lar aracılığıyla aktarılan verilerle değiştirilmelidir. 
		   
		3. Bu görevleri doğru bir şekilde tamamlarsanız, "En İyi 100 Renk" başlığının altında 100 renk kartı görmelisiniz. Her renk, ilgili rengin sıra numarasını, hex kodunu ve gerçek rengin kendisini arka planda göstermelidir
		   
		Not: colorData dosyaya aktarılmıştır
*/

function ColorCard({ index, hex, color }) {
  return (
    <div className="color-card" style={{ background: color }}>
      <p>
        <span>{index + 1}.</span> {hex}
      </p>
    </div>
  );
}


  return (
    <div className="wrapper">
      <Header />

      {/*------ColorCard elementleriniz aşağıda-----------*/}

      {colorData.map((color, index) => (
        <ColorCard
          key={index}
          index={index}
          hex={color}
          color={color}
        />
      ))}

      {/*------ ColorCard elementleriniz yukarıda-----------*/}
    </div>
  );
}


