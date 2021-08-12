import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/store/reducers';

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypeSelector;
