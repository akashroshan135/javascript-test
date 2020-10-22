async function getText() {
    let response = await fetch("test.txt");
    let data = await response.text();
    document.write(`Text from doc: ${data}`);
}
getText()