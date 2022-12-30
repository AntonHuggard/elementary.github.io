import './App.css';
import PeriodicTable from './components/ptable';
import SearchBar from './components/search';
import ElectronegSlider from './components/electroneg-slider'
import MeltingPtSlider from './components/melting-pt-slider'
import BoilingPtSlider from './components/boiling-pt-slider'
import DiscoverySlider from './components/discovery-slider'
import SliderMenu from './components/sliders'
import React, { Component } from 'react';

class App extends Component {

  state = {
    atoms: [ {
      symbol: "H",
      name: "hydrogen",
      atomic_number: 1,
      id: 1,
      atomic_mass: 1.008,
      state_at_standard_conditions:'gas',
      period:1,
      group:1,
      block:'s',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: -259.16,
      boiling_point: -252.879,
      electronegativity: 2.20,
      radioactive: false,
      discovery_date: 1766,
      discovery_details: '1766 by Henry Cavendish',
      etymology: 'from greek, <em>water-former</em>',
      description: 'She\'s the first element and the one with the smallest atomic mass. Hydrogen is also the most abundant element in the universe. At standard conditions, it\'s a pretty boring colourless and odourless gas. Word to the wise, don\'t fill up your blimp with hydrogen.'
  },
           {
      symbol: "He",
      name: "helium",
      atomic_number: 2,
      id: 2,
      atomic_mass: 4.002,
      state_at_standard_conditions:'gas',
      period:1,
      group:18,
      block:'s',
      primary_class: 'noble_gas',
      metalness:'nonmetal',
      melting_point: -272.20,
      boiling_point: -268.928,
      electronegativity:"no data",
      radioactive: false,
      discovery_date: 1868,
      discovery_details: '1868 by Pierre Janssen & Norman Lockyer',
      etymology: 'from the Greek word for the sun, <em>Helios</em>',
      description: 'Helium is a colourless and odourless gas that glows reddish-orange in an electric field. It has <em>the lowest</em> boiling point, and is the <em>second</em> most abundant element (The universe is 24% helium). '
  },
                   {
      symbol: "Li",
      name: "lithium",
      atomic_number: 3,
      id: 3,
      atomic_mass: 6.938,
      state_at_standard_conditions:'solid',
      period:2,
      group:1,
      block:'s',
      primary_class: 'alkali-metal',
      metalness:'metal',
      melting_point: 180.5,
      boiling_point: 1330,
      electronegativity: 0.98,
      radioactive: false,
      discovery_date:1817,
      discovery_details:'1817 by Johan August Arfwedson',
      etymology:'from the Greek <em>lithos</em>, meaning stone',
      description: 'silvery-white alkali metal and is the lightest solid element. Highly reactive.',
  },
   {
      symbol: "Be",
      name: "beryllium",
      atomic_number: 4,
      id: 4,
      atomic_mass: 9.012,
      state_at_standard_conditions:'solid',
      period:2,
      group:2,
      block:'s',
      primary_class: 'alkaline-earth-metal',
      metalness:'metal',
      melting_point: 1287, 
      boiling_point: 2469,
      electronegativity: 1.57,
      radioactive: false,
      discovery_date: 1798,
      discovery_details:'1798 by Louis Nicolas Vauquelin',
      etymology:'from the mineral beryl',
      description: 'strong, brittle, steel-grey metal',
  },
           {
      symbol: "B",
      name: "boron",
      atomic_number: 5,
      id: 5,
      atomic_mass: 10.806,
      state_at_standard_conditions:'solid',
      period:2,
      group:13,
      block:'p',
      primary_class: 'metalloid',
      metalness:'metalloid',
      melting_point: 2076, 
      boiling_point: 3927,
      electronegativity: 2.04,
      radioactive: false,
      discovery_date: 1808,
      discovery_details: '30th of June, 1808 by Joseph Louis Gay-Lussac and Louis Jacques Th&eacute,nard',
      etymology: 'from Borax',
      description: 'black-brown metalloid'
  },
                   {
      symbol: "C",
      name: "carbon",
      atomic_number: 6,
      id: 6,
      atomic_mass: 12.0096,
      state_at_standard_conditions:'solid',
      period:2,
      group:14,
      block:'p',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: 3642, 
      boiling_point: 6588,
      electronegativity: 2.55,
      radioactive: false,
      discovery_date: 0,
      discovery_details: 'The Egyptians and Sumerians had diamonds before 3000 BC', 
      etymology: 'from the Latin <em>carbo</em>, referring to coal & charcoal',
      description: 'two main allotropes, graphite (black) and diamond (transparent, colourless)'
  },
                  {
      symbol: "N",
      name:"nitrogen",
      atomic_number: 7,
      id: 7,
      atomic_mass: 14.006,
      state_at_standard_conditions:'gas',
      period:2,
      group:15,
      block:'p',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: -210, 
      boiling_point: -195.795, 
      electronegativity: 3.04,
      radioactive: false,
      discovery_date: 1772,
      discovery_details: '1772 by Scottish physician Daniel Rutherford',
      etymology: 'from the French <em>nitrog&egrave,ne</em>, which means <em>Potassium nitrate-producing</em>',
      description: 'at standard conditions, forms N<sub>2</sub> (which is ~78% of Earth\'s atmosphere)'
  },
                  {
      symbol: "O",
      name:"oxygen",
      atomic_number: 8,
      id: 8,
      atomic_mass: 15.999,
      state_at_standard_conditions:'gas',
      period:2,
      group:16,
      block:'p',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: -218.790,
      boiling_point: -182.962, 
      electronegativity: 3.44,
      radioactive: false,
      discovery_date: 1771,
      discovery_details: 'Unknown. Either a Polish alchemist in 1604 or in 1771 by Swedish pharmacist Carl Wilhelm Scheele',
      etymology: 'Coined by Antoine Lavoisier, 1777',
      description: 'colourless gas.  Diatomic oxygen is 20.8% of Earth\'s atmosphere'
  },
                   {
      symbol: 'F',
      name:"fluorine",
      atomic_number: 9,
      id: 9,
      atomic_mass: 18.998,
      state_at_standard_conditions:'gas',
      period:2,
      group:17,
      block:'p',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: -219.670,
      boiling_point: -188.110,
      electronegativity: 3.98,
      radioactive: false,
      discovery_date: 1810,
      discovery_details: '1810 by Andr&eacute-Marie Amp&egrave,re',
      etymology: 'from the Latin <em>fluo</em>, <em>to flow</em>',
      description: 'pale yellow gas. The most Electronegative element'
  },             
               {
      symbol: 'Ne',
      name:"neon",
      atomic_number: 10,
      id: 10,
      atomic_mass: 20.1797,
      state_at_standard_conditions:'gas',
      period:2,
      group:18,
      block:'p',
      primary_class: 'noble_gas',
      metalness:'nonmetal',
      melting_point: -248.590,
      boiling_point: -246.046,
      electronegativity: 'no data',
      radioactive: false,
      discovery_date: 1898,
      discovery_details: '1898 by British chemists Sir William Ramsay & Morris W. Travers',
      etymology: 'Greek equivalent of <em>Novum</em> (Latin for <em>new</em>)',
      description: 'colorless gas exhibiting an orange-red glow when placed in an electric field'
  },
   {
      symbol: 'Na',
      name:"sodium",
      atomic_number: 11,
      id: 11,
      atomic_mass: 22.989,
      state_at_standard_conditions:'solid',
      period:3,
      group:1,
      block:'s',
      primary_class: 'alkali-metal',
      metalness:'metal',
      melting_point: 97.794,
      boiling_point: 882.940,
      electronegativity: 0.93,
      radioactive: false,
      discovery_date: 1807,
      discovery_details: '1807 by Humphry Davy',
      etymology: 'Unknown. Its symbol is derived from Natronium/Natrium',
      description: 'Natronium was proposed in 1809, eventually shortened to natrium. This is derived from Natron, a naturally ocurring sodium-containing compound found in Egypt'
  },
   {
      symbol: 'Mg',
      name:"magnesium",
      atomic_number: 12,
      id: 12,
      atomic_mass: 24.304,
      state_at_standard_conditions:'solid',
      period:3,
      group:2,
      block:'s',
      primary_class: 'alkaline-earth-metal',
      metalness:'metal',
      melting_point: 650, 
      boiling_point: 1091, 
      electronegativity: 1.31,
      radioactive: false,
      discovery_date: 1755,
      discovery_details: '1755 by Joseph Black',
      etymology: 'after Magnesia, Greece',
      description: 'shiny grey solid'
  },
                  {
      symbol: 'Al',
      name:"aluminium",
      atomic_number: 13,
      id: 13,
      atomic_mass: 26.981,
      state_at_standard_conditions:'solid',
      period:3,
      group:13,
      block:'p',
      primary_class: 'metaux_pauvres',
      metalness:'metal',
      melting_point: 660.32,
      boiling_point: 2470, 
      electronegativity: 1.61,
      radioactive: false,
      discovery_date: 1824,
      discovery_details: '1824  by Hans Christian &#216,rsted (Denmark)',
      etymology: 'Named after Aluminia (which is named after Alum)',
      description: 'Alum has been known about (and used) since Antiquity. The oldest surviving written record of it comes from Herodotus (pretty old). Historically, Alum has been used as a dye &, during the crusades, as currency. What I\'m trying to get at here is that the etymology is ultimately unknown.'
  },
   {
      symbol: 'Si',
      name:"silicon",
      atomic_number: 14,
      id: 14,
      atomic_mass: 28.084,
      state_at_standard_conditions:'solid',
      period:3,
      group:14,
      block:'p',
      primary_class: 'metalloid',
      metalness:'metalloid',
      melting_point: 1414, 
      boiling_point: 3538, 
      electronegativity: 1.90,
      radioactive: false,
      discovery_date: 1823,
      discovery_details: '1823 by J&ouml,ns Jacob Berzelius',
      etymology: 'from flint in Latin, <em>silex</em> or <em>silicis</em>',
      description: 'crystalline. Used in computers'
  },
                  {
      symbol: 'P',
      name:"phosphorus",
      atomic_number: 15,
      id: 15,
      atomic_mass: 30.973,
      state_at_standard_conditions:'solid',
      period:3,
      group:15,
      block:'p',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: 44.15,
      boiling_point: 280.5,
      electronegativity: 2.19,
      radioactive: false,
      discovery_date: 1669,
      discovery_details: '1669 by German Alchemist Hennig Brand. Properly discovered by Antoine Lavoisier in 1777',
      etymology: 'from the Ancient Greek name for Venus, translates as <em>light-bearer</em>',
      description: 'Phosphorus was discovered when a German Alchemist tried making silver by boiling urine. He noticed that the fumes turned into a glowing green liquid (phosphorus). Hence the name light-bearer.'
  },
   {
      symbol: 'S',
      name:"sulphur",
      atomic_number: 16,
      id: 16,
      atomic_mass: 32.059,
      state_at_standard_conditions:'solid',
      period:3,
      group:16,
      block:'p',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: 115.21,
      boiling_point: 444.6,
      electronegativity: 2.58,
      radioactive: false,
      discovery_date: 0,
      discovery_details: 'Before 2000 BC, China. Recognised as an element by Antoine Lavoisier in 1777',
      etymology: 'derived from Latin <em>sulpur</em>',
      description: 'alternative spelling: sulfur. Yellow crystals'
  },
   {
      symbol: 'Cl',
      name:"chlorine",
      atomic_number: 17,
      id: 17,
      atomic_mass: 35.446,
      state_at_standard_conditions:'gas',
      period:3,
      group:17,
      block:'p',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: -101.500,
      boiling_point: -34.040,
      electronegativity: 3.16,
      radioactive: false,
      discovery_date: 1774,
      discovery_details: '1774 by Carl Wilhelm Scheele (Sweden/Germany)',
      etymology: 'from Ancient Greek <em>Khloros</em> (pale-green)',
      description: 'Pale yellow-green gas. It is an extremely reactive element and a strong oxidising agent: among the elements, it has the highest electron affinity and the third-highest electronegativity on the Pauling scale, behind only oxygen and fluorine.'
  },
                   {
      symbol: 'Ar',
      name:"argon",
      atomic_number: 18,
      id: 18,
      atomic_mass: 39.792,
      state_at_standard_conditions:'gas',
      period:3,
      group:18,
      block:'p',
      primary_class: 'noble_gas',
      metalness:'nonmetal',
      melting_point: -189.340,
      boiling_point: -185.848,
      electronegativity: 'no data',
      radioactive: false,
      discovery_date: 1894,
      discovery_details: '1894 by Lord Rayleigh and William Ramsay',
      etymology: 'Derived from the Greek word for lazy',
      description: 'colorless gas exhibiting a lilac/violet glow when placed in an electric field. It\'s the most abundant noble gas in Earth\'s crust'
  },
                  
   {
      symbol: 'K',
      name:"potassium",
      atomic_number: 19,
      id: 19,
      atomic_mass: 39.0983,
      state_at_standard_conditions:'solid',
      period:4,
      group:1,
      block:'s',
      primary_class: 'alkali-metal',
      metalness:'metal',
      melting_point: 63.5,
      boiling_point: 759, 
      electronegativity: 0.82,
      radioactive: false,
      discovery_date: 1807,
      discovery_details: '1807 by Humphry Davy',
      etymology: 'from <em>Pot-ash</em>. Historically potassium-containing salts were produced by boiling ash. K is from Kali, from Alkali',
      description: 'Potassium is a silvery-white metal that is soft enough to be cut with a knife with little force. It reacts vigorously with water'
  },
                   {
      symbol: 'Ca',
      name:"calcium",
      atomic_number: 20,
      id: 20,
      atomic_mass: 40.078,
      state_at_standard_conditions:'solid',
      period:4,
      group:2,
      block:'s',
      primary_class: 'alkaline-earth-metal',
      metalness:'metal',
      melting_point: 842, 
      boiling_point: 1484, 
      electronegativity: 1.00,
      radioactive: false,
      discovery_date: 1808,
      discovery_details: '1808 by Humphry Davy',
      etymology:'from Latin <em>calx</em>, meaning lime',
      description: 'dull gray, silver, with a pale yellow tint. Some calcium compounds have been known about since antiquity. It\'s the most abundant metal'
  },
                  {
      symbol: 'Sc',
      name:"scandium",
      atomic_number: 21,
      id: 21,
      atomic_mass: 44.955,
      state_at_standard_conditions:'solid',
      period:4,
      group:3,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1541, 
      boiling_point: 2836, 
      electronegativity: 1.36,
      radioactive: false,
      discovery_date: 1879,
      discovery_details: '1879 by Lars Fredrik Nilson',
      etymology: 'after Scandinavia',
      description: 'Silvery-white metallic d-block element. It was discovered in 1879 by spectral analysis of the minerals euxenite and gadolinite from Scandinavia.'
  },
                  {
      symbol: 'Ti',
      name:"titanium",
      atomic_number: 22,
      id: 22,
      atomic_mass: 47.867,
      state_at_standard_conditions:'solid',
      period:4,
      group:4,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1668, 
      boiling_point: 3287, 
      electronegativity: 1.54,
      radioactive: false,
      discovery_date: 1791,
      discovery_details: '1791 by William Gregor',
      etymology: 'after the mythological Greek Titans',
      description: 'It is a lustrous transition metal with a silver color, low density, and high strength. Titanium is resistant to corrosion in sea water, aqua regia, and chlorine.'
  },
                  {
      symbol: 'V',
      name:"vanadium",
      atomic_number: 23,
      id: 23,
      atomic_mass: 50.9415,
      state_at_standard_conditions:'solid',
      period:4,
      group:5,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1910, 
      boiling_point: 3407, 
      electronegativity: 1.63,
      radioactive: false,
      discovery_date: 1801,
      discovery_details: '1801 by Andr&eacute,s Manuel del R&iacute,o. Isolated in 1830 by Nils Gabriel Sefstr&ouml,m',
      etymology: 'after the Norse goddess of beauty & fertility, Vanad&iacute,s (Freyja)',
      description: 'Silvery-grey, malleable transition metal.'
  },
                  {
      symbol: 'Cr',
      name:"chromium",
      atomic_number: 24,
      id: 24,
      atomic_mass: 51.9961,
      state_at_standard_conditions:'solid',
      period:4,
      group:6,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1907, 
      boiling_point: 2671, 
      electronegativity: 1.66,
      radioactive: false,
      discovery_date: 1794,
      discovery_details: 'Discovered 1794, isolated in 1797 by Louis Nicolas Vauquelin',
      etymology: 'from Greek <em>chroma</em>, meaning <em>colour</em>',
      description: 'It is the first element in group 6. It is a steely-grey, lustrous, hard and brittle transition metal. Chromium is the main additive in stainless steel, to which it adds anti-corrosive properties.'
  },
                  {
      symbol: 'Mn',
      name:"manganese",
      atomic_number: 25,
      id: 25,
      atomic_mass: 54.938,
      state_at_standard_conditions:'solid',
      period:4,
      group:7,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1246, 
      boiling_point: 2061, 
      electronegativity: 1.55,
      radioactive: false,
      discovery_date: 1774,
      discovery_details: '1774 by Johann Gottlieb Gahn', 
      etymology: 'after Magnesia in Greece (same as Magnesium)',
      description: 'Silvery metallic. '
  },
                  {
      symbol: 'Fe',
      name:"iron",
      atomic_number: 26,
      id: 26,
      atomic_mass: 55.845,
      state_at_standard_conditions:'solid',
      period:4,
      group:8,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1538, 
      boiling_point: 2862, 
      electronegativity: 1.83,
      radioactive: false,
      discovery_date: 0,
      discovery_details: 'Unknown. Before 5000 BC',
      etymology: 'from proto-Germanic <em>isarnon</em>. Its chemical symbol comes from its Latin name <em>ferrum</em>',
      description: 'Lustrous metallic with a grayish tinge. By mass, it\'s the most common element on Earth. It forms in much of Earth\'s outer and inner core. It is the fourth most common element in the Earth\'s crust. Iron is one of four elements (the others are nickel, cobalt, and gadolinium) that are ferromagnetic (permanent magnets) at room temperature.'
  },
   {
      symbol: 'Co',
      name:"cobalt",
      atomic_number: 27,
      id: 27,
      atomic_mass: 58.933,
      state_at_standard_conditions:'solid',
      period:4,
      group:9,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1495, 
      boiling_point: 2927, 
      electronegativity: 1.88,
      radioactive: false,
      discovery_date: 1735,
      discovery_details: '1735 by Georg Brandt',
      etymology: 'from Kobald, a sprite in Germainc mythology',
      description: 'Hard lustrous bluish gray metal. Cobalt-based blue pigments (cobalt blue) have been used since ancient times for jewelry and paints, and to impart a distinctive blue tint to glass, but the color was later thought to be due to the known metal bismuth. Cobalt is one of four elements (the others are iron, nickel, and gadolinium) that are ferromagnetic (permanent magnets) at room temperature.'
  },
                  {
      symbol: 'Ni',
      name:"nickel",
      atomic_number: 28,
      id: 28,
      atomic_mass: 58.6934,
      state_at_standard_conditions:'solid',
      period:4,
      group:10,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1455, 
      boiling_point: 2730, 
      electronegativity: 1.91,
      radioactive: false,
      discovery_date: 1751,
      discovery_details: '1751 by Axel Fredrik Cronstedt',
      etymology: 'from the sprite of Germanic mythology',
      description: 'Metallic, and silver with a gold tinge. It\'s been used as an alloy since 3500 BC. Nickel is one of four elements (the others are iron, cobalt, and gadolinium) that are ferromagnetic (permanent magnets) at room temperature.'
  },
                  {
      symbol: 'Cu',
      name:"copper",
      atomic_number: 29,
      id: 29,
      atomic_mass: 63.546,
      state_at_standard_conditions:'solid',
      period:4,
      group:11,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1084.620,
      boiling_point: 2562, 
      electronegativity: 1.90,
      radioactive: false,
      discovery_date: 0,
      discovery_details: 'before 9000 BC in the Middle East',
      etymology: 'after Cyprus, a significant mining location to Ancient Rome',
      description: 'Red-orange metallic luster. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity'
  },
                   {
      symbol: 'Zn',
      name:"zinc",
      atomic_number: 30,
      id: 30,
      atomic_mass: 65.38,
      state_at_standard_conditions:'solid',
      period:4,
      group:12,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 419.53,
      boiling_point: 907, 
      electronegativity: 1.65,
      radioactive: false,
      discovery_date: 0,
      discovery_details: 'India before 1000 BC. Properly in 1746 by Andreas Sigismund Marggraf', 
      etymology: 'after <em>Zinke</em>, German for prong. Probably.',
      description: 'Silver-gray. Zinc is a slightly brittle metal at room temperature and has a blue-silvery appearance when oxidation is removed.'
  },
                   {
      symbol: 'Ga',
      name:"gallium",
      atomic_number: 31,
      id: 31,
      atomic_mass: 69.723,
      state_at_standard_conditions:'solid',
      period:4,
      group:13,
      block:'p',
      primary_class: 'metaux_pauvres',
      metalness:'metal',
      melting_point: 29.7646,
      boiling_point: 2400, 
      electronegativity: 1.81,
      radioactive: false,
      discovery_date: 1875,
      discovery_details: '1875 by Lecoq de Boisbaudran (France)',
      etymology: 'after <em>Gallia</em>, the Roman province <em>Gaul</em>. Roughly the area of modern France',
      description: 'Silvery blue. Elemental gallium is a soft, silvery blue metal at standard temperature and pressure, however in its liquid state it becomes silvery white.'
  },
                   {
      symbol: 'Ge',
      name:"germanium",
      atomic_number: 32,
      id: 32,
      atomic_mass: 72.630,
      state_at_standard_conditions:'solid',
      period:4,
      group:14,
      block:'p',
      primary_class: 'metalloid',
      metalness:'metalloid',
      melting_point: 938.25,
      boiling_point: 2833, 
      electronegativity: 2.01,
      radioactive: false,
      discovery_date: 1886,
      discovery_details: '1886 by Clemens Winkler (Germany)', 
      etymology: 'after Germany',
      description: 'Grayish-white, hard-brittle, grayish-white metalloid in the carbon group, chemically similar to its group neighbours silicon and tin. Pure germanium is a semiconductor with an appearance similar to elemental silicon.'
  },
                   {
      symbol: 'As',
      name:"arsenic",
      atomic_number: 33,
      id: 33,
      atomic_mass: 74.921,
      state_at_standard_conditions:'solid',
      period:4,
      group:15,
      block:'p',
      primary_class: 'metalloid',
      metalness:'metalloid',
      melting_point: 'has no liquid form',
      boiling_point: 615, // sublimation
      electronegativity: 2.18,
      radioactive: false,
      discovery_date: 0,
      discovery_details: 'before 815 AD by Arabic Alchemists', 
      etymology: 'from the Greek word for <em>stink</em>',
      description: 'Arsenic is a metalloid. It has various allotropes, but only the gray form, which has a metallic appearance, is important to industry. Yellow and black allotropes also available.'
  },
                  {
      symbol: 'Se',
      name:"selenium",
      atomic_number: 34,
      id: 34,
      atomic_mass: 78.971,
      state_at_standard_conditions:'solid',
      period:4,
      group:16,
      block:'p',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: 221, 
      boiling_point: 685,
      electronegativity: 2.55,
      radioactive: false,
      discovery_date: 1817,
      discovery_details: '1817 by J&ouml,ns Jakob Berzelius & Johann Gottlieb Gahn',
      etymology: 'after Selene, the Greek moon goddess',
      description: 'It is a nonmetal (more rarely considered a metalloid). The chief commercial uses for selenium today are glassmaking and pigments. Selenium is a semiconductor and is used in photocells.'
  },
                  {
      symbol: 'Br',
      name:"bromine",
      atomic_number: 35,
      id: 35,
      atomic_mass: 79.904,
      state_at_standard_conditions:'liquid',
      period:4,
      group:17,
      block:'p',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: -7.200,
      boiling_point: 58.8,
      electronegativity: 2.96,
      radioactive: false,
      discovery_date: 1825,
      discovery_details: '1825 by Antoine J&eacute,r&ocirc,me Balard (France) & Carl Jacob L&ouml,wig (Germany)',
      etymology: 'from the Greek word for <em>stench</em>',
      description: 'Reddish-brown liquid at room temperature that evaporates readily to form a similarly coloured gas. Elemental bromine is very reactive and thus does not occur free in nature. '
  },
   {
      symbol: 'Kr',
      name:"krypton", 
      atomic_number: 36,
      id: 36,
      atomic_mass: 83.798,
      state_at_standard_conditions:'gas',
      period:4,
      group:18,
      block:'p',
      primary_class: 'noble_gas',
      metalness:'nonmetal',
      melting_point: -157.370,
      boiling_point: -153.415,
      electronegativity: 3.00,
      radioactive: false,
      discovery_date: 1898,
      discovery_details: '1898 by William Ramsay & Morris Travers', 
      etymology: 'from Ancient Greek <em>Kryptos</em>, meaning <em>the hidden one</em>', 
      description: 'colorless gas, exhibiting a whitish glow in an electric field. It is a colorless, odorless, tasteless noble gas that occurs in trace amounts in the atmosphere and is often used with other rare gases in fluorescent lamps.'
  },
   {
      symbol: 'Rb',
      name:"rubidium",
      atomic_number: 37,
      id: 37,
      atomic_mass: 85.4678,
      state_at_standard_conditions:'solid',
      period:5,
      group:1,
      block:'s',
      primary_class: 'alkali-metal',
      metalness:'metal',
      melting_point: 39.30,    
      boiling_point: 688, 
      electronegativity: 0.82,
      radioactive: false,
      discovery_date: 1861,
      discovery_details: '1861 by Robert Bunsen and Gustav Kirchhoff. Isolated by George de Hevesy', 
      etymology: 'from the Latin <em>rubidus</em>, meaning <em>deep red</em>',
      description: 'Rubidium is a very soft, silvery-white metal in the alkali metal group. Rubidium cannot be stored under atmospheric oxygen, as a highly exothermic reaction will ensue, sometimes even resulting in the metal catching fire.'
  },
                   {
      symbol: 'Sr',
      name:"strontium",
      atomic_number: 38,
      id: 38,
      atomic_mass: 87.62,
      state_at_standard_conditions:'solid',
      period:5,
      group:2,
      block:'s',
      primary_class: 'alkaline-earth-metal',
      metalness:'metal',
      melting_point: 777, 
      boiling_point:1377 , 
      electronegativity: 0.95,
      radioactive: false,
      discovery_date: 1787,
      discovery_details: '1787 by William Cruickshank', 
      etymology:'after stronantine, which gets its name from the Scottish village of Strontian',
      description: ' An alkaline earth metal, strontium is a soft silver-white yellowish metallic element that is highly chemically reactive. The natural strontium is stable, although Sr-90 is radioactive and is one of the most dangerous components of nuclear fallout'
  },
                  {
      symbol: 'Y',
      name:"yttrium",
      atomic_number: 39,
      id: 39,
      atomic_mass: 88.905,
      state_at_standard_conditions:'solid',
      period:5,
      group:3,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1526, 
      boiling_point: 2930, 
      electronegativity: 1.22,
      radioactive: false,
      discovery_date: 1794,
      discovery_details: '1794 Johan Gadolin', 
      etymology: 'named after the Swedish village of Ytterby',
      description: 'It is a silvery-metallic transition metal chemically similar to the lanthanides. The most important use of yttrium is in LEDs'
  },
                  {
      symbol: 'Zr',
      name:"zirconium",
      atomic_number: 40,
      id: 40,
      atomic_mass: 91.224,
      state_at_standard_conditions:'solid',
      period:5,
      group:4,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1855, 
      boiling_point: 4377, 
      electronegativity: 1.33,
      radioactive: false,
      discovery_date: 1789,
      discovery_details: '1789 Martin Heinrich Klaproth (Germany)', 
      etymology: 'from Arabic <em>Zargon</em>, meaning <em>gold-coloured</em>',
      description: 'Sorry to disappoint you, but there\'s nothing interesting about zirconium. It\'s just a grey-white, strong transition metal.'
  },
                  {
      symbol: 'Nb',
      name:"niobium",
      atomic_number: 41,
      id: 41,
      atomic_mass: 92.90637,
      state_at_standard_conditions:'solid',
      period:5,
      group:5,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 2477, 
      boiling_point: 4744, 
      electronegativity: 1.60,
      radioactive: false,
      discovery_date: 1801,
      discovery_details: '1801 by Charles Hatchett', 
      etymology: 'after <em>Niobe</em> in Greek mythology',
      description: 'Niobium is a light grey, crystalline, and ductile transition metal. Niobium is used in various superconducting materials. These superconducting alloys, also containing titanium and tin, are widely used in the superconducting magnets of MRI scanners. Niobium is the only element named after a female diety.'
  },
                   {
      symbol: 'Mo',
      name:"molybdenum",
      atomic_number: 42,
      id: 42,
      atomic_mass: 95.95,
      state_at_standard_conditions:'solid',
      period:5,
      group:6,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 2623, 
      boiling_point: 4639,
      electronegativity: 2.16,
      radioactive: false,
      discovery_date: 1778,
      discovery_details: '1778 by Carl Wilhelm Scheele (Germany/Sweden)', 
      etymology: 'from the Neo-Latin equivalent of Ancient Greek <em>molybdos</em>, meaning lead',
      description: 'The free element, a silvery metal with a gray cast, has the sixth-highest melting point of any element. Because of this, it is used in steel.'
  },
                   {
      symbol: 'Tc',
      name:"technetium",
      atomic_number: 43,
      id: 43,
      atomic_mass: '[97]',
      state_at_standard_conditions:'solid',
      period:5,
      group:7,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 2157, 
      boiling_point: 4265,
      electronegativity: 1.90,
      radioactive: true,
      discovery_date: 1937,
      discovery_details: '1937 by Emilio Segr&egrave, and Carlo Perrier', 
      etymology: 'from Greek, meaning <em>synthetic</em> with the -ium suffix',
      description: 'It is the lightest element whose isotopes are all radioactive. It has a Half-life of 6 days. <br> From the 1860s to 1871, early versions of the periodic table left a gap between elements 42 and 44. Its existence was predicted in 1871 and there were several false alarms of scientists claiming they\'d discovered it.'
  },
                   {
      symbol: 'Ru',
      name:"ruthenium",
      atomic_number: 44, 
      id: 44, 
      atomic_mass: 101.07,
      state_at_standard_conditions:'solid',
      period:5,
      group:8,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 2334, 
      boiling_point: 4150,
      electronegativity: 2.20,
      radioactive: false,
      discovery_date: 1844,
      discovery_details: '1844 by Karl Ernst Claus (Russia)', 
      etymology: 'after <em>Ruthenia</em>, the Latin name for the region controlled by the Kievan Rus',
      description: 'It is a rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, ruthenium is inert to most other chemicals.'
  },
                   {
      symbol: 'Rh',
      name:"rhodium",
      atomic_number: 45,
      id: 45,
      atomic_mass: 102.90549,
      state_at_standard_conditions:'solid',
      period:5,
      group:9,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 102.90549,
      boiling_point: 102.90549,
      electronegativity:2.28,
      radioactive: false,
      discovery_date: 1804,
      discovery_details: '1804 by William Hyde Wollaston', 
      etymology: 'after the rose-colour of a compound it forms with Chlorine',
      description: 'It is a rare, silvery-white, hard, corrosion-resistant, and chemically inert transition metal. It is a noble metal and a member of the platinum group.'
  },
                   {
      symbol: 'Pd',
      name:"palladium",
      atomic_number: 46,
      id: 46,
      atomic_mass: 106.42,
      state_at_standard_conditions:'solid',
      period:5,
      group:10,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1554.9 ,
      boiling_point: 2963 , 
      electronegativity: 2.20,
      radioactive: false,
      discovery_date: 1802,
      discovery_details: '1802 by William Hyde Wollaston', 
      etymology: 'after asteroid Pallas, which was named after Pallas Athena',
      description: 'It is a rare and lustrous silvery-white metal. The numerous applications and limited supply sources result in considerable investment interest.'
  },
                   {
      symbol: 'Ag',
      name:"silver",
      atomic_number: 47,
      id: 47,
      atomic_mass: 107.8682,
      state_at_standard_conditions:'solid',
      period:5,
      group:11,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 961.78 ,
      boiling_point: 2162 , 
      electronegativity: 1.93,
      radioactive: false,
      discovery_date: 0,
      discovery_details: 'before 5000 BC', 
      etymology: 'ultimately from proto-Germanic <em>silubra</em>. Its symbol comes from its name, <em>argentum</em>',
      description: 'A soft, white, lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal. As one of the seven metals of antiquity, silver has had an enduring role in most human cultures.'
  },
                   {
      symbol: 'Cd',
      name:"cadmium",
      atomic_number: 48,
      id: 48,
      atomic_mass: 112.414,
      state_at_standard_conditions:'solid',
      period:5,
      group:12,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 321.07 ,
      boiling_point: 767 , 
      electronegativity: 1.69,
      radioactive: false,
      discovery_date: 1817,
      discovery_details: '1817 by Karl Samuel Leberecht Hermann and Friedrich Stromeyer', 
      etymology: 'after Cadmus of Greek mythology',
      description: 'This soft, silvery-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury. Like zinc, it demonstrates oxidation state +2 in most of its compounds, and like mercury, it has a lower melting point than the transition metals in groups 3 through 11.'
  },
                   {
      symbol: 'In',
      name:"indium",
      atomic_number: 49,
      id: 49,
      atomic_mass: 114.818,
      state_at_standard_conditions:'solid',
      period:5,
      group:13,
      block:'p',
      primary_class: 'metaux_pauvres',
      metalness:'metal',
      melting_point: 156.5985 ,
      boiling_point: 2072 , 
      electronegativity: 1.78,
      radioactive: false,
      discovery_date: 1863,
      discovery_details: '1863 by Ferdinand Reich and Hieronymous Theodor Richter', 
      etymology: 'after the inidgo blue of its visible spectrum (ultimately derived from <em>India</em>)',
      description: 'Indium is the softest metal that is not an alkali metal. It is a silvery-white metal that resembles tin in appearance. It is a post-transition metal'
  },
                   {
      symbol: 'Sn',
      name:"tin",
      atomic_number: 50,
      id: 50,
      atomic_mass: 118.710,
      state_at_standard_conditions:'solid',
      period:5,
      group:14,
      block:'p',
      primary_class: 'metaux_pauvres',
      metalness:'metal',
      melting_point: 231.93 ,
      boiling_point: 2602 , 
      electronegativity: 1.96,
      radioactive: false,
      discovery_date: 0,
      discovery_details: 'circa 3500 BC', 
      etymology: 'from proto-Germanic <em>tin-om</em>. Its symbol is derived from its Latin name <em>stannum</em>',
      description: 'Tin is a silvery metal that characteristically has a faint yellow hue. Tin, like indium, is soft enough to be cut without much force. The first tin alloy used on a large scale was bronze, made of ​1/8 tin and ​7/8 copper, from as early as 3000 BC. After 600 BC, pure metallic tin was produced.'
  },
                   {
      symbol: 'Sb',
      name:"antimony",
      atomic_number: 51,
      id: 51,
      atomic_mass: 121.760,
      state_at_standard_conditions:'solid',
      period:5,
      group:15,
      block:'p',
      primary_class: 'metalloid',
      metalness:'metalloid',
      melting_point: 630.63 ,
      boiling_point: 1635 , 
      electronegativity: 2.05, 
      radioactive: false,
      discovery_date: 0,
      discovery_details: 'before 815 AD by Jabir ibn Hayyan', 
      etymology: 'from its Byzantine Greek name, <em>antimonium</em>. The origin of this is unknown.',
      description: 'Antimony sulfide (Sb<sub>2</sub>S<sub>3</sub>) is what Ancient Eyptians used as eye liner (<em>Kohl</em>). It has been used since at least 3100 BC. The element was described by Roman naturalist Pliny the Elder, however, it was not isolated until the Golden Age of Islam.'
  },
                   {
      symbol: 'Te',
      name:"tellurium", 
      atomic_number: 52,
      id: 52,
      atomic_mass: 127.60,
      state_at_standard_conditions:'solid',
      period:5,
      group:16,
      block:'p',
      primary_class: 'metalloid',
      metalness:'metalloid',
      melting_point: 449.51,   
      boiling_point: 988,  
      electronegativity: 2.1,
      radioactive: false,
      discovery_date: 1782,
      discovery_details: '1782 by Franz-Joseph M&uuml,ller von Reichenstein (Austria)', 
      etymology: 'after the Roman Earth deity <em>Tellus</em>',
      description: 'It is a brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur, all three of which are chalcogens. It is occasionally found in native form as elemental crystals.'
  },
                   {
      symbol: 'I',
      name:"iodine",
      atomic_number: 53,
      id: 53,
      atomic_mass: 126.904,
      state_at_standard_conditions:'solid',
      period:5,
      group:17,
      block:'p',
      primary_class: 'non-metal',
      metalness:'nonmetal',
      melting_point: 113.7 ,
      boiling_point: 184.3 ,
      electronegativity: 2.66,
      radioactive: false,
      discovery_date: 1811,
      discovery_details: '1811 by Bernard Courtois (France)', 
      etymology: 'from Greek, translated as <em>violet-coloured</em>',
      description: 'The heaviest of the stable halogens, it exists as a lustrous, purple-black non-metallic solid at standard conditions that melts to form a deep violet liquid at 114 degrees Celsius, and boils to a violet gas at 184 degrees Celsius.'
  },
                   {
      symbol: 'Xe',
      name:"xenon",
      atomic_number: 54,
      id: 54,
      atomic_mass: 131.293,
      state_at_standard_conditions:'gas',
      period:5,
      group:18,
      block:'p',
      primary_class: 'noble_gas',
      metalness:'nonmetal',
      melting_point: -111.75,
      boiling_point: -108.099, 
      electronegativity: 2.6,
      radioactive: false,
      discovery_date: 1898,
      discovery_details: '1898 by William Ramsay and Morris Travers',  
      etymology: 'from the Greek <em>xenos</em>, meaning <em>foreigner</em>',
      description: 'It is a colorless, dense, odorless noble gas found in Earth\'s atmosphere in trace amounts. Although generally unreactive, xenon can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.'
  },
   {
      symbol:"Cs",
      name:"caesium",
      atomic_number: 55,
      id: 55,
      atomic_mass: 132.905,
      state_at_standard_conditions:'solid',
      period:6,
      group:1,
      block:'s',
      primary_class: 'alkali-metal',
      metalness:'metal',
      melting_point: 28.5,
      boiling_point: 671, 
      electronegativity: 0.79,
      radioactive: false,
      discovery_date: 1860,
      discovery_details: '1860 by Robert Bunsen and Gustav Kirchhoff. Isolated in 1882 by Carl Setterberg', 
      etymology:'from Latin <em>Caesius</em> (bluish-grey), after its spectral colours.',
      description: 'Americans like to spell it <em>Cesium</em>. It is a soft, silvery-golden alkali metal with a melting point of 28.5 °C (83.3 °F), which makes it one of only five elemental metals that are liquid at or near room temperature. It is the least electronegative element, with a value of 0.79 on the Pauling scale.'
  },
                   {
      symbol: 'Ba',
      name:"barium",
      atomic_number: 56,
      id: 56,
      atomic_mass: 137.327,
      state_at_standard_conditions:'solid',
      period:6,
      group:2,
      block:'s',
      primary_class: 'alkaline-earth-metal',
      metalness:'metal',
      melting_point: 727 , 
      boiling_point: 1845, 
      electronegativity: 0.89,
      radioactive: false,
      discovery_date: 1772,
      discovery_details: '1772 by Carl Wilhelm Scheele. 1808 by Humphry Davy', 
      etymology: 'from the Alchemical <em>baryta</em> which is derived from Greek <em>Barys</em>, meaning heavy',
      description: 'Barium is a soft, silvery alkaline earth metal. Because of its high chemical reactivity, barium is never found in nature as a free element. Barium has few industrial applications. Historically, it was used as a getter for vacuum tubes and in oxide form as the emissive coating on indirectly heated cathodes.'
  },
   {
      symbol: 'La',
      name:"lanthanum",
      atomic_number: 57,
      id: 57,
      atomic_mass: 138.905,
      state_at_standard_conditions:'solid',
      period:6,
      group:3,
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 920 , 
      boiling_point: 3464, 
      electronegativity:1.10,
      radioactive: false,
      discovery_date: 1838,
      discovery_details: '1838 by Carl Gustaf Mosander',
      etymology:'from the Ancient Greek <em>lanthanein</em>, meaning <em>to lie hidden</em>', 
      description: 'It is a soft, ductile, silvery-white metal that tarnishes slowly when exposed to air and is soft enough to be cut with a knife. The usual oxidation state is +3. Lanthanum compounds are used in catalysts, glass and lighting.'
  },
                  
               {
      symbol: 'Ce',
      name:"cerium",
      atomic_number: 58,  
      id: 58,  
      atomic_mass: 140.116,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 795, 
      boiling_point:3443 , 
      electronegativity:1.12,
      radioactive: false,
      discovery_date: 1803,
      discovery_details: '1803 by M.H. Klaproth, J.J. Berzelius, Wilhelm Hisinger. Isolated 1838 by C.G. Mosander',
      etymology:'after Ceres, the Roman god of agriculture',
      description: 'Cerium is a soft, ductile and silvery-white metal that tarnishes when exposed to air, and it is soft enough to be cut with a knife. It is pretty toxic to humans, so um... Try not to eat any. It\'s the 26th-most abundant element.'
  },
                  {
      symbol: 'Pr',
      name:"praseodymium",
      atomic_number: 59,
      id: 59,
      atomic_mass: 140.907,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 935 , 
      boiling_point: 3130, 
      electronegativity:1.13,
      radioactive: false,
      discovery_date: 1885,
      discovery_details: '1885 by Carl Auer von Welsbach (Austria)',
      etymology:'from Greek, meaning <em>green twin</em>',
      description: ' Praseodymium is a soft, silvery, malleable and ductile metal, valued for its magnetic, electrical, chemical, and optical properties. Like most rare-earth elements, praseodymium most readily forms the +3 oxidation state, which is the only stable state in aqueous solution.'
  },
                  {
      symbol: 'Nd',
      name:"neodymium",
      atomic_number: 60,
      id: 60,
      atomic_mass: 144.242,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 1024, 
      boiling_point: 3074,
      electronegativity:1.14,
      radioactive: false,
      discovery_date: 1885,
      discovery_details: '1885 by Carl Auer von Welsbach (Austria)',
      etymology:'from Greek, meaning <em>new twin</em>',
      description: 'It is a hard, slightly malleable silvery metal that quickly tarnishes in air and moisture. When oxidized, neodymium reacts quickly to produce pink, purple/blue and yellow compounds in the +2, +3 and +4 oxidation states. Neodymium is as a component in the alloys used to make high-strength neodymium magnets—powerful permanent magnets.'
  },
                   {
      symbol: 'Pm',
      name:"promethium",
      atomic_number: 61,
      id: 61,
      atomic_mass: '[145]',
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 1042, 
      boiling_point: 3000,
      electronegativity:1.13,
      radioactive: true,
      discovery_date: 1942,
      discovery_details: '1942 by Chien Shiung Wu, E. Segr&egrave,, H. Bethe. Isolated 1945 by C.D. Coryell, J.A. Marinsky, L.E. Glendenin',
      etymology:'after <em>Promethius</em> of Greek mythology',
      description: 'All of its isotopes are radioactive, it is extremely rare, with only about 500–600 grams naturally occurring in Earth\'s crust at any given time. Promethium is one of only two radioactive elements that are followed in the periodic table by elements with stable forms, the other being technetium.'
  },
                   {
      symbol: 'Sm',
      name:"samarium",
      atomic_number: 62, 
      id: 62, 
      atomic_mass: 150.36,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 1072, 
      boiling_point: 1900,
      electronegativity:1.17,
      radioactive: false,
      discovery_date: 1879,
      discovery_details: '1879 by Lecoq de Boisbaudran',
      etymology:'after samarskite (ultimately from Russian mining engineer Vassili Samarsky-Bykhovets)',
      description: 'It is a moderately hard silvery metal that slowly oxidizes in air. Being a typical member of the lanthanide series, samarium usually assumes the oxidation state +3. Its major commercial application is in samarium–cobalt magnets, which have permanent magnetization'
  },
                   {
      symbol: 'Eu',
      name:"europium",
      atomic_number: 63,
      id: 63,
      atomic_mass: 151.964,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 826, 
      boiling_point:1529 , 
      electronegativity:1.2,
      radioactive: false,
      discovery_date: 1896,
      discovery_details: '1896 by Eug&egrave,ne-Anatole Demarçay. Isolated 1901 (by him)',
      etymology:'after Europe. Obviously.',
      description: 'Europium is a ductile metal with a hardness similar to that of lead. Europium is also the softest lanthanide, as it can be dented with a fingernail and easily cut with a knife. It is the most reactive rare-earth element.'
  },
                  {
      symbol: 'Gd',
      name:"gadolinium",
      atomic_number: 64,
      id: 64,
      atomic_mass: 157.25,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 1312, 
      boiling_point: 3000,
      electronegativity:1.2,
      radioactive: false,
      discovery_date: 1880,
      discovery_details: '1880 by Jean Charles Galissard de Marignac. Isolated 1886 by Lecoq de Boisbaudran',
      etymology:'after Gadolinite (from Swedish/Finnish chemist Johan Gadolin)',
      description: 'Gadolinium is a silvery-white metal. It\'s only slightly malleable and is pretty ductile (for a rare-earth element). It is one of four elements (the others are iron, cobalt, and nickel) that are ferromagnetic (permanent magnets) at room temperature.'
  },
                   {
      symbol: 'Tb',
      name:"terbium",
      atomic_number: 65, 
      id: 65, 
      atomic_mass: 158.925,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 1356, 
      boiling_point: 3123,
      electronegativity:1.2,
      radioactive: false,
      discovery_date: 1843,
      discovery_details: '1843 Carl Gustaf Mosander',
      etymology:'after Ytterby, Sweden',
      description: 'It is a silvery-white, rare earth metal that is malleable, ductile, and soft enough to be cut with a knife. Terbium oxide is in fluorescent lamps and television and monitor cathode ray tubes (CRTs).'
  },
                  
                {
      symbol: 'Dy',
      name:"dysprosium",
      atomic_number: 66, 
      id: 66, 
      atomic_mass: 162.500,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 1407, 
      boiling_point: 2562,
      electronegativity:1.22,
      radioactive: false,
      discovery_date: 1886,
      discovery_details: '1886 Lecoq de Boisbaudran',
      etymology:'from Greek <em>dysprositos</em>, meaning <em>hard to obtain</em>',
      description: 'It is a rare-earth element with a metallic silver luster. Dysprosium is never found in nature as a free element. Naturally occurring dysprosium is composed of seven isotopes, the most abundant of which is <sup>164</sup>Dy.'
  },
                   {
      symbol: 'Ho',
      name:"holmium",
      atomic_number: 67,
      id: 67,
      atomic_mass: 164.930,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 1461, 
      boiling_point: 2600,
      electronegativity:1.23,
      radioactive: false,
      discovery_date: 1878,
      discovery_details: '1878 by Jacques-Louis Soret and Marc Delafontaine',
      etymology:'after the Latin name for Stockholm, Sweden',
      description: 'Elemental holmium is a relatively soft and malleable silvery-white metal. It is too reactive to be found uncombined in nature, but when isolated, is relatively stable in dry air at room temperature. It has the highest magnetic permeability of any element.'
  },
                   {
      symbol: 'Er',
      name:"erbium",
      atomic_number: 68,
      id: 68,
      atomic_mass: 167.259,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 1529, 
      boiling_point: 2868,
      electronegativity:1.24,
      radioactive: false,
      discovery_date: 1843,
      discovery_details: '1843 Carl Gustaf Mosander',
      etymology:'after Ytterby, Sweden',
      description: 'A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements. Erbium\'s principal uses involve its pink-colored Er3+ ions, which have optical fluorescent properties particularly useful in certain laser applications.'
  },
                   {
      symbol: 'Tm',
      name:"thulium",
      atomic_number: 69,
      id: 69,
      atomic_mass: 168.934,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 1545, 
      boiling_point: 1950,
      electronegativity:1.25,
      radioactive: false,
      discovery_date: 1879,
      discovery_details: '1879 by Per Teodor Cleve (Sweden)',
      etymology:'after Thule (mythical Scandinavian region)',
      description: 'Thulium is the second-least abundant of the lanthanides, after radioactively unstable promethium which is only found in trace quantities on Earth. It is an easily workable metal with a bright silvery-gray luster. It is fairly soft and slowly tarnishes in air.'
  },
                   {
      symbol: 'Yb',
      name:"ytterbium",
      atomic_number: 70,
      id: 70,
      atomic_mass: 173.045,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 824 , 
      boiling_point: 1196, 
      electronegativity:1.1,
      radioactive: false,
      discovery_date: 1878,
      discovery_details: '1878 by Jean Charles Galissard de Marignac. Isolated 1906 by Carl Auer von Welsbach',
      etymology:'after Ytterby, Sweden',
      description: 'Once extracted and prepared, ytterbium is somewhat hazardous as an eye and skin irritant. The metal is a fire and explosion hazard. Sounds like a lot of fun.'
  },
                   {
      symbol: 'Lu',
      name:"lutetium",
      atomic_number: 71,
      id: 71,
      atomic_mass: 174.966,
      state_at_standard_conditions:'solid',
      period:6,
      group:'yes',
      block:'f',
      primary_class: 'lanthanoid',
      metalness:'metal',
      melting_point: 1652, 
      boiling_point: 3402,
      electronegativity:1.27,
      radioactive: false,
      discovery_date: 1906,
      discovery_details: '1906 by Carl Auer von Welsbach and Georges Urbain. Isolated by Welsbach, 1906',
      etymology:'after the Latin name for Paris (Lutetia)',
      description: 'It is a silvery white metal, which resists corrosion in dry air, but not in moist air. Other than that, there doesn\'t really seem anything special about it...'
  },        
   {
      symbol: 'Hf',
      name:"hafnium",
      atomic_number: 72,
      id: 72,
      atomic_mass: 178.486,
      state_at_standard_conditions:'solid',
      period:6,
      group:4,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 2233, 
      boiling_point: 4603,
      electronegativity: 1.3,
      radioactive: false,
      discovery_date: 1922,
      discovery_details: '1922 by Dirk Coster and George de Hevesy', 
      etymology:'from the Latin name for Copenhagen, <em> Hafnia</em>',
      description: ' A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in many zirconium minerals. Its existence was predicted by Dmitri Mendeleev in 1869. Hafnium is used in filaments and electrodes.'
  },
                   {
      symbol: 'Ta',
      name:"tantalum",
      atomic_number: 73,
      id: 73,
      atomic_mass: 180.947,
      state_at_standard_conditions:'solid',
      period:6,
      group:5,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 3017, 
      boiling_point: 5458,
      electronegativity: 1.5,
      radioactive: false,
      discovery_date: 1802,
      discovery_details: '1802 by Anders Gustaf Ekeberg. Recognised as a distinct element in 1844 by Heinrich Rose', 
      etymology: 'after Tantalus, from Greek mythology',
      description: 'It used to be called <em>tantalium</em>. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant. It is part of the refractory metals group, which are widely used as minor components in alloys.'
  },
                   {
      symbol: 'W',
      name:"tungsten",
      atomic_number: 74,
      id: 74,
      atomic_mass: 183.84,
      state_at_standard_conditions:'solid',
      period:6,
      group:6,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 3422, 
      boiling_point: 5930, 
      electronegativity: 2.36,
      radioactive: false,
      discovery_date: 1781,
      discovery_details: '1781 by Juan Jos&eacute, Elhuyar and Fausto Elhuyar. Isolated two years later',
      etymology: 'from Swedish, meaning <em>heavy stone</em>. In German, it\'s called <em>wolfram</em> (Hence, <em>W</em>)',
      description: 'Tungsten is a rare metal found naturally on Earth almost exclusively combined with other elements in chemical compounds rather than alone. It has the highest melting and boiling points of all discovered elements. Its alloys have many applications, including incandescent light bulb filaments and X-ray tubes'
  },
   {
      symbol: 'Re',
      name:"rhenium",
      atomic_number: 75,
      id: 75,
      atomic_mass: 186.207,
      state_at_standard_conditions:'solid',
      period:6,
      group:7,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 3186, 
      boiling_point: 5630,
      electronegativity:1.9,
      radioactive: false,
      discovery_date: 1908,
      discovery_details: '1908 by Masataka Ogawa (Japan)', 
      etymology:'named after the Rhine (river)',
      description: 'It is a silvery-gray, heavy, third-row transition metal in group 7 of the periodic table. Discovered in 1908, rhenium was the second-last stable element to be discovered (the last being hafnium).'
  },
                   {
      symbol: 'Os',
      name:"osmium",
      atomic_number: 76,
      id: 76,
      atomic_mass: 190.23,
      state_at_standard_conditions:'solid',
      period:6,
      group:8,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 3033, 
      boiling_point: 5012,
      electronegativity: 2.2,
      radioactive: false,
      discovery_date: 1803,
      discovery_details: '1803 by Smithson Tennant (England)', 
      etymology:'from Greek <em>osme</em> (a smell)',
      description: 'It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores. The element\'s abundance in the Earth\'s crust is among the rarest.'
  },
                   {
      symbol: 'Ir',
      name:"iridium",
      atomic_number: 77,
      id: 77,
      atomic_mass: 192.217,
      state_at_standard_conditions:'solid',
      period:6,
      group:9,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 2446, 
      boiling_point: 4130,
      electronegativity: 2.20,
      radioactive: false,
      discovery_date: 1803,
      discovery_details: '1803 by Smithson Tennant', 
      etymology: 'after the Greek goddess Iris (rainbow personification) because of its colourful salts', 
      description: ' A very hard, brittle, silvery-white transition metal of the platinum group, iridium is considered to be the second-densest metal (after osmium). Iridium is found in meteorites in much higher abundance than in the Earth\'s crust.'
  },
                   {
      symbol: 'Pt',
      name:"platinum",
      atomic_number: 78, 
      id: 78, 
      atomic_mass: 195.084,
      state_at_standard_conditions:'solid',
      period:6,
      group:10,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1768.3 ,
      boiling_point: 3825 , 
      electronegativity: 2.28,
      radioactive: false,
      discovery_date: 1735,
      discovery_details: '1735 by Antonio de Ulloa (Spain)', 
      etymology: 'from Spanish <em>platino</em> (<em>little silver</em>)',
      description: 'Platinum is a member of the platinum group of elements and group 10 of the periodic table of elements. It has six naturally occurring isotopes. It is one of the rarer elements in Earth\'s crust. It\'s one of the least radioactive metals.'
  },
                   {
      symbol: 'Au',
      name:"gold",
      atomic_number: 79,
      id: 79,
      atomic_mass: 196.966,
      state_at_standard_conditions:'solid',
      period:6,
      group:11,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 1064.18 ,
      boiling_point: 2970 , 
      electronegativity:2.54,
      radioactive: false,
      discovery_date: 0,
      discovery_details: 'before 6000 BC, Middle East', 
      etymology:'from proto-Germanic <em>gultha</em>. Its symbol is from its Latin <em>aurum</em>',
      description: 'In a pure form, it is a bright, slightly reddish yellow, dense, soft, malleable, and ductile metal. It\'s resistant to most acids. Gold\'s high malleability, ductility, resistance to corrosion and most other chemical reactions, and conductivity of electricity have led to its continued use in corrosion resistant electrical connectors in all types of computerized devices. Humans have known about and played with it for thousands of years.'
  },
                   {
      symbol: 'Hg',
      name:"mercury",
      atomic_number: 80,
      id: 80,
      atomic_mass: 200.592,
      state_at_standard_conditions:'liquid',
      period:6,
      group:12,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: -38.829,
      boiling_point: 356.730,
      electronegativity:2,
      radioactive: false,
      discovery_date:0,
      discovery_details:'Unknown. Before 1500 BC, Ancient Egypt',
      etymology:'after the Roman god. Formerly called hydrargyrum (Greek, meaning <em>water-silver</em>), hence its symbol',
      description: 'It is commonly known as quicksilver and was formerly named hydrargyrum. mercury is the only metallic element that\'s liquid at standard conditions (the only other element that is liquid under these conditions is bromine). When humans are exposed to it for too long, they get mercury poisoning.'
  },
                {
      symbol: 'Tl',
      name:"thallium", 
      atomic_number: 81,  
      id: 81,  
      atomic_mass: 204.382,
      state_at_standard_conditions:'solid',
      period:6,
      group:13,
      block:'p',
      primary_class: 'metaux_pauvres',
      metalness:'metal',
      melting_point: 304 , 
      boiling_point: 1473, 
      electronegativity:1.62,
      radioactive: false,
      discovery_date: 1861,
      discovery_details: '1861 by William Crookes (Britain), it was isolated the following year.',
      etymology:'from Greek <em>thallos</em> (green shoot or twig)',
      description: 'It is a gray post-transition metal that is not found free in nature. When isolated, thallium resembles tin, but discolors when exposed to air.'
  },
                   {
      symbol: 'Pb',
      name:"lead",
      atomic_number: 82,
      id: 82,
      atomic_mass: 207.2,
      state_at_standard_conditions:'solid',
      period:6,
      group:14,
      block:'p',
      primary_class: 'metaux_pauvres',
      metalness:'metal',
      melting_point: 327.46 ,
      boiling_point: 1749 , 
      electronegativity:1.87,
      radioactive: false,
      discovery_date: 0,
      discovery_details: '7000 BC, Middle East',
      etymology:'No one knows. It\'s been called the same thing for centuries. Symbol derived from latin <em>plumbum</em>',
      description: 'It is a heavy metal that is denser than most common materials. Lead is soft and malleable. Lead has the highest atomic number of any stable element and three of its isotopes are endpoints of major nuclear decay chains of heavier elements.'
  },
                   {
      symbol: 'Bi',
      name:"bismuth",
      atomic_number: 83,
      id: 83,
      atomic_mass: 208.980,
      state_at_standard_conditions:'solid',
      period:6,
      group:15,
      block:'p',
      primary_class: 'metaux_pauvres',
      metalness:'metal',
      melting_point: 271.5 ,
      boiling_point: 1564 , 
      electronegativity:2.02,
      radioactive: false,
      discovery_date: 1000,
      discovery_details: 'before 1000 AD by Arabic Alchemists',
      etymology:'Unknown. Probably from Arabic <em>bi ismid</em>, which means <em>having the properties of antimony</em>',
      description: 'It is a pentavalent post-transition metal and one of the pnictogens with chemical properties resembling its lighter homologs arsenic and antimony. In 2003 it was discovered to be extremely weakly radioactive'
  },
                   {
      symbol: 'Po',
      name:"polonium",
      atomic_number: 84,
      id: 84,
      atomic_mass: '[209]',
      state_at_standard_conditions:'solid',
      period:6,
      group:16,
      block:'p',
      primary_class: 'metaux_pauvres',
      metalness:'metal',
      melting_point: 254 , 
      boiling_point: 962, 
      electronegativity:2,
      radioactive: true,
      discovery_date: 1898,
      discovery_details: '1898 by Pierre & Marie Curie. Isolated 1902 by Willy Marckwald',
      etymology:'from <em>Polonia</em>, the Latin name for Poland',
      description: 'A rare and highly radioactive metal with no stable isotopes, polonium is chemically similar to selenium and tellurium. Due to its intense radioactivity, which results in the radiolysis of chemical bonds and radioactive self-heating, its chemistry has mostly been investigated on the trace scale only.'
  },
                   {
      symbol:'At',    
      name:'astatine', 
      atomic_number:85, 
      id:85, 
      atomic_mass:'[210]',
      state_at_standard_conditions:'solid',
      period:6,
      group:17,
      block:'p',
      primary_class: 'metalloid',
      metalness:'metalloid',
      melting_point: 9999,
      boiling_point: 230, //+- 3
      electronegativity:2.2,
      radioactive:true,
      discovery_date: 1940,
      discovery_details: '1940 by Dale R. Corson, Kenneth Ross MacKenzie, Emilio Segr&egrave,',
      etymology:'from Greek <em>astatos</em> (unstable)', 
      description:'It is the rarest naturally occurring element in the Earth\'s crust, occurring only as the decay product of various heavier elements. The bulk properties of astatine are not known with any certainty. Scientists mostly just make guesses about it based on periodic trends.'    
  },
       {
      symbol:'Rn',    
      name:'radon', 
      atomic_number:86, 
      id:86, 
      atomic_mass:'[222]',
      state_at_standard_conditions:'gas',
      period:6,
      group:18,
      block:'p',
      primary_class: 'noble_gas',
      metalness:'nonmetal',
      melting_point: -71, 
      boiling_point:-61.7, 
      electronegativity:2.2, 
      radioactive:true,
      discovery_date:1899,
      discovery_details:'1899 by E. Rutherford (New Zealand) and R.B. Owens (USA). Isolated 1910 by W. Ramsay & R. Whytlaw-Gray ',
      etymology:'Initially it was called <em>radium emanation</em>. In 1918 it was one of several shortened proposed names', 
      description:'It is a radioactive, colorless, odorless, tasteless noble gas. Studies have shown that breathing radon is linked to lung cancer. Who knew! "Radon gas is considered a health hazard" -- thanks, Wikipedia. '    
  },    
   {
      symbol:'Fr',    
      name:'francium', 
      atomic_number:87, 
      id:87, 
      atomic_mass:'[223]',
      state_at_standard_conditions:'solid',
      period:7,
      group:1,
      block:'s',
      primary_class: 'alkali-metal',
      metalness:'metal',
      melting_point: 8.000,
      boiling_point: 620.000,
      electronegativity:'>0.79', 
      radioactive:true,
      discovery_date:1939,
      discovery_details:'1939 by Marguerite Perey',
      etymology:'after France', 
      description:'Fracium is extremely radioactive, its most stable isotope, francium-223 has a half-life of only 22 minutes. It is the second-most electropositive element, behind only caesium, and is the second rarest naturally occurring element.'    
  },
       {
      symbol:'Ra',    
      name:'radium', 
      atomic_number:88, 
      id:88, 
      atomic_mass:'[226]',
      state_at_standard_conditions:'solid',
      period:7,
      group:2,
      block:'s',
      primary_class: 'alkaline-earth-metal',
      metalness:'metal',
      melting_point: 700,
      boiling_point: 1737,
      electronegativity:0.9, 
      radioactive:true,
      discovery_date:1898,
      discovery_details:'1898 by Pierre & Marie Curie. Isolated by Marie, 1910',
      etymology:'from Latin <em>radius</em>. Meaning ray. Because of it\'s emissions.', 
      description:'Pure radium is silvery-white, but it readily reacts with nitrogen (rather than oxygen) on exposure to air, forming a black surface layer of radium nitride. Its most stable isotope has a half-life of 1600 years.'
  },
   {
      symbol: 'Ac',
      name:"actinium",
      atomic_number: 89,
      id: 89,
      atomic_mass: '[227]',
      state_at_standard_conditions:'solid',
      period:7,
      group:3,
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 1227,
      boiling_point: 3200, //+-300
      electronegativity:1.1,
      radioactive: true,
      discovery_date:1902,
      discovery_details:'1902 by Friedrich Oskar Giesel',
      etymology:'from Greek, meaning <em>ray-beam</em>',
      description: 'A soft, silvery-white radioactive metal, actinium reacts rapidly with oxygen and moisture in air forming a white coating of actinium oxide that prevents further oxidation. Because the physical and chemical properties of actinium and lanthanum are so similar, it\'s hard to separate actinium from ore. Also, because it\'s rare and expensive, it has no important industrial use.'
  },
                   {
      symbol: 'Th',
      name:"thorium",
      atomic_number: 90, 
      id: 90, 
      atomic_mass: 232.0377,
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 1750, 
      boiling_point: 4788,
      electronegativity:1.3,
      radioactive: true,
      discovery_date: 1829,
      discovery_details: '1829 by J&ouml,ns Jakob Berzelius',
      etymology:'after Thor, the Norse god of thunder',
      description: 'Thorium is silvery and tarnishes black when it is exposed to air, forming thorium dioxide, it is moderately hard, malleable, and has a high melting point. All of its known isotopes are unstable -- but the most stable one has a half-life of 14.05 billion years.'
  },
                   {
      symbol: 'Pa',
      name:"protactinium",
      atomic_number: 91,
      id: 91,
      atomic_mass: 231.035,
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 1568, 
      boiling_point: 4027, 
      electronegativity:1.5,
      radioactive: true,
      discovery_date: 1913,
      discovery_details: '1913 by Kasimir Fajans and Oswald Helmuth G&ouml,hring',
      etymology:'a contraction of <em>proto-actinium</em>',
      description: 'Protactinium is a dense, silvery-gray actinide metal that reacts readily with oxygen, water vapor and inorganic acids. Because it\'s rare, radioactive and highly toxic, no one really uses it except for weird science stuff.'
  },
                  {
      symbol: 'U',
      name:"uranium",
      atomic_number: 92, 
      id: 92, 
      atomic_mass: 238.028,
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 1132.2,
      boiling_point: 4131, 
      electronegativity:1.38,
      radioactive: true,
      discovery_date: 1789,
      discovery_details: '1789 by Martin Heinrich Klaproth. Isolated 1841 by Eug&egrave,ne-Melchior P&eacute,ligot',
      etymology:'after Uranus (the planet). Ultimately derived from the Greek god of the sky',
      description: 'Uranium is weakly radioactive because all isotopes of uranium are unstable, the half-lives of its naturally occurring isotopes range between 159,200 years and 4.5 billion years. Uranium has the highest atomic weight of the primordially occurring elements. Its density is about 70% higher than that of lead, and slightly lower than that of gold or tungsten.'
  },
                   {
      symbol: 'Np',
      name:"neptunium",
      atomic_number: 93,
      id: 93,
      atomic_mass: '[237]',
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 639,//+-3
      boiling_point: 4174, 
      electronegativity:1.36,
      radioactive: true,
      discovery_date: 1940,
      discovery_details: '1940 by Edwin McMillan and Philip H. Abelson',
      etymology:'after Neptune (the planet). Ultimately derived from the Greek god of the sea',
      description: 'Neptunium is the first transuranic element (which are elements with atomic numbers greater than 92). Neptunium metal is silvery and tarnishes when exposed to air. The element occurs in three allotropic forms and it normally exhibits five oxidation states. It is radioactive, poisonous, pyrophoric.'
  },
                   {
      symbol: 'Pu',
      name:"plutonium",
      atomic_number: 94, 
      id: 94, 
      atomic_mass: '[244]',
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 639.4,
      boiling_point: 3228, 
      electronegativity:1.28,
      radioactive: true,
      discovery_date: 1940,
      discovery_details: '1940–1 by Glenn T. Seaborg, Arthur Wahl, Joseph W. Kennedy, Edwin McMillan',
      etymology:'after Pluto (the planet). Ultimately derived from the Greek god of the underworld',
      description: 'Plutonium is silvery-gray and tarnishes when exposed to air. It\'s radioactive and can accumulate in your bones, so you probably should play with it for too long. Of the naturally occurring elements, Plutonium has the highest atomic number. The bomb dropped on Nagasaki in 1945 had a Plutonium core.'
  },
                   {
      symbol: 'Am',
      name:"americium",
      atomic_number: 95, 
      id: 95, 
      atomic_mass: '[243]',
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 1176, 
      boiling_point: 2607, 
      electronegativity:1.3,
      radioactive: true,
      discovery_date: 1944,
      discovery_details: '1944 by Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, Albert Ghiorso',
      etymology:'after the Americas (Northern & Southern continents)',
      description: 'Americium is a synthetic element and is the third transuranic element (which are elements with atomic numbers greater than 92). It is widely used in commercial ionization chamber smoke detectors, as well as in neutron sources and industrial gauges.'
  },
                  {
      symbol: 'Cm',
      name:"curium",
      atomic_number: 96, 
      id: 96, 
      atomic_mass: '[247]',
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 1340, 
      boiling_point: 3110, 
      electronegativity:1.3,
      radioactive: true,
      discovery_date: 1944,
      discovery_details: '1944 by Glenn T. Seaborg, Ralph A. James, Albert Ghiorso',
      etymology:'after Marie Curie',
      description: 'Curium is a hard, dense, silvery metal with relatively high melting and boiling points. It was first produced on purpose in July 1944 but kept secret to the public until November 1947. Meitnerium is the only other element named after a woman.'
  },
                  {
      symbol: 'Bk',
      name:"berkelium",
      atomic_number: 97,
      id: 97,
      atomic_mass: '[247]',
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 986, 
      boiling_point:2627 , 
      electronegativity:1.3,
      radioactive: true,
      discovery_date: 1949,
      discovery_details: '1949 by Lawrence Berkeley National Laboratory',
      etymology:'after Berkeley, California, USA', 
      description: 'Just over one gram of berkelium has been produced in the United States since 1967. It has no practical application but scientists sometimes use it when they\'re mucking around trying to synthesise heavier elements.'
  },
                  {
      symbol: 'Cf',
      name:"californium",
      atomic_number: 98, 
      id: 98, 
      atomic_mass: '[251]',
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 900, 
      boiling_point:1470 , 
      electronegativity:1.3,
      radioactive: true,
      discovery_date: 1950,
      discovery_details: '1950 by Lawrence Berkeley National Laboratory',
      etymology:'after California, USA',
      description: 'Californium-252 has a half-life of about 2.645 years. It\'s one of the only <em>weird radioactive bois</em> with practical applications, it can be used to start nuclear reactors and make other elements. Oganesson was made from Califorium.'
  },
                  {
      symbol: 'Es',
      name:"einsteinium",
      atomic_number: 99, 
      id: 99, 
      atomic_mass: '[252]',
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 860, 
      boiling_point: 996, 
      electronegativity:1.3,
      radioactive: true,
      discovery_date: 1952,
      discovery_details: '1952 by Lawrence Berkeley National Laboratory',
      etymology:'after Albert Einstein',
      description: 'Einsteinium is a soft, silvery, paramagnetic metal. The high radioactivity of einsteinium-253 gives it a healthy blue glow. Like all synthetic transuranic elements, isotopes of einsteinium are very radioactive and are considered by experts to be highly dangerous to eat.'
  },
                   {
      symbol: 'Fm',
      name:"fermium",
      atomic_number: 100, 
      id: 100, 
      atomic_mass: '[257]',
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 1527, 
      boiling_point: 9999,
      electronegativity:1.3,
      radioactive: true,
      discovery_date: 1952,
      discovery_details:'1952 by Lawrence Berkeley National Laboratory',
      etymology:'after Enrico Fermi',
      description: 'Fermium is an actinide and the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities, but scientists haven\'t been bothered making pure fermium metal yet. Typical eh.'
  },
   {
      symbol: 'Md',
      name:"mendelevium",
      atomic_number: 101, 
      id: 101, 
      atomic_mass: '[258]',
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point: 827, 
      boiling_point: 9999,
      electronegativity:1.3, 
      radioactive: true,
      discovery_date: 1955, 
      discovery_details:'1955 by Lawrence Berkeley National Laboratory',
      etymology:'after Dmitri Mendeleev, father of the Periodic Table',
      description: 'Mendelevium can only be produced in particle accelerators from lighter elements and charged particles. Sixteen isotopes are known, the most stable being <sup>258</sup>Md, which has a half-life of 51 days. Mendeleev <em>discovered</em> the periodic table but it took 101 elements before one was named after him.'
  },                
                {
      symbol:'No',
      name:'nobelium',
      atomic_number:102,
      id:102,
      atomic_mass:'[259]',
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point:827,
      boiling_point:9999,
      electronegativity:1.3,
      radioactive:true,
      discovery_date:1966,
      discovery_details:'1966 by the Joint Institute for Nuclear Research',
      etymology:'after Alfred Nobel',
      description:'Alfred Nobel was the inventor of dynamite. A total of twelve nobelium isotopes are known to exist, the most stable is <sup>259</sup>No with a half-life of 58 minutes.'
  },
   {
      symbol:'Lr',
      name:'lawrencium', 
      atomic_number:103, 
      id:103, 
      atomic_mass:'[259]', 
      state_at_standard_conditions:'solid',
      period:7,
      group:'yes',
      block:'f',
      primary_class: 'actinoid',
      metalness:'metal',
      melting_point:827, 
      boiling_point:9999, 
      electronegativity:1.3,
      radioactive:true,
      discovery_date:1971,
      discovery_details:'1961-1971 by JINR (USSR) & LBNL (USA)',
      etymology:'after Ernest Lawrence',
      description: 'The last actinide and eleventh transuranic element. It\'s basically just one of your classic weird radioactive bois. Its most stable isotope has a half-life of 11 hours.'
  },
       {
      symbol:'Rf',    
      name:'rutherfordium', 
      atomic_number:104, 
      id:104, 
      atomic_mass:'[226]',
      state_at_standard_conditions:'solid',
      period:7,
      group:4,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 2100, 
      boiling_point:5500, 
      electronegativity:'yes',
      radioactive:true,
      discovery_date:1964,
      discovery_details:'1964 in the Soviet Union. Confirmed 1969, USA.', 
      etymology:'after Sir Ernest Rutherford (New Zealand)',  
      description:'No elements on the periodic table are named after an Australian. Anyway, chemistry experiments have confirmed that rutherfordium acts as the heavier homologue to hafnium in group 4. Other chemical properties are only partially determined.'
  },   
       {
      symbol:'Db',    
      name:'dubnium', 
      atomic_number:105, 
      id:105, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[268]',
      state_at_standard_conditions:'solid',
      period:7,
      group:5,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 9999, 
      boiling_point:9999, 
      discovery_date:1970,
      discovery_details:'1970, LBNL (USA) & JINR (Russian) (independently)',
      etymology:'after Dubna, Russia',  
      description:'Dubnium is a synthetic element, meaning it doesn\'t need to exist, but we made it anyway. It\'s in group 5 so has the expected +5 oxidation state. Strangely, it seems to be more similar to Niobium than to Tantalum.'
  },    
       {
      symbol:'Sg',    
      name:'seaborgium', 
      atomic_number:106, 
      id:106, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[269]',
      state_at_standard_conditions:'solid',
      period:7,
      group:6,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 9999, 
      boiling_point:9999, 
      discovery_date:1974,
      discovery_details:'1974 by Lawrence Berkeley National Laboratory',
      etymology:'after the American nuclear chemist Glenn T. Seaborg',  
      description:'Seaborgium is one of only two elements to have been named after a living person (the other being Oganesson). It\'s a synthetic element and its chemical properties are, as far as we know, expected of a group-6 element.'
  },
   {
      symbol:'Bh',    
      name:'bohrium', 
      atomic_number:107, 
      id:107, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[270]',
      state_at_standard_conditions:'solid',
      period:7,
      group:7,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 9999, 
      boiling_point: 9999, 
      discovery_date:1981,
      discovery_details:'1981 by Gesellschaft f&uuml,r Schwerionenforschung',
      etymology:'after Danish physicist Niels Bohr',  
      description:'Another synthetic element. Its most stable isotope has a half-life of 61 seconds. Basically, it doesn\'t need to exist and it tries its hardest not to. Its chemical properties seem to be typical of a group-7 element.'
  },  
       {
      symbol:'Hs',    
      name:'hassium', 
      atomic_number:108, 
      id:108, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[269]',
      state_at_standard_conditions:'solid',
      period:7,
      group:8,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 9999, 
      boiling_point: 9999, 
      discovery_date:1984,
      discovery_details:'1984 by Gesellschaft f&uuml,r Schwerionenforschung',
      etymology:'after the German state of Hesse',  
      description:'Hassium is a synthetic element and is pretty radioactive -- its most stable isotope has a half-life of about 16 seconds. Because of this, it\'s pretty hard to study, but it seems like a normal group-8 element.'
  },    
       {
      symbol:'Mt',    
      name:'meitnerium', 
      atomic_number:109, 
      id:109, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[278]',
      state_at_standard_conditions:'solid',
      period:7,
      group:9,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 9999, 
      boiling_point: 9999, 
      discovery_date:1982,
      discovery_details:'1982 by Gesellschaft f&uuml,r Schwerionenforschung',
      etymology:'after Lise Meitner (Austria/Sweden)',  
      description:'Meitnerium is a synthetic element. Its most stable isotope has a half-life of 4.5 seconds. No experiments have been done to verify predicted chemical properties. Curium is the only other element to be named after a woman.'
  },  
       {
      symbol:'Ds',    
      name:'darmstadtium', 
      atomic_number:110, 
      id:110, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[281]',
      state_at_standard_conditions:'solid',
      period:7,
      group:10,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 9999, 
      boiling_point:9999, 
      discovery_date:1994,
      discovery_details:'1994 by Gesellschaft f&uuml,r Schwerionenforschung',
      etymology:'after Darmstadt, Germany (location of its discovery)',  
      description:'Darmstadtium is an extremely radioactive synthetic element. Its most stable isotope has a half-life of 12.7 seconds. No experiments have been to determine its chemical properties. Pretty boring, really.'
  },   
       {
      symbol:'Rg',    
      name:'roentgenium', 
      atomic_number:111, 
      id:111, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[282]',
      state_at_standard_conditions:'solid',
      period:7,
      group:11,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 9999, 
      boiling_point: 9999,
      discovery_date:1994, 
      discovery_details:'1994 by Gesellschaft f&uuml,r Schwerionenforschung',
      etymology:'after Wilhelm R&ouml,ntgen (Germany)',  
      description:'Roentgenium is a pretty radioactive syntheic element. Its most stable isotope has a half-life of 100 seconds. Nothing is known about its chemical properites. Waste of time, really.'
  },    
       {
      symbol:'Cn',
      name:'copernicium', 
      electronegativity:'yes',
      radioactive:true,
      atomic_number:112, 
      id:112, 
      atomic_mass:'[285]',
      state_at_standard_conditions:'solid',
      period:7,
      group:12,
      block:'d',
      primary_class: 'transition-metal',
      metalness:'metal',
      melting_point: 9999, 
      boiling_point:9999, 
      discovery_date:1996,
      discovery_details:'1996 by Gesellschaft f&uuml,r Schwerionenforschung',
      etymology:'after Nicolaus Copernicus (of helicentric model fame)',  
      description:'Copernicium is a syntheic element and is a bit radioactive. It might have an oxidation state of +4. Scientists think it may be the noblest metal of them all. I don\'t know what that means though.' 
  },
       {
      symbol:'Nh',
      name:'nihonium', 
      electronegativity:'yes',
      radioactive:true,
      atomic_number:113, 
      id:113, 
      atomic_mass:'[286]',
      state_at_standard_conditions:'solid',
      period:7,
      group:13,
      block:'p',
      primary_class: 'unknown',
      metalness:'metal',
      melting_point: 9999, 
      boiling_point:9999, 
      discovery_date:2004,
      discovery_details:'2004 by Riken (Japan)',
      etymology:'from the Japanese name for Japan, <em>Nihon</em>',
      description:'Nihonium is a synthetic, radioactive element. Its most stable (known) isotope has a half-life of 10 seconds. No one really knows anything about it. It\'s probably a post-transition metal and it doesn\'t seem very reactive.'    
  },
       {
      symbol:'Fl',    
      name:'flerovium', 
      atomic_number:114, 
      id:114, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[289]',
      state_at_standard_conditions:'solid',
      period:7,
      group:14,
      block:'p',
      primary_class: 'unknown',
      metalness:'metal',
      melting_point: 9999, 
      boiling_point: -60, 
      discovery_date:1999,
      discovery_details:'1999 by JINR & LLNL', 
      etymology:'after the Flerov Laboratory of Nuclear Reactions (ultimately after Georgy Flyorov)',  
      description:'Flerovium is the heaviest (big-boned) element to have its chemistry studied. Initial experiments suggested it behaved similarly to the nobel gases. More recent experiments, however, have shown it to be pretty metalic. It might even be a gas at standard conditions. We still don\'t really know which experiments to believe.'
  },    
       {
      symbol:'Mc',    
      name:'moscovium', 
      atomic_number:115, 
      id:115, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[290]',
      state_at_standard_conditions:'solid',
      period:7,
      group:15,
      block:'p',
      primary_class: 'unknown',
      metalness:'metal',
      melting_point: 400, 
      boiling_point: 1100, //probably
      discovery_date:2003,
      discovery_details:'2003 by JINR and LLNL',
      etymology:'after Moscow, Russia',  
      description:'Moscovium is an extremely radioactive synthetic element. Its most stable known isotope has a half-life of 0.65 seconds. So far, scientists have only seen 100 moscovium atoms.'
  },    
       {
      symbol:'Lv',    
      name:'livermorium', 
      atomic_number:116, 
      id:116, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[293]',
      state_at_standard_conditions:'solid',
      period:7,
      group:16,
      block:'p',
      primary_class: 'unknown',
      metalness:'metal',
      melting_point: 507, 
      boiling_point: 862, 
      discovery_date:2000,
      discovery_datails:'2000 by JINR & LLNL',
      etymology:'after Lawrence Livermore National Laboratory (ultimately after Livermore, California)',  
      description:'Livermorium is a synthetic radioactive element. We don\'t really know anything about it. We\'re still waiting for scientists to pull their finger out and get to work on this one.'
  },    
       {
      symbol:'Ts',    
      name:'tennessine', 
      atomic_number:117, 
      id:117, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[294]',
      state_at_standard_conditions:'solid',
      period:7,
      group:17,
      block:'p',
      primary_class: 'unknown',
      metalness:'metal',
      melting_point: 550, 
      boiling_point: 610, 
      discovery_date:2009,
      discovery_details:'2009 by JINR, LLNL, Vanderbilt University & Oak Ridge National Laboratory',
      etymology:'after Tennessee, USA',  
      description:'It is a synthetic radioactive element. Tennessine atoms have managed to survive for literally <em>hundreds</em> of milliseconds. Scientists still haven\'t been bothered to check what its chemical properties are like.'
  },    
       {
      symbol:'Og',    
      name:'oganesson', 
      atomic_number:118, 
      id:118, 
      electronegativity:'yes',
      radioactive:true,
      atomic_mass:'[294]',
      state_at_standard_conditions:'solid',
      period:7,
      group:18,
      block:'p',
      primary_class: 'unknown',
      metalness:'metal',
      melting_point:50, 
      boiling_point:80, 
      discovery_date:2002,
      discovery_details:'2002 by JINR & LLNL',
      etymology:'after Yuri Oganessian',  
      description:'It has the highest atomic number and atomic mass. Only 5 (maybe 6?) atoms of Oganesson have been synthesised, so there hasn\'t really been a chance to study its chemistry yet. There are only two elements to have been named after a living person -- oganesson and seaborgium. Also, Yuri Oganesson is still alive. What a guy.'
  }
  ],
    lowOpacity: "25%",
    dimOpacity: "40%",
    medOpacity: "75%",
    inputOption: "text",
  };

