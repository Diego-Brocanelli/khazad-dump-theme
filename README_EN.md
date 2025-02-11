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

## Theme Options

### Default

![Image of the theme's default option](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-vscode.png)

### Midnight

![Image of the theme's midnight option](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-midnight-vscode.png)

### Mithril

![Image of the theme's mithril option](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-mithril-vscode.png)

### Soft

![Image of the theme's soft option](https://raw.githubusercontent.com/Diego-Brocanelli/khazad-dump-theme/refs/heads/main/images/khazad-dump-soft-vscode.png)

## License

This project is licensed under the [MIT](/LICENSE) License. See the LICENSE file for more details.

## Authors

Diego Brocanelli <diegod2@msn.com>