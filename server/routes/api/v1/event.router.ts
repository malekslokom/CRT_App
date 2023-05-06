import { Router } from "express";
import {
  default as Event,
  default as event,
} from "../../../models/event.model";
import user from "../../../models/user.model";
const router = Router();
const OneSignal = require("@onesignal/node-onesignal");

const user_key_provider = {
  getToken() {
    return "NzM0OTM3Y2QtYWE3My00YTQ5LThiMzItOTQwMjZjNjAyOTlh"; //user_auth_key
  },
};

const app_key_provider = {
  getToken() {
    return "ZGM3OGU5ZGEtODI2Yi00YmZmLWFlY2EtNTQ0OWZlYWFiZDA4";
  },
};
let configuration = OneSignal.createConfiguration({
  authMethods: {
    user_key: {
      tokenProvider: user_key_provider,
    },
    app_key: {
      tokenProvider: app_key_provider,
    },
  },
});

const client = new OneSignal.DefaultApi(configuration);

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
    const message = {
      app_id: "8d5befe8-b14a-423f-ba14-e342226e1fec",
      contents: {
        en: "This is a test notification",
      },
      include_player_ids: [e.subscriptionEndpoint],
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await client.createNotification(message, options);
  });

  res.status(200).send();
});

export default router;
