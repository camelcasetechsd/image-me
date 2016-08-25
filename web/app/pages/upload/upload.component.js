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
var service_1 = require('../../services/service');
var router_1 = require('@angular/router');
var image_1 = require('./image');
var UploadComponent = (function () {
    function UploadComponent(router, service) {
        this.router = router;
        this.service = service;
        this.model = new image_1.Image('', '');
        // Reset the form with a new hero AND restore 'pristine' class state
        // by toggling 'active' flag which causes the form
        // to be removed/re-added in a tick via NgIf
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
    }
    UploadComponent.prototype.upload = function () {
        var _this = this;
        var response = this.service.upload(this.model.title, this.model.image);
        if (typeof response == "undefined") {
            // reset form elements
            this.model.title = '';
            // refresh form
            this.active = false;
            setTimeout(function () { return _this.active = true; }, 0);
            // redirect to gallery
            this.router.navigate(['/list']);
        }
        else {
            console.log('Error');
        }
    };
    UploadComponent.prototype.fileChangeEvent = function (fileInput) {
        this.model.image = fileInput.target.files;
    };
    Object.defineProperty(UploadComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    UploadComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/pages/upload/upload.html',
            // providers to return instance injectable classe
            providers: [service_1.ImageService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, service_1.ImageService])
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map