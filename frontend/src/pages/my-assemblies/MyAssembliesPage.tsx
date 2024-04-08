import {LinkButton} from '../../components/link-button/link-button';
import {Container} from '../../components/container/container';
import { Button } from '../../components/button/button';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { AssembliesSelectors } from '../../slices/assembliesSlice';
import { deleteAssembly } from '../../store/api-actions';


export function MyAssembliesPage(){
  const assemblies = useAppSelector(AssembliesSelectors.assemblies);
  const dispatch = useAppDispatch();
  return(
    <>
      <Container>
        <div className={'a12 xs12 s12 center'}><h1>PC Update Helper</h1></div>
        <div className="skipX3"></div>
        <div className={'ao xs12 s12 center myAssembly'}>
          {assemblies.map((assembly) => (
            <div className={'someAssembly'} key={assembly.id}>
              <p>Материнская плата: {assembly.motherboard?.title}</p>
              <p>Процессор: {assembly.cpu?.title}</p>
              <p>Оперативная память: {assembly.ram?.title}</p>
              <p>Видеокарта: {assembly.gpu?.title}</p>
              <p>HDD: {assembly.hdd?.title}</p>
              <Button onClick={() => {
                dispatch(deleteAssembly(assembly));
              }}
              >
                Удалить
              </Button>
            </div>
          ))}
        </div>
      </Container>
      <div className={'isolated center'}>
        <LinkButton href={'/app/'}>На главную</LinkButton>
      </div>
    </>
  );
}
