import {Container} from '../../components/container/container';
import { useAppSelector } from '../../hooks/use-app';
import { AssembliesSelectors } from '../../slices/assembliesSlice';
import { AssemblyCard } from '../../components/assembly-card/assembly-card';
import Header from '../../components/header/header';

import "./MyAssembliesPage.css"
export function MyAssembliesPage(){
  const assemblies = useAppSelector(AssembliesSelectors.assemblies);
  return(
    <>
      <Header/>
      <Container>
        <div className={'a12 xs12 s12 center'}>
          <h1 className='myAssemblies-text'>
            Мои сборки
          </h1>
        </div>
        <div className="skipX3"></div>
        <div className={'ao xs12 s12 center myAssembly'}>
          {assemblies.map((assembly) => (
            <AssemblyCard key={assembly.id} assembly={assembly}/>
          ))}
        </div>
      </Container>
    </>
  );
}
