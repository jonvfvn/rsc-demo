export default async function ServerComponent() {
    const fs = await import("fs"); // Node.js File System module
    const text = fs.readFileSync("text.txt", "utf8");
    
    return <span>{text}</span>;
}