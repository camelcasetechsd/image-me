"use strict";
var router_1 = require('@angular/router');
var upload_component_1 = require('./pages/upload/upload.component');
var list_component_1 = require('./pages/list/list.component');
var page_not_found_component_1 = require('./pages/page-not-found/page-not-found.component');
var appRoutes = [
    { path: 'upload', component: upload_component_1.UploadComponent },
    { path: 'list', component: list_component_1.ListComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map