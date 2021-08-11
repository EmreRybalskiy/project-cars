import { RootState } from '../../store/reducers/index'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector