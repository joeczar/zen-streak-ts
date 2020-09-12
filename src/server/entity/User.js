"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var bcrypt = require("bcryptjs");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.hashPassword = function () {
        this.password = bcrypt.hashSync(this.password, 8);
    };
    User.prototype.checkIfUnencryptedPasswordIsValid = function (unencryptedPassword) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 20)
    ], User.prototype, "username");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 100)
    ], User.prototype, "password");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty()
    ], User.prototype, "role");
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn()
    ], User.prototype, "createdAt");
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn()
    ], User.prototype, "updatedAt");
    User = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(['username'])
    ], User);
    return User;
}());
exports.User = User;
