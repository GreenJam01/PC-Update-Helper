import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Sorts } from '../../constants';
import { useAppDispatch } from '../../hooks/use-app';
import { hardwaresActions } from '../../slices/hardwareSlice';
import { Sort } from '../../types/sort';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import FormControl from '@mui/material/FormControl/FormControl';

export const SortForm = () => {
  const dispatch = useAppDispatch();
  //   const sort = useAppSelector(hardwaresSelectors.sort);
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-controlled-open-select-label">Сортировка</InputLabel>
      <Select onChange={(e) => {
        dispatch(hardwaresActions.setHardwareSorting(e.target.value as Sort));
      }}
      >
        {Object.values(Sorts).map((i) => (
          <MenuItem key={i.name} value ={i} >
            {i.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

