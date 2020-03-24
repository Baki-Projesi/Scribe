import FileSaver from 'file-saver';

export default function writeFile(name, extension, text, type) {
    name = name.replace(/[|&;$%@"<>()+,.]/g, "");
    name += extension;
    if (!type) {
        type = "text/plain;charset=utf-8"
    }
    let file = new File([text],name, { 'type': type });

    FileSaver.saveAs(file);
}