  showElements = (show) => {
    let htmlAtoms = document.getElementsByClassName('element-tile');
    for (var i = htmlAtoms.length -1; i >= 0; i--) {
      htmlAtoms[i].style.opacity = show? "100%" : this.state.lowOpacity;
    }
  }

  getMatchingElements (term, str, attr) {
    let results = [];
    switch (attr) {
      case "name":
        term = term.replace(/\s/g, "");
        this.state.atoms.forEach(elmt => { if(elmt[attr].includes(term)) results.push(elmt.symbol) });
        break;
      case "symbol":
        this.state.atoms.forEach(elmt => { 
          term = term.toUpperCase();
          if((elmt[attr].toUpperCase().includes(term)) || (elmt[attr] === term)) results.push(elmt.symbol) 
        });
        break;
      default:
        this.state.atoms.forEach(element => {
          const data = str? element[attr].toLowerCase() : element[attr]
          if(data === term) results.push(element.symbol);
        });
    }
    return results;
  }

  handleElementClick = (atom) => {
    const modal = document.getElementById("element-modal");
    modal.classList.remove("hide-me");

    const nonmetals_colour = "rgb(223, 0, 0)";
    const alkali_metals_colour = "rgb(219, 102, 6)";
    const alkaline_earth_metals_clour = "rgb(223, 182, 0)";
    const metaux_pauvres_colour = "rgb(5, 148, 5)";
    const metalloid_colour = "rgb(0, 179, 90)";
    const nonmetal_colour = "#7c4cdb";
    const lanthanoid_colour = "#5900b3";
    const actinoid_colour = "#000099";
    const noble_gas_colour = "rgb(99, 0, 124)";
    const unknown_colour = "rgb(34, 34, 34)";
    const transition_metal_colour = "rgb(21, 49, 85)";
    
    const elmnt_nm = atom.name;
    const elmt_code = atom.symbol;
    const atmc_mss = atom.atomic_mass;
    const atmc_num = atom.atomic_number;
    const mp = atom.melting_point;
    const bp = atom.boiling_point;
    const elc_ngty = atom.electronegativity;
    const radioactivity = atom.radioactive;
    const discvry = atom.discovery_details;
    const etym = atom.etymology;
    const descr = atom.description;
    let fill_colour = "rgb(223, 0, 0)";
    const text_colour = "white";
    switch (atom.primary_class) {
      case 'non-metal':
          fill_colour = nonmetals_colour;
          break;
      case 'alkali-metal':
          fill_colour = alkali_metals_colour;
          break;
      case 'noble_gas':
          fill_colour = noble_gas_colour;
          break;
      case 'alkaline-earth-metal':
          fill_colour = alkaline_earth_metals_clour;
          break;
      case 'metalloid':
          fill_colour = metalloid_colour;
          break;
      case 'non-metals':
          fill_colour = nonmetal_colour;
          break;
      case 'metaux_pauvres':
          fill_colour = metaux_pauvres_colour;
          break;
      case 'lanthanoid':
          fill_colour = lanthanoid_colour;
          break;
      case 'actinoid':
          fill_colour = actinoid_colour;
          break;
      case 'unknown':
          fill_colour = unknown_colour;
          break;
      default:
          fill_colour = transition_metal_colour;
    }
    const svg_code = `
    <svg class= "item3" width="100%" height="300">
        <style>
            .chemical_symbol { 
                font: bold 90px sans-serif !important;
                fill: ${text_colour};
            }
            .number {
                font: bold 40px sans-serif;
                fill: ${text_colour};
            }
        </style>
        <rect width = "100%" height = "100%" style = "fill: white" />
        <rect x = "5%" y = "3%" width = "90%" height = "94%" style = "fill: ${fill_colour}" />
        <text x="75%" y="15%" dominant-baseline="middle" text-anchor="middle" class="number">${atmc_num}</text>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="chemical_symbol">${elmt_code}</text>
        <text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" class="number">${atmc_mss}</text>
    </svg>`;
    const modal_code = 
    `<div class= "modal_content">
        <div class= "grid-container">
                <div class= "item1">${elmnt_nm}</div>
            <button class= "item2" onclick = "document.getElementById('element-modal').classList.toggle('hide-me')">&times</button>
            ${svg_code}
            <div class= "item4">
                Atomic Number: ${atmc_num} <br> 
                Relative Atomic Mass: ${atmc_mss} <br> 
                Melting Point: ${mp} <br>
                Boiling Point: ${bp} <br> 
                Electronegativity: ${elc_ngty} <br>
                E<sup>-</sup> configuration: x <br>
                <div class="mobile_radioactive_indictaion">Radioactive: ${radioactivity}</div>
                Discovered: ${discvry} <br> Etymology: ${etym} <br> <br>
            </div>
            <div class= "item7">
                ${descr}
            </div>
        </div>
    </div>`;
    modal.innerHTML = modal_code;

  }

