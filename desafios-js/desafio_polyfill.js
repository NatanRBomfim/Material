if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (txt1, txt2) {
    if (!(txt1 instanceof String || typeof txt1 === "string")) {
      throw new Error("first parameter must be a string");
    }

    if (!(txt2 instanceof String || typeof txt2 === "string")) {
      throw new Error("second parameter must be a string");
    }

    return this.valueOf().split(txt1).join(txt2);
  };
}
