import { Sorts } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { hardwaresActions, hardwaresSelectors } from '../../slices/hardwareSlice';
import SelectMui from '../select-mui/select-mui';
export const SortForm = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(hardwaresSelectors.sort);
  return (
    <div className="sort-form">
      <SelectMui label='Сортировка' options={Object.values(Sorts)} setValue={(e) => dispatch(hardwaresActions.setHardwareSorting(e))}
        value={sort}
      />
    </div>
  );
};

