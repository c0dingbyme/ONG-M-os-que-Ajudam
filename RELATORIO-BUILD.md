# Relatório da build de produção

## Ferramenta e configuração

Foi utilizado o Vite 8.3.1. O ficheiro `vite.config.js` define o diretório `dist`, caminhos relativos para publicação e minificação de JavaScript com Oxc e de CSS com Lightning CSS. O HTML é minificado pelo `html-minifier-terser`, que remove comentários e espaços desnecessários.

## Redução obtida

| Componente | Original | Produção | Redução |
| --- | ---: | ---: | ---: |
| HTML | 1.241 bytes | 867 bytes | 30,14% |
| CSS e JavaScript | 20.968 bytes | 12.783 bytes | 39,04% |
| **Total** | **22.209 bytes** | **13.650 bytes** | **38,54%** |

Os valores foram obtidos pelo comando `pnpm run verify`, que gera novamente a pasta `dist` antes da medição.

As imagens são avaliadas separadamente no ficheiro `RELATORIO-IMAGENS.md`, pois o navegador descarrega apenas uma das variantes disponíveis para cada viewport.

## Desafios e validação

O principal desafio foi garantir que a transformação dos ficheiros não alterasse os seletores, os identificadores HTML ou os eventos utilizados pelo JavaScript. Também foi necessário incluir o `script.js`, que não estava presente no ZIP original, e completar as páginas já referenciadas pela navegação.

Após a build, foram testados no navegador o menu, a navegação por hash, as mensagens de validação, o foco no primeiro campo inválido, o envio do formulário e o armazenamento dos cadastros no `localStorage`. A consola do navegador não apresentou erros.
