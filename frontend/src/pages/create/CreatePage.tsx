import {LinkButton} from "../../components/link-button/link-button";
import {Container} from "../../components/container/container";
import {SelectList} from "../../components/select-list/select-list";
import {hdd, motherboards, processors, videoCards, RAMs, SSD} from "../../data/appointment-list";
import {Button} from "../../components/button/button";
import {useEffect, useState} from "react";
import {Assembly} from "C:/Users/KChauenov/PC-Update-Helper/frontend/src/data/assembly_dto"

    export function CreatePage() {
        const initialFormData: Assembly = {
            cpu: "lj",
            gpu: "jl",
            ram: "ewd",
            motherboard: "rqwe",
            hdd: "rqew"
          };
        const [formData, setFormData] = useState<Assembly>(initialFormData);

        const handleFormSubmit = async () => {
            try {
              const response = await fetch("http://localhost:8080/assemblies", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
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
        
          const handleInputChange = (field: any, value: any) => {
            setFormData((prevData) => ({
              ...prevData,
              [field]: value
            }));
          };
    return(
        <>
        <div className={"a12 xs12 s12 center"}><h1>PC Update Helper</h1></div>
            <Container className={"assemble_page__container"}>
                <div className={"assemble_page__section a6 xs12 s12"}>
                    <h1>Процессор:</h1>
                    <SelectList  options={processors} />
                    <h1>Видеокарта:</h1>
                    <SelectList options={videoCards}/>
                    <h1>HDD:</h1>
                    <SelectList options={hdd}/>
                </div>
                <div className={"assemble_page__section a6 xs12 s12"}>
                    <h1>Материнская плата:</h1>
                    <SelectList options={motherboards}/>
                    <h1>Оперативная память:</h1>
                    <SelectList options={RAMs}/>
                    <h1>SSD:</h1>
                    <SelectList options={SSD}/>
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