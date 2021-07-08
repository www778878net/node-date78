/**
*日期加减及格式化
*/
interface Date {
    addMonths(num: number): Date; 
    addHours(num: number): Date;
    addDays(num: number): Date;
    addMins(num: number): Date;
    format(format?: string): string;
}

 

Date.prototype.addMins = function (num) {
    var date = new Date(this.valueOf());
    date.setMinutes(date.getMinutes() + num);
    return date;
};

Date.prototype.addMonths = function (num) {
    var date = new Date(this.valueOf());
    date.setMonth(date.getMonth() + num);
    return date;
};

Date.prototype.addHours = function (num) {
    var date = new Date(this.valueOf());
    date.setHours(date.getHours() + num);
    return date;
};

Date.prototype.addDays = function (num) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + num);
    return date;
};

Date.prototype.format = function (format?: string) {
    format = format || "yyyy-MM-dd hh:mm:ss";
    /*
     * format="yyyy-MM-dd hh:mm:ss";
     */
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
            - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};