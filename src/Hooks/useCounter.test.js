import {test ,expect,describe} from "vitest";
import {act, renderHook} from "@testing-library/react";
import {useCounter} from "./useCounter.js";


describe("hooks test", () => {
    test('useCounter', ()=>{
        const{result}= renderHook(useCounter)
        expect(result.current.count).toBe(0)

    })
    test('useCounter', ()=>{
        const{result}= renderHook(useCounter)
        act(()=> result.current.inc())
        expect(result.current.count).toBe(1)

    })
})
