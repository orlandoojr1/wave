test:
	./gradlew test

build:
	./gradlew build

generate:
	./gradlew patchPluginXml

run:
	./gradlew runIde

verify:
	./gradlew runPluginVerifier

help:
	./gradlew -q :tasks --all

publish:
	$(MAKE) generate
	$(MAKE) test
	$(MAKE) verify
	./gradlew publishPlugin

clean:
	./gradlew clean