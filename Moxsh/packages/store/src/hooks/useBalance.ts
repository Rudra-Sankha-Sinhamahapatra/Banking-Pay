import { useRecoilValue } from "recoil";
import { balanceAtom } from "../atoms/balance";

export const useBalance=():any=>{
    const value=useRecoilValue(balanceAtom);
    return value;
}