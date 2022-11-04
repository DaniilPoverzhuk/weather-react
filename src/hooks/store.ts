import { RootState } from './../Store/store';
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { AppDispatch } from "../Store/store"

export const useCustomDispatch = () => {
  return useDispatch<AppDispatch>();
}
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;