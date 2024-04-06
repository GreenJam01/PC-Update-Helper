import {LinkButton} from '../../components/link-button/link-button';
import {Container} from '../../components/container/container';
import {SelectList} from '../../components/select-list/select-list';
// import {hdd, motherboards, processors, videoCards, RAMs, SSD} from "../../data/appointment-list";
import {Button} from '../../components/button/button';
import {useEffect, useRef, useState} from 'react';
import {Assembly} from '../../types/assembly';
import Select, { Options, SelectInstance } from 'react-select';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { createAssembly } from '../../store/api-actions';
import { CPU, GPU, HDD, Motherboard, RAM } from '../../types/hardwares';
import { onChange } from 'react-toastify/dist/core/store';
//import { motherboards } from "../../data/appointment-list";

export function CreatePage() {
  const dispatch = useAppDispatch();
  const cpuRef = useRef<SelectInstance<CPU> | null>(null);
  const gpuRef = useRef<SelectInstance<GPU> | null>(null);
  const ramRef = useRef<SelectInstance<RAM> | null>(null);
  const hddRef = useRef<SelectInstance<HDD> | null>(null);
  const motherboardRef = useRef<SelectInstance<Motherboard> | null>(null);

  

  const handleFormSubmit = () => {
    if (cpuRef.current!==null && gpuRef.current!==null && ramRef.current !== null&&
      hddRef.current!==null && motherboardRef.current!==null
    ) {
      console.log(cpuRef.current.getValue().at(0).value)
      const cpu = cpuRef.current.getValue().at(0).value;
      const gpu = gpuRef.current.getValue().at(0).value;
      const ram = ramRef.current.getValue().at(0).value;
      const hdd = hddRef.current.getValue().at(0).value;
      const motherboard = motherboardRef.current.getValue().at(0).value;
      dispatch(createAssembly(
        {cpu: cpu, 
        ram: ram,
        gpu: gpu, 
        hdd: hdd, 
        motherboard: motherboard}));
      };
    }
  

  const cpus = useAppSelector(hardwaresSelectors.cpu);
  const gpus = useAppSelector(hardwaresSelectors.gpu);
  const rams = useAppSelector(hardwaresSelectors.ram);
  const motherboards = useAppSelector(hardwaresSelectors.motherboard);
  const hdds = useAppSelector(hardwaresSelectors.hdd);

  const selectStyles = {
    option: (provided : any, state:any) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? 'blue' : 'white'
    }),
    control: (provided:any) => ({
      ...provided,
      backgroundColor: 'white'
    })
  };
  return(
    <>
      <div className={'a12 xs12 s12 center'}><h1>PC Update Helper</h1></div>
      <Container className={'assemble_page__container'}>
        <div className={'assemble_page__section a6 xs12 s12'}>
          <h1>Процессор:</h1>
          <Select options={cpus.map((cpu) => ({ value: cpu, label: cpu.title }))}
          ref={cpuRef}
            
            styles={selectStyles}
          />
          <h1>Видеокарта:</h1>
          {<Select options={gpus.map((gpu)=> ({value:gpu, label:gpu.title}))}
          ref={gpuRef}
            styles={selectStyles}
          /> }
          <h1>HDD:</h1>
          {<Select options={hdds.map((hdd)=> ({value:hdd, label:hdd.title}))}
          ref={hddRef}
            styles={selectStyles}
          /> }
        </div>
        <div className={'assemble_page__section a6 xs12 s12'}>
          <h1>Материнская плата:</h1>
          {<Select options={motherboards.map((motherboard)=> ({value: motherboard, label: motherboard.title}))}
            styles={selectStyles}
            ref={motherboardRef}
          /> }
          <h1>Оперативная память:</h1>
          {<Select options={rams.map((ram) =>({value:ram, label: ram.title}))}
            styles={selectStyles}
            ref={ramRef}
          /> }
        </div>
      </Container>
      <div className={'isolated center'}>
        <Button onClick={handleFormSubmit}>Собрать</Button>
      </div>
      <div className={'isolated center'}>
        <LinkButton href={'/app/'}>На главную</LinkButton>
      </div>
    </>
  );
}