  handleFilter = (filter) => {
      this.showElements(false);
      let results = [];

      if (filter.match(/[spdf]-block\s?$/i)) { 
        const block = filter[0];
        results = this.getMatchingElements(block, true, "block");
      } else if(filter==='radioactive') {
        results = this.getMatchingElements(true, false, "radioactive");
      } else if(filter==='gas') {
        results = this.getMatchingElements("gas", true, "state_at_standard_conditions");
      } else if(filter==='liquid') {
        results = this.getMatchingElements("liquid", true, "state_at_standard_conditions");
      } else if(filter==='solid') {
        results = this.getMatchingElements("solid", true, "state_at_standard_conditions");
      } else if(filter==='nonmetal') {
        results = this.getMatchingElements("nonmetal", true, "metalness");
      } else if(filter==='metal') {
        results = this.getMatchingElements("metal", true, "metalness");
      } else if(filter==='metalloid') {
        results = this.getMatchingElements("metalloid", true, "metalness");
      } else if(filter==='synthetic') {
        this.state.atoms.forEach(elmt => { 
          if(elmt.atomic_number >= 95) results.push(elmt.symbol) 
        });
      } else {
        this.state.atoms.forEach(elmt => { results.push(elmt.symbol) });
      }

      results.forEach(symbol => {
        let htmlAtom = document.getElementById(symbol);
        htmlAtom.style.opacity = "100%";
      });

  }

