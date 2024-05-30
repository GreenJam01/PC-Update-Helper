/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {LinkButton} from '../../components/link-button/link-button';
import {Container} from '../../components/container/container';
import {Button} from '../../components/button/button';
import {useRef} from 'react';
import Select, { SelectInstance } from 'react-select';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { createAssembly } from '../../store/api-actions';
import { CPU, GPU, HDD, HardwareType, Motherboard, RAM } from '../../types/hardwares';
import { AppRoutes } from '../../constants';
import Header from '../../components/header/header';

import './CreatePage.css';
import './CreatePageMedia.css';

export function CreatePage() {
  const dispatch = useAppDispatch();
  const cpuRef = useRef<SelectInstance<CPU> | null>(null);
  const gpuRef = useRef<SelectInstance<GPU> | null>(null);
  const ramRef = useRef<SelectInstance<RAM> | null>(null);
  const hddRef = useRef<SelectInstance<HDD> | null>(null);
  const motherboardRef = useRef<SelectInstance<Motherboard> | null>(null);


  const handleFormSubmit = () => {
    if (cpuRef.current !== null && gpuRef.current !== null && ramRef.current !== null &&
      hddRef.current !== null && motherboardRef.current !== null
    ) {
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
    }
  };


  const cpus = useAppSelector(hardwaresSelectors.getCpu);
  const gpus = useAppSelector(hardwaresSelectors.gpu);
  const rams = useAppSelector(hardwaresSelectors.ram);
  const motherboards = useAppSelector(hardwaresSelectors.motherboard);
  const hdds = useAppSelector(hardwaresSelectors.hdd);
  const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  const selectStyles = {
    option: (provided : any, state:any) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? 'blue' : state.data.value.favorite ? 'yellow' : 'white'
    }),
    control: (provided:any) => ({
      ...provided,
      backgroundColor: 'white'
    }),
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
    singleValue: (styles, state) => ({ ...styles, ...dot(state.data.value.favorite ? 'yellow' : 'black') }),

  };
  return(
    <>
      <Header/>
      <div className={'a12 xs12 s12 center assemble-create-text'}><h1>Собрать сборку</h1></div>
      <Container className={'assemble_page__container'}>
        <div className={'assemble_page__section a6 xs12 s12'}>
          <h1 className='assemble_component_text'>Процессор:</h1>
          {cpus &&
            <Select
              options={cpus.map((cpu) => ({ value: cpu, label: `${cpu.title} -- ${cpu.price} рублей` }))}
              ref={cpuRef}
              styles={selectStyles}
            />}

          <h1 className='assemble_component_text'>Видеокарта:</h1>
          {gpus &&
            <Select
              options={gpus.map((gpu) => ({ value: gpu, label: `${gpu.title} -- ${gpu.price} рублей` }))}
              ref={gpuRef}
              styles={selectStyles}
            />}

          <h1 className='assemble_component_text'>HDD:</h1>
          {hdds &&
            <Select
              options={hdds.map((hdd) => ({ value: hdd, label: `${hdd.title} -- ${hdd.price} рублей` }))}
              ref={hddRef}
              styles={selectStyles}
            />}
        </div>

        <div className={'assemble_page__section a6 xs12 s12'}>
          <h1 className='assemble_component_text'>Материнская плата:</h1>
          {motherboards &&
    <Select
      options={motherboards.map((motherboard) => ({ value: motherboard, label: `${motherboard.title} -- ${motherboard.price} рублей` }))}
      styles={selectStyles}
      ref={motherboardRef}
    />}
          <h1 className='assemble_component_text'>Оперативная память:</h1>
          {rams &&
    <Select
      options={rams.map((ram) => ({ value: ram, label: `${ram.title} -- ${ram.price} рублей` }))}
      styles={selectStyles}
      ref={ramRef}
    />}
        </div>
        <div>
          <div className={'isolated center'}>
            <Button onClick={handleFormSubmit}>Собрать</Button>
          </div>
          <div className={'isolated center'}>
            <LinkButton href={AppRoutes.Main}>На главную</LinkButton>
          </div>
        </div>
      </Container>
    </>
  );
}
