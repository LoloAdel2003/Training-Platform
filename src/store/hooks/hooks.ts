import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../index";

// بدل ما نكتب useDispatch<AppDispatch>() كل مرة
export const useAppDispatch = () => useDispatch<AppDispatch>();

// بدل ما نكتب useSelector((state: RootState) => ...)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
