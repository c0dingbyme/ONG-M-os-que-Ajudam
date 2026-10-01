# Relatório de otimização das imagens

## Formatos utilizados

A imagem principal utiliza WebP como formato preferencial, por oferecer uma redução significativa de tamanho mantendo boa qualidade visual. O JPEG foi preservado como alternativa para navegadores que não consigam apresentar WebP.

## Resolução e viewport

Foram geradas duas resoluções: 360 × 240 px para ecrãs pequenos e 678 × 452 px para ecrãs maiores. O elemento `<picture>`, juntamente com `srcset` e `sizes`, permite que o navegador selecione o ficheiro mais adequado à largura disponível. Os atributos `width` e `height` mantêm a proporção e reservam o espaço antes do carregamento.

## Redução e impacto estimado

| Recurso carregado | Tamanho | Redução em relação ao JPEG original |
| --- | ---: | ---: |
| JPEG original, 678 px | 23.859 bytes | — |
| WebP, 678 px | 14.670 bytes | 38,51% |
| WebP, 360 px | 6.606 bytes | 72,31% |

Em ecrãs maiores, a página transfere aproximadamente 9 KB a menos. Em dispositivos móveis, a economia chega a cerca de 17 KB. Numa ligação limitada com velocidade efetiva próxima de 400 Kbit/s, isso representa uma redução aproximada de 0,18 a 0,35 segundo apenas na transferência da imagem. O resultado real varia conforme latência, cache, dispositivo e velocidade da rede.
