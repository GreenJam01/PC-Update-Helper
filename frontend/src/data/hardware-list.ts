
export const hardwares = ['Cpu', 'Gpu', 'Ram', 'Hdd', 'Motherboard'];

const processorArray: string[] = [
  'ryzen 5 5500',
  'ryzen 5 5500GT',
  'ryzen 5 5600',
  'ryzen 5 5600G',
  'ryzen 5 5600X',
  'ryzen 5 5600GT',
  'core i5 12400',
  'core i5 12400F',
  'core i5 12400T'
];

export function getRandomProcessor(): string {
  const randomIndex = Math.floor(Math.random() * processorArray.length);
  return processorArray[randomIndex];
}

const motherboardArray: string[] = [
  'ASROCK A520M-HVS',
  'ASROCK B450M-HDV R4.0',
  'MSI A520M-A PRO',
  'MAXSUN Challenger A520M-K',
  'ASROCK A520M-HDV',
  'GIGABYTE A520M K V2',
  'MSI A520M PRO',
  'ASUS PRIME A520M-K',
  'GIGABYTE A520M H',
  'GIGABYTE A520M S2H',
  // Все остальные названия материнских плат из вашего списка
  'ASUS PROART B760-CREATOR WIFI',
  'ASROCK Z790 LIVEMIXER',
  'ASROCK Z790 STEEL LEGEND WIFI',
  'ASUS ROG STRIX Z690-A GAMING WIFI',
  'MSI Z790 GAMING PLUS WIFI',
  'MSI PRO Z790-A MAX WIFI',
  'ASROCK Z790 PG LIGHTNING/D4',
  'GIGABYTE B760 DS3H AX',
  'ASUS TUF GAMING B760M-PLUS D4',
  'GIGABYTE B760 GAMING X AX',
  'ASUS PRIME B760-PLUS D4',
  'GIGABYTE Z790 UD AX',
  'MSI PRO B760-P DDR4 II',
  // и так далее
];

export function getRandomMotherboard(): string {
  const randomIndex = Math.floor(Math.random() * motherboardArray.length);
  return motherboardArray[randomIndex];
}

