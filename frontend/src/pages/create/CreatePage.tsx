import {LinkButton} from "../../components/link-button/link-button";
import {Container} from "../../components/container/container";
import {SelectList} from "../../components/select-list/select-list";
// import {hdd, motherboards, processors, videoCards, RAMs, SSD} from "../../data/appointment-list";
import {Button} from "../../components/button/button";
import {useEffect, useState} from "react";
import {Assembly} from "../../types/assembly"
import Select from 'react-select';
//import { motherboards } from "../../data/appointment-list";

    export function CreatePage() {
        const initialFormData: Assembly = {
            id: "",
            cpu: "",
            gpu: "",
            ram: "",
            motherboard: "",
            hdd: ""
          };
        const [formData, setFormData] = useState<Assembly>(initialFormData);

        const handleFormSubmit = async () => {
            try {

              const response = await fetch("http://localhost:8081/assemblies", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              });
          
              if (response.ok) {
                const data = await response.json();
                // Обработка успешного ответа
              } else {
                // Обработка ошибки
                throw new Error("Ошибка HTTP: " + response.status);
              }
            } catch (error) {
              // Обработка сбоя запроса
              console.error("Ошибка при отправке запроса:", error);
            }
          };
         
          const handleInputChange = (fieldName: keyof Assembly) => (selectedOption: any) => {
            setFormData((prevData) => ({
              ...prevData,
              [fieldName]: selectedOption.label,
            }));
          };
  const [processors, setProcessors] = useState([]);
  const [videoCards, setVideoCards] = useState([]);
  const [RAMs, setRAMs] = useState([]);  
  const [HDDs, setHDDs] = useState([]);
  const [Motherboards, setMotherboards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cpuResponse = await fetch('http://localhost:8081/hardware/get-all-cpu');
        const cpuData = await cpuResponse.json();
        setProcessors(cpuData.map((item: { id: number, title: string }) => ({ value: item.id, label: item.title })));

        const gpuResponse = await fetch('http://localhost:8081/hardware/get-all-gpu');
        const gpuData = await gpuResponse.json();
        setVideoCards(gpuData.map((item: { id: number, title: string }) => ({ value: item.id, label: item.title })));
        const ramResponse = await fetch('http://localhost:8081/hardware/get-all-ram');
        const ramData = await ramResponse.json();
        // setRAMs(ramData.map((item: { id: number, title: string }) => ({ value: item.id, label: item.title })));
        setRAMs(gpuData.map((item: { id: number, title: string }) => ({ value: item.id, label: item.title })));
        const hddResponse = await fetch('http://localhost:8081/hardware/get-all-hdd');
        const hddData = await hddResponse.json();
        setHDDs(hddData.map((item: { id: number, title: string }) => ({ value: item.id, label: item.title })));
        const motherboardResponse = await fetch('http://localhost:8081/hardware/get-all-motherboard');
        const motherboardData = await motherboardResponse.json();
        setMotherboards(motherboardData.map((item: { id: number, title: string }) => ({ value: item.id, label: item.title })));

      } catch (error) {
        // Обработка ошибки, если не удалось получить данные
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);

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
        <div className={"a12 xs12 s12 center"}><h1>PC Update Helper</h1></div>
            <Container className={"assemble_page__container"}>
                <div className={"assemble_page__section a6 xs12 s12"}>
                    <h1>Процессор:</h1>
                    <Select options={processors} 
                    styles={selectStyles}
                    onChange={handleInputChange("cpu")}/>
                    <h1>Видеокарта:</h1>
                    {<Select options={videoCards} 
                    styles={selectStyles}
                    onChange={handleInputChange("gpu")}/> }
                    <h1>HDD:</h1>
                    {<Select options={HDDs}
                    styles={selectStyles}
                     onChange={handleInputChange("hdd")}/> }
                </div>
                <div className={"assemble_page__section a6 xs12 s12"}>
                    <h1>Материнская плата:</h1>
                    {<Select options={Motherboards}
                    styles={selectStyles}
                     onChange={handleInputChange("motherboard")}/> }
                    <h1>Оперативная память:</h1>
                    {<Select options={RAMs} 
                    styles={selectStyles}
                    onChange={handleInputChange("ram")}/> }
                </div>
            </Container>
            <div className={"isolated center"}>
                <Button onClick={handleFormSubmit}>Собрать</Button>
            </div>
            <div className={"isolated center"}>
                <LinkButton href={"/app/"}>На главную</LinkButton>
            </div>
        </>
    )
}