  handleQuery = (query) => {
      query === "" ? this.showElements(true): this.showElements(false);
      let results = [];
      query = query.toLowerCase();

      // search by...
      if ((query.length<3) && (query.match(/[a-z]{1,2}\s?$/i))) { 
        results = this.getMatchingElements(query, true, "symbol");
      } else if(query.match(/^\d{1,3}\s?$/i)) {
        results = this.getMatchingElements(parseInt(query, 10), false, "atomic_number");
      } else if (query.match(/non[-\s]?metals?\s?$/i)) {
        results = this.getMatchingElements("non-metal", true, "primary_class");
      } else if (query.match(/noble[-\s]?gas(es)?\s?$/i)) {
        results = this.getMatchingElements("noble_gas", true, "primary_class");
      } else if (query.match(/alkali[-\s]?metals?\s?$/i)) {
        results = this.getMatchingElements("alkali-metal", true, "primary_class");
      } else if (query.match(/alkaline[-\s]?earth[-\s]?metals?\s?$/i)) {
        results = this.getMatchingElements("alkaline-earth-metal", true, "primary_class");
      } else if (query.match(/metaux[-\s]?pauvres?\s?$/i)) {
        results = this.getMatchingElements("metaux_pauvres", true, "primary_class");
      } else if (query.match(/metalloids?\s?$/i)) {
        results = this.getMatchingElements("metalloid", true, "primary_class");
      } else if (query.match(/transition[-\s]?metals?\s?$/i)) {
        results = this.getMatchingElements("transition-metal", true, "primary_class");
      } else if (query.match(/^lanthanoids?\s?$/i) || query.match(/^lanthanides?\s?$/i)) {
        results = this.getMatchingElements("lanthanoid", true, "primary_class");
      } else if (query.match(/^actinoids?\s?$/i) || query.match(/^actinides?\s?$/i)) {
        results = this.getMatchingElements("actinoid", true, "primary_class");
      } else if (query.match(/unknowns?\s?$/i)) {
        results = this.getMatchingElements("unknown", true, "primary_class");
      } else if (query.match(/radio\s?active$/i)) {
        results = this.getMatchingElements(true, false, "radioactive");
      } else if (query.match(/^halogens?$/i)) {
        results = this.getMatchingElements(17, false, "group");
      } else if (query.match(/^transactinides?$/i)) {
        // there's no property that groups these guys together -- have to get them by atomic #
        results = this.getMatchingElements(104, false, "atomic_number");
        results.push(this.getMatchingElements(105, false, "atomic_number"));
        results.push(this.getMatchingElements(106, false, "atomic_number"));
        results.push(this.getMatchingElements(107, false, "atomic_number"));
        results.push(this.getMatchingElements(108, false, "atomic_number"));
        results.push(this.getMatchingElements(109, false, "atomic_number"));
        results.push(this.getMatchingElements(110, false, "atomic_number"));
        results.push(this.getMatchingElements(111, false, "atomic_number"));
      } else if (query.match(/^row[-\s]?[1-7]$/i) || query.match(/^period[-\s]?[1-7]$/i)) {
        query = query.replace('row', '' );
        query = query.replace('period', '' );
        query = query.replace('-', '' );
        query = parseInt(query, 10);
        results = this.getMatchingElements(query, false, "period");
      } else if (query.match(/^group[-\s]?\d+$/i)) {
        query = query.replace('group', '' );
        query = query.replace('-', '' );
        query = parseInt(query, 10);
        results = this.getMatchingElements(query, false, "group");
      } else results = this.getMatchingElements(query, false, "name");
      results.forEach(symbol => {
        let htmlAtom = document.getElementById(symbol);
        htmlAtom.style.opacity = "100%";
      });

  }

