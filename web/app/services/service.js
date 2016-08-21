"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var global_1 = require('../global');
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.fetch = function () {
        return this.http.get(global_1.global.host + '/images?userId=' + global_1.global.getUserId())
            .map(function (data) { return data.json(); });
    };
    ImageService.prototype.upload = function (title, file) {
        var args = [
            100,
            title,
        ];
        this.makeFileRequest(global_1.global.host + "/images", "POST", args, file).then(function (result) {
            return;
        }, function (error) {
            console.error(error);
            return 1;
        });
    };
    ImageService.prototype.makeFileRequest = function (url, method, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            //console.log(params)
            //if(typeof params[0] != "number" ){
            //    console.log('here')
            formData.append('userId', params[0]);
            //}
            if (typeof params[1] != "undefined" && params[1] != "") {
                formData.append('title', params[1]);
            }
            if (files.length > 0) {
                formData.append('image', files[0]);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open(method, url, true);
            xhr.send(formData);
        });
    };
    ImageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=service.js.map