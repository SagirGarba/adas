"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "../reusable/Button";

const AdamawaStateGeography = () => {
  const [showContent, setShowContent] = useState(false);

  const content = `Adamawa State Basic Geography
Adamawa State situated in North east Nigeria, spans approximately 434.50 km from the northern tip of Madagali to the southernmost part of Toungo, and about 165.58 km in width from the eastern boundary of Fufore to the western edge of Lamurde Local Government Area. Topographically, the State features a mountainous terrain interlaced by major rivers such as the Benue, Gongola, and Yedzeram, contributing to its scenic landscape and agricultural potential.
The State is administratively divided into twenty-one Local Government Areas: Demsa, Fufore, Ganye, Girei, Gombi, Guyuk, Hong, Jada, Lamurde, Madagali, Maiha, Mayo-Belwa, Michika, Mubi North, Mubi South, Numan, Shelleng, Song, Toungo, Yola North, and Yola South. Additionally, Adamawa comprises 107 districts and 50 designated development areas, reflecting a broad and diverse administrative structure.


1.	Demsa Local Government Area 
Date of creation: 	1996 
Headquarters: 	Demsa 
Location: 		Lat. 10° 36° 11° 58'N, Long. 13° 18' 13° 420E 
Major settlements: 	Demsa, Dong, Kadomun Mbula 
Land area: 		1900.31km2 
Temperature: 	Annual average for Maximum is 34.4°C and Minimum is 21.3°C 
Average rainfall: 	Annual total is 918mm 
Population (2018): 	252,666 
Population density: 	133 
Borders: 	Mayo Belwa to the South, Yola South to the East, Girei and Song to the NE, Shelleng to the North, Numan to the West and Taraba Stat, To SW 
Development areas: 	Bidoma, Borrong 
Districts: 	Bille, Borrong, Demsa, Dong, May; Mbula, Ngwamba 

2.          Fufore Local Government Area 
	Date of creation: 	976 
Headquarters: 	Fufore 
Location: 		Lat. 8° 52'-9° 43'N, Long. 12° 02'-13° 8' E 
Major settlements: 	Fufure, Gurin, Karlahi, Mayo-ine, Malabu, Daware 
Land area: 		5,169.32km2 
Temperature: 	Annual average for Maximum is 4.30C and Minimum is 21.4°C 
Average rainfall: 	Annual total is 981mm 
Population (2018): 	296,644 
Population density: 	57 
Borders: 	Song, Girei and Yola South to the north, Jada and Mayobelwa to the South and Cameroon republic to the East. 
Developments Area: 	Gurin, Mayo-Ine, Malabu, Yadim 
Districts: 		Daware, Gurin, Karlahi, Malabu, Mayo-lne, Ribadu, Yadim 

3	Ganye Local Government Area 
Date of creation: 	1976 
Headquarters: 	Ganye 
Location: 		Lat. 8012'-8° 40'N, Long. 11° 37'-12° 5'E 
Major settlements: 	Ganye, Gurum, Sugu,Yelwa 
Land area: 		2,011.47km2 
Temperature: 	Annual average for Maximum is 2.30C and Minimum is 19.60C 
Average rainfall: 	Annual total is 1,231mm 
Population (2018): 	240,686 
Population density: 	120 
Borders: 		Jada to the north, Mayo-Belwa to the 
Northwest,Toungo to the south, Taraba state to 
re west and Cameroon Republic to the east 
Development areas: 	Gangdu, Ganye east. 
Districts: 		Bakari-Guso, Ganye, Gurum, Jaggu, Timdore, Yebbi 

4. 	Girei Local Government Area 
Date of creation: 	1996 
Headquarters: 	Girei 
Location: 		Lat. go 13'-90 37'N, Long. 12016'-120 42'E 
Land area: 		l,151.64km2 
Major settlements: 	Badirisa, Bajabure, Gereng, Girei, Jabbi Lamba, Sangere-Futy, Vunoklang, Temperature (annual average): Maximum 33.90C, Minimum 20.8°C Average rainfall (Annual total): 956mm 
Population (2018): 	183,905 
Population density: 	160 
Borders: 		Song to the north, Shelleng and Demsa to the west, Vola North and Vola 
South to the south and Fufore to the east. 
Development areas: 	Daware, Jera-Bakari, vunoklang 
District: 		Girei 

5	Gombi Local Government Area 
Date of creation: 	1976 
Headquarters:	 Gombi 
Location: 		Lat. go 59' -1Cf1 27'N, Long. 12° 14 -12° 50'E 
Land area: 		l,953.56km2 
Temperature (Annual average): Maximum 32.30C, Minimum 18.70C 
Average rainfall (Annual total): l000mm 
Majorsettlements: 	Fotta, Ga'anda, Garkida, Gombi 
Population (2018): 	209,301 
Population density: 	107 
Borders: 		Borno state to the northwest, Shelleng to the west, song to the south and 
Hong to the east 
Development areas: 	Garkida, lala 
Districts: 		Ga'anda, Garkida, Guyaku, lala 



6.	Guyuk Local Government Area 
Date of creation: 	1976 
Headquarters: 	Guyuk 
Location: 		Lat. 9° 39' _10° 03' N, Long. 11° 45' -12°03' E 
Land area: 		791.54km2 
Temperature (Annual average): Maximum 34.00C, Minimum 20.s°C 
Average rainfall (Annual total): 855mm 
Major settlements: 	Banjiram, Guyuk, Kola 
Population (2018): 	249,972 
Population density: 	316 
Borders: 	Borno state to the north, Gombe state to the west, Lamurde and Numan to the south, Shelleng to the east. 
Development areas: 	Guyuk Central, Guyuk south, Guyuk west 
Districts: 		Banjiram, Bobini, Chikila, Dukul, Dumna, Guyuk, Kola 

7.	Hong Local Government Area 
Date of creation: 	1987 
Headquarters: 	Hong 
Location: 		Lat. 9° 58' -10° 35° N, Long. 12° 35' -13° 13' E 
Land area: 		2,753.20km2 
Temperature (Annual average): Maximum 32,2°C, Minimum 18.s°C 
Average rainfall (Annual total): 1000mm 
Major settlements: 	Gaya, Hong, Kala'a, Kulinyi, Pella 
Population (2018): 	239,602 
Population density: 	87 
Borders: 	Borno state to the north, Gombi to the west, Song to the south, Maiha to the southeast and Mubi North to the east 
Development areas: 	Gaya, Kulinyi, Uba/Hildi 
Districts: 		Dugwaba, Gaya, Hildi, Hong, Kulinyi, Pella, Uba 

8.	Jada Local Government Area 
Date of creation: 	1996 
Headquarters: 	Jada 
Location: 		Lat. 8° 27' - 8° 54' N, long. 11°55'-12048'E 
Land area: 	2,926.11km2 Temperature (Annual average): Maximum 32.60e, Minimum 19.80e 
Average rainfall (Annual total): 1,149mm • 
Major settlements: 	Jada, Kojoli, Koma, Mbulo 
Population (2018): 	238,557 
Population density: 	82 
Borders: 	Fufore to the north, Mayo-Belwa to the West, Cameroon republic to the east and Ganye to the south 
Developments areas: Kojoli, Mbulo, Koma-Vomni 
Districts: 	Danaba, Jada, leko, Mapeo, Mayo-Kalaye, Mbulo, Nasarawo-Koma, Nyibango, Yelli 

9	Lamurde Local Government Area 
Date of creation: 	1996 
Headquarters:	Lamurde 
Location: 		Lat. 9° 24' - 9° 43' N, long. 11°25' -11°58' E 
Land area: 		1,174.69km2 
Temperature (Annual average): Maximum 33.80e, Minimum 20.50e 
Average rainfall (Annual total): 925mm 
Major settlements: 	Lafiya, Gyawana, Waduku 
Population (2018): 	157,562 
Population density: 	134 
Borders: 	Guyuk to the north, Gombe state to the west, Taraba state to the southwest, Numan to the south and east. 
Development areas: 	Gyawana, Waduku 
Districts: 	Gyawana, Kwah, Lafiya, Lamurde, Suwa, Waduku 

10.	Madagali Local Government Area 
Date of creation: 	1996 
Headquarters: 	Gulak 
Location: 		Lat 10039'-100 57'N, Long.13° 19' -13° 41'E 
Land area: 		976.10KM2 
Temperature (Annual average): Maximum 33.00C, Minimum 18.90C 
Average rainfall (Annual total): 854mm 
Major settlements: 	Gulak, Shuwa 
Population (201B): 	191,393 
Population density: 	196 
Borders: 		Borno state to the north and west, Michika to the south and Cameroon 
Republic to the east 
Development areas: 	Madaga/i North, Shuwa 
Districts: 		Duhu, Gulak, Kirchiga, Madagali, Sukur.
 
11	Maiha Local Government Area 
Date of creation: 	1996 
Headquarters: 	Maiha 
Location: 		Lat. 9°31' -10° 09'N, long. 13° 02'-1301TE 
Land area: 		1,385km2 
Temperature (Annual average): Maximum 32.3°C, Minimum 19.00C 
Average rainfall (Annual total): 1,000mm 
Major settlements: 	Belel, Maiha, Pakka, Sorau, 
Population (20lS): 	156,033 
Population density: 	113 
Borders: 	Mubi North to the north, Mubi South to the Northeast, Hong to the northwest, Song to the west, Fufore to the southeast and Cameroon Republic to the east 
Development areas: 	Mbilla, Sorau-Belel, Vokna-Pakka 
Districts: 		Belel, Maiha, Mbilla, Sorau, Vokuna-Pakka 


12	Mayo-Belwa Local Government Area 
Date of creation: 	1976 
Headquarters: 	Mayo-Belwa 
Location: 		Lat. 8° 33'- go 12' N, Long. 11041' - 12° 11"E 
Land Area: 		1,702.4Skm2 
Temperature (Annual average): Maximum 33.SoC, Minimum 20.70C 
Average rainfall (Annual total): 1,022mm 
Major settlements: 	Mayo-belwa, Mayo-Farang, Tola 
Population (201B): 	216,40S 
Population density: 	127 
Borders: 	Ganye to the south, Jada to, the southeast, Fufore to the northeast, Demsa to the north and Taraba state to the west. 
Development areas: 	Gengle, Nasarawo/Jereng, Ndikong, Tola. 
Districts: 		Bajama, Binyeri, Mayo-Farang, Mayo-lambja, Mbilla 

13	Michika Local Government Area 
Date of creation: 	1976 
Headquarters: 	Michika 
Location: 		Lat. 10° 23'-10° 46'N, long. 13° 13'-13° 33'E 
Land area: 		1,082.0Skm2 
Temperature (Annual average): Maximum 32.40C, Minimum 18.SoC 
Average rainfall (Annual total): 896mm 
Major settlements: 	Bozza, Garta, Michika 
Population (201B): 	219, 8S3 
Population density: 	203 
Borders: 	Madagali to the North, Borno state to the west, Mubi North to the south and Cameroon republic to the east 
Development areas: 	Michika South, Michika West, Michika North 
Districts: 		Bazza, Futu, Garta, Madzi, Michika, Nkafa/Moda, Vi, Zah 

14	Mubi North Local Government Area 
Date of creation: 	1996 
Headquarters: 	Mubi 
Location: 		Lat. 10006' - 100 29'N, Long, 13007'-13' 30'E 
Land Area: 		924.32km1 
Temperature (Annual average): Maximum 32.1°C, Minimum 18.5°C 
Average rain/all (Annual total): 1,000mm 
Major settlements: 	Fali, Mayo-Bani, Mubi 
Population (2018): 	214,580 
Population density: 	232 
Borders: 	Michika to the North, Borno State to the northwest, Hong to the west, Maiha and Mubi South to the South and Cameroon republic to the East 
Development areas: 	Fali, Mayo-Bani 
Districts: 		Ba'a, Mayo-Bani, Mubi, Muchala 

15	Mubi South Local Government Area 
Date of creation: 	1996 
Headquarters: 	Gella 
Location: 		Lat. 10°06'-10° 29'N, Long. 13° 07'-13° 30'E 
Land area: 		517.99kml 
Temperature (Annual average): Maximum 30.20C, Minimum 16.70C 
Major settlements: 	Gella, Mubi 
Average rain/all (Annual total): 918mm 
Population (2018): 	184,048 
Population density: 	355 
Borders: 	Mubi North to the north and west, Maiha to the south, Cameroon republic to the east 
Development areas: 	Mubi East, Mubi West 
Districts: 		Gude, Mugulvu, Nasarawo 


16	Numan Local Government Area 
Date of creation: 	1976 
Headquarters: 	Numan 
Location: 		Lat. 9 13'-39'N, Long. 11° 32'-12' 04'E 
Land area: 		940km2 
Temperature (Annual average): Maximum 34.4°(, Minimum 21.2°( 
Average rain/all (Annual total): 911mm 
Major settlements: 	Bare, Imburu, Numan, Vulpi 
Population (2018): 	131,071 
Population density: 	139 
Borders: 	Guyuk and Shelleng to the north, Lamurde to the west, Demsa to the East and Taraba state to the south. 
Development areas: 	Bore-lmburu, Vulpi 
Districts: 		Bare, Vulpi, Numan 

17	Shelleng Local Government Area 
Date of creation: 	1996 
Headquarters: 	Shelleng 
Location: 		Lat. 9° 39' 10° 19'N, Long. 11° 58' - 12° 14'E 
Land area: 		1,S72.48km2 
Temperature (Annual average): Maximum 34.0°(, Minimum 20.s°c
Average rain/all (Annual total): 886mm 
Major settlements: 	Kiri, Shelleng 
Population (2018): 	210,296 
Population density: 	134 
Borders: 		Guyuk to the west, Demsa to the south, Song to the east, Gombi to the 
northeast and Borno state to the North. 
Development area: 	Kiri 
Districts: 		Bakda, Bodwai, Kiri, Kula Dutse, Shelleng 


18	Song Local Government Area 
Date of creation: 	1976 
Headquarters: 	Song 
Location: 		Lat. 9°31' -10 °02'N, Long. 12° 11'- 13° 05'E 
Land area: 		4,325km2 
Temperature (Annual average): Maximum 33.80C, Minimum 20.s°C 
Average rainfall (Annual total): 908mm 
Major settlements: 	Dumne, Loko, Song, Zumo 
Population (2018): 	276,432 
Population density: 	64 
Borders: 	Hong and Gombi to the north, Shelleng to the west, Demsa, Girei and Fufore to the south and Maiha to the east. 
Development areas: 	Dumne, Mboi, Zumo 
Districts: 		Dirma, Dumne, Mboi, Song, Waltadi, Zumo.

19	Toungo Local Government Area 
Date of creation: 	1996 
Headquarters: 	Toungo 
Location: 		Lat. 7° 23' - 8° 23'N, Long. 11° 20' -12° O2E 
Land Area: 		5,665.37km2 
Temperature (Annual average): Maximum 32.10C, Minimum 19.4°C 
Average rainfall (Annual total): 1,326mm 
Major settlements: 	Gumti, Kiri, Toungo 
Population (2018): 	73,898 
Population density: 	13 
Borders: 	Ganye to the north, Taraba state to the west and southwest and Cameroon Republic to the east and south. 
Development areas: 	Kogin-Baba, Toungo West 
Districts: 		Dawo, Toungo 


20	Yola North Local Government Area 
Date of creation: 	1996 
Headquarters: 	Bekaji, Jimeta, Karewa 
Location: 		Lat. 9° 13'- 9° 19'N, Long. 12° 19 -12° 28'E 
Land area: 		111.85km2 
Temperature (Annual average): Maximum 34.5°C, Minimum 21.6°C 
Average rainfall (Annual total): 925mm 
Major settlements: 	Jimeta 
Population (201B): 	282,785 
Population density: 	2,528 
Borders: 		Girei to the north and Yola South to the west, south, and east 
Development area: 	Yola Central 
Districts: 		Jimeta 

21	Yola South Local Government Area 
Date of creation: 	1996 
Headquarters: 	Yola 
Location: 		Lat. 9° OS' - 9° 26'N, Long. 12°05'-12° 35'E 
Land area: 		719km2 
Temperature (Annual average): Maximum 34.5°C, Minimum 2 1. 6°C 
Average rainfall (Annual total): 945mm 
Major settlements: 	Yola town, Namtari, Ngurore, Njoboli, Yolde-pate 
Population (201B): 	277,861 
Population density: 	386 
Borders: 	Yolo North and Girei to the north, Demsa to the west, Fufore to the south and east. 
Development area: 	Yola West 
Districts: 		Namtari, Yola 


`;

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1
        onClick={() => setShowContent(!showContent)}
        style={{
          cursor: "pointer",
          color: "#0B6623",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        Adamawa State: Geographical Profile and Administrative Structure
      </h1>

      {showContent && (
        <>
          <p
            style={{
              whiteSpace: "pre-line",
              fontSize: "1.1rem",
              lineHeight: "1.7",
              color: "#333",
            }}
          >
            {content}
          </p>
          <div className="mt-6">
            <Link href="/forms/partnership">
              <Button text="Join our partnership Community" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AdamawaStateGeography;