  hideInputsExcept(exception) {
    document.getElementById("element_search_container").style.display = "none";
    document.getElementById("electronegativity_div").style.display = "none";
    document.getElementById("melting_pt_div").style.display = "none";
    document.getElementById("boiling_pt_div").style.display = "none";
    document.getElementById("discovery_div").style.display = "none";
    switch (exception) {
      case "en-slider":
        document.getElementById("electronegativity_div").style.display = "block";
        this.handleElectronegativity();
        break;
      case "mp-slider":
        document.getElementById("melting_pt_div").style.display = "block";
        this.handleMeltingPoint();
        break;
      case "bp-slider":
        document.getElementById("boiling_pt_div").style.display = "block";
        this.handleBoilingPoint();
        break;
      case "discovery":
        document.getElementById("discovery_div").style.display = "block";
        this.handleDiscovery();
        break;
      default:
        document.getElementById("element_search_container").style.display = "grid";
    }
  }

  handleElectronegativity = () => {
    const slider = document.getElementById('EN_slider');
    const slider_value = slider.value / 100;
    
    document.getElementById('EN_display').innerText = slider_value;
    let htmlAtoms = document.getElementsByClassName('element-tile');
    
    for (var i = htmlAtoms.length -1; i >= 0; i--) {
      let en_value =  parseFloat(htmlAtoms[i].getAttribute('data-electroneg'));

      const inner_upper = en_value + 0.25;
      const inner_lower = en_value - 0.25;
      const mediu_upper = en_value + 0.5;
      const mediu_lower = en_value - 0.5;
      const outer_upper = en_value + 1;
      const outer_lower = en_value - 1;

      if ((slider_value > inner_lower) && (slider_value < inner_upper)) {
        htmlAtoms[i].style.opacity = "100%"; 
      } else if ((slider_value > mediu_lower) && (slider_value < mediu_upper)) { 
        htmlAtoms[i].style.opacity = this.state.medOpacity; 
      } else if ((slider_value > outer_lower) && (slider_value < outer_upper)) { 
        htmlAtoms[i].style.opacity = this.state.dimOpacity; 
      } else { 
        htmlAtoms[i].style.opacity = this.state.lowOpacity 
      } 
    }
  }

