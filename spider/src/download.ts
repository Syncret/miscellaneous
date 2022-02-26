import download from "download";

const baseUrl = "";
const dir = "files";
export async function batchDownload() {
    const max = 865;
    let i = 1;
    const targetId = "31443803";
    while (i < max) {
        await download(`${baseUrl}/t/${targetId}?page=${i}`, dir, {
            filename: `${i}`
        });
        console.log(`complete-${i}`);
        i++;
    }
}