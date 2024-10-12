![Banner do projeto Khazad-dûmp VSCode Theme ](https://github.com/Diego-Brocanelli/khazad-dump-theme/blob/main/images/Khazad-dump.png)

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

## Opções

### Default

![Imagem da opção padrão do tema](https://github.com/Diego-Brocanelli/khazad-dump-theme/blob/main/images/khazad-dump-vscode.png)

### Midnight

![Imagem da opção midnight do tema](https://github.com/Diego-Brocanelli/khazad-dump-theme/blob/main/images/khazad-dump-midnight-vscode.png)

### Soft

![Imagem da opção soft do tema](https://github.com/Diego-Brocanelli/khazad-dump-theme/blob/main/images/khazad-dump-soft-vscode.png)

## Licença

Este projeto está licenciado sob a licença [MIT](https://github.com/Diego-Brocanelli/khazad-dump-theme/blob/main/LICENSE). Consulte o arquivo LICENSE para mais informações.

## Autores

Diego Brocanelli <diegod2@msn.com>