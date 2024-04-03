import { CPU, GPU, HDD, Motherboard, RAM, SSD } from "./hardwares";


// Модификация типов данных железа
export type CPUWithClick = CPU & {
    onClick: () => void;
}
export type GPUWithClick = GPU & {
    onClick: () => void;
}
export type HDDWithClick = HDD & {
    onClick: () => void;
}
export type MotherboardWithClick = Motherboard & {
    onclick: () => void;
}
export type RAMWithClick = RAM & {
    onClick: () => void;
}
export type SSDWithClick = SSD & {
    onClick: () => void;
}

export type HardwareWithClick = CPUWithClick | RAMWithClick | GPUWithClick | HDDWithClick | MotherboardWithClick | SSDWithClick;