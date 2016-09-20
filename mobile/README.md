Install ionic and cordova
```
npm install -g ionic@beta
npm install -g cordova
sudo vi /home/mlabib/.bashrc
```
Add at the bottom of the file the following :
```
ANDROID_HOME=$HOME/Android/Sdk
PATH=$PATH:$ANDROID_HOME/tools
```
Needed Cordova Plugins
```
npm install ng2-cordova-oauth --save
ionic plugin add cordova-plugin-inappbrowser
````
Start Ionic server for android platform
```
ionic platform add android
ionic start image-me-mobile/ --v2
ionic serve
```
