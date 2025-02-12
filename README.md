![Banner do projeto Khazad-dûmp VSCode Theme ](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/Khazad-dump.png)

# Khazad-dûmp VSCode Theme

Um tema para o Visual Studio Code, inspirado e baseado no [Dracula Theme](https://draculatheme.com/).

[English Version](README_EN.md)

## Descrição

O **Khazad-dûmp** oferece uma paleta de cores equilibrada, otimizada para leitura em ambientes com pouca luz. O foco está na legibilidade e contraste, proporcionando uma experiência confortável e agradável para longas sessões de uso.

## Índice

- [Desenvolvimento](#desenvolvimento)
- [Como usar](#como-usar)
- [Licença](#licença)
- [Autores](#autores)

## Desenvolvimento

### Pré-requisitos

Para desenvolvimento, você precisará de:

- Docker;
- O pacote make.

### Instruções de Instalação

1. Clone o repositório do tema:

```bash
git clone https://github.com/seu-usuario/khazad-dump-theme.git && \
cd khazad-dump-theme
```

2. Construa o container Docker:

```bash
make build
```

3. Acesse o shell dentro do container:

```bash
make sh
```

> Dentro do container, os arquivos de tema estão localizados no diretório src.

4. Gere os arquivos JSON do tema:

```bash
npm run build
```

> Os arquivos serão gerados no diretório **theme**.

## Como usar

### VSCode

Abra o gerenciador de extensões com o atalho:

```bash
CTRL+SHFIT+X # windows ou Linux

Ou

CMD+SHIFT+X # mac
```

Pesquise por **khazad-dump** e clique em **Instalar**.

### Terminal

```bash
ext install DiegoBrocanelli.khazad-dump
```

# Configurações

## Ícones

Para definir os ícones, pressione `Cmd+Shift+P` (macOS) ou `Ctrl+Shift+P` (Windows/Linux), digite `File Icon Theme` e selecione a opção `Khazad dûmp icons`.

## Fonts

Instale as fontes que estão em `fonts`. Exemplo `Zed Plex Mono`.

## Opções

### Arkenstone

Pedra preciosa lendária, resplandecente e de imenso valor, símbolo de poder e liderança

![Imagem da opção Arkenstone do tema](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-arkenstone-vscode.png)

### Dûmûr

Inspirado em "dûm" de Khazad-dûm e "ûr", que remete à escuridão, evocando um tom noturno e sombrio.

![Imagem da opção Dûmûr do tema](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-dumur-vscode.png)

### Ithildin

Lua prateada usada pelos anãos para inscrições secretas que brilham à luz da lua.

![Imagem da opção Ithildin do tema](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-ithildin-vscode.png)

### Khuzd

Significa "anão" em Khuzdul, representando a base do tema.

![Imagem da opção Khuzd do tema](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-khuzd-vscode.png)

### Mithril

Metal lendário, leve e resistente, altamente valorizado pelos anãos por sua beleza e durabilidade excepcionais.

![Imagem da opção mithril do tema](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-mithril-vscode.png)

### Narag

Significa "pedra" em Khuzdul, remetendo à solidez e suavidade da rocha trabalhada pelos anãos.

![Imagem da opção Narag do tema](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-narag-vscode.png)

## Licença

Este projeto está licenciado sob a licença [MIT](https://github.com/Diego-Brocanelli/khazad-dump-theme/blob/main/LICENSE). Consulte o arquivo LICENSE para mais informações.

## Autores

Diego Brocanelli <diegod2@msn.com>