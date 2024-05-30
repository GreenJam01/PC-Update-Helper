export type CPU = {
    id: number;
    imgLink: string;
    title: string;
    price: number;
    brand: string;
    frequency: string;
    coresNumber: string;
    threadsNumber: string;
    favorite: boolean;
    visible: true;
}

export type GPU ={
    id: number;
    imgLink: string;
    title: string;
    brand: string;
    memoryVolume: string;
    memoryFrequency: string;
    busWidth: string;
    price: number;
    favorite: boolean;
    visible: true;
}

export type HDD = {
    id: number;
    imgLink: string;
    title: string;
    brand: string;
    memory: string;
    interface: string;
    // maxReadingSpeed: string;
    // maxRecordingSpeed: string;
    // ssd: boolean;
    price: number;
    favorite: boolean;
    visible: true;
}

export type Motherboard = {
    id: number;
    imgLink: string;
    title: string;
    brand: string;
    socket: string;
    memoryType: string;
    maxMemory: string;
    price: number;
    favorite: boolean;
    visible: true;
};

export type RAM = {
    id: number;
    imgLink: string;
    title: string;
    brand: string;
    volume: string;
    frequency: string;
    price: number;
    favorite: boolean;
    visible: true;
};

export type SSD = {
    id: number;
    imgLink: string;
    title: string;
    brand: string;
    memory: string;
    interface: string;
    price: number;
    favorite: boolean;
    visible: true;
};

export type HardwareType = CPU | RAM | GPU | HDD | Motherboard;
export type HardwaresType = CPU[] | RAM[] | GPU[] | HDD[] | Motherboard[];

export type Hardwares = {
    cpu: CPU[];
    gpu: GPU[];
    ram: RAM[];
    motherboard: Motherboard[];
    hdd: HDD[];

}
