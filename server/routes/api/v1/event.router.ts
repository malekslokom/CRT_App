import { Router } from "express";
import {
  default as Event,
  default as event,
} from "../../../models/event.model";
import user from "../../../models/user.model";
const router = Router();

router.get("/", async (req, res) => {
  const foundEvents = await event.find();
  res.status(200).send(foundEvents);
});

router.post("/add-event", async (req, res) => {
  const newEvent = new Event({
    titre: req.body.titre,
    description: req.body.description,
    date: req.body.date,
  });
  //await newEvent.save();

  const foundUsers = await user.find();
  foundUsers.forEach(async (e) => {
    console.log(e.subscriptionEndpoint);

    sendPushNotification(
      e.subscriptionEndpoint,
      "New message",
      "You have a new message!"
    );
  });

  res.status(200).send();
});

export default router;

const fetch = require("node-fetch");

// The FCM server key can be obtained from the Firebase console under Project Settings > Cloud Messaging
const fcmServerKey =
  "AAAA8TW8iuQ:APA91bE1Z_GBz5jLyMNcubGFDpj5HsYXuwwM7Rg_In4UxZh8rVKO4iHj0Yi_f6ZuboXXK2bgdbUcrFRHPSsAhcrOXIPtrZLTzs4g5HGdCOutnhEQFOC9K78STmWaz-1Q4VXGs5A8RNxG";

//@ts-ignore
async function sendPushNotification(registrationToken, title, body) {
  const response = await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `key=${fcmServerKey}`,
    },
    body: JSON.stringify({
      to: registrationToken,
      notification: {
        title,
        body,
        click_action: "https://example.com", // optional, can be used to open a URL when the notification is clicked
      },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to send push notification: ${response.status} - ${response.statusText}`
    );
  }

  const responseJson = await response.json();
  console.log(
    `Push notification sent with message ID: ${responseJson.message_id}`
  );
}
