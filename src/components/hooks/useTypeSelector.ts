import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/index';

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypeSelector;
