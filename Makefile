build:
	docker build -t khazad-dump-theme .

sh:
	docker run --privileged --rm -it -v .:/app khazad-dump-theme bash
