
import _ from "lodash";
import { parse } from 'node-html-parser';
import fs from "fs";

function batchReadHtml() {
    const distFile = "main.txt";
    const sourceFolder = "files";
    fs.writeFileSync(distFile, "");
    const max = 865;
    let fileIndex = 1;
    while (fileIndex <= max) {
        const file = fs.readFileSync(`${sourceFolder}/${fileIndex}`);
        const html = parse(file.toString());
        const replyMains = html.querySelectorAll(".h-threads-item-reply-main");
        let toWrite = "";
        replyMains.forEach((reply) => {
            const headers = reply.querySelectorAll(".h-threads-info");
            headers.forEach((header) => {
                header.querySelectorAll("span").slice(0, -2).forEach((p) => {
                    toWrite += p.innerText;
                    toWrite += " ";
                });
                toWrite += "\n";
            });
            const contents = reply.querySelectorAll(".h-threads-content");
            contents.forEach((content) => {
                toWrite += _.unescape(content.innerText.trim());
                toWrite += "\n";
            });
        });

        fs.appendFile(distFile, toWrite, function (err) {
            if (err) { throw (err); }
        });
        console.log(`Complete: ${fileIndex}`);
        fileIndex++
    }
    console.log("Finish");
}

function batchReadJson() {
    const distFile = "main.txt";
    const sourceFolder = "sourcefiles/data/";
    fs.writeFileSync(distFile, "");
    const max = 865;
    let fileIndex = 1;
    type BaseSection = {
        id: string,
        now: string,
        userid: string,
        name: string,
        title: string,
        content: string,
        fileName?: string,
    }
    let topSection: BaseSection;
    let toWrite = "";
    while (fileIndex <= max) {
        const file = fs.readFileSync(`${sourceFolder}/${fileIndex}.data`).toString();
        const contentText = file.substring(11, file.length - 1);
        const content = JSON.parse(contentText.substring(0, contentText.length - 1));
        const sanitizeText = (message: string) => {
            return message.replace(/<br \/>/gi, "").replace(/<font color="#789922">&gt;&gt;(.*)<\/font>/gi, ">>$1");
        }
        const toSectionText = (section: BaseSection) => {
            if (section.id + "" === "9999999") {
                // advertisement
                return;
            }
            toWrite += `No.${section.id} ${section.title} ${section.name} ${section.now} ID:${section.userid}`;
            if (section.userid === topSection.userid) {
                toWrite += ` (PO主)`;
            }
            toWrite += `\n`;
            toWrite += sanitizeText(section.content);
            toWrite += `\n`;
            if (section.fileName) {
                toWrite += `File: ${section.fileName}\n`;
            }
            toWrite += `----------------------------------------------------------\n`;
        }
        if (fileIndex === 1) {
            topSection = content;
            toSectionText(topSection);
        }
        (content.replys as BaseSection[]).forEach((section) => {
            toSectionText(section);
        });
        console.log(`Complete: ${fileIndex}`);
        fileIndex++
    }
    fs.appendFile(distFile, toWrite, function (err) {
        if (err) { throw (err); }
    });
    console.log("Finish");
}