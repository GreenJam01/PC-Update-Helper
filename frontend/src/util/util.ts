import { Assembly } from '../types/assembly';
import { HardwareType } from '../types/hardwares';

export const isCPU = (hardware: HardwareType) => 'frequency' in hardware && 'coresNumber' in hardware && 'threadsNumber' in hardware;

export const isGPU = (hardware: HardwareType) => 'memoryVolume' in hardware &&
'memoryFrequency' in hardware &&
'busWidth' in hardware;

export const isRAM = (hardware: HardwareType) => 'volume' in hardware &&
'frequency' in hardware;

export const isHDD = (hardware: HardwareType) => 'memory' in hardware &&
'anInterface' in hardware;

export const isMotherboard = (hardware: HardwareType) => 'socket' in hardware &&
'memoryType' in hardware &&
'maxMemory' in hardware;

export const getDefaultHardwareImage = (type : string) => {
  switch (type) {
    case('cpu') : {
      return 'https://ir.ozone.ru/s3/multimedia-f/6685279503.jpg';
    }
    case('ram') : {
      return 'https://zoomobi.ru/wp-content/uploads/f/c/0/fc0e20af440b514957af9acc7db39e0e.png';
    }
    case('gpu') : {
      return 'https://i.ytimg.com/vi/YDXF_WScZNk/maxresdefault.jpg';
    }
    case('hdd') : {
      return 'https://avatars.mds.yandex.net/get-mpic/5250150/img_id5406277711629096172.jpeg/orig';
    }
    case('motherboard') : {
      return 'https://avatars.mds.yandex.net/get-mpic/2017118/img_id9185841192021452681.jpeg/orig';
    }
  }
};

export const calculateTotalPrice = (assembly:Assembly) => {
  let totalPrice = 0;
  if (assembly.motherboard) {
    totalPrice += assembly.motherboard.price || 0;
  }
  if (assembly.cpu) {
    totalPrice += assembly.cpu.price || 0;
  }
  if (assembly.ram) {
    totalPrice += assembly.ram.price || 0;
  }
  if (assembly.gpu) {
    totalPrice += assembly.gpu.price || 0;
  }
  if (assembly.hdd) {
    totalPrice += assembly.hdd.price || 0;
  }

  return totalPrice;
};
