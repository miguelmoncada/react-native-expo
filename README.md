# README

Please follow the setup instruction for React Native CLI with Linux and Android Enviroment.

* `https://reactnative.dev/docs/environment-setup`

## Things you may want to cover to start the project:

* Install Android Studio last version
* Install all nodejs dependencies
    - `npm install`
* Setup an account in Firebase
* Setup permissions for Android Emulator
    - `sudo apt install qemu-kvm`
    - `sudo chmod 777 -R /dev/kvm`

## To start the application:

* Open a new terminal an run:
    - `npx react-native start --reset-cache`
* Open a new terminal an run:
    - `npx react-native run-android`

## Important

* If you install a new node package in to proyect, please run a new build and restar react native server
    - `npm install react-native-package-example --save`
* Open a new terminal an run:
    - `npx react-native start --reset-cache`
* Open a new terminal an run:
    - `npx react-native run-android`

## Notes:

* If next error is present when running react native server:

    `Error: ENOSPC: System limit for number of file watchers reached, watch '/media/moncada/Data/Proyectos/react-native-expo/node_modules/date-fns/difference_in_calendar_weeks'
        at FSWatcher.start (internal/fs/watchers.js:169:26)
        at Object.watch (fs.js:1347:11)
        at NodeWatcher.watchdir (/media/moncada/Data/Proyectos/react-native-expo/node_modules/sane/src/node_watcher.js:159:22)
        at Walker.<anonymous> (/media/moncada/Data/Proyectos/react-native-expo/node_modules/sane/src/common.js:109:31)
        at Walker.emit (events.js:310:20)
        at /media/moncada/Data/Proyectos/react-native-expo/node_modules/walker/lib/walker.js:69:16
        at FSReqCallback.oncomplete (fs.js:155:23) {
      errno: -28,
      syscall: 'watch',
      code: 'ENOSPC',
      path: '/media/moncada/Data/Proyectos/react-native-expo/node_modules/date-fns/difference_in_calendar_weeks',
      filename: '/media/moncada/Data/Proyectos/react-native-expo/node_modules/date-fns/difference_in_calendar_weeks'
    }`

* Please try this:
    - `sudo gedit /etc/sysctl.conf`
* Add a line at the bottom
    - `fs.inotify.max_user_watches=524288`
* Then save and exit!
    - `sudo sysctl -p`



