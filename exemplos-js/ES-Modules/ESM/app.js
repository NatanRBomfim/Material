import somar, { testarNome as testarNomeSoma } from "./modulejs/soma.js";
import {
  media,
  teste,
  IP,
  testarNome as testarNomeMedia,
} from "./modulejs/media.js";

console.log(somar(1, 2, 3, 4, 5));
console.log(media(1, 2, 3, 4, 5));

// fnInterna()

teste();
testarNomeMedia();
testarNomeSoma();
console.log("IP:", IP);