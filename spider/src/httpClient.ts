import https from "https";
import fs from "fs";

const hostName = "";
const path = "";
const dirName = "";
export function httpsRequest(index: number) {
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: hostName,
            path: path + `${index}`,
            method: 'GET'
        }, (res) => {
            console.log(`${index} return: ${res.statusCode}`);
            if (res.statusCode === 200) {
                res.setEncoding('utf8');
                let content = "";
                res.on('data', function (chunk) {
                    content += chunk.toString();
                });
                res.on('end', function () {
                    fs.appendFile(dirName + "/" + `${index}`, content, function (err) {
                        console.warn(err);
                    });
                    resolve(true);
                });
            } else {
                resolve(false);
            }
        });
        req.on('error', function (e) {
            console.warn(e);
            resolve(false);
        });
        req.end();
    });
}