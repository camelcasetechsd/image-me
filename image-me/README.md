Install ionic and cordova
```
sudo npm install -g ionic@beta
sudo npm install -g cordova
sudo vi /home/mlabib/.bashrc
```
Add at the bottom of the file the following :
```
ANDROID_HOME=$HOME/Android/Sdk
PATH=$PATH:$ANDROID_HOME/tools
```
Start Ionic server for android platform
```
ionic platform add android
ionic start image-me-mobile/ --v2
ionic serve
```
