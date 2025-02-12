![Khazad-dûmp VSCode Theme project banner](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/Khazad-dump.png)

# Khazad-dûmp VSCode Theme

A Visual Studio Code theme inspired and based on the Dracula Theme.

[Versão Português](README.md)

## Description

**Khazad-dûmp** offers a balanced color palette designed for readability in low-light environments. It focuses on legibility and contrast, ensuring a comfortable and enjoyable experience for extended use.

## Contents

- [Development](#development)
- [How to use](#how-to-use)
- [Contribution](#contribution)
- [License](#license)
- [Authors](#authors)

## Development

### Prerequisites

To develop the theme, you will need:

- Docker;
- The make package.

### Installation Instructions

1. Clone the theme repository:

```bash
git clone https://github.com/seu-usuario/khazad-dump-theme.git && \
cd khazad-dump-theme
```

2. Build the Docker container:

```bash
make build
```

3. Access the shell inside the container:

```bash
make sh
```

> Inside the container, the theme files are located in the **src** directory.

4. To generate the theme JSON files, run the following command:

```bash
npm run build
```

> OThe files will be generated in the **theme** directory.

## How to use

### VSCode

Open the extensions manager using the shortcut:

```bash
CTRL+SHFIT+X # windows or Linux

Ou

CMD+SHIFT+X # mac
```

Search for **khazad-dump** and click **Install**.

### Terminal

```bash
ext install DiegoBrocanelli.khazad-dump
```

# Settings

## Icons

To set the icons, press `Cmd+Shift+P` (on macOS) or `Ctrl+Shift+P` (on Windows/Linux), type `File Icon Theme`, and choose the Khazad dûmp icons option.

## Fonts

Install the `fonts` located in the fonts directory. Example: `Zed Plex Mono`.

## Theme Options

### Arkenstone

A legendary, radiant, and immensely valuable gemstone, symbolizing power and leadership.

![Image of the theme's Arkenstone option](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-arkenstone-vscode.png)

### Dûmûr

Inspired by "dûm" from Khazad-dûm and "ûr," which refers to darkness, evoking a night and somber tone.

![Image of the theme's Dûmûr option](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-dumur-vscode.png)

### Ithildin

Silver moon used by the dwarves for secret inscriptions that glow in the moonlight.

![Image of the theme's Ithildin option](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-ithildin-vscode.png)

### Khuzd

Means "dwarf" in Khuzdul, representing the foundation of the theme.

![Image of the theme's Khuzd option](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-khuzd-vscode.png)

### Mithril

Legendary metal, lightweight and durable, highly valued by dwarves for its exceptional beauty and resilience.

![Image of the theme's Mithril option](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-mithril-vscode.png)

### Narag

Means "stone" in Khuzdul, referring to the solidity and smoothness of the rock shaped by the dwarves.

![Image of the theme's Narag option](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-narag-vscode.png)

## License

This project is licensed under the [MIT](/LICENSE) License. See the LICENSE file for more details.

## Authors

Diego Brocanelli <diegod2@msn.com>