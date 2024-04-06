import { CPU, GPU, HDD, Motherboard, RAM, SSD } from "./hardwares"

export type Assembly = {
    id: string,
    cpu: CPU,
    gpu: GPU,
    ram: RAM,
    motherboard: Motherboard,
    hdd: HDD,
    ssd: SSD
}