panier=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
fetch('./php/ObjetsEnigme.php')
.then(result => result.json())
.then(result => {
var map = L.map('map').setView([6.505, -66.09], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//panier=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let msg = document.getElementById('bravo');
let time = document.getElementById('time');
let timeoutId;
let intervalId;

let dec = 0;
let sec = 0;
let min = 0;
let secval=0;
let minval=0;
function timer() {
console.log("hhhhh");
intervalId = setInterval(function () {
secval= updatetime(sec);
minval=updatetime(min);
dec += 1;
if (dec >= 10) { dec = 0; sec += 1; }
if (sec >= 60) { sec = 0; min += 1; }
p1.textContent=minval;
p2.textContent=secval;
}, 100)
}
window.onload=timer();


function updatetime(i){
if (i<10) { i="0"+ i; }
return i;
}

var icon0=L.icon({
              iconUrl: './images/Enigme_icones/mdp.png',
              iconSize:     [100, 100], // size of the icon
              iconAnchor:   [result[0].latitude, result[0].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet0 =L.marker([result[0].latitude, result[0].longitude],{icon: icon0});


map.on('zoomend', function() {
    if (map.getZoom()<result[0].minzoom || panier[0]==objet0){
           map.removeLayer(objet0);
   }
    else {
            map.addLayer(objet0);
        }
});
objet0.bindPopup(result[0].hint1).openPopup()
var icon1=L.icon({
              iconUrl: './images/Enigme_icones/tel.png',

              iconSize:     [100, 100], // taille de l'icone
              iconAnchor:   [result[1].latitude, result[1].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur



                            });
var objet1 =L.marker([result[1].latitude, result[1].longitude], {icon: icon1});
map.on('zoomend', function() {
    if (map.getZoom()<result[1].minzoom || panier[1]==objet1){
            map.removeLayer(objet1);
    }
    else {
            map.addLayer(objet1);
        }
});
objet1.bindPopup(result[1].hint2).openPopup()
var icon2=L.icon({
              iconUrl: './images/Enigme_icones/qrcode.png',

              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[2].latitude, result[2].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur


                                });

var objet2=L.marker([result[2].latitude, result[2].longitude],{icon: icon2});

var icon3=L.icon({
              iconUrl: './images/Enigme_icones/position.png',

              iconSize:     [100, 100], // taille de l'icone
              iconAnchor:   [result[3].latitude, result[3].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur


                                });
var objet3 =L.marker([result[3].latitude, result[3].longitude],{icon: icon3});

var icon4=L.icon({
              iconUrl: './images/Enigme_icones/contact.png',

              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[4].latitude, result[4].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur


                                });
var objet4 =L.marker([result[4].latitude, result[4].longitude],{icon: icon4});

var icon5=L.icon({
              iconUrl: './images/Enigme_icones/voiture.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[5].latitude, result[5].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet5 =L.marker([result[5].latitude, result[5].longitude],{icon: icon5});

var icon6=L.icon({
              iconUrl: './images/Enigme_icones/bateau.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[6].latitude, result[6].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet6 =L.marker([result[6].latitude, result[6].longitude],{icon: icon6});

var icon7=L.icon({
              iconUrl: './images/Enigme_icones/ticket.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[7].latitude, result[7].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet7 =L.marker([result[7].latitude, result[7].longitude],{icon: icon7});

var icon8=L.icon({
              iconUrl: './images/Enigme_icones/train.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[8].latitude, result[8].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet8 =L.marker([result[8].latitude, result[8].longitude],{icon: icon8});

var icon9=L.icon({
              iconUrl: './images/Enigme_icones/post office.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[9].latitude, result[9].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet9 =L.marker([result[9].latitude, result[9].longitude],{icon: icon9});

var icon10=L.icon({
              iconUrl: './images/Enigme_icones/mall.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[10].latitude, result[10].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet10 =L.marker([result[10].latitude, result[10].longitude],{icon: icon10});

var icon11=L.icon({
              iconUrl: './images/Enigme_icones/archive.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[11].latitude, result[11].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet11 =L.marker([result[11].latitude, result[11].longitude],{icon: icon11});

var icon12=L.icon({
              iconUrl: './images/Enigme_icones/sheet.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[12].latitude, result[12].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet12 =L.marker([result[12].latitude, result[12].longitude],{icon: icon12});

var icon13=L.icon({
              iconUrl: './images/Enigme_icones/stock.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[13].latitude, result[13].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet13 =L.marker([result[13].latitude, result[13].longitude],{icon: icon13});

var icon14=L.icon({
              iconUrl: './images/Enigme_icones/cutter.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[14].latitude, result[14].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet14 =L.marker([result[14].latitude, result[14].longitude],{icon: icon14});

var icon15=L.icon({
              iconUrl: './images/Enigme_icones/box.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[15].latitude, result[15].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet15 =L.marker([result[15].latitude, result[15].longitude],{icon: icon15});

var icon16=L.icon({
              iconUrl: './images/Enigme_icones/code.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[16].latitude, result[16].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet16 =L.marker([result[16].latitude, result[16].longitude],{icon: icon16});

var icon17=L.icon({
              iconUrl: './images/Enigme_icones/coffre.png',
              iconSize:     [100, 100], //  taille de l'icone
              iconAnchor:   [result[17].latitude, result[17].longitude], // point de l'icône qui correspondra à l'emplacement du marqueur
                                });
var objet17 =L.marker([result[17].latitude, result[17].longitude],{icon: icon17}).addTo(map);
var form='<form id="popup-form">\
  <label>Nom: <input id="code" type="text" name="nom"></label>\
  <button id="button-submit" type="button">Verifier le code</button>\
  <p id="verification"></p>\
</form>';
objet17.bindPopup(form);

L.DomEvent.addListener(objet17, 'click', function (e) {

L.DomEvent.addListener(L.DomUtil.get('button-submit'), 'click', function (e) {
  var code = L.DomUtil.get('code');
  console.log(code.value);
if (code.value==5286)
  {L.DomUtil.get('verification').innerHTML='<p id="verification" style="color:green">bravo</p>';
   objet17.closePopup();
   panier[17]=objet17;
   map.removeLayer(objet17);
   var sound = new Howl({
         src: ['./sound/dingCling.ogg'],
         autoplay: true,
         loop: false,
         volume: 0.5,
         onend: function() {
         }
     });
     clearInterval(intervalId);
     msg.textContent="Bravo vous avez réussi à résoudre l'énigme en :";
     time.textContent=minval+" minutes et "+secval+" secondes";
     let psd = document.getElementById('pseudo');
     var Sc= "00:"+minval+":"+secval;

     var Ps= psd.textContent;

     const data = {pseudo: Ps, score:Sc};

     fetch('../ensigma/get-joueurs.php', {

         method: 'post',

         body: JSON.stringify(data)

       })

       .then(result => result.text())

       .then(console.log, console.error)
   document.getElementById('coffre').innerHTML='<img src="./images/Enigme_icones/coffre.png" alt="TexteAlternatif" style="height:65px; width:70px">'}
else {
 L.DomUtil.get('verification').innerHTML='<p id="verification" style="color:red">code erroné, retaper le!!</p>'
} });
});




objet0.on('keypress',function(x)
          {
            map.removeLayer(objet0);
            var sound = new Howl({
                            src: ['./sound/dingCling.ogg'],
                            autoplay: true,
                            loop: false,
                            volume: 0.5,
                            onend: function() {

                            }
                        });
                        sound.play();
            panier[0]=objet0;
            objet1._popup.setContent(result[1].hint1)
            document.getElementById('mdp').innerHTML='<img src="./images/Enigme_icones/mdp.png" alt="TexteAlternatif" style="height:60px; width:70px">'
            objet1.on('keypress',function(x){
                      map.removeLayer(objet1);
                      var sound = new Howl({
                            src: ['./sound/dingCling.ogg'],
                            autoplay: true,
                            loop: false,
                            volume: 0.5,
                            onend: function() {
                            }
                        });
                        sound.play();
                      panier[1]=objet1;
                      map.on('zoomend', function() {
                          if (map.getZoom()<result[2].minzoom || panier[2]==objet2){
                                  map.removeLayer(objet2);
                          }
                          else {
                                  map.addLayer(objet2);
                              }
                      });
                      objet2.bindPopup(result[2].hint1).openPopup()
                      map.on('zoomend', function() {
                          if (map.getZoom()<result[3].minzoom || panier[3]==objet3){
                                  map.removeLayer(objet3);
                          }
                          else {
                                  map.addLayer(objet3);
                              }
                      });
                      objet3.bindPopup(result[3].hint2).openPopup()
                      document.getElementById('tel').innerHTML='<img src="./images/Enigme_icones/tel.png" alt="TexteAlternatif" style="height:65px; width:70px">'
            });
});


objet2.on('keypress',function(x){
          panier[2]=objet2;
          map.removeLayer(objet2);
          var sound = new Howl({
                src: ['./sound/dingCling.ogg'],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function() {
                }
            });
          objet3._popup.setContent(result[3].hint1)
          document.getElementById('qrcode').innerHTML='<img src="./images/Enigme_icones/qrcode.png" alt="TexteAlternatif" style="height:65px; width:70px">'
          objet3.on('keypress',function(x){
                   panier[3]=objet3;
                    map.removeLayer(objet3);
                    var sound = new Howl({
                          src: ['./sound/dingCling.ogg'],
                          autoplay: true,
                          loop: false,
                          volume: 0.5,
                          onend: function() {
                          }
                      });
                    map.on('zoomend', function() {
                        if (map.getZoom()<result[4].minzoom || panier[4]==objet4){
                                map.removeLayer(objet4);
                        }
                        else {
                                map.addLayer(objet4);
                            }
                    });
                    objet4.bindPopup(result[4].hint1).openPopup()
                    map.on('zoomend', function() {
                        if (map.getZoom()<result[5].minzoom || panier[5]==objet5){
                                map.removeLayer(objet5);
                        }
                        else {
                                map.addLayer(objet5);
                            }
                    });
                    objet5.bindPopup(result[5].hint2).openPopup()
                    document.getElementById('position').innerHTML='<img src="./images/Enigme_icones/position.png" alt="TexteAlternatif" style="height:65px; width:70px">'
          });

});
objet4.on('keypress',function(x){
          panier[4]=objet4;
          map.removeLayer(objet4);
          var sound = new Howl({
                src: ['./sound/dingCling.ogg'],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function() {
                }
            });
          objet5._popup.setContent(result[5].hint1)
          document.getElementById('contact').innerHTML='<img src="./images/Enigme_icones/contact.png" alt="TexteAlternatif" style="height:50px ; width:70px">'
          objet5.on('keypress',function(x){
            var sound = new Howl({
                  src: ['./sound/dingCling.ogg'],
                  autoplay: true,
                  loop: false,
                  volume: 0.5,
                  onend: function() {
                  }
              });
            panier[5]=objet5;
            map.on('zoomend', function() {
                if (map.getZoom()<result[6].minzoom || panier[6]==objet6){
                        map.removeLayer(objet6);
                }
                else {
                        map.addLayer(objet6);
                    }
            });
            objet6.bindPopup(result[6].hint1).openPopup()

                    map.removeLayer(objet5);
                    document.getElementById('voiture').innerHTML='<img src="./images/Enigme_icones/voiture.png" alt="TexteAlternatif" style="height:65px; width:70px">'
          });
});
objet6.on('keypress',function(x){
          panier[6]=objet6;
          map.removeLayer(objet6);
          var sound = new Howl({
                src: ['./sound/dingCling.ogg'],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function() {
                }
            });
          document.getElementById('bateau').innerHTML='<img src="./images/Enigme_icones/bateau.png" alt="TexteAlternatif" style="height:65px; width:70px ">'
          map.on('zoomend', function() {
              if (map.getZoom()<result[7].minzoom || panier[7]==objet7){
                      map.removeLayer(objet7);
              }
              else {
                      map.addLayer(objet7);
                  }
          });
          objet7.bindPopup(result[7].hint1).openPopup()
          map.on('zoomend', function() {
              if (map.getZoom()<result[8].minzoom || panier[8]==objet8){
                      map.removeLayer(objet8);
              }
              else {
                      map.addLayer(objet8);
                  }
          });
          objet8.bindPopup(result[8].hint2).openPopup()
          map.on('zoomend', function() {
              if (map.getZoom()<result[9].minzoom || panier[9]==objet9){
                      map.removeLayer(objet9);
              }
              else {
                      map.addLayer(objet9);
                  }
          });
          objet9.bindPopup(result[9].hint2).openPopup()

          });


objet7.on('keypress',function(x){
          panier[7]=objet7;
          map.removeLayer(objet7);
          var sound = new Howl({
                src: ['./sound/dingCling.ogg'],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function() {
                }
            });
          objet8._popup.setContent(result[8].hint1)
          document.getElementById('ticket').innerHTML='<img src="./images/Enigme_icones/ticket.png" alt="TexteAlternatif" style="height:65px; width:70px">'
          objet8.on('keypress',function(x){
                   panier[8]=objet8;
                    map.removeLayer(objet8);
                    var sound = new Howl({
                          src: ['./sound/dingCling.ogg'],
                          autoplay: true,
                          loop: false,
                          volume: 0.5,
                          onend: function() {
                          }
                      });
                    objet9._popup.setContent(result[9].hint1);
                    document.getElementById('train').innerHTML='<img src="./images/Enigme_icones/train.png" alt="TexteAlternatif" style="height:65px; width:70px">'
});
});
objet9.on('keypress',function(x)
          {
            map.removeLayer(objet9);
            var sound = new Howl({
                            src: ['./sound/dingCling.ogg'],
                            autoplay: true,
                            loop: false,
                            volume: 0.5,
                            onend: function() {

                            }
                        });
                        sound.play();
            panier[9]=objet9;
            document.getElementById('poste_office').innerHTML='<img src="./images/Enigme_icones/post office.png" alt="TexteAlternatif" style="height:60px; width:70px">'
            map.on('zoomend', function() {
                if (map.getZoom()<result[11].minzoom || panier[11]==objet11){
                        map.removeLayer(objet11);
                }
                else {
                        map.addLayer(objet11);
                    }
            });
            objet11.bindPopup(result[11].hint1).openPopup()
            map.on('zoomend', function() {
                if (map.getZoom()<result[12].minzoom || panier[12]==objet12){
                        map.removeLayer(objet12);
                }
                else {
                        map.addLayer(objet12);
                    }
            });
            objet12.bindPopup(result[12].hint2).openPopup()


});
objet11.on('keypress',function(x){
          panier[11]=objet11;
          map.removeLayer(objet11);
          var sound = new Howl({
                src: ['./sound/dingCling.ogg'],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function() {
                }
            });
          objet12._popup.setContent(result[12].hint1)
          document.getElementById('archive').innerHTML='<img src="./images/Enigme_icones/archive.png" alt="TexteAlternatif" style="height:65px; width:70px; width:70px">'
          objet12.on('keypress',function(x){
                   panier[12]=objet12;
                    map.removeLayer(objet12);
                    var sound = new Howl({
                          src: ['./sound/dingCling.ogg'],
                          autoplay: true,
                          loop: false,
                          volume: 0.5,
                          onend: function() {
                          }
                      });
                      map.on('zoomend', function() {
                          if (map.getZoom()<result[10].minzoom || panier[10]==objet10){
                                  map.removeLayer(objet10);
                          }
                          else {
                                  map.addLayer(objet10);
                              }
                      });
                      objet10.bindPopup(result[10].hint1).openPopup();
                    document.getElementById('sheet').innerHTML='<img src="./images/Enigme_icones/sheet.png" alt="TexteAlternatif" style="height:65px; width:70px">'
});
});
objet10.on('keypress',function(x)
          {
            map.removeLayer(objet10);
            var sound = new Howl({
                            src: ['./sound/dingCling.ogg'],
                            autoplay: true,
                            loop: false,
                            volume: 0.5,
                            onend: function() {

                            }
                        });
                        sound.play();
            panier[10]=objet10;
            document.getElementById('mall').innerHTML='<img src="./images/Enigme_icones/mall.png" alt="TexteAlternatif" style="height:60px; width:70px">'
            map.on('zoomend', function() {
                if (map.getZoom()<result[13].minzoom || panier[13]==objet13){
                        map.removeLayer(objet13);
                }
                else {
                        map.addLayer(objet13);
                    }
            });
            objet13.bindPopup(result[13].hint1).openPopup()


});
objet13.on('keypress',function(x)
          {
            map.removeLayer(objet13);
            var sound = new Howl({
                            src: ['./sound/dingCling.ogg'],
                            autoplay: true,
                            loop: false,
                            volume: 0.5,
                            onend: function() {

                            }
                        });
                        sound.play();
            panier[13]=objet13;
            document.getElementById('stock').innerHTML='<img src="./images/Enigme_icones/stock.png" alt="TexteAlternatif" style="height:60px; width:70px">'
            map.on('zoomend', function() {
                if (map.getZoom()<result[14].minzoom || panier[14]==objet14){
                        map.removeLayer(objet14);
                }
                else {
                        map.addLayer(objet14);
                    }
            });
            objet14.bindPopup(result[14].hint1).openPopup()
            map.on('zoomend', function() {
                if (map.getZoom()<result[15].minzoom || panier[15]==objet15){
                        map.removeLayer(objet15);
                }
                else {
                        map.addLayer(objet15);
                    }
            });
            objet15.bindPopup(result[15].hint2).openPopup()
            map.on('zoomend', function() {
                if (map.getZoom()<result[16].minzoom || panier[16]==objet16){
                        map.removeLayer(objet16);
                }
                else {
                        map.addLayer(objet16);
                    }
            });
            objet16.bindPopup(result[16].hint2).openPopup()

});
objet14.on('keypress',function(x){
          panier[14]=objet14;
          map.removeLayer(objet14);
          var sound = new Howl({
                src: ['./sound/dingCling.ogg'],
                autoplay: true,
                loop: false,
                volume: 0.5,
                onend: function() {
                }
            });
          objet15._popup.setContent(result[15].hint1)
          document.getElementById('cutter').innerHTML='<img src="./images/Enigme_icones/cutter.png" alt="TexteAlternatif" style="height:65px; width:70px">'
          objet15.on('keypress',function(x){
                   panier[15]=objet15;
                    map.removeLayer(objet15);
                    var sound = new Howl({
                          src: ['./sound/dingCling.ogg'],
                          autoplay: true,
                          loop: false,
                          volume: 0.5,
                          onend: function() {
                          }
                      });
                    objet16._popup.setContent(result[16].hint1)
                    document.getElementById('box').innerHTML='<img src="./images/Enigme_icones/box.png" alt="TexteAlternatif" style="height:65px; width:70px">'
                    objet16.on('keypress',function(x){
                             panier[16]=objet16;
                              map.removeLayer(objet16);
                              var sound = new Howl({
                                    src: ['./sound/dingCling.ogg'],
                                    autoplay: true,
                                    loop: false,
                                    volume: 0.5,
                                    onend: function() {
                                    }
                                });

                              document.getElementById('code').innerHTML='<img src="./images/Enigme_icones/code.png" alt="TexteAlternatif" style="height:65px; width:70px">'
          });
});
});




var popup = L.popup();

   function onMapClick(e) {
       popup
           .setLatLng(e.latlng)
           .setContent("You clicked the map at " + e.latlng.toString())
           .openOn(map);
   }

   map.on('click', onMapClick);

})
