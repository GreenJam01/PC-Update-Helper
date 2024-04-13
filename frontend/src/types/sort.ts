import { HardwareType } from './hardwares';

export type Sort = {
    name: string;
    func: (a: HardwareType, b: HardwareType) => number;
}
