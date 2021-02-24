
//islem isaretini lutfen string deger olarak girelim!!

function hesapmakinesi(sayi1, sayi2, islemisareti){

    if ( islemisareti == '+'){
        let sonuc = {
          islemsonucu:  sayi1+sayi2,
          durum: 'toplama'

                 }
           return sonuc;
        } 
    
    else if ( islemisareti == '-'){
        let sonuc = {
          islemsonucu:  sayi1-sayi2,
          durum: 'cikarma'

                 }
            return sonuc;
        }
    
    else if ( islemisareti == '*'){
        let sonuc = {
          islemsonucu:  sayi1*sayi2,
          durum: 'carpma'

                 }
             return sonuc;
        }
    
    else if ( islemisareti == '/'){
   
             if(sayi2==0) console.log('ikinci sayi sifira esit.Bu yuzden sonuc belirsizdir');
             else {
                let sonuc = {
                  islemsonucu:  sayi1/sayi2,
                  durum: 'bolme'
        
                         }
             return sonuc;
        }
      }

    else console.log('boyle bir islem bulunamadi!!');

}

  const islemm = hesapmakinesi(5,6,'+');
  console.log(islemm);

//gelistirilecektir!!
