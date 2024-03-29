import {LinkButton} from "../../components/link-button/link-button";
import {Container} from "../../components/container/container";
import {useEffect, useState} from "react";
import { Button } from "../../components/button/button";
import { Assembly } from "../../types/assembly_dto";


export function MyAssembliesPage(){
    const [assemblies, setAssemblies] = useState<Assembly[]>([]);

  useEffect(() => {
    fetch('http://localhost:8081/assemblies')
      .then(response => response.json())
      .then(data => setAssemblies(data))
      .catch(error => console.error('Ошибка при получении данных:', error));
  }, []);

  const handleDelete = (id:string) => {
    fetch(`http://localhost:8081/assemblies/${id}`, { method: 'DELETE' })
      .then(() => setAssemblies(assemblies.filter(assembly => assembly.id !== id)))
      .catch(error => console.error('Ошибка при удалении данных:', error));
  };
    return(
        <>
            <Container>
                <div className={"a12 xs12 s12 center"}><h1>PC Update Helper</h1></div>
                <div className="skipX3"></div>
                <div className={"ao xs12 s12 center myAssembly"}>
                  {assemblies.map(assembly => (
                    <div className={"someAssembly"}>
                      <p>Материнская плата: {assembly.motherboard}</p>
                      <p>Процессор: {assembly.cpu}</p>
                      <p>Оперативная память: {assembly.ram}</p>
                      <p>Видеокарта: {assembly.gpu}</p>
                      <p>HDD: {assembly.hdd}</p>
                      <Button onClick={() => handleDelete(assembly.id)}>Удалить</Button>
                    </div>
                  ))}
                </div>
            </Container>
            <div className={"isolated center"}>
                <LinkButton href={"/app/"}>На главную</LinkButton>
            </div>
        </>
    )
}