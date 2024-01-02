import {LinkButton} from "../../components/link-button/link-button";
import {Container} from "../../components/container/container";
import {useEffect, useState} from "react";


export function MyAssembliesPage(){
    const [assemblies, setAssemblies] = useState<Assembly[]>([]);
type Assembly = {
    id: number;
    motherboard: string | null;
    cpu: string | null;
    ram: string | null;
    gpu: string | null;
    hdd: string | null;
  };

  useEffect(() => {
    fetch('http://localhost:8080/assemblies')
      .then(response => response.json())
      .then(data => setAssemblies(data))
      .catch(error => console.error('Ошибка при получении данных:', error));
  }, []);

  const handleDelete = (id : number) => {
    fetch(`http://localhost:8080/assemblies/${id}`, { method: 'DELETE' })
      .then(() => setAssemblies(assemblies.filter(assembly => assembly.id !== id)))
      .catch(error => console.error('Ошибка при удалении данных:', error));
  };
    return(
        <>
            <Container>
                <div className={"a12 xs12 s12 center"}><h1>PC Update Helper</h1></div>
                <div className={"a6 xs12 s12 center"}>
                <ul>
      {assemblies.map(assembly => (
        <li >
          <p>Материнская плата: {assembly.motherboard}</p>
          <p>Процессор: {assembly.cpu}</p>
          <p>Оперативная память: {assembly.ram}</p>
          <p>Видеокарта: {assembly.gpu}</p>
          <p>HDD: {assembly.hdd}</p>
          <button onClick={() => handleDelete(assembly.id)}>Удалить</button>
        </li>
      ))}
    </ul>
                </div>
            </Container>
            <div className={"isolated center"}>
                <LinkButton href={"/app/"}>На главную</LinkButton>
            </div>
        </>
    )
}