  handleMeltingPoint = () => {
    const slider = document.getElementById('MP_slider');
    document.getElementById("MP_display").innerHTML = slider.value + " &#176;C";

    let htmlAtoms = document.getElementsByClassName('element-tile');
    
    for (var i = htmlAtoms.length -1; i >= 0; i--) {
      let melting_pt =  parseFloat(htmlAtoms[i].getAttribute('data-meltingpt'));

      const inner_upper = melting_pt + 100;
      const inner_lower = melting_pt - 100;
      const mediu_upper = melting_pt + 500;
      const mediu_lower = melting_pt - 500;
      const outer_upper = melting_pt + 1000;
      const outer_lower = melting_pt - 1000;

      if ((slider.value > inner_lower) && (slider.value < inner_upper)) {
        htmlAtoms[i].style.opacity = "100%"; 
      } else if ((slider.value > mediu_lower) && (slider.value < mediu_upper)) { 
        htmlAtoms[i].style.opacity = this.state.medOpacity; 
      } else if ((slider.value > outer_lower) && (slider.value < outer_upper)) { 
        htmlAtoms[i].style.opacity = this.state.dimOpacity; 
      } else { 
        htmlAtoms[i].style.opacity = this.state.lowOpacity 
      } 
    }
  }

  handleBoilingPoint = () => {
    const slider = document.getElementById('BP_slider');
    document.getElementById("BP_display").innerHTML = slider.value + " &#176;C";

    let htmlAtoms = document.getElementsByClassName('element-tile');
    
    for (var i = htmlAtoms.length -1; i >= 0; i--) {
      let melting_pt =  parseFloat(htmlAtoms[i].getAttribute('data-boilingpt'));

      const inner_upper = melting_pt + 100;
      const inner_lower = melting_pt - 100;
      const mediu_upper = melting_pt + 500;
      const mediu_lower = melting_pt - 500;
      const outer_upper = melting_pt + 1000;
      const outer_lower = melting_pt - 1000;

      if ((slider.value > inner_lower) && (slider.value < inner_upper)) {
        htmlAtoms[i].style.opacity = "100%"; 
      } else if ((slider.value > mediu_lower) && (slider.value < mediu_upper)) { 
        htmlAtoms[i].style.opacity = this.state.medOpacity; 
      } else if ((slider.value > outer_lower) && (slider.value < outer_upper)) { 
        htmlAtoms[i].style.opacity = this.state.dimOpacity; 
      } else { 
        htmlAtoms[i].style.opacity = this.state.lowOpacity 
      } 
    }
  }

