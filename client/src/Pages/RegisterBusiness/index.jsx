import React, { useEffect } from 'react'
import { useState } from 'react';
import { MapContainer, Marker , TileLayer, useMapEvents } from 'react-leaflet';

const Index = () => {

  var countries = {
		AFG: "Afghanistan",
		ALB: "Albania",
		ALG: "Algeria",
		AND: "Andorra",
		ANG: "Angola",
		ANT: "Antigua and Barbuda",
		ARG: "Argentina",
		ARM: "Armenia",
		ARU: "Aruba",
		ASA: "American Samoa",
		AUS: "Australia",
		AUT: "Austria",
		AZE: "Azerbaijan",
		BAH: "Bahamas",
		BAN: "Bangladesh",
		BAR: "Barbados",
		BDI: "Burundi",
		BEL: "Belgium",
		BEN: "Benin",
		BER: "Bermuda",
		BHU: "Bhutan",
		BIH: "Bosnia and Herzegovina",
		BIZ: "Belize",
		BLR: "Belarus",
		BOL: "Bolivia",
		BOT: "Botswana",
		BRA: "Brazil",
		BRN: "Bahrain",
		BRU: "Brunei",
		BUL: "Bulgaria",
		BUR: "Burkina Faso",
		CAF: "Central African Republic",
		CAM: "Cambodia",
		CAN: "Canada",
		CAY: "Cayman Islands",
		CGO: "Congo",
		CHA: "Chad",
		CHI: "Chile",
		CHN: "China",
		CIV: "Cote d'Ivoire",
		CMR: "Cameroon",
		COD: "DR Congo",
		COK: "Cook Islands",
		COL: "Colombia",
		COM: "Comoros",
		CPV: "Cape Verde",
		CRC: "Costa Rica",
		CRO: "Croatia",
		CUB: "Cuba",
		CYP: "Cyprus",
		CZE: "Czech Republic",
		DEN: "Denmark",
		DJI: "Djibouti",
		DMA: "Dominica",
		DOM: "Dominican Republic",
		ECU: "Ecuador",
		EGY: "Egypt",
		ERI: "Eritrea",
		ESA: "El Salvador",
		ESP: "Spain",
		EST: "Estonia",
		ETH: "Ethiopia",
		FIJ: "Fiji",
		FIN: "Finland",
		FRA: "France",
		FSM: "Micronesia",
		GAB: "Gabon",
		GAM: "Gambia",
		GBR: "Great Britain",
		GBS: "Guinea-Bissau",
		GEO: "Georgia",
		GEQ: "Equatorial Guinea",
		GER: "Germany",
		GHA: "Ghana",
		GRE: "Greece",
		GRN: "Grenada",
		GUA: "Guatemala",
		GUI: "Guinea",
		GUM: "Guam",
		GUY: "Guyana",
		HAI: "Haiti",
		HKG: "Hong Kong",
		HON: "Honduras",
		HUN: "Hungary",
		INA: "Indonesia",
		IND: "India",
		IRI: "Iran",
		IRL: "Ireland",
		IRQ: "Iraq",
		ISL: "Iceland",
		ISR: "Israel",
		ISV: "Virgin Islands",
		ITA: "Italy",
		IVB: "British Virgin Islands",
		JAM: "Jamaica",
		JOR: "Jordan",
		JPN: "Japan",
		KAZ: "Kazakhstan",
		KEN: "Kenya",
		KGZ: "Kyrgyzstan",
		KIR: "Kiribati",
		KOR: "South Korea",
		KOS: "Kosovo",
		KSA: "Saudi Arabia",
		KUW: "Kuwait",
		LAO: "Laos",
		LAT: "Latvia",
		LBA: "Libya",
		LBR: "Liberia",
		LCA: "Saint Lucia",
		LES: "Lesotho",
		LIB: "Lebanon",
		LIE: "Liechtenstein",
		LTU: "Lithuania",
		LUX: "Luxembourg",
		MAD: "Madagascar",
		MAR: "Morocco",
		MAS: "Malaysia",
		MAW: "Malawi",
		MDA: "Moldova",
		MDV: "Maldives",
		MEX: "Mexico",
		MGL: "Mongolia",
		MHL: "Marshall Islands",
		MKD: "Macedonia",
		MLI: "Mali",
		MLT: "Malta",
		MNE: "Montenegro",
		MON: "Monaco",
		MOZ: "Mozambique",
		MRI: "Mauritius",
		MTN: "Mauritania",
		MYA: "Myanmar",
		NAM: "Namibia",
		NCA: "Nicaragua",
		NED: "Netherlands",
		NEP: "Nepal",
		NGR: "Nigeria",
		NIG: "Niger",
		NOR: "Norway",
		NRU: "Nauru",
		NZL: "New Zealand",
		OMA: "Oman",
		PAK: "Pakistan",
		PAN: "Panama",
		PAR: "Paraguay",
		PER: "Peru",
		PHI: "Philippines",
		PLE: "Palestine",
		PLW: "Palau",
		PNG: "Papua New Guinea",
		POL: "Poland",
		POR: "Portugal",
		PRK: "North Korea",
		PUR: "Puerto Rico",
		QAT: "Qatar",
		ROU: "Romania",
		RSA: "South Africa",
		RUS: "Russia",
		RWA: "Rwanda",
		SAM: "Samoa",
		SEN: "Senegal",
		SEY: "Seychelles",
		SIN: "Singapore",
		SKN: "Saint Kitts and Nevis",
		SLE: "Sierra Leone",
		SLO: "Slovenia",
		SMR: "San Marino",
		SOL: "Solomon Islands",
		SOM: "Somalia",
		SRB: "Serbia",
		SRI: "Sri Lanka",
		SSD: "South Sudan",
		STP: "Sao Tome and Principe",
		SUD: "Sudan",
		SUI: "Switzerland",
		SUR: "Suriname",
		SVK: "Slovakia",
		SWE: "Sweden",
		SWZ: "Swaziland",
		SYR: "Syria",
		TAN: "Tanzania",
		TGA: "Tonga",
		THA: "Thailand",
		TJK: "Tajikistan",
		TKM: "Turkmenistan",
		TLS: "Timor-Leste",
		TOG: "Togo",
		TPE: "Chinese Taipei",
		TTO: "Trinidad and Tobago",
		TUN: "Tunisia",
		TUR: "Turkey",
		TUV: "Tuvalu",
		UAE: "United Arab Emirates",
		UGA: "Uganda",
		UKR: "Ukraine",
		URU: "Uruguay",
		USA: "United States",
		UZB: "Uzbekistan",
		VAN: "Vanuatu",
		VEN: "Venezuela",
		VIE: "Vietnam",
		VIN: "Saint Vincent and the Grenadines",
		YEM: "Yemen",
		ZAM: "Zambia",
		ZAN: "Zanzibar",
		ZIM: "Zimbabwe"
		}


    var pincode = {
      AFG: "+93",
      ALB: "+355",
      ALG: "+213",
      AND: "+376",
      ANG: "+244",
      ANT: "+1-268",
      ARG: "+54",
      ARM: "+374",
      ARU: "+297",
      ASA: "+1-684",
      AUS: "+61",
      AUT: "+43",
      AZE: "+994",
      BAH: "+1-242",
      BAN: "+880",
      BAR: "+1-246",
      BDI: "+257",
      BEL: "+32",
      BEN: "+	229",
      BER: "+1-441",
      BHU: "+975",
      BIH: "+387",
      BIZ: "+501",
      BLR: "+375",
      BOL: "+591",
      BOT: "+267",
      BRA: "+55",
      BRN: "+973",
      BRU: "+673",
      BUL: "+359",
      BUR: "+226",
      CAF: "236",
      CAM: "+855",
      CAN: "+1",
      CAY: "+1-345",
      CGO: "+242",
      CHA: "+235",
      CHI: "+56",
      CHN: "+86",
      CIV: "Cote d'Ivoire",
      CMR: "+237",
      COD: "+243",
      COK: "+682",
      COL: "+57",
      COM: "+269",
      CPV: "+238",
      CRC: "+506",
      CRO: "+385",
      CUB: "+53",
      CYP: "+357",
      CZE: "+420",
      DEN: "+45",
      DJI: "+253",
      DMA: "+1 767",
      DOM: "+1 809",
      ECU: "+593",
      EGY: "+20",
      ERI: "+291",
      ESA: "+503",
      ESP: "+34",
      EST: "+372",
      ETH: "+251",
      FIJ: "+679",
      FIN: "+358",
      FRA: "+33",
      FSM: "+691",
      GAB: "+241",
      GAM: "+220",
      GBR: "+44",
      GBS: "+245",
      GEO: "+995",
      GEQ: "+240",
      GER: "+49",
      GHA: "+233",
      GRE: "+30",
      GRN: "+1 473",
      GUA: "+502",
      GUI: "+224",
      GUM: "+1 671",
      GUY: "+592",
      HAI: "+509",
      HKG: "+852",
      HON: "+504",
      HUN: "+36",
      INA: "+62",
      IND: "+91",
      IRI: "+98",
      IRL: "+353",
      IRQ: "+964",
      ISL: "+354",
      ISR: "+972",
      ISV: "+00 1",
      ITA: "+39",
      IVB: "+1 284",
      JAM: "+1 876",
      JOR: "+962",
      JPN: "+81",
      KAZ: "+7 6",
      KEN: "+254",
      KGZ: "+996",
      KIR: "+686",
      KOR: "+82",
      KOS: "+383",
      KSA: "+966",
      KUW: "+965",
      LAO: "+856",
      LAT: "+371",
      LBA: "+218",
      LBR: "+231",
      LCA: "+1 758",
      LES: "+266",
      LIB: "+961",
      LIE: "+423",
      LTU: "+370",
      LUX: "+352",
      MAD: "+261",
      MAR: "+212",
      MAS: "+60",
      MAW: "+265",
      MDA: "+373",
      MDV: "+960",
      MEX: "+52",
      MGL: "+976",
      MHL: "+692",
      MKD: "+389",
      MLI: "+223",
      MLT: "+356",
      MNE: "+382",
      MON: "+377",
      MOZ: "+258",
      MRI: "+230",
      MTN: "+222",
      MYA: "+95",
      NAM: "+264",
      NCA: "+505",
      NED: "+31",
      NEP: "+977",
      NGR: "+234",
      NIG: "+227",
      NOR: "+47",
      NRU: "+674",
      NZL: "+64",
      OMA: "+968",
      PAK: "+92",
      PAN: "+507",
      PAR: "+595",
      PER: "+51",
      PHI: "+63",
      PLE: "+970",
      PLW: "+680",
      PNG: "+675",
      POL: "+48",
      POR: "+351",
      PRK: "+850",
      PUR: "+1 787",
      QAT: "+974",
      ROU: "+40",
      RSA: "+27",
      RUS: "+7",
      RWA: "+250",
      SAM: "+685",
      SEN: "+221",
      SEY: "+248",
      SIN: "+65",
      SKN: "+1 869",
      SLE: "+232",
      SLO: "+386",
      SMR: "+378",
      SOL: "+677",
      SOM: "+252",
      SRB: "+381",
      SRI: "+94",
      SSD: "+211",
      STP: "+239",
      SUD: "+249",
      SUI: "+41",
      SUR: "+597",
      SVK: "+421",
      SWE: "+46",
      SWZ: "+268",
      SYR: "+963",
      TAN: "+255",
      TGA: "+676",
      THA: "+66",
      TJK: "+992",
      TKM: "+993",
      TLS: "+670",
      TOG: "+228",
      TPE: "+886",
      TTO: "+1 868",
      TUN: "+216",
      TUR: "+90",
      TUV: "+688",
      UAE: "+971",
      UGA: "+256",
      UKR: "+380",
      URU: "+598",
      USA: "+1",
      UZB: "+998",
      VAN: "+678",
      VEN: "+58",
      VIE: "+84",
      VIN: "+1 784",
      YEM: "+967",
      ZAM: "+260",
      ZAN: "+255 24",
      ZIM: "+263"
      }
      console.log(pincode["AFG"])
      var selectedPincode;
      const [country,setCoutry]=useState("");

      const handleCountry=()=>{
        let country = user.country;
        selectedPincode=pincode[country];
        console.log("fjsal"+selectedPincode)
      }


    const [user,setUser]=useState({
      name:"",email:"",latitude:"",longitude:"", country:"",mobile:"",street_address:"",city:"",state:"",pincode:"",image:""})
    let name,value;
    const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;
      console.log(name,value)
      setUser({...user,[name]:value})
    }

    console.log(user)

    const [state, setState] = useState(0);
    const [clickedLocation, setClickedLocation] = useState(null);

  const postData = async (e) => {
    e.preventDefault();
    const {        name,
        email,
        latitude,
        longitude,
        country,
        mobile,
        street_address,
        city,
        state,
        pincode,
        image}=user;
    const res = await fetch("/registerBusiness", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        latitude,
        longitude,
        country,
        mobile,
        street_address,
        city,
        state,
        pincode,
        image
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  function change ()
  {
    setState(state+1);
  } 
  function decrease ()
  {
    setState(state-1);
  } 
  function ClickHandler({ setClickedLocation }) {
    useMapEvents({
      click(event) {
        console.log(event)
        setUser({...user, latitude: event.latlng.lat,longitude:event.latlng.lng});
        // setUser({...user, longitude: event.latlng.lng});
        setClickedLocation(event.latlng);
        
        console.log("object")
      },
    });
  
    return null;
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setUser({...user, image: base64});
};
  

  return (
    <div className='w-full mt-12 mb-32'>
        <div className='md:flex mx-auto rounded-3xl shadow-xl w-[80%] '>
        <div className='w-[50%]'>
        <img className=" img-fluid mx-auto my-32" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Sample image"/>
        </div>
          <div className='w-[50%]'>
            {state == 0 &&
            <div className='my-32 mx-6'>
              <h1 className='text-3xl'>Get your business discovered on our Maps</h1>
              <h3 className='text-gray-500 text-md mt-3'>Enter a few business details to get started</h3>
              <input className='mt-4 text-2xl w-[70%] outline-none pr-4 py-2' type="text" placeholder='Business Name'/>
              <br /><br /><br />
              <button onClick={change} className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">Continue</button>
            </div>
            }
            {state == 1 &&
            <div className='my-32 mx-6'>
              <h1 className='text-3xl'>Enter your business address</h1>
              <h3 className='text-md mt-3'>Add a location where customers can visit your business in person</h3>
              <input className='mt-4 text-2xl w-[70%] outline-none pr-4 py-2' type="text" placeholder='Street Address'/>
              <select
                type="text"
                placeholder="Country"
                        // value={values.batch}
                        onChange={handleInputs}
                        name="country"
                        onClick={()=>{
                         selectedPincode=pincode[country];console.log("final"+selectedPincode)
                         } }
                          autoComplete="off"
              >
                <option value="" onClick={selectedPincode=pincode[country]}>None</option>
                <option value="" onClick={handleCountry}>None</option>
                <option value="AFG" onClick={()=>{console.log("fd")}}>Afghanistan</option>
                <option value="ALB" onClick={handleCountry}>Albania</option>
                <option value="ALG" onClick={handleCountry}>Algeria</option>
                <option value="AND" onClick={handleCountry}>Andorra</option>
                <option value="ANG" onClick={handleCountry}>Angola</option>
                <option value="ANT" onClick={handleCountry}>Antigua and Barbuda</option>
                <option value="ARG" onClick={handleCountry}>Argentina</option>
                <option value="ARM" onClick={handleCountry}>Armenia</option>
                <option value="ARU" onClick={handleCountry}>Aruba</option>
                <option value="ASA" onClick={handleCountry}>American Samoa</option>
                <option value="AUS" onClick={handleCountry}>Australia</option>
                <option value="AUT" onClick={handleCountry}>Austria</option>
                <option value="AZE" onClick={handleCountry}>Azerbaijan</option>
                <option value="BAH" onClick={handleCountry}>Bahamas</option>
                <option value="BAN" onClick={handleCountry}>Bangladesh</option>
                <option value="BAR" onClick={handleCountry}>Barbados</option>
                <option value="BDI" onClick={handleCountry}>Burundi</option>
                <option value="BEL" onClick={handleCountry}>Belgium</option>
                <option value="BEN" onClick={handleCountry}>Benin</option>
                <option value="BER" onClick={handleCountry}>Bermuda</option>
                <option value="BHU" onClick={handleCountry}>Bhutan</option>
                <option value="BIH" onClick={handleCountry}>Bosnia and Herzegovina</option>
                <option value="BIZ" onClick={handleCountry}>Belize</option>
                <option value="BLR" onClick={handleCountry}>Belarus</option>
                <option value="BOL" onClick={handleCountry}>Bolivia</option>
                <option value="BOT" onClick={handleCountry}>Botswana</option>
                <option value="BRA" onClick={handleCountry}>Brazil</option>
                <option value="BRN" onClick={handleCountry}>Bahrain</option>
                <option value="BRU" onClick={handleCountry}>Brunei</option>
                <option value="BUL" onClick={handleCountry}>Bulgaria</option>
                <option value="BUR" onClick={handleCountry}>Burkina Faso</option>
                <option value="CAF" onClick={handleCountry}>Central African Republic</option>
                <option value="CAM" onClick={handleCountry}>Cambodia</option>
                <option value="CAN" onClick={handleCountry}>Canada</option>
                <option value="CAY" onClick={handleCountry}>Cayman Islands</option>
                <option value="CGO" onClick={handleCountry}>Congo</option>
                <option value="CHA" onClick={handleCountry}>Chad</option>
                <option value="CHI" onClick={handleCountry}>Chile</option>
                <option value="CHN" onClick={handleCountry}>China</option>
                <option value="CIV" onClick={handleCountry}>Cote d'Ivoire</option>
                <option value="CMR" onClick={handleCountry}>Cameroon</option>
                <option value="COD" onClick={handleCountry}>DR Congo</option>
                <option value="COK" onClick={handleCountry}>Cook Islands</option>
                <option value="COL" onClick={handleCountry}>Colombia</option>
                <option value="COM" onClick={handleCountry}>Comoros</option>
                <option value="CPV" onClick={handleCountry}>Cape Verde</option>
                <option value="CRC" onClick={handleCountry}>Costa Rica</option>
                <option value="CRO" onClick={handleCountry}>Croatia</option>
                <option value="CUB" onClick={handleCountry}>Cuba</option>
                <option value="CYP" onClick={handleCountry}>Cyprus</option>
                <option value="CZE" onClick={handleCountry}>Czech Republic</option>
                <option value="DEN" onClick={handleCountry}>Denmark</option>
                <option value="DJI" onClick={handleCountry}>Djibouti</option>
                <option value="DMA" onClick={handleCountry}>Dominica</option>
                <option value="DOM" onClick={handleCountry}>Dominican Republic</option>
                <option value="ECU" onClick={handleCountry}>Ecuador</option>
                <option value="EGY" onClick={handleCountry}>Egypt</option>
                <option value="ERI" onClick={handleCountry}>Eritrea</option>
                <option value="ESA" onClick={handleCountry}>El Salvador</option>
                <option value="ESP" onClick={handleCountry}>Spain</option>
                <option value="EST" onClick={handleCountry}>Estonia</option>
                <option value="ETH" onClick={handleCountry}>Ethiopia</option>
                <option value="FIJ" onClick={handleCountry}>Fiji</option>
                <option value="FIN" onClick={handleCountry}>Finland</option>
                <option value="FRA" onClick={handleCountry}>France</option>
                <option value="FSM" onClick={handleCountry}>Micronesia</option>
                <option value="GAB" onClick={handleCountry}>Gabon</option>
                <option value="GAM" onClick={handleCountry}>Gambia</option>
                <option value="GBR" onClick={handleCountry}>Great Britain</option>
                <option value="GBS" onClick={handleCountry}>Guinea-Bissau</option>
                <option value="GEO" onClick={handleCountry}>Georgia</option>
                <option value="GEQ" onClick={handleCountry}>Equatorial Guinea</option>
                <option value="GER" onClick={handleCountry}>Germany</option>
                <option value="GHA" onClick={handleCountry}>Ghana</option>
                <option value="GRE" onClick={handleCountry}>Greece</option>
                <option value="GRN" onClick={handleCountry}>Grenada</option>
                <option value="GUA" onClick={handleCountry}>Guatemala</option>
                <option value="GUI" onClick={handleCountry}>Guinea</option>
                <option value="GUM" onClick={handleCountry}>Guam</option>
                <option value="GUY" onClick={handleCountry}>Guyana</option>
                <option value="HAI" onClick={handleCountry}>Haiti</option>
                <option value="HKG" onClick={handleCountry}>Hong Kong</option>
                <option value="HON" onClick={handleCountry}>Honduras</option>
                <option value="HUN" onClick={handleCountry}>Hungary</option>
                <option value="INA" onClick={handleCountry}>Indonesia</option>
                <option value="IND" onClick={handleCountry}>India</option>
                <option value="IRI" onClick={handleCountry}>Iran</option>
                <option value="IRL" onClick={handleCountry}>Ireland</option>
                <option value="IRQ" onClick={handleCountry}>Iraq</option>
                <option value="ISL" onClick={handleCountry}>Iceland</option>
                <option value="ISR" onClick={handleCountry}>Israel</option>
                <option value="ISV" onClick={handleCountry}>Virgin Islands</option>
                <option value="ITA" onClick={handleCountry}>Italy</option>
                <option value="IVB" onClick={handleCountry}>British Virgin Islands</option>
                <option value="JAM" onClick={handleCountry}>Jamaica</option>
                <option value="JOR" onClick={handleCountry}>Jordan</option>
                <option value="JPN" onClick={handleCountry}>Japan</option>
                <option value="KAZ" onClick={handleCountry}>Kazakhstan</option>
                <option value="KEN" onClick={handleCountry}>Kenya</option>
                <option value="KGZ" onClick={handleCountry}>Kyrgyzstan</option>
                <option value="KIR" onClick={handleCountry}>Kiribati</option>
                <option value="KOR" onClick={handleCountry}>South Korea</option>
                <option value="KOS" onClick={handleCountry}>Kosovo</option>
                <option value="KSA" onClick={handleCountry}>Saudi Arabia</option>
                <option value="KUW" onClick={handleCountry}>Kuwait</option>
                <option value="LAO" onClick={handleCountry}>Laos</option>
                <option value="LAT" onClick={handleCountry}>Latvia</option>
                <option value="LBA" onClick={handleCountry}>Libya</option>
                <option value="LBR" onClick={handleCountry}>Liberia</option>
                <option value="LCA" onClick={handleCountry}>Saint Lucia</option>
                <option value="LES" onClick={handleCountry}>Lesotho</option>
                <option value="LIB" onClick={handleCountry}>Lebanon</option>
                <option value="LIE" onClick={handleCountry}>Liechtenstein</option>
                <option value="LTU" onClick={handleCountry}>Lithuania</option>
                <option value="LUX" onClick={handleCountry}>Luxembourg</option>
                <option value="MAD" onClick={handleCountry}>Madagascar</option>
                <option value="MAR" onClick={handleCountry}>Morocco</option>
                <option value="MAS" onClick={handleCountry}>Malaysia</option>
                <option value="MAW" onClick={handleCountry}>Malawi</option>
                <option value="MDA" onClick={handleCountry}>Moldova</option>
                <option value="MDV" onClick={handleCountry}>Maldives</option>
                <option value="MEX" onClick={handleCountry}>Mexico</option>
                <option value="MGL" onClick={handleCountry}>Mongolia</option>
                <option value="MHL" onClick={handleCountry}>Marshall Islands</option>
                <option value="MKD" onClick={handleCountry}>Macedonia</option>
                <option value="MLI" onClick={handleCountry}>Mali</option>
                <option value="MLT" onClick={handleCountry}>Malta</option>
                <option value="MNE" onClick={handleCountry}>Montenegro</option>
                <option value="MON" onClick={handleCountry}>Monaco</option>
                <option value="MOZ" onClick={handleCountry}>Mozambique</option>
                <option value="MRI" onClick={handleCountry}>Mauritius</option>
                <option value="MTN" onClick={handleCountry}>Mauritania</option>
                <option value="MYA" onClick={handleCountry}>Myanmar</option>
                <option value="NAM" onClick={handleCountry}>Namibia</option>
                <option value="NCA" onClick={handleCountry}>Nicaragua</option>
                <option value="NED" onClick={handleCountry}>Netherlands</option>
                <option value="NEP" onClick={handleCountry}>Nepal</option>
                <option value="NGR" onClick={handleCountry}>Nigeria</option>
                <option value="NIG" onClick={handleCountry}>Niger</option>
                <option value="NOR" onClick={handleCountry}>Norway</option>
                <option value="NRU" onClick={handleCountry}>Nauru</option>
                <option value="NZL" onClick={handleCountry}>New Zealand</option>
                <option value="OMA" onClick={handleCountry}>Oman</option>
                <option value="PAK" onClick={handleCountry}>Pakistan</option>
                <option value="PAN" onClick={handleCountry}>Panama</option>
                <option value="PAR" onClick={handleCountry}>Paraguay</option>
                <option value="PER" onClick={handleCountry}>Peru</option>
                <option value="PHI" onClick={handleCountry}>Philippines</option>
                <option value="PLE" onClick={handleCountry}>Palestine</option>
                <option value="PLW" onClick={handleCountry}>Palau</option>
                <option value="PNG" onClick={handleCountry}>Papua New Guinea</option>
                <option value="POL" onClick={handleCountry}>Poland</option>
                <option value="POR" onClick={handleCountry}>Portugal</option>
                <option value="PRK" onClick={handleCountry}>North Korea</option>
                <option value="PUR" onClick={handleCountry}>Puerto Rico</option>
                <option value="QAT" onClick={handleCountry}>Qatar</option>
                <option value="ROU" onClick={handleCountry}>Romania</option>
                <option value="RSA" onClick={handleCountry}>South Africa</option>
                <option value="RUS" onClick={handleCountry}>Russia</option>
                <option value="RWA" onClick={handleCountry}>Rwanda</option>
                <option value="SAM" onClick={handleCountry}>Samoa</option>
                <option value="SEN" onClick={handleCountry}>Senegal</option>
                <option value="SEY" onClick={handleCountry}>Seychelles</option>
                <option value="SIN" onClick={handleCountry}>Singapore</option>
                <option value="SKN" onClick={handleCountry}>Saint Kitts and Nevis</option>
                <option value="SLE" onClick={handleCountry}>Sierra Leone</option>
                <option value="SLO" onClick={handleCountry}>Slovenia</option>
                <option value="SMR" onClick={handleCountry}>San Marino</option>
                <option value="SOL" onClick={handleCountry}>Solomon Islands</option>
                <option value="SOM" onClick={handleCountry}>Somalia</option>
                <option value="SRB" onClick={handleCountry}>Serbia</option>
                <option value="SRI" onClick={handleCountry}>Sri Lanka</option>
                <option value="SSD" onClick={handleCountry}>South Sudan</option>
                <option value="STP" onClick={handleCountry}>Sao Tome and Principe</option>
                <option value="SUD" onClick={handleCountry}>Sudan</option>
                <option value="SWZ" onClick={handleCountry}>Switzerland</option>
                <option value="SUR" onClick={handleCountry}>Suriname</option>
                <option value="SVK" onClick={handleCountry}>Slovakia</option>
                <option value="SWE" onClick={handleCountry}>Sweden</option>
                <option value="SWZ" onClick={handleCountry}>Swaziland</option>
                <option value="SYR" onClick={handleCountry}>Syria</option>
                <option value="TAN" onClick={handleCountry}>Tanzania</option>
                <option value="TGA" onClick={handleCountry}>Tonga</option>
                <option value="THA" onClick={handleCountry}>Thailand</option>
                <option value="TJK" onClick={handleCountry}>Tajikistan</option>
                <option value="TKM" onClick={handleCountry}>Turkmenistan</option>
                <option value="TLS" onClick={handleCountry}>Timor-Leste</option>
                <option value="TOG" onClick={handleCountry}>Togo</option>
                <option value="TPE" onClick={handleCountry}>Chinese Taipei</option>
                <option value="TTO" onClick={handleCountry}>Trinidad and Tobago</option>
                <option value="TUN" onClick={handleCountry}>Tunisia</option>
                <option value="TUR" onClick={handleCountry}>Turkey</option>
                <option value="TUV" onClick={handleCountry}>Tuvalu</option>
                <option value="UAE" onClick={handleCountry}>United Arab Emirates</option>
                <option value="UGA" onClick={handleCountry}>Uganda</option>
                <option value="UKR" onClick={handleCountry}>Ukraine</option>
                <option value="URU" onClick={handleCountry}>Uruguay</option>
                <option value="USA" onClick={handleCountry}>United States</option>
                <option value="UZB" onClick={handleCountry}>Uzbekistan</option>
                <option value="VAN" onClick={handleCountry}>Vanuatu</option>
                <option value="VEN" onClick={handleCountry}>Venezuela</option>
                <option value="VIE" onClick={handleCountry}>Vietnam</option>
                <option value="VIN" onClick={handleCountry}>Saint Vincent and the Grenadines</option>
                <option value="YEM" onClick={handleCountry}>Yemen</option>
                <option value="ZAM" onClick={handleCountry}>Zambia</option>
                <option value="ZAN" onClick={handleCountry}>Zanzibar</option>
                <option value="ZIM" onClick={handleCountry}>Zimbabwe"</option>
               </select>
              <input className='mt-4 text-2xl w-[70%] outline-none pr-4 py-2' type="text" placeholder='City'/>
              <input className='mt-4 text-2xl w-[70%] outline-none pr-4 py-2' type="text" placeholder='Pincode'/>
              <input className='mt-4 text-2xl w-[70%] outline-none pr-4 py-2' type="text" placeholder='State'/>
              <br /><br />
              <button onClick={change} className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">Continue</button>
            </div>
            }
            {state == 2 &&
            <div className='my-32 mx-6'>
              <h1 className='text-3xl'>What contact details do you want to show to customers?</h1>
              <h3 className='text-gray-500 text-md mt-3'>Help customers get in touch by including this info on your listing</h3>
              <div className='flex'>
                <div className='mt-4 text-2xl w-12 px-4 py-2'>{selectedPincode}</div>
                <input className='mt-4 text-2xl w-[70%] outline-none px-4 py-2' type="text" placeholder='Business Name'/>
              </div>
              <br /><br /><br />
              <button onClick={change} className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">Continue</button>
            </div>
            }
            {state == 3 &&
            <div className='mt-24 mb-12 mx-6'>
              <MapContainer className='w-32 h-32' center={[28.6035327,77.034472]} zoom={12}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <ClickHandler setClickedLocation={setClickedLocation} />
                {clickedLocation && (
                  <Marker position={clickedLocation}>
                  </Marker>
                  
                )}
              </MapContainer>
              <button onClick={change} className="mt-6 ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">Continue</button>
            </div>
            }
            {state == 4 &&
            <div className='my-32 mx-6'>
              <h1 className='text-3xl'>Enter the remaininng detais</h1>
              <input className='mt-4 text-2xl w-[70%] outline-none pr-4 py-2' type="text" placeholder='Phone Number'/>
              <input className='mt-4 text-2xl w-[70%] outline-none pr-4 py-2' type="text" placeholder='Email'/>
              <br /><br />
              <label htmlFor="">Upload file</label>
              <input
                                            className='ml-4'
                                             type="file"
                                             accept="image/*"
                                             onChange={handleFileUpload}
                                         />
              <br /><br /><br />
              <button onClick={postData} className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg">Continue</button>
            </div>
            }

          </div>
        </div>  
    </div>
  )
}

export default Index

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
  });
  };
