# Aplicativo Século

**Configuração**

Android

- Tutorial: https://react-native.rocketseat.dev/android/linux
- Configurar JAVA_HOME e ANDROID_HOME
- npm install
- react-native run-android

IOS

- Tutorial: https://react-native.rocketseat.dev/ios/macos
- Instalar cocopods
- Dentro de /ios executar "pod install"
- Abrir o seculo.xcworkspace no xcode
- Executar o aplicativo pelo xcode

## Gerando APK Android

A chave para deploy na Google Play Store é (A chave está configurada na loja):

```
my-release-key.keystore
```

No diretório raiz da aplicação, execute o seguinte comando:

```
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res

```

Após os assets do projeto serem compilados, execute os seguintes comandos:

```
cd android
./gradlew assembleDebug
./gradlew assembleRelease
```

## Gerando IPA IOS

- Instalar os certificados disponiveis na pasta certificados_apple
- No xcode selecionar "Dispositivo genérico" no build
- Fazer o Archive em Produto/Archive
- Fazer upload do IPA logando no xcode