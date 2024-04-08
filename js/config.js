let respecConfig = {
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
  shortName: "Respec-template",
  pubDomain: "hr",

  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane specificatie-types
  specType: "HR",
  
  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane specificatie-statussen
  specStatus: "IG",
  publishDate: "2024-1-10",
  publishVersion: "0.1.0",
  
  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane maturities
  previousMaturity: "IG",
  previousPublishDate: "2022-06-24",
  previousPublishVersion: "0.0.4",
  
  title: "Respec documentatie generatie",
  subtitle: "Tevens een voorbeeld van een gegenereerd Respec document",
  content: {"mermaid": "", "ch01": "informative", "ch02": ""},
//  authors:
//    [
//      {
//        name: "Robert Melskens",
//        company: "VNG Realisatie",
//        companyURL: "https://vng.nl/artikelen/vng-realisatie",
//      }
//    ],
  editors:
    [
      {
        name: "Robert Melskens",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      }
    ],
  github: "https://github.com/VNG-Realisatie/VNG-R-Respec-Template",

  //  maxTocLevel: 2,

    logos: [{
        src: "https://upload.wikimedia.org/wikipedia%2Fen%2Fa%2Fa5%2FDonald_Duck_angry_transparent_background.png",
        alt: "VNG-Realisatie",
        id: "VNG-Realisatie",
        height: 77,
        url: "https://www.vng.nl",
    }],


  // Creëer PDF en link deze aan de file in de header van het html document (optioneel). Het is (nog) niet mogelijk hier een globale property van te maken:
  alternateFormats: [
      {
          label: "pdf",
          uri: "snapshot.pdf",
      },
    ],
  localBiblio: {
        "MIM": {
           "href": "https://docs.geostandaarden.nl/mim/mim/",
           "publisher": "Geonovum",
           "title": "MIM - Metamodel Informatie Modellering",
           "date": "Oktober 2023",
           "rawDate": "2023"
        },
        "SemVer": {
           "href": "https://semver.org/lang/nl/",
           "title": "Semantisch Versioneren 2.0.0",
           "date": "December 19, 2023",
           "rawDate": "2023"
        },
    },
};

