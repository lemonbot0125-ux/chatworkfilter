const msedit = require('../ctr/message');

async function mentionWebhook(req, res) {
    const accountId = req.body.webhook_event.from_account_id;
    const roomId = req.body.webhook_event.room_id;
    const messageId = req.body.webhook_event.message_id;
    const body = req.body.webhook_event.body;  
    const message = body.replace(/\[To:\d+\]優一さん|\/.*?\/|\s+/g, "");
  
    if (body.includes("削除")) {
        await msedit.deleteMessages(body, message, messageId, roomId, accountId);
        return res.sendStatus(200);
    }
    
    res.sendStatus(500);
}

module.exports = mentionWebhook;