  handleDiscovery = () => {
    const slider = document.getElementById('discovery_timeline');
    document.getElementById("date_display").innerHTML = slider.value;

    let htmlAtoms = document.getElementsByClassName('element-tile');

    for (var i = htmlAtoms.length -1; i >= 0; i--) {
      let discovery_date =  htmlAtoms[i].getAttribute('data-discovery');
      if (slider.value >= discovery_date) htmlAtoms[i].style.opacity = "100%"; 
      else htmlAtoms[i].style.opacity = this.state.lowOpacity;
    }
  }

  selectQueryType = (option) => {
    console.log(option);
    const activate_slider = this.state.inputOption === option ? false : true;
    const setInput = activate_slider ? option : "text";
    activate_slider ? this.showElements(false) : this.showElements(true);
    this.setState({ inputOption : setInput });
    if (activate_slider) this.hideInputsExcept(option); 
    else this.hideInputsExcept("search");
  }

  handleFilterToggle = () => {
    const filter_btn = document.getElementById('filter-menu');
    const magnifying_glass = document.getElementById('query-img');
    const filter_menu = document.getElementById('filter-accordian');
    filter_btn.classList.toggle('expanded');
    magnifying_glass.classList.toggle('expanded');
    filter_menu.classList.toggle('hide-me');
  }

