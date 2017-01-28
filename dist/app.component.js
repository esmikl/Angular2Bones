"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello!';
        this.users = [
            { id: 25, name: 'Emily', username: 'esmikl' },
            { id: 26, name: 'Nick', username: 'whatnicktweets' },
            { id: 27, name: 'Holly', username: 'hollylawly' },
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <header>\n            <nav class=\"navbar navbar-inverse\">\n                <div class=\"navbar-header\">\n                    <a href=\"/\" class=\"navbar-brand\">My Angular 2 App!</a>\n                </div>\n            </nav>\n        <header>\n\n        <main>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div *ngIf=\"users\">\n\t\t\t\t\t\t<ul class=\"list-group users-list\" *ngIf=\"users\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let user of users\"\n                            (click)=\"selectUser(user)\"\n                            [class.active]=\"user === activeUser\">\n\t\t\t\t\t\t\t\t{{ user.name }} ({{ user.username }})\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n                <div class=\"col-sm-8\">\n                    <div class=\"jumbotron\" *ngIf=\"activeUser\">\n                        <h2>{{ activeUser.name }} <small>{{ activeUser.username }}</small></h2>\n                    </div>\n\n                    <div class=\"jumbotron gocrazy\" *ngIf=\"!activeUser\">\n                        <span class=\"glyphicon glyphicon-hand-left\"></span>\n                        <h2>Choose a User</h2>\n                    </div>\n                </div>\n\t\t\t</div>\n        </main>\n\n        <footer class=\"text-center\">\n            <small>Copyright &copy; 2017</small>\n        </footer>\n    ",
        styles: ["\n        .users-list li {\n            cursor: pointer;\n        }\n        .jumbotron .glyphicon {\n            font-size: 80px;\n        }\n        .gocrazy {\n            background: red;\n            color: #FFF;\n        }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map