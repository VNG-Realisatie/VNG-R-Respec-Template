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

  licenses: {
      tst: {
          name: "Test licentie",
          short: "TST",
          url: "https://www.donaldduck.nl/",
          image: "https://www.google.com/imgres?q=donald%20duck&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fa%2Fa5%2FDonald_Duck_angry_transparent_background.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDonald_Duck&docid=5YW2q776-BkUzM&tbnid=8j1JI9Qi6suE9M&vet=12ahUKEwicp5f90LKFAxVYXUEAHSbHAh0QM3oECBUQAA..i&w=270&h=351&hcb=2&ved=2ahUKEwicp5f90LKFAxVYXUEAHSbHAh0QM3oECBUQAA",
      },
  },
//  maxTocLevel: 2,
  
  license: "tst",
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

