import { Router } from "express";
import user from "../../../models/user.model";
const router = Router();

router.post("/subscription", async (req, res) => {
  const foundUser = await user.findOne({ _id: req.body._id });
  if (foundUser)
    await foundUser.update({
      subscriptionEndpoint: req.body.subscription.endpoint,
    });
  console.log(req.body);
  res.status(200).send();
});

export default router;

// ] {
// [2]   endpoint: 'https://fcm.googleapis.com/fcm/send/eLJ6Qc83RjI:APA91bFx57cg9I4DCspWUgbm7uMrLFg7zSXoWNxQ1w38BaOA0dnaLcTFdgIZZVk4-FjNXbnqpwJh7zK5EhJWTh13vZJbSiOf0T22GjvHwcalTgq8Y77mzFZx7av1shiTvU7hIj4Uvp7B',
// [2]   expirationTime: null,
// [2]   keys: {
// [2]     p256dh: 'BNBPiJG5kIIXDAmDhyVOHLH_tMpTxrnOy04pWasHhNtadLLJLRzun5nGiH-9RxHh_kJnUmUUwyYXrX_1p-4SpQ0',
// [2]     auth: 'pKP39EIc_inBSZGgLnvd4A'
// [2]   }
// [2] }
