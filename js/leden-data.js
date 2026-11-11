// Ledenlijst: naam, lichting (jaar), en slug (bestandsnaam voor de foto)
const ledenData = [
  {
    "name": "Ivo Janssen",
    "year": "2025",
    "slug": "ivo-janssen"
  },
  {
    "name": "Seth Brouwer",
    "year": "2025",
    "slug": "seth-brouwer"
  },
  {
    "name": "Hector van Eijkelenborg",
    "year": "2025",
    "slug": "hector-van-eijkelenborg"
  },
  {
    "name": "Dries Conen",
    "year": "2025",
    "slug": "dries-conen"
  },
  {
    "name": "Sepp Fijneman",
    "year": "2024",
    "slug": "sepp-fijneman"
  },
  {
    "name": "Pieter van de Kerk",
    "year": "2024",
    "slug": "pieter-van-de-kerk"
  },
  {
    "name": "Florian van Gool",
    "year": "2024",
    "slug": "florian-van-gool"
  },
  {
    "name": "Thijmen Gerardts",
    "year": "2024",
    "slug": "thijmen-gerardts"
  },
  {
    "name": "Niels Bergknut",
    "year": "2024",
    "slug": "niels-bergknut"
  },
  {
    "name": "Nick Kemps",
    "year": "2023",
    "slug": "nick-kemps"
  },
  {
    "name": "Ivar Kamst",
    "year": "2023",
    "slug": "ivar-kamst"
  },
  {
    "name": "Jari Hoogendijk",
    "year": "2023",
    "slug": "jari-hoogendijk"
  },
  {
    "name": "Christoph Eerenberg",
    "year": "2023",
    "slug": "christoph-eerenberg"
  },
  {
    "name": "Victor Mostart",
    "year": "2023",
    "slug": "victor-mostart"
  },
  {
    "name": "Seth Heuvelmans",
    "year": "2022",
    "slug": "seth-heuvelmans"
  },
  {
    "name": "Jesse Lenaerts",
    "year": "2022",
    "slug": "jesse-lenaerts"
  },
  {
    "name": "Tom Pouwels",
    "year": "2022",
    "slug": "tom-pouwels"
  },
  {
    "name": "Paul Heldens",
    "year": "2022",
    "slug": "paul-heldens"
  },
  {
    "name": "Wouter de Keijzer",
    "year": "2022",
    "slug": "wouter-de-keijzer"
  },
  {
    "name": "Huub Gaillard",
    "year": "2022",
    "slug": "huub-gaillard"
  },
  {
    "name": "Julius Lof",
    "year": "2021",
    "slug": "julius-lof"
  },
  {
    "name": "Jaap Boerboom",
    "year": "2021",
    "slug": "jaap-boerboom"
  },
  {
    "name": "Milan Putters",
    "year": "2021",
    "slug": "milan-putters"
  },
  {
    "name": "Niels Bots",
    "year": "2021",
    "slug": "niels-bots"
  },
  {
    "name": "Justus Bruens",
    "year": "2021",
    "slug": "justus-bruens"
  },
  {
    "name": "Tygo Ocalan",
    "year": "2020",
    "slug": "tygo-ocalan"
  },
  {
    "name": "Thom te Slaa",
    "year": "2020",
    "slug": "thom-te-slaa"
  },
  {
    "name": "Wessel Beijersbergen",
    "year": "2020",
    "slug": "wessel-beijersbergen"
  },
  {
    "name": "Thijs Kleijn",
    "year": "2020",
    "slug": "thijs-kleijn"
  },
  {
    "name": "Thomas Schoolmeesters",
    "year": "2019",
    "slug": "thomas-schoolmeesters"
  },
  {
    "name": "Joep van Duffelen",
    "year": "2019",
    "slug": "joep-van-duffelen"
  },
  {
    "name": "Job Miltenburg",
    "year": "2019",
    "slug": "job-miltenburg"
  },
  {
    "name": "Harm Mallant",
    "year": "2019",
    "slug": "harm-mallant"
  },
  {
    "name": "Denzel Siera",
    "year": "2019",
    "slug": "denzel-siera"
  },
  {
    "name": "Bram Pierik",
    "year": "2019",
    "slug": "bram-pierik"
  },
  {
    "name": "Yannick Smolders",
    "year": "2018",
    "slug": "yannick-smolders"
  },
  {
    "name": "Luc Nouwen",
    "year": "2018",
    "slug": "luc-nouwen"
  },
  {
    "name": "Mees Nolting",
    "year": "2018",
    "slug": "mees-nolting"
  },
  {
    "name": "Joost de Bruin",
    "year": "2018",
    "slug": "joost-de-bruin"
  },
  {
    "name": "Koen van Kruijssen",
    "year": "2018",
    "slug": "koen-van-kruijssen"
  },
  {
    "name": "Lennart Spies",
    "year": "2017",
    "slug": "lennart-spies"
  },
  {
    "name": "Wouter van Santbrink",
    "year": "2017",
    "slug": "wouter-van-santbrink"
  },
  {
    "name": "Mick van Zon",
    "year": "2017",
    "slug": "mick-van-zon"
  },
  {
    "name": "Jasper Flachs",
    "year": "2016",
    "slug": "jasper-flachs"
  },
  {
    "name": "Kaan Hulst",
    "year": "2016",
    "slug": "kaan-hulst"
  },
  {
    "name": "Silvijn Rutten",
    "year": "2016",
    "slug": "silvijn-rutten"
  },
  {
    "name": "M.V.",
    "year": "2015",
    "slug": "mv"
  },
  {
    "name": "Joris van der Elsen",
    "year": "2015",
    "slug": "joris-van-der-elsen"
  },
  {
    "name": "Frank van den Dorpel",
    "year": "2015",
    "slug": "frank-van-den-dorpel"
  },
  {
    "name": "Bram van Berlo",
    "year": "2015",
    "slug": "bram-van-berlo"
  },
  {
    "name": "David van de Ven",
    "year": "2014",
    "slug": "david-van-de-ven"
  },
  {
    "name": "Stijn van der Hoeven",
    "year": "2014",
    "slug": "stijn-van-der-hoeven"
  },
  {
    "name": "Matthijs de Hartogh",
    "year": "2014",
    "slug": "matthijs-de-hartogh"
  },
  {
    "name": "Sam Gelderman",
    "year": "2014",
    "slug": "sam-gelderman"
  },
  {
    "name": "Olivier Traets",
    "year": "2013",
    "slug": "olivier-traets"
  },
  {
    "name": "Tom Gerrits",
    "year": "2013",
    "slug": "tom-gerrits"
  },
  {
    "name": "Max Kuczek",
    "year": "2013",
    "slug": "max-kuczek"
  },
  {
    "name": "Daan Mortier",
    "year": "2013",
    "slug": "daan-mortier"
  },
  {
    "name": "Berend van der Hoeven",
    "year": "2012",
    "slug": "berend-van-der-hoeven"
  },
  {
    "name": "Romeijn Sadée",
    "year": "2012",
    "slug": "romeijn-sadee"
  },
  {
    "name": "Stijn Hunink",
    "year": "2011",
    "slug": "stijn-hunink"
  },
  {
    "name": "Jaïr Dan",
    "year": "2011",
    "slug": "jair-dan"
  },
  {
    "name": "Guillermo Garcia",
    "year": "2011",
    "slug": "guillermo-garcia"
  },
  {
    "name": "Nicolaas Roozendaal",
    "year": "2011",
    "slug": "nicolaas-roozendaal"
  },
  {
    "name": "Thomas Schuringa",
    "year": "2011",
    "slug": "thomas-schuringa"
  },
  {
    "name": "Bora Tirsi",
    "year": "2010",
    "slug": "bora-tirsi"
  },
  {
    "name": "Bob van Toor",
    "year": "2010",
    "slug": "bob-van-toor"
  },
  {
    "name": "Roy Hendriks",
    "year": "2010",
    "slug": "roy-hendriks"
  },
  {
    "name": "Milan Hermes",
    "year": "2010",
    "slug": "milan-hermes"
  },
  {
    "name": "Indra Gesink",
    "year": "2009",
    "slug": "indra-gesink"
  },
  {
    "name": "Ivo Hunink",
    "year": "2008",
    "slug": "ivo-hunink"
  },
  {
    "name": "Matthijs Oostlander",
    "year": "2008",
    "slug": "matthijs-oostlander"
  },
  {
    "name": "Niklas Wolff",
    "year": "2008",
    "slug": "niklas-wolff"
  },
  {
    "name": "Ruben Hazelzet",
    "year": "2008",
    "slug": "ruben-hazelzet"
  },
  {
    "name": "Stijn Vreeswijk",
    "year": "2008",
    "slug": "stijn-vreeswijk"
  },
  {
    "name": "Gijs Herbers †",
    "year": "2008",
    "slug": "gijs-herbers"
  },
  {
    "name": "Christian van Ommeren",
    "year": "2007",
    "slug": "christian-van-ommeren"
  },
  {
    "name": "Joost Pastoor",
    "year": "2007",
    "slug": "joost-pastoor"
  },
  {
    "name": "Samuel Garcia",
    "year": "2007",
    "slug": "samuel-garcia"
  },
  {
    "name": "Joep Suijkerbuijk",
    "year": "2007",
    "slug": "joep-suijkerbuijk"
  },
  {
    "name": "Freek Spoorenberg",
    "year": "2006",
    "slug": "freek-spoorenberg"
  },
  {
    "name": "Yasin Tuncbilek",
    "year": "2006",
    "slug": "yasin-tuncbilek"
  },
  {
    "name": "Joost Richards",
    "year": "2005",
    "slug": "joost-richards"
  },
  {
    "name": "Andrei Mikes",
    "year": "2005",
    "slug": "andrei-mikes"
  },
  {
    "name": "Lennard Duyvestijn",
    "year": "2005",
    "slug": "lennard-duyvestijn"
  },
  {
    "name": "Joris van den Broek",
    "year": "2005",
    "slug": "joris-van-den-broek"
  },
  {
    "name": "Vestert Borger",
    "year": "2005",
    "slug": "vestert-borger"
  },
  {
    "name": "Robbie Soetens",
    "year": "2004",
    "slug": "robbie-soetens"
  },
  {
    "name": "Rogier Brouwer",
    "year": "2004",
    "slug": "rogier-brouwer"
  },
  {
    "name": "Maarten Anderegg",
    "year": "2004",
    "slug": "maarten-anderegg"
  },
  {
    "name": "Carsten de Vries",
    "year": "2004",
    "slug": "carsten-de-vries"
  },
  {
    "name": "Mendel Broekhuijsen",
    "year": "2004",
    "slug": "mendel-broekhuijsen"
  },
  {
    "name": "Frans van Egdom",
    "year": "2003",
    "slug": "frans-van-egdom"
  },
  {
    "name": "Geoffrey Beurskens",
    "year": "2003",
    "slug": "geoffrey-beurskens"
  },
  {
    "name": "Coen Barneveld Binkhuysen",
    "year": "2003",
    "slug": "coen-barneveld-binkhuysen"
  },
  {
    "name": "Tim Heutz",
    "year": "2003",
    "slug": "tim-heutz"
  },
  {
    "name": "Sjors Martens",
    "year": "2002",
    "slug": "sjors-martens"
  },
  {
    "name": "Mark Muyres",
    "year": "2002",
    "slug": "mark-muyres"
  },
  {
    "name": "Yahyah Samad Farid Mojtahedi",
    "year": "2002",
    "slug": "yahyah-samad-farid-mojtahedi"
  },
  {
    "name": "Cinto Gersie",
    "year": "2001",
    "slug": "cinto-gersie"
  },
  {
    "name": "Peter Aertse",
    "year": "2000",
    "slug": "peter-aertse"
  },
  {
    "name": "Mark Stasse",
    "year": "2000",
    "slug": "mark-stasse"
  },
  {
    "name": "Jonathan van der Heijden",
    "year": "2000",
    "slug": "jonathan-van-der-heijden"
  },
  {
    "name": "Jeroen van den Heuvel",
    "year": "1999",
    "slug": "jeroen-van-den-heuvel"
  },
  {
    "name": "Tobias Dormaar",
    "year": "1999",
    "slug": "tobias-dormaar"
  },
  {
    "name": "Maarten Snoeijs",
    "year": "1999",
    "slug": "maarten-snoeijs"
  },
  {
    "name": "Roeland Rohof",
    "year": "1999",
    "slug": "roeland-rohof"
  },
  {
    "name": "Max Lahaye",
    "year": "1999",
    "slug": "max-lahaye"
  },
  {
    "name": "Gregory Tzanakakis",
    "year": "1999",
    "slug": "gregory-tzanakakis"
  },
  {
    "name": "Arne Schoenmakers",
    "year": "1999",
    "slug": "arne-schoenmakers"
  },
  {
    "name": "Johan Verjans",
    "year": "1998",
    "slug": "johan-verjans"
  },
  {
    "name": "Martin Neuse",
    "year": "1998",
    "slug": "martin-neuse"
  },
  {
    "name": "Freek Daams",
    "year": "1998",
    "slug": "freek-daams"
  },
  {
    "name": "David Ingen Housz †",
    "year": "1997",
    "slug": "david-ingen-housz"
  },
  {
    "name": "Geert Appeldoorn",
    "year": "1996",
    "slug": "geert-appeldoorn"
  },
  {
    "name": "Johan van As",
    "year": "1995",
    "slug": "johan-van-as"
  },
  {
    "name": "Ernst van Cleef",
    "year": "1995",
    "slug": "ernst-van-cleef"
  },
  {
    "name": "Bram Vermeulen",
    "year": "1995",
    "slug": "bram-vermeulen"
  },
  {
    "name": "Maarten Hogenhuis",
    "year": "1995",
    "slug": "maarten-hogenhuis"
  },
  {
    "name": "Daniël Hess",
    "year": "1994",
    "slug": "daniel-hess"
  },
  {
    "name": "Frits Franssen",
    "year": "1994",
    "slug": "frits-franssen"
  },
  {
    "name": "Jeroen Jansen",
    "year": "1994",
    "slug": "jeroen-jansen"
  },
  {
    "name": "Matthijs Dierick",
    "year": "1994",
    "slug": "matthijs-dierick"
  },
  {
    "name": "Jeroen Hurkmans",
    "year": "1994",
    "slug": "jeroen-hurkmans"
  },
  {
    "name": "Robert van Hoof",
    "year": "1994",
    "slug": "robert-van-hoof"
  },
  {
    "name": "Marc van den Brandt",
    "year": "1994",
    "slug": "marc-van-den-brandt"
  },
  {
    "name": "Barend Vlasman",
    "year": "1993",
    "slug": "barend-vlasman"
  },
  {
    "name": "Pascal van Minderhout",
    "year": "1992",
    "slug": "pascal-van-minderhout"
  },
  {
    "name": "Erik van de Mortel",
    "year": "1992",
    "slug": "erik-van-de-mortel"
  },
  {
    "name": "Frank Lürling",
    "year": "1992",
    "slug": "frank-lurling"
  },
  {
    "name": "Maurice Baggen",
    "year": "1992",
    "slug": "maurice-baggen"
  },
  {
    "name": "Peter de Keijzer",
    "year": "1991",
    "slug": "peter-de-keijzer"
  },
  {
    "name": "Jaap-Frank Dijkveld Stol",
    "year": "1991",
    "slug": "jaap-frank-dijkveld-stol"
  },
  {
    "name": "Mark Jordens",
    "year": "1990",
    "slug": "mark-jordens"
  },
  {
    "name": "Arjan van den Berkmortel",
    "year": "1990",
    "slug": "arjan-van-den-berkmortel"
  },
  {
    "name": "Menno Harkema",
    "year": "1987",
    "slug": "menno-harkema"
  },
  {
    "name": "Huub Swinckels",
    "year": "1987",
    "slug": "huub-swinckels"
  },
  {
    "name": "Ben Moolhuysen",
    "year": "1989",
    "slug": "ben-moolhuysen"
  },
  {
    "name": "Marc Deij",
    "year": "1989",
    "slug": "marc-deij"
  },
  {
    "name": "Jos van Lint",
    "year": "1989",
    "slug": "jos-van-lint"
  },
  {
    "name": "Jelle de Kruijk",
    "year": "1989",
    "slug": "jelle-de-kruijk"
  },
  {
    "name": "Edgar van Mil",
    "year": "1988",
    "slug": "edgar-van-mil"
  },
  {
    "name": "Boris Wachters",
    "year": "1988",
    "slug": "boris-wachters"
  },
  {
    "name": "Rogier van Drumpt",
    "year": "1988",
    "slug": "rogier-van-drumpt"
  },
  {
    "name": "Armand van Oostrom",
    "year": "1988",
    "slug": "armand-van-oostrom"
  },
  {
    "name": "Engelbert van Oppen",
    "year": "1986",
    "slug": "engelbert-van-oppen"
  },
  {
    "name": "Ewoud Vorstman",
    "year": "1986",
    "slug": "ewoud-vorstman"
  },
  {
    "name": "Theun Brinksma",
    "year": "1984",
    "slug": "theun-brinksma"
  }
];