  handleCloseMenu = () => {
    const side_menu = document.getElementById('side-menu');
    side_menu.classList.add('hide-menu');
  }

  handleShowMenu = () => {
    const side_menu = document.getElementById('side-menu');
    side_menu.classList.remove('hide-menu');
  }

  render() {
    return (
      <React.Fragment>
        
        <header>
          <h1>Searchable periodic table</h1>
          <span 
            id='settings-btn' 
            onClick={this.handleShowMenu} 
            className='unselectable'
            >settings</span>
        </header>
        
        <div id="side-menu" className='hide-menu'>
          <button onClick={this.handleCloseMenu}>close</button>
          <button>celsius</button>
          <button>quiz</button>
          <button>help</button>
        </div>
        
        <div id='element_search_wrapper'>
          <SearchBar
            onHandleQuery={this.handleQuery}
            onHandleFilter={this.handleFilterToggle}
            onSelectFilter={this.handleFilter}
          />
          <ElectronegSlider onHandleElectronegativity={this.handleElectronegativity} />
          <MeltingPtSlider onHandleMeltingPoint={this.handleMeltingPoint} />        
          <BoilingPtSlider onHandleBoilingPoint={this.handleBoilingPoint} />
          <DiscoverySlider onHandleDiscovery={this.handleDiscovery} />
        </div>
        <SliderMenu 
          onSelectQuery={this.selectQueryType}
        />

        <PeriodicTable 
          atoms={this.state.atoms}
          onHandleElementClick={this.handleElementClick}
        />
        
        <div id="element-modal" className="hide-me"></div>

      </React.Fragment>
    );
  }
}

export default App;