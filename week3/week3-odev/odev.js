
//islem isaretini lutfen string deger olarak girelim!!

function hesapmakinesi(sayi1, sayi2, islemisareti){

    if ( islemisareti == '+') console.log(sayi1+sayi2);
    
    else if ( islemisareti == '-') console.log(sayi1-sayi2);
    
    else if ( islemisareti == '*') console.log(sayi1*sayi2);
    
    else if ( islemisareti == '/'){
   
             if(sayi2==0) console.log('ikinci sayi sifira esit.Bu yuzden sonuc belirsizdir');
            else console.log(sayi1/sayi2);
    
    
        }

    else console.log('boyle bir islem bulunamadi!!');

}

hesapmakinesi(12,3,'/');

//gelistirilecektir!!
