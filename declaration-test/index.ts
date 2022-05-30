// myPackage.d.ts가 있는 경우
// import { init, exit } from "myPackage";

// js파일 import할 경우
/**
 * myPackage.d.ts file이 없을 경우
 * "allowJs": true, 설정을 해주고
 * js 파일에서 // @ts-check 를 넣어주고
 * JSDoc을 작성한다.
 */
import { init, exit } from "./myPackage";

// init();