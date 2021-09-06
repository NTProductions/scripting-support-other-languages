// supporting other languages 

// C:\Program Files\Adobe\Adobe After Effects 2021\Support Files\Dictionaries

var copyObj = {
    en: "Copy",
    de: "Kopieren",
    es: "Copiar",
    fr: "Copier",
    it: "Copia",
    ja: "コピー",
    ko: "복사",
    pt: "Copiar",
    ru: "Копировать",
    cn: "复制"
  };

app.executeCommand(app.findMenuCommandId(copyObj[en]));