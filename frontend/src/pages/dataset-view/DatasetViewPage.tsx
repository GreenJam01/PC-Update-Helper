import 'DatasetViewPage.css';
import React, { useState } from 'react';
import { CPUWithClick, GPUWithClick, HDDWithClick, HardwareWithClick, RAMWithClick, SSDWithClick } from '../../types/HardwaresWithClick';


const CPUBlock : React.FC<CPUWithClick> = ({title, onClick}) => {
    return (
        <div className={"cpu-block ${highlight ? 'highlight' : ''}"} onClick={onClick}>
            {title}
        </div>
    );
};
const GPUBlock : React.FC<GPUWithClick> = ({title, onClick}) => {
    return (
        <div className={"gpu-block ${highlight ? 'highlight' : ''}"} onClick={onClick}>
            {title}
        </div>
    );
};
const HDDBlock : React.FC<HDDWithClick> = ({title, onClick}) => {
    return (
        <div className={"hdd-block ${highlight ? 'highlight' : ''}"} onClick={onClick}>
            {title}
        </div>
    );
};
const MotherboardBlock : React.FC<RAMWithClick> = ({title, onClick}) => {
    return (
        <div className='motherboard-block' onClick={onClick}>
            {title}
        </div>
    );
};
const RAMBlock : React.FC<RAMWithClick> = ({title, onClick}) => {
    return (
        <div className='ram-block' onClick={onClick}>
            {title}
        </div>
    );
};
const SSDBlock : React.FC<SSDWithClick> = ({title, onClick}) => {
    return (
        <div className='ssd-block' onClick={onClick}>
            {title}
        </div>
    );
};

const DatasetViewPage : React.FC = () => {
    const [clickedHardwere, setClickedHadwere] = useState('');
    const [blocksContent, setBlocksContent] = useState<HardwareWithClick[]>(Array(10).fill(''));

    const handleBlockClick = (title: string) => {
        setClickedHadwere(title);
    }

    // TODO: Переписать
    const checkDifferences = ( blockIndex : number ) => {
        if (blockIndex !== 0 && blocksContent[blockIndex] !== blocksContent[blockIndex + 5]) {
            return true;
        }
        return false;
    };

    // TODO: реализовать "подсветку отличающихся элементов"
    return (
        <div className="data-view-page">
            <div className="block-container">
                <div className="left">
                    <CPUBlock title="CPU Model" onClick={() => handleBlockClick('')} id={0} urlImage={''} price={0} brand={''} frequency={''} coresNumber={''} threadsNumber={''}/>
                    <GPUBlock title="GPU Model" onClick={() => handleBlockClick('')} id={0} urlImage={''} brand={''} memoryVolume={''} memoryFrequency={''} busWidth={''} price={0}/>
                    <HDDBlock title="HDD Model" onClick={() => handleBlockClick('')} id={0} urlImage={''} brand={''} memory={''} anInterface={''} price={0}/>
                    <MotherboardBlock title="Motherboard Model" onClick={() => handleBlockClick('')} id={0} urlImage={''} brand={''} volume={''} frequency={''} price={0}/>
                    <RAMBlock title="RAM Model" onClick={() => handleBlockClick('')} id={0} urlImage={''} brand={''} volume={''} frequency={''} price={0}/>
                    <SSDBlock title="HDD Model" onClick={() => handleBlockClick('')} id={0} urlImage={''} brand={''} memory={''} anInterface={''} maxReadingSpeed={''} maxRecordingSpeed={''} price={0}/>
                </div>
                <div className="spacer"></div>
                <div className='right'>
                <CPUBlock title="CPU Model 1" onClick={() => handleBlockClick('')} id={0} urlImage={''} price={0} brand={''} frequency={''} coresNumber={''} threadsNumber={''}/>
                    <GPUBlock title="GPU Model 2" onClick={() => handleBlockClick('')} id={0} urlImage={''} brand={''} memoryVolume={''} memoryFrequency={''} busWidth={''} price={0}/>
                    <HDDBlock title="HDD Model" onClick={() => handleBlockClick('')} id={0} urlImage={''} brand={''} memory={''} anInterface={''} price={0}/>
                    <MotherboardBlock title="Motherboard Model" onClick={() => handleBlockClick('')} id={0} urlImage={''} brand={''} volume={''} frequency={''} price={0}/>
                    <RAMBlock title="RAM Model" onClick={() => handleBlockClick('')} id={0} urlImage={''} brand={''} volume={''} frequency={''} price={0}/>
                    <SSDBlock title="SDD Model 4" onClick={() => handleBlockClick('')} id={0} urlImage={''} brand={''} memory={''} anInterface={''} maxReadingSpeed={''} maxRecordingSpeed={''} price={0}/>
                </div>
            </div>
            <div className='panel'>
                <p>Clicked hardwere: {clickedHardwere}</p>
            </div>
        </div>
    );
};

export default DatasetViewPage;