import './star.css'
export function Star({isActive} : {isActive: Boolean}){
  return(
	<div className={`ussr-star ${isActive && 'ussr-star__active'}`}>
	</div>
  );
}
