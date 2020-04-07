module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: author, bugs, dependencies, build, description, devDependencies, license, main, name, private, productName, repository, scripts, version, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"author\\\":\\\"Muhammad Ubaid Raza <mubaidr@gmail.com>\\\",\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/mubaidr/vue-electron-template/issues\\\"},\\\"dependencies\\\":{\\\"bulma-pro\\\":\\\"^0.1.8\\\",\\\"face-api.js\\\":\\\"^0.22.2\\\",\\\"material-design-icons\\\":\\\"^3.0.1\\\",\\\"ml5\\\":\\\"^0.5.0\\\",\\\"npm\\\":\\\"^6.14.4\\\",\\\"vue\\\":\\\"^2.6.11\\\",\\\"vue-electron\\\":\\\"^1.0.6\\\",\\\"vue-router\\\":\\\"^3.1.6\\\",\\\"vuex\\\":\\\"^3.1.3\\\"},\\\"build\\\":{\\\"productName\\\":\\\"SimHat\\\",\\\"appId\\\":\\\"com.rkapps.simhat\\\",\\\"directories\\\":{\\\"output\\\":\\\"build\\\"},\\\"files\\\":[\\\"dist/electron/**/*\\\"],\\\"dmg\\\":{\\\"contents\\\":[{\\\"x\\\":410,\\\"y\\\":150,\\\"type\\\":\\\"link\\\",\\\"path\\\":\\\"/Applications\\\"},{\\\"x\\\":130,\\\"y\\\":150,\\\"type\\\":\\\"file\\\"}],\\\"sign\\\":false},\\\"mac\\\":{\\\"target\\\":[\\\"dmg\\\",\\\"zip\\\"],\\\"icon\\\":\\\"static/icons/icon.icns\\\",\\\"hardenedRuntime\\\":false,\\\"entitlements\\\":\\\"entitlements.mac.plist\\\",\\\"extendInfo\\\":{\\\"NSCameraUsageDescription\\\":\\\"This app requires camera access to record video.\\\"}},\\\"win\\\":{\\\"icon\\\":\\\"static/icons/icon.ico\\\",\\\"verifyUpdateCodeSignature\\\":false},\\\"linux\\\":{\\\"icon\\\":\\\"static/icons/icon.png\\\"}},\\\"description\\\":\\\"An electron-vue project\\\",\\\"devDependencies\\\":{\\\"@babel/core\\\":\\\"^7.9.0\\\",\\\"@babel/plugin-proposal-class-properties\\\":\\\"^7.8.3\\\",\\\"@babel/plugin-proposal-object-rest-spread\\\":\\\"^7.9.0\\\",\\\"@babel/preset-env\\\":\\\"^7.9.0\\\",\\\"@babel/preset-typescript\\\":\\\"^7.9.0\\\",\\\"@typescript-eslint/eslint-plugin\\\":\\\"^2.25.0\\\",\\\"@typescript-eslint/parser\\\":\\\"^2.25.0\\\",\\\"babel-eslint\\\":\\\"^10.1.0\\\",\\\"babel-loader\\\":\\\"^8.1.0\\\",\\\"chalk\\\":\\\"^3.0.0\\\",\\\"copy-webpack-plugin\\\":\\\"^5.1.1\\\",\\\"css-loader\\\":\\\"^3.4.2\\\",\\\"electron\\\":\\\"^8.2.0\\\",\\\"electron-builder\\\":\\\"^22.4.1\\\",\\\"electron-debug\\\":\\\"^3.0.1\\\",\\\"electron-rebuild\\\":\\\"^1.10.1\\\",\\\"eslint\\\":\\\"^6.8.0\\\",\\\"eslint-config-prettier\\\":\\\"^6.10.1\\\",\\\"eslint-plugin-prettier\\\":\\\"^3.1.2\\\",\\\"eslint-plugin-vue\\\":\\\"^6.2.2\\\",\\\"fast-glob\\\":\\\"^3.2.2\\\",\\\"file-loader\\\":\\\"^6.0.0\\\",\\\"html-webpack-plugin\\\":\\\"^4.0.3\\\",\\\"mini-css-extract-plugin\\\":\\\"^0.9.0\\\",\\\"node-loader\\\":\\\"^0.6.0\\\",\\\"npm-run-all\\\":\\\"^4.1.5\\\",\\\"prettier\\\":\\\"^2.0.2\\\",\\\"sass\\\":\\\"^1.26.3\\\",\\\"sass-loader\\\":\\\"^8.0.2\\\",\\\"style-loader\\\":\\\"^1.1.3\\\",\\\"tree-kill\\\":\\\"1.2.2\\\",\\\"typescript\\\":\\\"^3.8.3\\\",\\\"url-loader\\\":\\\"^4.0.0\\\",\\\"vue-devtools\\\":\\\"^5.1.3\\\",\\\"vue-eslint-parser\\\":\\\"^7.0.0\\\",\\\"vue-loader\\\":\\\"^15.9.1\\\",\\\"vue-style-loader\\\":\\\"^4.1.2\\\",\\\"vue-template-compiler\\\":\\\"^2.6.11\\\",\\\"webpack\\\":\\\"^4.42.1\\\",\\\"webpack-cli\\\":\\\"^3.3.11\\\",\\\"webpack-dev-server\\\":\\\"^3.10.3\\\"},\\\"license\\\":\\\"MIT\\\",\\\"main\\\":\\\"./dist/main.js\\\",\\\"name\\\":\\\"vue-electron-template\\\",\\\"private\\\":true,\\\"productName\\\":\\\"SimHat\\\",\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"git+https://github.com/mubaidr/vue-electron-template.git\\\"},\\\"scripts\\\":{\\\"build\\\":\\\"run-s rebuild:electron pack build-release\\\",\\\"build-release\\\":\\\"node _scripts/build.js\\\",\\\"debug\\\":\\\"run-s rebuild:electron debug-runner\\\",\\\"debug-runner\\\":\\\"node _scripts/dev-runner.js --remote-debug\\\",\\\"dev\\\":\\\"run-s rebuild:electron dev-runner\\\",\\\"dev-runner\\\":\\\"node _scripts/dev-runner.js\\\",\\\"electron-builder-install\\\":\\\"electron-builder install-app-deps\\\",\\\"electron-rebuild\\\":\\\"electron-rebuild\\\",\\\"jest\\\":\\\"jest --passWithNoTests\\\",\\\"jest:coverage\\\":\\\"jest --collect-coverage\\\",\\\"jest:watch\\\":\\\"jest --watch\\\",\\\"lint\\\":\\\"eslint --fix --ext .js,.ts,.vue ./\\\",\\\"pack\\\":\\\"run-p pack:main pack:renderer pack:web pack:workers\\\",\\\"pack:main\\\":\\\"webpack --mode=production --env.NODE_ENV=production --hide-modules --config _scripts/webpack.main.config.js\\\",\\\"pack:renderer\\\":\\\"webpack --mode=production --env.NODE_ENV=production --hide-modules --config _scripts/webpack.renderer.config.js\\\",\\\"pack:web\\\":\\\"webpack --mode=production --env.NODE_ENV=production --hide-modules --config _scripts/webpack.web.config.js\\\",\\\"pack:workers\\\":\\\"webpack --mode=production --env.NODE_ENV=production --hide-modules --config _scripts/webpack.workers.config.js\\\",\\\"postinstall\\\":\\\"electron-rebuild\\\",\\\"prettier\\\":\\\"prettier --write \\\\\\\"{src,_scripts}/**/*.{js,ts,vue}\\\\\\\"\\\",\\\"rebuild:electron\\\":\\\"run-s electron-builder-install electron-rebuild\\\",\\\"rebuild:node\\\":\\\"npm rebuild\\\",\\\"release\\\":\\\"run-s test build\\\",\\\"test\\\":\\\"run-s rebuild:node pack:workers jest\\\",\\\"test:watch\\\":\\\"run-s rebuild:node pack:workers jest:watch\\\"},\\\"version\\\":\\\"0.0.1\\\"}\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlLmpzb24uanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ \"./package.json\", 1);\n\n // set app name\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].name = _package_json__WEBPACK_IMPORTED_MODULE_1__[\"productName\"]; // to hide deprecation message\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].allowRendererProcessReuse = true; // disable electron warning\n\nprocess.env.ELECTRON_DISABLE_SECURITY_WARNINGS = false;\nconst gotTheLock = electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].requestSingleInstanceLock();\nconst isDev = \"development\" === 'development';\nconst isDebug = process.argv.includes('--debug');\nlet mainWindow; // only allow single instance of application\n\nif (!isDev) {\n  if (gotTheLock) {\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('second-instance', () => {\n      // Someone tried to run a second instance, we should focus our window.\n      if (mainWindow && mainWindow.isMinimized()) {\n        mainWindow.restore();\n      }\n\n      mainWindow.focus();\n    });\n  } else {\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit();\n    process.exit(0);\n  }\n} else {\n  // process.env.ELECTRON_ENABLE_LOGGING = true\n  __webpack_require__(/*! electron-debug */ \"electron-debug\")({\n    showDevTools: false\n  });\n}\n\nconst checkMacPermission = async () => {\n  try {\n    if (process.platform !== 'darwin') {\n      return true;\n    }\n\n    const cameraStatus = await electron__WEBPACK_IMPORTED_MODULE_0__[\"systemPreferences\"].getMediaAccessStatus('camera');\n    console.log('Current camera access status:', cameraStatus);\n\n    if (cameraStatus === 'not-determined') {\n      const cameraSuccess = await electron__WEBPACK_IMPORTED_MODULE_0__[\"systemPreferences\"].askForMediaAccess('camera');\n      console.log('Result of camera access:', cameraSuccess.valueOf() ? 'granted' : 'denied');\n      return cameraSuccess.valueOf();\n    }\n\n    return true;\n  } catch (error) {\n    console.log('Could not get permission:', error.message);\n  }\n\n  return false;\n};\n\nasync function installDevTools() {\n  try {\n    /* eslint-disable */\n    __webpack_require__(/*! vue-devtools */ \"vue-devtools\").install();\n    /* eslint-enable */\n\n  } catch (err) {\n    console.log(err);\n  }\n}\n\nfunction createWindow() {\n  /**\r\n   * Initial window options\r\n   */\n  checkMacPermission();\n  mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"]({\n    backgroundColor: '#fff',\n    width: 300,\n    height: 300,\n    minWidth: 0,\n    minHeight: 0,\n    // useContentSize: true,\n    webPreferences: {\n      nodeIntegration: true,\n      nodeIntegrationInWorker: false,\n      webSecurity: false\n    },\n    show: false\n  });\n  mainWindow.setAlwaysOnTop(true, 'floating'); // eslint-disable-next-line\n\n  setMenu(); // load root file/url\n\n  if (isDev) {\n    mainWindow.loadURL('http://localhost:9080');\n  } else {\n    mainWindow.loadFile(`${__dirname}/index.html`);\n    global.__static = __webpack_require__(/*! path */ \"path\").join(__dirname, '/static').replace(/\\\\/g, '\\\\\\\\');\n  } // Show when loaded\n\n\n  mainWindow.on('ready-to-show', () => {\n    mainWindow.show();\n    mainWindow.focus();\n  });\n  mainWindow.on('closed', () => {\n    console.log('\\nApplication exiting...');\n  });\n}\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('ready', () => {\n  createWindow();\n\n  if (isDev) {\n    installDevTools();\n    mainWindow.webContents.openDevTools();\n  }\n\n  if (isDebug) {\n    mainWindow.webContents.openDevTools();\n  }\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('window-all-closed', () => {\n  if (process.platform !== 'darwin') {\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit();\n  }\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('activate', () => {\n  if (mainWindow === null) {\n    createWindow();\n  }\n});\n/**\r\n * Auto Updater\r\n *\r\n * Uncomment the following code below and install `electron-updater` to\r\n * support auto updating. Code Signing with a valid certificate is required.\r\n * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating\r\n */\n\n/*\r\nimport { autoUpdater } from 'electron-updater'\r\n\r\nautoUpdater.on('update-downloaded', () => {\r\n  autoUpdater.quitAndInstall()\r\n})\r\n\r\napp.on('ready', () => {\r\n  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()\r\n})\r\n */\n\nconst sendMenuEvent = async data => {\n  mainWindow.webContents.send('change-view', data);\n};\n\nconst template = [{\n  label: electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].name,\n  submenu: [{\n    label: 'Home',\n    accelerator: 'CommandOrControl+H',\n\n    click() {\n      sendMenuEvent({\n        route: '/'\n      });\n    }\n\n  }, {\n    type: 'separator'\n  }, {\n    role: 'minimize'\n  }, {\n    role: 'togglefullscreen'\n  }, {\n    type: 'separator'\n  }, {\n    role: 'quit',\n    accelerator: 'Alt+F4'\n  }]\n}, {\n  role: 'help',\n  submenu: [{\n    label: 'Get Help',\n    role: 'help',\n    accelerator: 'F1',\n\n    click() {\n      sendMenuEvent({\n        route: '/help'\n      });\n    }\n\n  }, {\n    label: 'About',\n    role: 'about',\n    accelerator: 'CommandOrControl+A',\n\n    click() {\n      sendMenuEvent({\n        route: '/about'\n      });\n    }\n\n  }]\n}];\n\nfunction setMenu() {\n  if (process.platform === 'darwin') {\n    template.unshift({\n      label: electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].name,\n      submenu: [{\n        role: 'about'\n      }, {\n        type: 'separator'\n      }, {\n        role: 'services'\n      }, {\n        type: 'separator'\n      }, {\n        role: 'hide'\n      }, {\n        role: 'hideothers'\n      }, {\n        role: 'unhide'\n      }, {\n        type: 'separator'\n      }, {\n        role: 'quit'\n      }]\n    });\n    template.push({\n      role: 'window'\n    });\n    template.push({\n      role: 'help'\n    });\n    template.push({\n      role: 'services'\n    });\n  }\n\n  const menu = electron__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"].buildFromTemplate(template);\n  electron__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"].setApplicationMenu(menu);\n}\n/* WEBPACK VAR INJECTION */}.call(this, \"src/main\"))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluL2luZGV4LmpzP2U1OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBNZW51LCBzeXN0ZW1QcmVmZXJlbmNlcyB9IGZyb20gJ2VsZWN0cm9uJ1xyXG5pbXBvcnQgeyBwcm9kdWN0TmFtZSB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcclxuXHJcbi8vIHNldCBhcHAgbmFtZVxyXG5hcHAubmFtZSA9IHByb2R1Y3ROYW1lXHJcbi8vIHRvIGhpZGUgZGVwcmVjYXRpb24gbWVzc2FnZVxyXG5hcHAuYWxsb3dSZW5kZXJlclByb2Nlc3NSZXVzZSA9IHRydWVcclxuXHJcbi8vIGRpc2FibGUgZWxlY3Ryb24gd2FybmluZ1xyXG5wcm9jZXNzLmVudi5FTEVDVFJPTl9ESVNBQkxFX1NFQ1VSSVRZX1dBUk5JTkdTID0gZmFsc2VcclxuY29uc3QgZ290VGhlTG9jayA9IGFwcC5yZXF1ZXN0U2luZ2xlSW5zdGFuY2VMb2NrKClcclxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG5jb25zdCBpc0RlYnVnID0gcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCctLWRlYnVnJylcclxubGV0IG1haW5XaW5kb3dcclxuXHJcbi8vIG9ubHkgYWxsb3cgc2luZ2xlIGluc3RhbmNlIG9mIGFwcGxpY2F0aW9uXHJcbmlmICghaXNEZXYpIHtcclxuICBpZiAoZ290VGhlTG9jaykge1xyXG4gICAgYXBwLm9uKCdzZWNvbmQtaW5zdGFuY2UnLCAoKSA9PiB7XHJcbiAgICAgIC8vIFNvbWVvbmUgdHJpZWQgdG8gcnVuIGEgc2Vjb25kIGluc3RhbmNlLCB3ZSBzaG91bGQgZm9jdXMgb3VyIHdpbmRvdy5cclxuICAgICAgaWYgKG1haW5XaW5kb3cgJiYgbWFpbldpbmRvdy5pc01pbmltaXplZCgpKSB7XHJcbiAgICAgICAgbWFpbldpbmRvdy5yZXN0b3JlKClcclxuICAgICAgfVxyXG4gICAgICBtYWluV2luZG93LmZvY3VzKClcclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGFwcC5xdWl0KClcclxuICAgIHByb2Nlc3MuZXhpdCgwKVxyXG4gIH1cclxufSBlbHNlIHtcclxuICAvLyBwcm9jZXNzLmVudi5FTEVDVFJPTl9FTkFCTEVfTE9HR0lORyA9IHRydWVcclxuXHJcbiAgcmVxdWlyZSgnZWxlY3Ryb24tZGVidWcnKSh7XHJcbiAgICBzaG93RGV2VG9vbHM6IGZhbHNlLFxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrTWFjUGVybWlzc2lvbiA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FtZXJhU3RhdHVzID0gYXdhaXQgc3lzdGVtUHJlZmVyZW5jZXMuZ2V0TWVkaWFBY2Nlc3NTdGF0dXMoJ2NhbWVyYScpXHJcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBjYW1lcmEgYWNjZXNzIHN0YXR1czonLCBjYW1lcmFTdGF0dXMpXHJcblxyXG4gICAgaWYgKGNhbWVyYVN0YXR1cyA9PT0gJ25vdC1kZXRlcm1pbmVkJykge1xyXG4gICAgICBjb25zdCBjYW1lcmFTdWNjZXNzID0gYXdhaXQgc3lzdGVtUHJlZmVyZW5jZXMuYXNrRm9yTWVkaWFBY2Nlc3MoJ2NhbWVyYScpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHQgb2YgY2FtZXJhIGFjY2VzczonLCBjYW1lcmFTdWNjZXNzLnZhbHVlT2YoKSA/ICdncmFudGVkJyA6ICdkZW5pZWQnKVxyXG4gICAgICByZXR1cm4gY2FtZXJhU3VjY2Vzcy52YWx1ZU9mKClcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgZ2V0IHBlcm1pc3Npb246JywgZXJyb3IubWVzc2FnZSlcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluc3RhbGxEZXZUb29scygpIHtcclxuICB0cnkge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgIHJlcXVpcmUoJ3Z1ZS1kZXZ0b29scycpLmluc3RhbGwoKVxyXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2luZG93KCkge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWwgd2luZG93IG9wdGlvbnNcclxuICAgKi9cclxuICBcclxuICBjaGVja01hY1Blcm1pc3Npb24oKVxyXG5cclxuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICB3aWR0aDogMzAwLFxyXG4gICAgaGVpZ2h0OiAzMDAsXHJcbiAgICBtaW5XaWR0aDogMCxcclxuICAgIG1pbkhlaWdodDogMCxcclxuICAgIC8vIHVzZUNvbnRlbnRTaXplOiB0cnVlLFxyXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxyXG4gICAgICBub2RlSW50ZWdyYXRpb25JbldvcmtlcjogZmFsc2UsXHJcbiAgICAgIHdlYlNlY3VyaXR5OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBzaG93OiBmYWxzZSxcclxuICB9KVxyXG5cclxuICBtYWluV2luZG93LnNldEFsd2F5c09uVG9wKHRydWUsICdmbG9hdGluZycpXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgc2V0TWVudSgpXHJcblxyXG4gIC8vIGxvYWQgcm9vdCBmaWxlL3VybFxyXG4gIGlmIChpc0Rldikge1xyXG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKCdodHRwOi8vbG9jYWxob3N0OjkwODAnKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtYWluV2luZG93LmxvYWRGaWxlKGAke19fZGlybmFtZX0vaW5kZXguaHRtbGApXHJcblxyXG4gICAgZ2xvYmFsLl9fc3RhdGljID0gcmVxdWlyZSgncGF0aCcpXHJcbiAgICAgIC5qb2luKF9fZGlybmFtZSwgJy9zdGF0aWMnKVxyXG4gICAgICAucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKVxyXG4gIH1cclxuXHJcbiAgLy8gU2hvdyB3aGVuIGxvYWRlZFxyXG4gIG1haW5XaW5kb3cub24oJ3JlYWR5LXRvLXNob3cnLCAoKSA9PiB7XHJcbiAgICBtYWluV2luZG93LnNob3coKVxyXG4gICAgbWFpbldpbmRvdy5mb2N1cygpXHJcbiAgfSlcclxuXHJcbiAgbWFpbldpbmRvdy5vbignY2xvc2VkJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1xcbkFwcGxpY2F0aW9uIGV4aXRpbmcuLi4nKVxyXG4gIH0pXHJcbn1cclxuXHJcbmFwcC5vbigncmVhZHknLCAoKSA9PiB7XHJcbiAgY3JlYXRlV2luZG93KClcclxuXHJcbiAgaWYgKGlzRGV2KSB7XHJcbiAgICBpbnN0YWxsRGV2VG9vbHMoKVxyXG4gICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzRGVidWcpIHtcclxuICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMub3BlbkRldlRvb2xzKClcclxuICB9XHJcbn0pXHJcblxyXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xyXG4gICAgYXBwLnF1aXQoKVxyXG4gIH1cclxufSlcclxuXHJcbmFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XHJcbiAgaWYgKG1haW5XaW5kb3cgPT09IG51bGwpIHtcclxuICAgIGNyZWF0ZVdpbmRvdygpXHJcbiAgfVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEF1dG8gVXBkYXRlclxyXG4gKlxyXG4gKiBVbmNvbW1lbnQgdGhlIGZvbGxvd2luZyBjb2RlIGJlbG93IGFuZCBpbnN0YWxsIGBlbGVjdHJvbi11cGRhdGVyYCB0b1xyXG4gKiBzdXBwb3J0IGF1dG8gdXBkYXRpbmcuIENvZGUgU2lnbmluZyB3aXRoIGEgdmFsaWQgY2VydGlmaWNhdGUgaXMgcmVxdWlyZWQuXHJcbiAqIGh0dHBzOi8vc2ltdWxhdGVkZ3JlZy5naXRib29rcy5pby9lbGVjdHJvbi12dWUvY29udGVudC9lbi91c2luZy1lbGVjdHJvbi1idWlsZGVyLmh0bWwjYXV0by11cGRhdGluZ1xyXG4gKi9cclxuXHJcbi8qXHJcbmltcG9ydCB7IGF1dG9VcGRhdGVyIH0gZnJvbSAnZWxlY3Ryb24tdXBkYXRlcidcclxuXHJcbmF1dG9VcGRhdGVyLm9uKCd1cGRhdGUtZG93bmxvYWRlZCcsICgpID0+IHtcclxuICBhdXRvVXBkYXRlci5xdWl0QW5kSW5zdGFsbCgpXHJcbn0pXHJcblxyXG5hcHAub24oJ3JlYWR5JywgKCkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSBhdXRvVXBkYXRlci5jaGVja0ZvclVwZGF0ZXMoKVxyXG59KVxyXG4gKi9cclxuXHJcbmNvbnN0IHNlbmRNZW51RXZlbnQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIG1haW5XaW5kb3cud2ViQ29udGVudHMuc2VuZCgnY2hhbmdlLXZpZXcnLCBkYXRhKVxyXG59XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogYXBwLm5hbWUsXHJcbiAgICBzdWJtZW51OiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ0hvbWUnLFxyXG4gICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZE9yQ29udHJvbCtIJyxcclxuICAgICAgICBjbGljaygpIHtcclxuICAgICAgICAgIHNlbmRNZW51RXZlbnQoeyByb3V0ZTogJy8nIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxyXG4gICAgICB7IHJvbGU6ICdtaW5pbWl6ZScgfSxcclxuICAgICAgeyByb2xlOiAndG9nZ2xlZnVsbHNjcmVlbicgfSxcclxuICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxyXG4gICAgICB7IHJvbGU6ICdxdWl0JywgYWNjZWxlcmF0b3I6ICdBbHQrRjQnIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm9sZTogJ2hlbHAnLFxyXG4gICAgc3VibWVudTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdHZXQgSGVscCcsXHJcbiAgICAgICAgcm9sZTogJ2hlbHAnLFxyXG4gICAgICAgIGFjY2VsZXJhdG9yOiAnRjEnLFxyXG4gICAgICAgIGNsaWNrKCkge1xyXG4gICAgICAgICAgc2VuZE1lbnVFdmVudCh7IHJvdXRlOiAnL2hlbHAnIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnQWJvdXQnLFxyXG4gICAgICAgIHJvbGU6ICdhYm91dCcsXHJcbiAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kT3JDb250cm9sK0EnLFxyXG4gICAgICAgIGNsaWNrKCkge1xyXG4gICAgICAgICAgc2VuZE1lbnVFdmVudCh7IHJvdXRlOiAnL2Fib3V0JyB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl1cclxuXHJcbmZ1bmN0aW9uIHNldE1lbnUoKSB7XHJcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XHJcbiAgICB0ZW1wbGF0ZS51bnNoaWZ0KHtcclxuICAgICAgbGFiZWw6IGFwcC5uYW1lLFxyXG4gICAgICBzdWJtZW51OiBbXHJcbiAgICAgICAgeyByb2xlOiAnYWJvdXQnIH0sXHJcbiAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxyXG4gICAgICAgIHsgcm9sZTogJ3NlcnZpY2VzJyB9LFxyXG4gICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcclxuICAgICAgICB7IHJvbGU6ICdoaWRlJyB9LFxyXG4gICAgICAgIHsgcm9sZTogJ2hpZGVvdGhlcnMnIH0sXHJcbiAgICAgICAgeyByb2xlOiAndW5oaWRlJyB9LFxyXG4gICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcclxuICAgICAgICB7IHJvbGU6ICdxdWl0JyB9LFxyXG4gICAgICBdLFxyXG4gICAgfSlcclxuXHJcbiAgICB0ZW1wbGF0ZS5wdXNoKHtcclxuICAgICAgcm9sZTogJ3dpbmRvdycsXHJcbiAgICB9KVxyXG5cclxuICAgIHRlbXBsYXRlLnB1c2goe1xyXG4gICAgICByb2xlOiAnaGVscCcsXHJcbiAgICB9KVxyXG5cclxuICAgIHRlbXBsYXRlLnB1c2goeyByb2xlOiAnc2VydmljZXMnIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBtZW51ID0gTWVudS5idWlsZEZyb21UZW1wbGF0ZSh0ZW1wbGF0ZSlcclxuICBNZW51LnNldEFwcGxpY2F0aW9uTWVudShtZW51KVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWRBO0FBa0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQVhBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQVhBO0FBZUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/index.js\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiPzA0ZjMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///electron\n");

/***/ }),

/***/ "electron-debug":
/*!*********************************!*\
  !*** external "electron-debug" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron-debug\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24tZGVidWcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvbi1kZWJ1Z1wiPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb24tZGVidWdcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///electron-debug\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "vue-devtools":
/*!*******************************!*\
  !*** external "vue-devtools" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vue-devtools\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWRldnRvb2xzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLWRldnRvb2xzXCI/ZmFjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWUtZGV2dG9vbHNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///vue-devtools\n");

/***/ })

/******/ });