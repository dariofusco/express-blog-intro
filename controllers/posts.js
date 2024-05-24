const { readJSON, writeJSON } = require("../utils");

module.exports = {
    get: (req, res) => {
        const posts = readJSON('posts');
        res.format({
            html: () => {
                let html = '<main>';
                posts.forEach(({ title, body, image, tags }) => {
                    html += `
                        <div>
                            <h1>${title}</h1>
                            <p>${body}</p>
                            <img width="50" src="/${image}"/>
                            <ul>
                    `;
                    tags.forEach(tag => html += `<li>${tag}</li>`);
                    html += `
                            </ul>
                        </div>
                        `
                });
                html += '</main>';
                res.send(html);
            },
            json: () => {
                res.json(posts);
            }
        })
    },
    post: (req, res) => {
        const posts = readJSON('posts');
        writeJSON('posts', [...posts, req.body]);
        res.send('Post effettuato correttamente')
    }
}