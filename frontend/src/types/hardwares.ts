export type CPU = {
    id: number;
    urlImage: string;
    title: string;
    price: number;
    brand: string;
    frequency: string;
    coresNumber: string;
    threadsNumber: string;
}

export type GPU ={
    id: number;
    urlImage: string;
    title: string;
    brand: string;
    memoryVolume: string;
    memoryFrequency: string;
    busWidth: string;
    price: number;
}

export type HDD = {
    id: number;
    urlImage: string;
    title: string;
    brand: string;
    memory: string;
    anInterface: string;
    maxReadingSpeed: string;
    maxRecordingSpeed: string;
    isSSD: boolean;
    price: number;
}

export type Motherboard = {
    id: number;
    urlImage: string;
    title: string;
    brand: string;
    socket: string;
    memoryType: string;
    maxMemory: string;
    price: number;
};

export type RAM = {
    id: number;
    urlImage: string;
    title: string;
    brand: string;
    volume: string;
    frequency: string;
    price: number;
};

export type SSD = {
    id: number;
    urlImage: string;
    title: string;
    brand: string;
    memory: string;
    anInterface: string;
    
    price: number;
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
