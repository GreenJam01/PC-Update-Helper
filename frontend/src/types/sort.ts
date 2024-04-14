import { HardwareType } from './hardwares';

export type Sort = {
    title: string;
    func: (a: HardwareType, b: HardwareType) => number;
}
