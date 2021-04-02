"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Member = void 0;
// importar la Clase pare (ha de ser exportada al final del TS pare)
var user_1 = require("./user");
// model MEMBER (clase) ... hereda de model USER (clase) amb EXTENDS
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    // el constructor rep tots els paràmetres per a Member
    function Member(id, name, email, age) {
        var _this = 
        // ...i a dins amb SUPER diem quins assignaràn a classe Pare
        _super.call(this, name, email, age) || this;
        // ...i assignem manualment el paràmetre diferent que té Member
        _this._id = id;
        return _this;
    }
    // mètodes personalitzats en pare USER, heretats en fill MEMBER, així:
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(user_1.User));
exports.Member = Member;
// des del Controller podrem executar sentències com ara:
//    var gordon = new Member(1, 'Gordon', 'gordon@mail.com', 24);
//    gordon.payInvoice();
